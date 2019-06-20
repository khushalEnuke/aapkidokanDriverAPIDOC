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
    "type": "put",
    "url": "/api/driver/order/accept/:id",
    "title": "Accept Order",
    "name": "Accept_Order",
    "group": "Order",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the order to be accepted.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"order\": {\n            \"address\": {\n                \"pickup\": {\n                    \"house_no\": \"21/3\",\n                    \"street\": \"XYZ street\",\n                    \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                    \"city_id\": \"5cd01c1839b32d325085052d\"\n                },\n                \"delivery\": {\n                    \"alias\": \"work\",\n                    \"full_name\": \"Najam ul Saqib\",\n                    \"email\": \"najam.sahto@gmail.com\",\n                    \"contact_number\": \"3012999901\",\n                    \"house_no\": \"Office number 309, Progressive Plaza\",\n                    \"locality\": \"Beaumont Road\",\n                    \"landmark\": \"Near Marriet Hotel\",\n                    \"city_id\": \"5cd02537b1ef5e3bfb165f5c\"\n                }\n            },\n            \"status\": 1,\n            \"is_express_delivery\": false,\n            \"payment_type\": 1,\n            \"discount\": 0,\n            \"delivery_charges\": 0,\n            \"driver_assigned\": true,\n            \"_id\": \"5cf6b2d5b4deea62d01e4b2a\",\n            \"slot_id\": \"5cf4faaaaef3b62836047c7e\",\n            \"deliver_start_time\": \"2019-06-06T10:30:00.000Z\",\n            \"deliver_end_time\": \"2019-06-06T12:30:00.000Z\",\n            \"customer_id\": \"5ceb927146c8cf13bc2e0db6\",\n            \"store_id\": \"5cd1259b63aff817c37afb02\",\n            \"products\": [\n                {\n                    \"pictures\": [\n                        \"z7re7faj1hjvzafr9e.jpeg\"\n                    ],\n                    \"_id\": \"5cf6b2d5b4deea62d01e4b2c\",\n                    \"product_id\": \"5ce55461ff79ad6065d5b9fe\",\n                    \"size\": \"1 litre\",\n                    \"price\": 30,\n                    \"count\": 1,\n                    \"name\": \"Amul Milk\"\n                },\n                {\n                    \"pictures\": [\n                        \"z7re7faj1hjvzafr9e.jpeg\"\n                    ],\n                    \"_id\": \"5cf6b2d5b4deea62d01e4b2b\",\n                    \"product_id\": \"5ce68f90ff79ad6065d5ba15\",\n                    \"size\": \"1 litre\",\n                    \"price\": 30,\n                    \"count\": 1,\n                    \"name\": \"Amul Milk\"\n                }\n            ],\n            \"total_amount\": 60,\n            \"order_id\": \"f1444c7\",\n            \"created_at\": \"2019-06-04T18:05:09.150Z\",\n            \"updated_at\": \"2019-06-20T10:55:26.817Z\",\n            \"__v\": 0,\n            \"driver_id\": \"5d09d61e21d03516d24bbe7a\",\n            \"taxes\": []\n        }\n    }\n}",
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
            "field": "ValidationError",
            "description": "<p>Order Already Accepted BY other Driver.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Order Already Accepted BY other Driver:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"This Order has already been accepted by other driver.\",\n    \"error\": {\n        \"validation\": {\n            \"order\": [\n                \"This Order has already been accepted by other driver.\"\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/driver/order.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/driver/order/unassigned",
    "title": "Get Unassigned Order",
    "name": "Get_Unassigned_Order",
    "group": "Order",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
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
  },
  {
    "type": "get",
    "url": "/api/driver/order",
    "title": "Get today orders",
    "name": "Get_today_orders",
    "group": "Order",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>(optional) Status of the order to be displayed.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"orders\": [\n            {\n                \"_id\": \"5cf67b33b4deea62d01e4b1c\",\n                \"address\": {\n                    \"pickup\": {\n                        \"house_no\": \"21/3\",\n                        \"street\": \"XYZ street\",\n                        \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\"\n                    },\n                    \"delivery\": {\n                        \"full_name\": \"Love\",\n                        \"email\": \"Love@gmail.com\",\n                        \"contact_number\": \"9900887766\",\n                        \"house_no\": \"G-78\",\n                        \"locality\": \"Srs\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\",\n                        \"alias\": \"home\",\n                        \"city\": {\n                            \"_id\": \"5cd01c1839b32d325085052d\",\n                            \"areas\": [\n                                \"5cd01b02c1a6f3317fd9f072\",\n                                \"5cd01b0cf03a5831a00732d9\"\n                            ],\n                            \"name\": \"Islamabad\",\n                            \"created_at\": \"2019-05-06T11:35:52.520Z\",\n                            \"updated_at\": \"2019-05-06T11:35:52.520Z\",\n                            \"__v\": 0\n                        }\n                    }\n                },\n                \"status\": 3,\n                \"is_express_delivery\": false,\n                \"payment_type\": 1,\n                \"discount\": 0,\n                \"slot_id\": \"5cf4faaaaef3b62836047c7e\",\n                \"deliver_start_time\": \"2019-06-20T00:30:00.000Z\",\n                \"deliver_end_time\": \"2019-06-20T02:30:00.000Z\",\n                \"customer_id\": \"5cf67a6fb4deea62d01e4b18\",\n                \"store_id\": \"5cd1259b63aff817c37afb02\",\n                \"products\": [\n                    {\n                        \"pictures\": [\n                            \"z7re7faj1hjvzafr9e.jpeg\"\n                        ],\n                        \"_id\": \"5cf67b33b4deea62d01e4b1d\",\n                        \"product_id\": \"5ce68f90ff79ad6065d5ba15\",\n                        \"size\": \"1 litre\",\n                        \"price\": 30,\n                        \"count\": 3,\n                        \"name\": \"Amul Milk\"\n                    }\n                ],\n                \"total_amount\": 90,\n                \"order_id\": \"c4486c0\",\n                \"driver_assigned\": true,\n                \"created_at\": \"2019-06-04T14:07:47.918Z\",\n                \"updated_at\": \"2019-06-20T05:40:38.015Z\",\n                \"__v\": 0,\n                \"driver_id\": \"5d09d61e21d03516d24bbe7a\",\n                \"store\": {\n                    \"_id\": \"5cd1259b63aff817c37afb02\",\n                    \"picture\": \"ivvf6q6jx4hu1j7.png\",\n                    \"status\": 1,\n                    \"email\": \"khushal.pahuja@enukesoftware.com\",\n                    \"contact_number\": \"9711669906\",\n                    \"name\": \"XYZ store\",\n                    \"owner\": {\n                        \"full_name\": \"khushal pahuja\",\n                        \"email\": \"khushal.pahuja@enukesoftware.com\",\n                        \"contact_number\": \"9711669906\",\n                        \"password\": \"$2b$10$.tTIIkskAAhZqEg20cfVx.sHXlnPB93/zVLBFldR6anWN1Qdc8MIC\"\n                    },\n                    \"commission\": 2,\n                    \"address\": {\n                        \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\",\n                        \"shop_no\": \"123\",\n                        \"locality\": \"Near Test Corner\"\n                    },\n                    \"timings\": {\n                        \"open_time\": \"08:00\",\n                        \"close_time\": \"20:00\"\n                    },\n                    \"created_at\": \"2019-05-07T06:28:43.580Z\",\n                    \"updated_at\": \"2019-05-07T06:28:43.580Z\",\n                    \"drivers\": [\n                        \"5d09d61e21d03516d24bbe7a\"\n                    ],\n                    \"__v\": 0,\n                    \"has_express_delivery\": false,\n                    \"self_delivery\": false\n                }\n            }\n        ],\n        \"orderCounts\": {\n            \"total\": 3,\n            \"unDelivered\": 0,\n            \"completed\": 1\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/driver/order.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/driver/order/scheduled",
    "title": "Scheduled Orders",
    "name": "Scheduled_Orders",
    "group": "Order",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"orders\": [\n            {\n                \"_id\": \"5cf6b2d5b4deea62d01e4b2a\",\n                \"address\": {\n                    \"pickup\": {\n                        \"house_no\": \"21/3\",\n                        \"street\": \"XYZ street\",\n                        \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\"\n                    },\n                    \"delivery\": {\n                        \"alias\": \"work\",\n                        \"full_name\": \"Najam ul Saqib\",\n                        \"email\": \"najam.sahto@gmail.com\",\n                        \"contact_number\": \"3012999901\",\n                        \"house_no\": \"Office number 309, Progressive Plaza\",\n                        \"locality\": \"Beaumont Road\",\n                        \"landmark\": \"Near Marriet Hotel\",\n                        \"city_id\": \"5cd02537b1ef5e3bfb165f5c\",\n                        \"city\": {\n                            \"_id\": \"5cd02537b1ef5e3bfb165f5c\",\n                            \"areas\": [\n                                \"5cd01b12c96f3731b5639a17\",\n                                \"5cd01b1d14310e31d2ffff6d\"\n                            ],\n                            \"name\": \"Lahore\",\n                            \"created_at\": \"2019-05-06T12:14:47.699Z\",\n                            \"updated_at\": \"2019-05-06T12:14:47.699Z\",\n                            \"__v\": 0\n                        }\n                    }\n                },\n                \"status\": 1,\n                \"is_express_delivery\": false,\n                \"payment_type\": 1,\n                \"discount\": 0,\n                \"slot_id\": \"5cf4faaaaef3b62836047c7e\",\n                \"deliver_start_time\": \"2019-06-06T10:30:00.000Z\",\n                \"deliver_end_time\": \"2019-06-06T12:30:00.000Z\",\n                \"customer_id\": \"5ceb927146c8cf13bc2e0db6\",\n                \"store_id\": \"5cd1259b63aff817c37afb02\",\n                \"products\": [\n                    {\n                        \"pictures\": [\n                            \"z7re7faj1hjvzafr9e.jpeg\"\n                        ],\n                        \"_id\": \"5cf6b2d5b4deea62d01e4b2c\",\n                        \"product_id\": \"5ce55461ff79ad6065d5b9fe\",\n                        \"size\": \"1 litre\",\n                        \"price\": 30,\n                        \"count\": 1,\n                        \"name\": \"Amul Milk\"\n                    },\n                    {\n                        \"pictures\": [\n                            \"z7re7faj1hjvzafr9e.jpeg\"\n                        ],\n                        \"_id\": \"5cf6b2d5b4deea62d01e4b2b\",\n                        \"product_id\": \"5ce68f90ff79ad6065d5ba15\",\n                        \"size\": \"1 litre\",\n                        \"price\": 30,\n                        \"count\": 1,\n                        \"name\": \"Amul Milk\"\n                    }\n                ],\n                \"total_amount\": 60,\n                \"order_id\": \"f1444c7\",\n                \"driver_assigned\": true,\n                \"created_at\": \"2019-06-04T18:05:09.150Z\",\n                \"updated_at\": \"2019-06-20T10:55:26.817Z\",\n                \"__v\": 0,\n                \"driver_id\": \"5d09d61e21d03516d24bbe7a\",\n                \"store\": {\n                    \"_id\": \"5cd1259b63aff817c37afb02\",\n                    \"picture\": \"ivvf6q6jx4hu1j7.png\",\n                    \"status\": 1,\n                    \"email\": \"khushal.pahuja@enukesoftware.com\",\n                    \"contact_number\": \"9711669906\",\n                    \"name\": \"XYZ store\",\n                    \"owner\": {\n                        \"full_name\": \"khushal pahuja\",\n                        \"email\": \"khushal.pahuja@enukesoftware.com\",\n                        \"contact_number\": \"9711669906\",\n                        \"password\": \"$2b$10$.tTIIkskAAhZqEg20cfVx.sHXlnPB93/zVLBFldR6anWN1Qdc8MIC\"\n                    },\n                    \"commission\": 2,\n                    \"address\": {\n                        \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\",\n                        \"shop_no\": \"123\",\n                        \"locality\": \"Near Test Corner\"\n                    },\n                    \"timings\": {\n                        \"open_time\": \"08:00\",\n                        \"close_time\": \"20:00\"\n                    },\n                    \"created_at\": \"2019-05-07T06:28:43.580Z\",\n                    \"updated_at\": \"2019-05-07T06:28:43.580Z\",\n                    \"drivers\": [\n                        \"5d09d61e21d03516d24bbe7a\"\n                    ],\n                    \"__v\": 0,\n                    \"has_express_delivery\": false,\n                    \"self_delivery\": false\n                }\n            },\n            {\n                \"_id\": \"5cf67b33b4deea62d01e4b1c\",\n                \"address\": {\n                    \"pickup\": {\n                        \"house_no\": \"21/3\",\n                        \"street\": \"XYZ street\",\n                        \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\"\n                    },\n                    \"delivery\": {\n                        \"full_name\": \"Love\",\n                        \"email\": \"Love@gmail.com\",\n                        \"contact_number\": \"9900887766\",\n                        \"house_no\": \"G-78\",\n                        \"locality\": \"Srs\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\",\n                        \"alias\": \"home\",\n                        \"city\": {\n                            \"_id\": \"5cd01c1839b32d325085052d\",\n                            \"areas\": [\n                                \"5cd01b02c1a6f3317fd9f072\",\n                                \"5cd01b0cf03a5831a00732d9\"\n                            ],\n                            \"name\": \"Islamabad\",\n                            \"created_at\": \"2019-05-06T11:35:52.520Z\",\n                            \"updated_at\": \"2019-05-06T11:35:52.520Z\",\n                            \"__v\": 0\n                        }\n                    }\n                },\n                \"status\": 1,\n                \"is_express_delivery\": false,\n                \"payment_type\": 1,\n                \"discount\": 0,\n                \"slot_id\": \"5cf4faaaaef3b62836047c7e\",\n                \"deliver_start_time\": \"2019-06-20T00:30:00.000Z\",\n                \"deliver_end_time\": \"2019-06-20T02:30:00.000Z\",\n                \"customer_id\": \"5cf67a6fb4deea62d01e4b18\",\n                \"store_id\": \"5cd1259b63aff817c37afb02\",\n                \"products\": [\n                    {\n                        \"pictures\": [\n                            \"z7re7faj1hjvzafr9e.jpeg\"\n                        ],\n                        \"_id\": \"5cf67b33b4deea62d01e4b1d\",\n                        \"product_id\": \"5ce68f90ff79ad6065d5ba15\",\n                        \"size\": \"1 litre\",\n                        \"price\": 30,\n                        \"count\": 3,\n                        \"name\": \"Amul Milk\"\n                    }\n                ],\n                \"total_amount\": 90,\n                \"order_id\": \"c4486c0\",\n                \"driver_assigned\": true,\n                \"created_at\": \"2019-06-04T14:07:47.918Z\",\n                \"updated_at\": \"2019-06-20T05:40:38.015Z\",\n                \"__v\": 0,\n                \"driver_id\": \"5d09d61e21d03516d24bbe7a\",\n                \"store\": {\n                    \"_id\": \"5cd1259b63aff817c37afb02\",\n                    \"picture\": \"ivvf6q6jx4hu1j7.png\",\n                    \"status\": 1,\n                    \"email\": \"khushal.pahuja@enukesoftware.com\",\n                    \"contact_number\": \"9711669906\",\n                    \"name\": \"XYZ store\",\n                    \"owner\": {\n                        \"full_name\": \"khushal pahuja\",\n                        \"email\": \"khushal.pahuja@enukesoftware.com\",\n                        \"contact_number\": \"9711669906\",\n                        \"password\": \"$2b$10$.tTIIkskAAhZqEg20cfVx.sHXlnPB93/zVLBFldR6anWN1Qdc8MIC\"\n                    },\n                    \"commission\": 2,\n                    \"address\": {\n                        \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\",\n                        \"shop_no\": \"123\",\n                        \"locality\": \"Near Test Corner\"\n                    },\n                    \"timings\": {\n                        \"open_time\": \"08:00\",\n                        \"close_time\": \"20:00\"\n                    },\n                    \"created_at\": \"2019-05-07T06:28:43.580Z\",\n                    \"updated_at\": \"2019-05-07T06:28:43.580Z\",\n                    \"drivers\": [\n                        \"5d09d61e21d03516d24bbe7a\"\n                    ],\n                    \"__v\": 0,\n                    \"has_express_delivery\": false,\n                    \"self_delivery\": false\n                }\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/driver/order.js",
    "groupTitle": "Order"
  },
  {
    "type": "put",
    "url": "/api/driver/order/status-update/:id",
    "title": "Update order status",
    "name": "Update_order_status",
    "group": "Order",
    "parameter": {
      "fields": {
        "param": [
          {
            "group": "param",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the order to be updated.</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the order.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"order\": {\n            \"address\": {\n                \"pickup\": {\n                    \"house_no\": \"21/3\",\n                    \"street\": \"XYZ street\",\n                    \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                    \"city_id\": \"5cd01c1839b32d325085052d\"\n                },\n                \"delivery\": {\n                    \"alias\": \"work\",\n                    \"full_name\": \"Najam ul Saqib\",\n                    \"email\": \"najam.sahto@gmail.com\",\n                    \"contact_number\": \"3012999901\",\n                    \"house_no\": \"Office number 309, Progressive Plaza\",\n                    \"locality\": \"Beaumont Road\",\n                    \"landmark\": \"Near Marriet Hotel\",\n                    \"city_id\": \"5cd02537b1ef5e3bfb165f5c\"\n                }\n            },\n            \"status\": 4,\n            \"is_express_delivery\": false,\n            \"payment_type\": 1,\n            \"discount\": 0,\n            \"delivery_charges\": 0,\n            \"driver_assigned\": true,\n            \"_id\": \"5cf6b2d5b4deea62d01e4b2a\",\n            \"slot_id\": \"5cf4faaaaef3b62836047c7e\",\n            \"deliver_start_time\": \"2019-06-06T10:30:00.000Z\",\n            \"deliver_end_time\": \"2019-06-06T12:30:00.000Z\",\n            \"customer_id\": \"5ceb927146c8cf13bc2e0db6\",\n            \"store_id\": \"5cd1259b63aff817c37afb02\",\n            \"products\": [\n                {\n                    \"pictures\": [\n                        \"z7re7faj1hjvzafr9e.jpeg\"\n                    ],\n                    \"_id\": \"5cf6b2d5b4deea62d01e4b2c\",\n                    \"product_id\": \"5ce55461ff79ad6065d5b9fe\",\n                    \"size\": \"1 litre\",\n                    \"price\": 30,\n                    \"count\": 1,\n                    \"name\": \"Amul Milk\"\n                },\n                {\n                    \"pictures\": [\n                        \"z7re7faj1hjvzafr9e.jpeg\"\n                    ],\n                    \"_id\": \"5cf6b2d5b4deea62d01e4b2b\",\n                    \"product_id\": \"5ce68f90ff79ad6065d5ba15\",\n                    \"size\": \"1 litre\",\n                    \"price\": 30,\n                    \"count\": 1,\n                    \"name\": \"Amul Milk\"\n                }\n            ],\n            \"total_amount\": 60,\n            \"order_id\": \"f1444c7\",\n            \"created_at\": \"2019-06-04T18:05:09.150Z\",\n            \"updated_at\": \"2019-06-20T14:17:31.411Z\",\n            \"__v\": 0,\n            \"driver_id\": \"5d09d61e21d03516d24bbe7a\",\n            \"taxes\": []\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/driver/order.js",
    "groupTitle": "Order"
  }
] });
