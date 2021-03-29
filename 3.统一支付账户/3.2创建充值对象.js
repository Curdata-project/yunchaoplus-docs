export const data = {
  "cURL": [
    {
      title: "请求示例",
      value: `{
        "amount": 90,
        "settle": "2873823",
        "wallet_id": "f42f8c78-2ada-46b7-b21e-33d116adb1c5",
        "description": "123",
        "extra": {
          "trade_way_code": "c_pass",
          "trade_way_feilds": {
            "encrypt_type": "1",//如果使用了小键盘则填写1
            "plug_random_key": "f8abda64147d41038f0d300ac1d6d3a9",
            "encrypt_pwd": "7xJIwxSo80DTbE+VwRDWszj4U5+9Gt+I0bu1BTNu/czBzzxPu1wfUCgWXySqKqSHcsvEowYOBzrG9bbAjMhkuy4G/9sO3JqxTLYq1GcAk/FmGhoHCO/KqsTm/FK4Uwi13IHKL2vQmbDbEtWAHjSFsTZkcXqOo8F5oeWq2UVtAPnooYmeL05StD0r+CtheD7ABsDfuD/E6+zsPiQrk5Wtd88+vLEYDBGJkwv7QOItMf/VpBzMtfv/IuK35sHoOqNTlR65Be+K1yCjpsshfoich/zsIUA309QvM/cntNJrBwHvMH89hYA0/naW540LuDY/m5DiBGjwUSj02OgUOiu7PvyYwTJ/hCEA6aDwRET45fg="
          }
        }
      }`
    },
    {
      title: "响应示例",
      value: `{
        "code":0,
        "message":"success",
        "data":{
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
  ],
}