import requests

files_to_check = [
    "index.html",
    "home.html",
    "login.html",
    "signup.html",
    "dashbord.html",
    "slots.html",
    "auth.js",
    "scripts.js"
]

BASE_URL = "https://AwalidM.github.io/SPSSB"

def check_file(url):
    try:
        response = requests.get(url)
        print(f"Checked {url}: HTTP {response.status_code}")
        return response.status_code
    except requests.RequestException as e:
        print(f"Failed to reach {url}: {e}")
        return None

def main():
    for file in files_to_check:
        url = f"{BASE_URL}/{file}"
        check_file(url)

if __name__ == "__main__":
    main()
