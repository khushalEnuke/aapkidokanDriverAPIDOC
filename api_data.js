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
  }
] });