export const data = {
  "cURL": [
    {
      title: "C端请求示例",
      value: `{
        "block": true,
        "channel": "unipay_consumer",
        "extra": {
          "user_name": "李云龙",
          "mobile_no": "13714972600",
          "id_card": "string",
          "auth_type": "0",
          "encrypt_pwd": "string",
          "plug_random_key": "string",
          "sms_auth_code":"28379"
        }
      }`
    },
    {
      title: "B端请求示例",
      value: `{
        "block": true,
        "channel": "unipay_merchant",
        "extra": {
        }
      }`
    },
    {
      title: "B端响应示例",
      value: `{
        "code": 0,
        "msg": "success",
        "data": {
          "id": "4b7fdaf7-a5d2-4149-8ab2-b78c4217c879",
          "type": "wallet",
          "created": 1615967450,
          "appid": "559deed7-36aa-4569-8b38-8f90a4904859",
          "block": 0,
          "reviewed": 0,
          "available_balance": 0,
          "withdrawable_balance": 0,
          "freeze_balance": 0,
          "channel": "unipay_merchant",
          "status":"crated",
          "extra": {
            "acct_link":"string",
            "wallet_id":"string"
          }
        }
      }`
    },
    {
      title: "C端响应示例",
      value: `{
        "code": 0,
        "message": "success",
        "data": {
          "id": "4b7fdaf7-a5d2-4149-8ab2-b78c4217c879",
          "type": "wallet",
          "created": 1615967450,
          "appid": "559deed7-36aa-4569-8b38-8f90a4904859",
          "block": 0,
          "reviewed": 0,
          "available_balance": 0,
          "withdrawable_balance": 0,
          "freeze_balance": 0,
          "status":"crated",
          "channel": "unipay_consumer",
          "extra": {
            "user_name": "李云龙",
            "mobile_no": "13714972600",
            "id_card": "string",
            "auth_type": "0",
            "encrypt_pwd": "string",
            "plug_random_key": "string",
            "sms_auth_code":"28379"
          }
        }
      }`
    }
  ],
}