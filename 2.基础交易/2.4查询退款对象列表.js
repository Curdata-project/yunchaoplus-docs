export const data = {
  "cURL": [
    {
      title: "请求示例",
      value: "http://127.0.0.1:9010/charges/uuid1/refunds?page=1&count=10"
    },
    {
      title: "",
      value: `{
        page: i64,必填
        count: i64,必填
        begin_time: Option<NaiveDateTime>,可选,例如:2021-02-16T04:29:20
        end_time: Option<NaiveDateTime>,可选,例如:2021-02-16T04:29:20
      }`
    },
    {
      title: "响应示例",
      value: `{
        "code": 0,
        "message": "success",
        "data": [
          {
            "id": "1cb44446-1dd2-11b2-802a-726566756e64",
            "tp": "refund",
            "created": "2021-02-16T04:07:15.433846",
            "status": "pending",
            "time_succeeded": null,
            "time_failed": null,
            "charge_id": "UUID1",
            "amount": 10,
            "transaction_no": "",
            "description": "",
            "extra": ""
          },
          {
            "id": "2aca3162-1dd2-11b2-802a-726566756e64",
            "tp": "refund",
            "created": "1970-01-01T00:00:00",
            "status": "pending",
            "time_succeeded": null,
            "time_failed": null,
            "charge_id": "UUID1",
            "amount": 10,
            "transaction_no": "",
            "description": "",
            "extra": ""
          },
          {
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
        ]
      }`
    }
  ],
}