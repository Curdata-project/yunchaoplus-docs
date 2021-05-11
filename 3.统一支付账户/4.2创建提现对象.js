export const data = {
  "cURL": [
    {
      title: "请求示例",
      value: `{
        "wallet_id": "f42f8c78-2ada-46b7-b21e-33d116adb1c5",
        "recharge_amount": 50,
        "amount": 40,
        "settle": "2873823",
        "description": "123",
        "extra": {
          "trade_way_code": "c_pass",
          "trade_way_feilds": {
            "encrypt_type": "1",//是用小键盘时使用1
            "plug_random_key": "638266dcaeb741028b38f73494f57eca",
            "encrypt_pwd": "hNXK9Z0rlUhyUB4sHsn/7/ggPZ31HzBL7CjCTIlnRqVVIIOnY6UD4MY+yEuZCbrldJLV8PhwE9WtXv6f1eRcNsbVut95O+mDogEtFdJXUbOZZlv7yWEG/KHmQJc4Kzbicgv6aIMS3ak9DubrWlG8iGNVQlZUe7H/wdJb9XSZ2YGADVSt7gMRbyawSwEMfuWBAiD/OkHD6uczPstXK9ovuyfxXNigPsLjICEz7LHjLJvxo+USfrncyiHCML+xmNW6DxyzkJ0LGQcOLzlMQVDGkLa3JOdgHHiRoZtnfZaAoWua5TW5uzhpKm6ciGv8NL6b3CAfChZqU+KI1sCf+9QE/tW2Wus1Tb6A/Zhglzs/sjA="
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
          "id": "8836bd10-c647-4ca8-94f2-479e4620a5b5",
          "type": "withdraw",
          "created": 1616031136,
          "amount": 40,
          "recharge_amount": 50,
          "description": "123",
          "status": "pending",
          "wallet_id": "f42f8c78-2ada-46b7-b21e-33d116adb1c5",
          "settle": "2873823",
          "time_canceled": 0,
          "time_succeeded": 0,
          "extra": {
            "abst": "string",
            "amount": "1000000000000000",
            "bank_acct_no": "string",
            "fee_amt": "1000000000000000",
            "fee_into_wallet_id": "1000000000000000000",
            "mct_order_no": "string",
            "postscript": "string",
            "remark": "string",
            "trade_way_code": "string",
            "trade_way_feilds": "string",
            "wallet_id": "1000000000000000000",
            "withdraw_type": "string"
          },
          "fee": 10,
          "fee_wallet": "f415fc21-439e-4649-9c3f-d1058b9c2f39"
        }
      }`
    }
  ],
}