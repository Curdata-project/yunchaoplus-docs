export const data = {
  "cURL": [
    {
      title: "请求示例",
      value: "http://127.0.0.1:9010/charges?page=1&count=1&begin_time=1613979170&end_time=1614043970"
    },{
      title: "响应示例",
      value: `{
        "code": 0,
        "message": "success",
        "data": {
            "total": 2,
            "data": [
              {
                "id": "33586661-1dd2-11b2-802a-7061796d6e74",
                "type": "charge",
                "created": 1613980433,
                "paid": false,
                "reversed": false,
                "appid": "dajhfaakhdahdjash",
                "channel": "apply",
                "order_no": "147852963258",
                "client_ip": "192.168.1.1",
                "amount": 55828,
                "currency": "YNS",
                "subject": "农产品",
                "body": null,
                "time_paid": null,
                "time_expire": 564455,
                "transaction_no": null,
                "refunds": null,
                "amount_refunded": 0,
                "credential": null,
                "description": "无",
                "extra": {}
              }
          ]
        }
      }`
    }
  ],
}