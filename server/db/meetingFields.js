const meetingFields = [
    {
        "name": "agenta",
        "label": "Agenta",
        "type": "text",
        "fixed": false,
        "delete": false,
        "belongsTo": null,
        "backendType": "String",
        "editable": false,
        "isTableField": true,
        "options": [],
        "validation": [
            {
                "require": true,
                "message": "Agenta is required",
            },
        ],
    },
    {
        "name": "relatedTo",
        "label": "Related To",
        "type": "text",
        "fixed": false,
        "delete": false,
        "belongsTo": null,
        "backendType": "Mixed",
        "isTableField": true
    },
    {
        "name": "location",
        "label": "Location",
        "type": "text",
        "fixed": false,
        "delete": false,
        "belongsTo": null,
        "backendType": "String",
        "isTableField": true,
        "options": [],
        "validation": [
            {
                "require": false,
                "message": "",
            },
        ],
    },
    {
        "name": "dateTime",
        "label": "Date and Time",
        "type": "text",
        "fixed": true,
        "delete": false,
        "belongsTo": null,
        "backendType": "String",
        "isTableField": true,
        "options": [],
        "validation": [
            {
                "require": true,
                "message": "Date and time is required",
            },
        ],
    },
    {
        "name": "meetingNotes",
        "label": "Meeting Notes",
        "type": "text",
        "fixed": false,
        "delete": false,
        "belongsTo": null,
        "backendType": "Mixed",
        "isTableField": true,
        "validation": [
            {
                "required": true,
                "message": "Meetoh notes is required",
            }
        ],
    },
];
exports.meetingFields = meetingFields;
