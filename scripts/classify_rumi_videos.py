#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
rumi 影片自動分類腳本
功能：抓取全部 UU 播放列表影片，使用 STEP 1-5 進行分類
"""

import requests
import json
import re
from datetime import datetime

# rumi 的配置
VTUBER = {
    'id': 'rumi',
    'name': '懶貓子Rumi',
    'channelId': 'UCswRX8mNNdn1fjRctZqzjgA',
}

# 從 data.js 讀取 API Key
def get_api_key():
    try:
        with open('./js/data.js', 'r', encoding='utf-8') as f:
            content = f.read()
            match = re.search(r'ytApiKey:\s*["\']([^"\']+)["\']', content)
            if match:
                return match.group(1)
    except Exception as e:
        print(f'❌ 讀取 data.js 失敗: {e}')
    return None

API_KEY = get_api_key()
if not API_KEY:
    print('❌ 無 API 金鑰')
    exit(1)

print('════════════════════════════════════════')
print('🎬 rumi（懶貓子Rumi）影片自動分類')
print('════════════════════════════════════════\n')

# 轉換 Channel ID 為 Uploads Playlist ID
uploadsId = 'UU' + VTUBER['channelId'][2:]

print('📊 基本信息：')
print(f"  VTuber: {VTUBER['name']}")
print(f"  Channel ID: {VTUBER['channelId']}")
print(f"  Uploads Playlist: {uploadsId}\n")

# STEP 1: 過濾直播存檔
def is_livestream(title):
    lower_title = title.lower()
    return any(keyword in lower_title for keyword in ['直播', 'archive', 'livestream', 'live'])

# STEP 2: 偵測 5 個關鍵詞
def detect_keywords(title):
    lower_title = title.lower()
    return {
        'cover': 'cover' in lower_title or '歌ってみた' in lower_title,
        'original': any(keyword in lower_title for keyword in ['original', 'official', '原創']),
    }

# STEP 3: rumi 的特殊規則
def apply_rumi_rules(title, keywords):
    # rumi 沒有特殊規則
    return keywords

# STEP 4: 檢查是否為 Shorts
def is_shorts(duration):
    return duration and duration <= 60

# STEP 5: 分配分類
def classify(title, duration, keywords):
    if keywords['cover'] or keywords['original']:
        return 'originals_manual'
    return 'general'

# 解析 YouTube Duration 格式（PT 格式）
def parse_duration(duration_str):
    if not duration_str:
        return 0
    match = re.match(r'PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?', duration_str)
    if not match:
        return 0
    hours = int(match.group(1)) if match.group(1) else 0
    minutes = int(match.group(2)) if match.group(2) else 0
    seconds = int(match.group(3)) if match.group(3) else 0
    return hours * 3600 + minutes * 60 + seconds

# 遞迴獲取全部播放列表影片
def fetch_all_videos(playlist_id, page_token=None):
    url = 'https://www.googleapis.com/youtube/v3/playlistItems'
    params = {
        'part': 'snippet,contentDetails',
        'playlistId': playlist_id,
        'maxResults': 50,
        'key': API_KEY,
    }
    if page_token:
        params['pageToken'] = page_token

    try:
        response = requests.get(url, params=params, headers={'Referer': 'https://shiukonata.github.io/MCStudio/'})
        data = response.json()

        if 'error' in data:
            print(f"❌ API 錯誤: {data['error'].get('message', 'Unknown error')}")
            return []

        items = data.get('items', [])

        if 'nextPageToken' in data:
            print(f"  ⏳ 獲取下一頁...")
            next_items = fetch_all_videos(playlist_id, data['nextPageToken'])
            items.extend(next_items)

        return items

    except Exception as e:
        print(f'❌ 網路錯誤: {e}')
        return []

# 主程式
print('📥 正在抓取全部 UU 播放列表影片...\n')

all_items = fetch_all_videos(uploadsId)

if not all_items:
    print('❌ 無法獲取影片')
    exit(1)

print(f'\n✅ 成功獲取 {len(all_items)} 部影片\n')

# 分類結果
classified = {
    'videos': [],
    'shorts': [],
    'originals_manual': [],
    'premiere': [],
    'general': [],
    'vlog': [],
    'commerce': [],
    'memberVideos': [],
}

stats = {
    'total': 0,
    'livestream': 0,
    'cover': 0,
    'original': 0,
    'general': 0,
    'shorts': 0,
}

print('📊 開始分類影片（STEP 1-5）...\n')

for idx, item in enumerate(all_items):
    video_id = item.get('snippet', {}).get('resourceId', {}).get('videoId')
    title = item.get('snippet', {}).get('title', '(無標題)')
    date = item.get('snippet', {}).get('publishedAt', '(無日期)')[:10]
    duration_str = item.get('contentDetails', {}).get('videoLength')
    duration = parse_duration(duration_str)

    if not video_id:
        continue

    stats['total'] += 1

    # STEP 1: 過濾直播
    if is_livestream(title):
        print(f"🚫 [{idx + 1}] {date} - 直播已排除: {title[:50]}")
        stats['livestream'] += 1
        continue

    # STEP 2: 偵測關鍵詞
    keywords = detect_keywords(title)

    # STEP 3: 應用特殊規則
    keywords = apply_rumi_rules(title, keywords)

    # STEP 4: 檢查 Shorts
    is_short = is_shorts(duration)

    # STEP 5: 分配分類
    category = classify(title, duration, keywords)

    if is_short:
        classified['shorts'].append({'id': video_id, 'title': title, 'date': date})
        print(f"📹 [{idx + 1}] {date} - Shorts: {title[:50]}")
        stats['shorts'] += 1
    elif keywords['cover']:
        classified['originals_manual'].append({'id': video_id, 'title': f'【Cover】{title}', 'date': date})
        print(f"✅ [{idx + 1}] {date} - Cover: {title[:50]}")
        stats['cover'] += 1
    elif keywords['original']:
        classified['originals_manual'].append({'id': video_id, 'title': f'【Original】{title}', 'date': date})
        print(f"✅ [{idx + 1}] {date} - Original: {title[:50]}")
        stats['original'] += 1
    else:
        classified['general'].append({'id': video_id, 'title': title, 'date': date})
        print(f"❓ [{idx + 1}] {date} - 未分類: {title[:50]}")
        stats['general'] += 1

print('\n════════════════════════════════════════')
print('📈 分類統計結果：')
print(f"  總計: {stats['total']} 部")
print(f"  🚫 直播: {stats['livestream']} 部")
print(f"  ✅ Cover: {stats['cover']} 部")
print(f"  ✅ Original: {stats['original']} 部")
print(f"  ❓ 未分類: {stats['general']} 部")
print(f"  📹 Shorts: {stats['shorts']} 部")
print('════════════════════════════════════════\n')

# 輸出分類結果
print('📝 分類結果：\n')
print('videos:', json.dumps(classified['videos'], ensure_ascii=False, indent=2))
print('\nshorts:', json.dumps(classified['shorts'], ensure_ascii=False, indent=2))
print('\noriginals_manual:', json.dumps(classified['originals_manual'], ensure_ascii=False, indent=2))
print('\ngeneral:', json.dumps(classified['general'], ensure_ascii=False, indent=2))

# 保存結果到文件
with open('./scripts/rumi-classification-result.json', 'w', encoding='utf-8') as f:
    json.dump(classified, f, ensure_ascii=False, indent=2)
    print('\n✅ 分類結果已保存到 scripts/rumi-classification-result.json')
