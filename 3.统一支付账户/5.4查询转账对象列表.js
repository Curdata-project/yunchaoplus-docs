export const data = {
  "cURL": [
    {
      title: "请求示例",
      value: "/list/transfer?page=1&count=3",
    },
    {
      title: "响应示例",
      value: `{
        "code": 0,
        "message": "success",
        "data": {
          "total": 5,
          "data": [
            {
              "id": "3b0d15e3-d673-496b-9c4c-b5ce26ecb456",
              "type": "transfer",
              "created": 1615945923,
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
            },
            {
              "id": "3fe8e08b-35b9-483b-8b42-16b1026be0b7",
              "type": "transfer",
              "created": 1616031715,
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
            },
            {
              "id": "b2f9022b-fa8c-4eda-b47d-2824619c3803",
              "type": "transfer",
              "created": 1615543420,
              "amount": 10,
              "fee": 1,
              "fee_wallet": "e81979e7-d068-4245-98b3-b09a507523f1",
              "wallet_id": "d0b5616b-3846-4596-bb19-84d5f82f7a9c",
              "to_wallet": "ad2a3754-a47f-4531-934c-90b34bb5b79f",
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
          ]
        }
      }`
    }
  ],
}