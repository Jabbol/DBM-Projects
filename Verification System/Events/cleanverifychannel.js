{
    "name": "[Verify] Clean Channel",
    "temp": "message",
    "event-type": "2",
    "_id": "mOHJg",
    "actions": [
      {
        "message": "1",
        "varName": "message",
        "info": "4",
        "storage": "1",
        "varName2": "message-channel",
        "name": "Store Message Info"
      },
      {
        "channel": "3",
        "varName": "message-channel",
        "info": "1",
        "storage": "1",
        "varName2": "message-channel-id",
        "name": "Store Channel Info"
      },
      {
        "channel": "4",
        "varName": "verify-channel",
        "info": "1",
        "storage": "1",
        "varName2": "verify-channel-id",
        "name": "Store Channel Info"
      },
      {
        "storage": "1",
        "varName": "message-channel-id",
        "comparison": "2",
        "value": "tempVars(\"verify-channel-id\")",
        "iftrue": "0",
        "iftrueVal": "",
        "iffalse": "1",
        "iffalseVal": "",
        "name": "Check Variable"
      },
      {
        "server": "0",
        "varName": "",
        "storage": "1",
        "varName2": "bot-member",
        "name": "Get Bot as Member"
      },
      {
        "message": "1",
        "varName": "message",
        "info": "3",
        "storage": "1",
        "varName2": "message-author",
        "name": "Store Message Info"
      },
      {
        "message": "1",
        "varName": "message",
        "info": "1",
        "storage": "1",
        "varName2": "message-id",
        "name": "Store Message Info"
      },
      {
        "message": "1",
        "varName": "bot-member",
        "info": "3",
        "storage": "1",
        "varName2": "bot-id",
        "name": "Store Message Info"
      },
      {
        "storage": "1",
        "varName": "message-author-id",
        "comparison": "2",
        "value": "tempVars(\"bot-id\")",
        "iftrue": "1",
        "iftrueVal": "",
        "iffalse": "0",
        "iffalseVal": "",
        "name": "Check Variable"
      },
      {
        "time": "6",
        "measurement": "1",
        "name": "Wait"
      },
      {
        "storage": "1",
        "varName": "message",
        "name": "Delete Message"
      }
    ]
  }