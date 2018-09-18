{
  "name": "elevateticket",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "SuEwm",
  "actions": [
    {
      "server": "0",
      "varName": "",
      "info": "1",
      "storage": "1",
      "varName2": "server-id",
      "name": "Store Server Info"
    },
    {
      "channel": "0",
      "varName": "",
      "info": "2",
      "storage": "1",
      "varName2": "channel-name",
      "name": "Store Channel Info"
    },
    {
      "channel": "0",
      "varName": "",
      "info": "1",
      "storage": "1",
      "varName2": "channel-id",
      "name": "Store Channel Info"
    },
    {
      "channel": "0",
      "varName": "",
      "info": "0",
      "storage": "1",
      "varName2": "channel",
      "name": "Store Channel Info"
    },
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
      "slice": "${tempVars(\"channel-name\")}",
      "startingNumber": "7",
      "sliceLength": "10000",
      "storage": "1",
      "varName": "ticket-id",
      "name": "Slice"
    },
    {
      "storage": "1",
      "varName": "channel-name",
      "comparison": "5",
      "value": "ticket-",
      "iftrue": "3",
      "iftrueVal": "5",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "😖 Sorry about that, but you have to be in a ticket channel!",
      "storage": "1",
      "varName2": "no-alert",
      "name": "Send Message"
    },
    {
      "time": "5",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "storage": "1",
      "varName": "no-alert",
      "name": "Delete Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "member": "1",
      "varName": "",
      "role": "4",
      "varName2": "ticket-manager-role",
      "iftrue": "3",
      "iftrueVal": "6",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check If Member has Role"
    },
    {
      "member": "1",
      "varName": "",
      "role": "4",
      "varName2": "ticket-support-role",
      "iftrue": "3",
      "iftrueVal": "5",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check If Member has Role"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "👿 Are you trying to elevate this ticket without the right permissions?",
      "storage": "1",
      "varName2": "perm-alert",
      "name": "Send Message"
    },
    {
      "time": "5",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "storage": "1",
      "varName": "perm-alert",
      "name": "Delete Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "info": "1",
      "infoIndex": "1",
      "storage": "1",
      "varName": "elevate-reason",
      "name": "Store Command Params"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "title": "This Ticket has been elevated.",
      "author": "${tempVars(\"author-display\")}",
      "color": "GOLD",
      "timestamp": "true",
      "url": "",
      "authorIcon": "${tempVars(\"author-avatar\")}",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "This ticket has now been elevated. This means that only members with the ${serverVars(\"ticket-manager-role\")} can view this, as well as users added to the ticket.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Elevated By",
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
      "varName": "embed",
      "fieldName": "Reason",
      "message": "No reason was specified.",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "count": "1",
      "name": "Skip Actions"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Reason",
      "message": "${tempVars(\"elevate-reason\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "channel": "0",
      "varName2": "nowhere",
      "name": "Send Embed Message"
    },
    {
      "channel": "0",
      "varName": "",
      "role": "4",
      "varName2": "ticket-support-role",
      "permission": "READ_MESSAGES",
      "state": "2",
      "name": "Set Role Channel Perms"
    }
  ],
  "_aliases": [
    "elevate",
    "eticket"
  ]
}
