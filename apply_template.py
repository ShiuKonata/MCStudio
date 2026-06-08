#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re
import json

# 讀取data.js
with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 26位Vtuber ID（除了shiucoda）
vtuber_ids = [
    'rumi',  # 已修改
    'paroniie', 'lubee', 'himegimichika', 'arrynia', 'kiriko',
    'vaswawa', 'sinniearis', 'ririna', 'ekorru', 'wakasaito', 'whalefall', 'kai',
    'mukuru', 'nyrfier', 'fuka22', 'chita', 'chamamatti', 'shiroleon',
    'BarkBarkPomi', 'cocor0', 'UchiFifi', 'nokori', 'KeKeMii', 'Pele', 'Yawnii'
]

new_videos_struct = '''    videos: {
      covers: [],
      originals: [],
      shorts: [],
      general: [],
      premiere: [],
      vlog: [],
      ads: [],
      commerce: [],
      unclassified: []
    },
    memberVideos: [],'''

processed = 0
skipped = 0

print("開始修改data.js...")

for vid in vtuber_ids:
    # 檢查是否已經有新格式
    if f'id: "{vid}"' in content:
        # 提取該Vtuber的段落（使用更精確的正則表達式）
        # 尋找該Vtuber到下一個 `},` 或 `},\n  {`
        pattern = rf'(id:\s*"{vid}"[^}}]*?)(videos:\s*\{{[\s\S]*?\}}|videos:\s*\[[^\]]*\])(,)'

        match = re.search(pattern, content)
        if match:
            # 檢查是否已經是新格式
            if 'covers:' in content[content.find(f'id: "{vid}"'):content.find(f'id: "{vid}"') + 1000]:
                print(f"⏭️  {vid} 已是新格式，跳過")
                skipped += 1
                continue

            # 替換
            before = content[:match.start(3)]
            after = content[match.end(3):]
            content = before + new_videos_struct + ',\n' + after

            print(f"✅ {vid} 已修改")
            processed += 1

# 寫回檔案
with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"\n✨ 完成！")
print(f"✅ 已修改: {processed}")
print(f"⏭️  已跳過: {skipped}")
