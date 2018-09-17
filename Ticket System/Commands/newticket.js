{
  "name": "newticket",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "fVExK",
  "actions": [
    {
      "member": "1",
      "varName": "",
      "info": "3",
      "storage": "1",
      "varName2": "author-display",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "16",
      "storage": "1",
      "varName2": "author-avatar",
      "name": "Store Member Info"
    },
    {
      "storage": "2",
      "varName": "ticket-count",
      "changeType": "1",
      "value": "0001",
      "name": "Control Variable"
    },
    {
      "storage": "2",
      "varName": "ticket-count",
      "name": "Save Variable"
    },
    {
      "info": "1",
      "infoIndex": "1",
      "storage": "1",
      "varName": "ticket-reason",
      "name": "Store Command Params"
    },
    {
      "comment": "Ticket Channel Creation",
      "color": "#80ff80",
      "name": "Comment"
    },
    {
      "channelName": "ticket-${serverVars(\"ticket-count\")}",
      "topic": "",
      "position": "",
      "storage": "1",
      "varName": "ticket-channel",
      "name": "Create Text Channel"
    },
    {
      "storage": "3",
      "varName": "ticket-channel",
      "toChange": "parent",
      "newState": "${serverVars(\"ticket-category-id\")}",
      "name": "Edit Channel"
    },
    {
      "storage": "3",
      "varName": "ticket-channel",
      "permission": "READ_MESSAGES",
      "state": "1",
      "name": "Set Channel Permissions"
    },
    {
      "channel": "3",
      "varName": "ticket-channel",
      "member": "1",
      "varName2": "",
      "permission": "READ_MESSAGES",
      "state": "0",
      "name": "Set Member Channel Perms"
    },
    {
      "channel": "3",
      "varName": "ticket-channel",
      "role": "4",
      "varName2": "ticket-support-role",
      "permission": "READ_MESSAGES",
      "state": "0",
      "name": "Set Role Channel Perms"
    },
    {
      "channel": "3",
      "varName": "ticket-channel",
      "role": "4",
      "varName2": "ticket-manager-role",
      "permission": "READ_MESSAGES",
      "state": "0",
      "name": "Set Role Channel Perms"
    },
    {
      "channel": "3",
      "varName": "ticket-channel",
      "info": "2",
      "storage": "1",
      "varName2": "ticket-channel-name",
      "name": "Store Channel Info"
    },
    {
      "channel": "3",
      "varName": "ticket-channel",
      "info": "1",
      "storage": "1",
      "varName2": "ticket-channel-id",
      "name": "Store Channel Info"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "${tempVars(\"ticket-channel-name\")}_creator",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "ticket-creator-data",
      "name": "Store Member Data"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "${tempVars(\"ticket-channel-name\")}_full",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "ticket-creator-data-full",
      "name": "Store Member Data"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "${tempVars(\"ticket-channel-name\")}_normal",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "ticket-creator-data-normal",
      "name": "Store Member Data"
    },
    {
      "time": "1",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "comment": "Ticket Channel Embed",
      "color": "#80ff80",
      "name": "Comment"
    },
    {
      "title": "New Ticket",
      "author": "${tempVars(\"author-display\")}",
      "color": "BLUE",
      "timestamp": "true",
      "url": "",
      "authorIcon": "${tempVars(\"author-avatar\")}",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "ticket-embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "ticket-embed",
      "fieldName": "Ticket Author",
      "message": "${member}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "condition": "0",
      "comparison": "0",
      "value": "0",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "2",
      "name": "Check Parameters"
    },
    {
      "storage": "1",
      "varName": "ticket-embed",
      "fieldName": "Ticket Reason",
      "message": "No reason defined.",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "count": "1",
      "name": "Skip Actions"
    },
    {
      "storage": "1",
      "varName": "ticket-embed",
      "fieldName": "Ticket Reason",
      "message": "${tempVars(\"ticket-reason\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "ticket-embed",
      "message": "Ticket ID: ${serverVars(\"ticket-count\")}",
      "footerIcon": "",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "ticket-embed",
      "channel": "5",
      "varName2": "ticket-channel",
      "name": "Send Embed Message"
    },
    {
      "time": "2",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "comment": "Ticket Log Embed",
      "color": "#80ff80",
      "name": "Comment"
    },
    {
      "title": "A new Ticket has been opened!",
      "author": "${tempVars(\"author-display\")}",
      "color": "GREEN",
      "timestamp": "true",
      "url": "",
      "authorIcon": "${tempVars(\"author-avatar\")}",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "ticket-log-embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "ticket-log-embed",
      "fieldName": "Ticket Author",
      "message": "${member}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "ticket-log-embed",
      "fieldName": "Ticket ID",
      "message": "ID: `${serverVars(\"ticket-count\")}`",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "ticket-log-embed",
      "message": "Channel ID: ${tempVars(\"ticket-channel-id\")}",
      "footerIcon": "",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "ticket-log-embed",
      "channel": "6",
      "varName2": "ticket-log-channel",
      "name": "Send Embed Message"
    }
  ],
  "_aliases": [
    "new",
    "createticket",
    "ticket"
  ]
}
