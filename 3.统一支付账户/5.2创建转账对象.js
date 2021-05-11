export const data = {
  "cURL": [
    {
      title: "请求示例",
      value: `{
        "wallet_id": "f42f8c78-2ada-46b7-b21e-33d116adb1c5",
        "to_wallet": "ddc91d33-8d4c-4917-86ab-0083fe339525",
        "Amount": 10,
        "settle": "2873823",
        "description": "123",
        "extra": {
          "trade_way_code": "c_pass",
          "trade_way_feilds": {
            "encrypt_type": "1",//使用小键盘时填写1
            "plug_random_key": "9094425062634eafb0c7e366826d7453",
            "encrypt_pwd": "JP9ueuqA4Mm9qzVYzINCPbn2hDoR+tBaYtwCHqItQtfCoTz9pIM9YU7vovg0v2mxcpV9Ylhs9M6XgNA18taGfGT9lzXQOGTOzz/qjlFTTaouIoJNsTbCcf7zA/juWRZlmZwkp8Yy74iD9RXyKDKRZ1lxj47YBj+95/c2qwcMnqu0J9S2K3+FiNJMKhxx8XGYOHx9e2YCs77NVItfJAKQnnOzkHPYy+32JHufohOC9JOCMXYlWGnffUmQ7FcJ/khSbxCeAmypTqGz6anLC2E8vhbJARAOBdQJ3t2MfhQ9aJE7y0sVDwOQErlULMcysmdczc56gqN0fwrB0ARhDnQekDGx9QlaysAyarz/DhuqwDw="
          }
        }
      }`
    },
    {
      title: "响应示例",
      value: `{
        "code": 0,
        "message": "success",
        "data": {
          "id": "ec9b5dca-7182-4339-a925-500d777585e8",
          "type": "transfer",
          "created": 1616031778,
          "amount": 10,
          "fee": 1,
          "fee_wallet": "f415fc21-439e-4649-9c3f-d1058b9c2f39",
          "wallet_id": "f42f8c78-2ada-46b7-b21e-33d116adb1c5",
          "to_wallet": "ddc91d33-8d4c-4917-86ab-0083fe339525",
          "description": "123",
          "status": "pending",
          "extra": {
            "pay_bank_acct_no": "string",
            "pay_type": "string",
            "trade_way_code": "string",
            "trade_way_feilds": "string",
            "trans_type": "string"
          }
        }
      }`
    }
  ],
}