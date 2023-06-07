import requests
import json
import time

def fetch_url_with_id(url, id):
    full_url = f"{url}/{id}"
    response = requests.get(full_url)
    if response.status_code == 200:
        return response.elapsed.total_seconds() * 1000
    else:
        return None

def fetch_all_urls(urls_and_ids, num_passes):
    for url_and_ids in urls_and_ids:
        url = url_and_ids["url"]
        ids = url_and_ids["ids"]
        print(f"URL: {url}")
        for id in ids:
            print(f"ID: {id}")
            for pass_num in range(num_passes):
                start_time = time.time()
                response_time = fetch_url_with_id(url, id)
                end_time = time.time()
                if response_time is not None:
                    print(f"Pass {pass_num+1} Response time (ms): {response_time:.2f}")
                else:
                    print(f"Pass {pass_num+1} failed")
                time.sleep(1)
            print("")
        print("")

if __name__ == "__main__":
    with open("input-py-nftsdcccc.json", "r") as f:
        urls_and_ids = json.load(f)
    num_passes = 5 # set the number of passes here
    fetch_all_urls(urls_and_ids, num_passes)
