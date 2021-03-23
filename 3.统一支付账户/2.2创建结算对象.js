export const data = {
  "cURL": [
    {
      title: "B端请求示例",
      value: `{
        "channel": "string",
        "wallet_id": "ddc91d33-8d4c-4917-86ab-0083fe339525",
        "extra": {
          "wallet_id": "1",
          "encrypt_pwd": "string",
          "encrypt_type": "1",
          "plug_random_key": "string",
          "cert_sign": "string",
          "oprt_type": "1",
          "mobile_no": "1",
          "id_card": "string",
          "bank_acct_no": "string",
          "bank_acct_name": "string",
          "bank_no": "1",
          "bank_name": "string",
          "elec_bank_no": "1",
          "elec_bank_name": "string",
          "bank_area_code": "1",
          "elec_bank_province": "string",
          "elec_bank_city": "string",
          "bank_acct_type": "1",
          "sms_auth_code": "1"
        }
      }`
    },
    {
      title: "C端请求示例",
      value: `{
        "channel": "string",
        "wallet_id": "05c1300b-65d2-4842-9005-e777d220b2ba",
        "extra": {
          "wallet_id": "101010100101010",
          "account_no":"string",
          "account_name":"string",
          "account_type":"string",
          "id_type":"string",
          "id_no":"string",
          "tel":"11111111111",
          "mct_order_no":"string",
          "sign_mer_no":"string",
          "user_name":"string",
          "sign_mode":"string",
          "bank_code":"string",
          "elec_bank_name":"string",
          "bank_area_code":"1000",
          "elec_bank_province":"string",
          "elec_bank_city":"string",
          "validity_date":"string",
          "business_code":"string",
          "account_prop":"string",
          "lgl_rep_nm":"string",
          "lgl_rep_id_tp":"string",
          "lgl_rep_id_no":"string",
          "disable_date":"10000000",
          "single_limit":"100000000000",
          "limit_period_unit":"string",
          "max_cnt_limit":"23"
        }
      }`
    },
    {
      title: "C端响应示例",
      value: `{
        "code":0,
        "message":"success",
        "data":{
          "id": "9beafff3-4f42-4fb3-a1fb-8f8d02ea4148",
          "type": "settle",
          "created": 1615972324,
          "channel": "string",
          "wallet_id": "ddc91d33-8d4c-4917-86ab-0083fe339525",
          "status":"created",
          "reviewed": 0,
          "extra": {
            "wallet_id": "101010100101010",
            "account_no":"string",
            "account_name":"string",
            "account_type":"string",
            "id_type":"string",
            "id_no":"string",
            "tel":"11111111111",
            "mct_order_no":"string",
            "sign_mer_no":"string",
            "user_name":"string",
            "sign_mode":"string",
            "bank_code":"string",
            "elec_bank_name":"string",
            "bank_area_code":"1000",
            "elec_bank_province":"string",
            "elec_bank_city":"string",
            "validity_date":"string",
            "business_code":"string",
            "account_prop":"string",
            "lgl_rep_nm":"string",
            "lgl_rep_id_tp":"string",
            "lgl_rep_id_no":"string",
            "disable_date":"10000000",
            "single_limit":"100000000000",
            "limit_period_unit":"string",
            "max_cnt_limit":"23"
          }
        }
      }`
    },
    {
      title: "B端响应示例",
      value: `{
        "code":0,
        "message":"success",
        "data":{
          "id": "9beafff3-4f42-4fb3-a1fb-8f8d02ea4148",
          "type": "settle",
          "created": 1615972324,
          "channel": "string",
          "wallet_id": "ddc91d33-8d4c-4917-86ab-0083fe339525",
          "status":"created",
          "reviewed": 0,
          "extra": {
            "wallet_id": "1",
            "encrypt_pwd": "string",
            "encrypt_type": "1",
            "plug_random_key": "string",
            "cert_sign": "string",
            "oprt_type": "1",
            "mobile_no": "1",
            "id_card": "string",
            "bank_acct_no": "string",
            "bank_acct_name": "string",
            "bank_no": "1",
            "bank_name": "string",
            "elec_bank_no": "1",
            "elec_bank_name": "string",
            "bank_area_code": "1",
            "elec_bank_province": "string",
            "elec_bank_city": "string",
            "bank_acct_type": "1",
            "sms_auth_code": "1"
          }
        }
      }`
    }
  ],
}