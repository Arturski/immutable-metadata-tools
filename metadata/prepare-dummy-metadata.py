import os
import json
import string
import random

# initializing size of string for randomising data
string_size = 7
 
# using random.choices()
# generating random strings


def generate_json_file(index):
    res = ''.join(random.choices(string.ascii_uppercase +
                             string.digits, k=string_size))
    data = {
        "animation_url": "https://bafybeidyh4khhk322q6233pc26hh5wzmliummzp4caeodmbchiv6q54oti.ipfs.w3s.link/common/animation-base.m3u8",
        "animation_url_mime_type": "application/vnd.apple.mpegurl",
        "description": f"Avatar - Common - {res}",
        "image_url": "https://bafybeidyh4khhk322q6233pc26hh5wzmliummzp4caeodmbchiv6q54oti.ipfs.w3s.link/common/card-avatar.png",
        "name": f"Avatar - Common - {res}",
        "rarity": f"Common-{res}",
        "season": 0
    }
    filename = str(index)
    with open(filename, 'w') as f:
        json.dump(data, f)

num_files = [10000, 20000, 80000, 120000, 200000]
directory_prefix = "metadata_"

for i in num_files:
    directory_name = directory_prefix + str(i)
    os.makedirs(directory_name, exist_ok=True)
    print(i)
    for j in range(int(i)):
        generate_json_file(os.path.join(directory_name, str(j+1)))
