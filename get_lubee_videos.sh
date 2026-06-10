#!/bin/bash

# lubee 的 YouTube Channel ID
CHANNEL_ID="UCF8icKLU4FGF8Ln-KlKakSg"
API_KEY="AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM"

# UU 播放列表（所有上傳）
UPLOADS_PLAYLIST="UU${CHANNEL_ID:2}"

# UULV 播放列表（直播存檔）
LIVE_PLAYLIST="UULV${CHANNEL_ID:2}"

# UUSH 播放列表（Shorts）
SHORTS_PLAYLIST="UUSH${CHANNEL_ID:2}"

echo "=== 開始獲取 lubee 的視頻數據 ==="
echo "Channel ID: $CHANNEL_ID"
echo ""

# 獲取 UU 播放列表的所有視頻
echo "【步驟 1】獲取 UU 播放列表（所有上傳）..."
curl -s "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=$UPLOADS_PLAYLIST&maxResults=50&key=$API_KEY" | jq '.items[].snippet | {videoId: .resourceId.videoId, title, publishedAt}' | head -20

echo ""
echo "如需完整數據，請在無痕模式中運行 YouTube API 查詢"
