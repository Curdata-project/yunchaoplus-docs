export const data = {
  "cURL": [
    {
      title: "B端请求示例",
      value: `{
        "block": true,
        "channel": "bank_card",
        "extra": {
          "link_type": "pc",
          "notify_url": "https://t-yunchao.curdata.cn/recv"
        }
      }`
    },
    {
      title: "C端请求示例",
      value: `{
        "channel": "bank_card",
        "wallet_id": "09eb8c2d-e28c-4cdd-93f9-e28f68177890",
        "is_default": true,
        "extra": {
          "account_no": "6212254000000780310",
          "account_name": "黄四郎",
          "account_type": "00",
          "id_type": "0",
          "id_no": "120104200301019106",
          "tel": "18689769520"
        }
      }`
    },
    {
      title: "C端响应示例",
      value: `{
        "code":0,
        "message":"success",
        "data":{
          "id": "9beafff3-4f42-4fb3-a1fb-8f8d02ea4148",
          "type": "settle",
          "created": 1615972324,
          "channel": "string",
          "wallet_id": "ddc91d33-8d4c-4917-86ab-0083fe339525",
          "status":"created",
          "reviewed": 0,
          "extra": {
            "account_no": "6212254000000780310",
            "account_name": "黄四郎",
            "account_type": "00",
            "id_type": "0",
            "id_no": "120104200301019106",
            "tel": "18689769527"
          }
        }
      }`
    },
    {
      title: "B端响应示例",
      value: `{
        "code":0,
        "message":"success",
        "data":{
          "id": "9beafff3-4f42-4fb3-a1fb-8f8d02ea4148",
          "type": "settle",
          "created": 1615972324,
          "channel": "string",
          "wallet_id": "ddc91d33-8d4c-4917-86ab-0083fe339525",
          "status":"created",
          "reviewed": 0,
          "extra": {
            "encrypt_pwd": "hKDEwMAnggX2CAbrcj6j4PV54881VjJbhVyAwKcgP5VThBrWoyxp4vNjWD/uVXcEfWngPFV2gqcTF2XWwNs4jpv66/mKjFVAdJRzoPBxwHkniv4esqVYLiIPGjjxjU2vqI6V2n8NaNifKSr8P9/rTCrNamsf1sxrt1ZGNpGXn6enFLuhLdQjWRrZ2HN6NCvAuhix/q3tWUWr61K9xlUqIcAcCva49fY0ys50OLh46Gh+BBjKTPFI7fFy1+jFaIcsVlk58bJVJGjFf2URoW6D1C14dTgyZ/MpEbcwH3R/6HfoaZ73Ial1d4HJdMiXFvIwCizbxAczUS+is2C6UpHUcfXPLz+IyVejWhwKUqdRd7A=",
            "plug_random_key": "05ba246b6005426c9986eb59464f5be7",
            "mobile_no": "18689501839",
            "id_card": "150423200301017793",
            "bank_acct_no": "6212254000000700000",
            "bank_acct_name": "鲁迅买墨汁集团企业扯淡研究所",
            "elec_bank_no": "001",
            "bank_no": "001"
          }
        }
      }`
    }
  ],
}
