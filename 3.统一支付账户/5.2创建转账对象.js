export const data = {
  "cURL": [
    {
      title: "请求示例",
      value: `{
        "wallet_id": "f42f8c78-2ada-46b7-b21e-33d116adb1c5",
        "to_wallet": "ddc91d33-8d4c-4917-86ab-0083fe339525",
        "fee_wallet": "f415fc21-439e-4649-9c3f-d1058b9c2f39",
        "fee": 1,
        "Amount": 10,
        "settle": "2873823",
        "description": "123",
        "extra": {
          "trade_way_code": "string",
          "trade_way_feilds": "string",
          "trans_type": "string",
          "pay_type": "string",
          "pay_bank_acct_no": "string"
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