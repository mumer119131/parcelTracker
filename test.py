import requests
from bs4 import BeautifulSoup

def get_leopards_data(tracking_id):
    try:
        url = "https://www.leopardscourier.com/tracking"
        headers = {
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
            "Referer": "https://www.leopardscourier.com/tracking",
            "Origin": "https://www.leopardscourier.com",
            "Host": "www.leopardscourier.com",
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-US,en;q=0.9",
        }
        response = requests.post(url, data={"cn_number": tracking_id}, headers=headers)
        print(response.text)
        if response.status_code != 200:
            raise Exception(response.json().get("error", "Something went wrong"))
        
        print(response)
        soup = BeautifulSoup(response.text, 'html.parser')
        main_table = soup.select_one(".table.table-borderless")
        print(main_table.get_text())
        return {
            "trackingId": tracking_id,
        }
    except Exception as err:
        print(err)
        raise Exception(str(err) or "An unknown error occurred")
    
get_leopards_data("RN784413810")