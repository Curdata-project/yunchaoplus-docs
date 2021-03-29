export const data = {
  "cURL": [
    {
      title: "C端请求示例",
      value: `{
        "block": true,
        "channel": "unipay_consumer",
        "extra": {
          "user_name": "黄四郎",
          "mobile_no": "18689769527",
          "id_card": "120104200301019106",
          "auth_type": "2",
          "encrypt_pwd": "lqx9nbXUa9cKyWwkF3N3X6ama77uutjcsQbkxasMZfMZzE0s37YEMQCsDaEMV7QNjGiHlrWo7Rr8AbitNBsyGTTlvnbcK2+gxp0ISWcRjsOZ/vRnjPgjcuz2FDh8jAkuIrZu/QHBag/C+0ofNbk4YrmGuJhuWPk0O5+OTk1tVwdSw+AliIMzKQAggzNCOzrFcFDSL9CCaG+ax/wJJRCTPu69l8iyLFINWNiIsdmjNUSkRhQYCc/feK4ikcr7+NELpE9kDyPhUObyO9Y4bkjAhIOz9ZCJX5QGxFVxSMPGzPSJfHWYiW5i+nfpUFxlF5DR8JrMiw8GajHt9MtYXyODSILF2Jn5gh9R3JpEGkC3PMU=",
          "plug_random_key": "ffa364d200cf4af8b273ae20c69d9a0f",
          "encrypt_type": "1"
          "sms_auth_code":"28379"//此处测试环境时不需要填写
        }
      }`
    },
    {
      title: "B端请求示例",
      value: `{
        "block": true,
        "channel": "unipay_merchant",
        "extra": {
          "link_type": "pc",
          "notify_url": "https://t-yunchao.curdata.cn/recv"
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
            "jump_type": "10",
            "mobile_no": "18689501839",
            "wallet_id": "2061440100233651288",
            "biz_lic_no": "98645321",
            "legal_name": "张麻鬼子",
            "notify_url": "https://t-yunchao.curdata.cn/recv",
            "register_no": "cf99f3840204444b9350b81178fad4fc",
            "wallet_name": "鲁迅买墨汁集团企业扯淡研究所",
            "callback_url": "https://t-yunchao.curdata.cn/recv",
            "company_name": "鲁迅买墨汁集团企业扯淡研究所"
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
            "id_card": "460103199312310317",
            "auth_type": "2",
            "is_active": "1",
            "mobile_no": "13714972600",
            "user_name": "云彦程",
            "user_uuid": "00ee7efafa33487798f91590ede43150",
            "wallet_id": "2069450900233600370",
            "encrypt_pwd": "cENQkz7O4Ze9vBBTKUBGARlSvvt8Ua5qEQqsCT88bV/Atxy1kv/Gf88p4IvzsRQHgPfDsprIAvYT/jWRJ9czrNCyGMPirtQeNTbOpMHWGEmfefC+CyfO9W5VRJBy7l3IwGvivprdn6bQqyoOX0JQXAliXAleufd2AmhVGct2J4cQW66B86NSMlTehuhPLzTBJyvVMmin0bRRh6vhq3BhpeyO5iyUzkf2mbgkFX8WB1ju9onqdrU7MJW3hBysVeN2ihMLsuju9lhVLcB3/RswfybicMblYqnW5U49u6KTwbuAUFIxgqT1IsGJapFXPRhMkOPEn7u6yX/S+REn/ZcD5plKnx9zOWIYuDTThWoSBs4=",
            "encrypt_type": "1",
            "mct_order_no": "4d26ffc9-54ee-4aaa-8937-8f53fc7c4c2f",
            "plug_random_key": "94b78fbe3fff4b1d9fab675003589b65"
          }
        }
      }`
    }
  ],
}
