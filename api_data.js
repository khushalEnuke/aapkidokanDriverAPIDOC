define({ "api": [
  {
    "type": "post",
    "url": "/api/driver/auth/login",
    "title": "User Login",
    "name": "User_Login",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>user's email or contact number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user's password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMDlkNjFlMjFkMDM1MTZkMjRiYmU3YSIsImlhdCI6MTU2MDkyNTc1MX0.-kEWw_nlKWZzvn_wxTOMPOj8OvR9iQo1Bd-qbAXMlSs\",\n        \"user\": {\n            \"picture\": null,\n            \"status\": 1,\n            \"_id\": \"5d09d61e21d03516d24bbe7a\",\n            \"full_name\": \"khushal\",\n            \"email\": \"khushal.pahuja@enukesoftware.com\",\n            \"password\": null,\n            \"contact_number\": \"9711669906\",\n            \"address\": \"Test Street\",\n            \"created_at\": \"2019-06-19T06:28:46.600Z\",\n            \"updated_at\": \"2019-06-19T06:28:46.600Z\",\n            \"__v\": 0\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnauthorizedError",
            "description": "<p>Username or Password is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 401,\n        \"name\": \"UNAUTHORIZED\",\n        \"description\": \"You are not logged in, e.g. using a valid access token.\"\n    },\n    \"singleStringMessage\": \"Username or Password is invalid\",\n    \"error\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/driver/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/api/driver/order/unassigned",
    "title": "Get Unassigned Order",
    "name": "Get_Unassigned_Order",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"orders\": [\n            {\n                \"_id\": \"5cf67b33b4deea62d01e4b1c\",\n                \"address\": {\n                    \"pickup\": {\n                        \"house_no\": \"21/3\",\n                        \"street\": \"XYZ street\",\n                        \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\"\n                    },\n                    \"delivery\": {\n                        \"full_name\": \"Love\",\n                        \"email\": \"Love@gmail.com\",\n                        \"contact_number\": \"9900887766\",\n                        \"house_no\": \"G-78\",\n                        \"locality\": \"Srs\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\",\n                        \"alias\": \"home\"\n                    }\n                },\n                \"status\": 2,\n                \"is_express_delivery\": false,\n                \"payment_type\": 1,\n                \"discount\": 0,\n                \"slot_id\": \"5cf4faaaaef3b62836047c7e\",\n                \"deliver_start_time\": \"2019-06-06T10:30:00.000Z\",\n                \"deliver_end_time\": \"2019-06-06T12:30:00.000Z\",\n                \"customer_id\": \"5cf67a6fb4deea62d01e4b18\",\n                \"store_id\": \"5cd1259b63aff817c37afb02\",\n                \"products\": [\n                    {\n                        \"pictures\": [\n                            \"z7re7faj1hjvzafr9e.jpeg\"\n                        ],\n                        \"_id\": \"5cf67b33b4deea62d01e4b1d\",\n                        \"product_id\": \"5ce68f90ff79ad6065d5ba15\",\n                        \"size\": \"1 litre\",\n                        \"price\": 30,\n                        \"count\": 3,\n                        \"name\": \"Amul Milk\"\n                    }\n                ],\n                \"total_amount\": 90,\n                \"order_id\": \"c4486c0\",\n                \"driver_assigned\": false,\n                \"created_at\": \"2019-06-04T14:07:47.918Z\",\n                \"updated_at\": \"2019-06-04T14:07:47.918Z\",\n                \"__v\": 0\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/driver/order.js",
    "groupTitle": "Order"
  }
] });
