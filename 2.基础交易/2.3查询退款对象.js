export const data = {
  "cURL": [
    {
      title: "请求示例",
      value: "http://127.0.0.1:9010/charges/UUID1/refunds/1fa21205-1dd2-11b2-802a-726566756e64",
    },
    {
      title: "响应示例",
      value: {
        "code": 0,
        "message": "success",
        "data": {
          "id": "1fa21205-1dd2-11b2-802a-726566756e64",
          "tp": "refund",
          "created": "2021-02-16T04:29:20",
          "status": "pending",
          "time_succeeded": null,
          "time_failed": null,
          "charge_id": "UUID1",
          "amount": 10,
          "transaction_no": "",
          "description": "",
          "extra": ""
        }
      }
    }
  ],
}