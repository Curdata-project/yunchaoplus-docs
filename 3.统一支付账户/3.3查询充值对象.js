export const data = {
  "cURL": [
    {
      title: "请求示例",
      value: "GET http://$endpoint/query/recharge/31c52411-7864-410f-94b5-009da2f73e16"
    },
    {
      title: "响应示例",
      value: `{
        "code": 0,
        "message": "success",
        "data": {
          "id": "31c52411-7864-410f-94b5-009da2f73e16",
          "type": "recharge",
          "created": 1616030348,
          "amount": 90,
          "succeeded": 0,
          "time_succeeded": 0,
          "wallet_id": "f42f8c78-2ada-46b7-b21e-33d116adb1c5",
          "description": "123",
          "status":"created",
          "settle": "2873823",
          "extra": {
            "wallet_id": "101010100101010",
            "amount":"string",
            "mct_order_no":"string",
            "bank_acct_no":"1000",
            "trade_way_code":"string",
            "trade_way_feilds":"string",
            "abst":"string",
            "remark":"string"
          }
        }
      }`
    }
  ]
}