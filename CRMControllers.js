exports.crmSampleController = async(req, res) => {
    const result = {
        "results": [
            {
                "objectId": 1,
                "title": "API-22: APIs working too fast",
                "link": "http://example.com/1",
                "created": "2016-09-15",
                "priority": "HIGH",
                "project": "API",
                "reported_by": "msmith@hubspot.com",
                "description": "Customer reported that the APIs are just running too fast. This is causing a problem in that they're so happy.",
                "reporter_type": "Account Manager",
                "status": "In Progress",
                "ticket_type": "Bug",
                "updated": "2016-09-28",
                "properties": [
                    {
                        "label": "Resolved by",
                        "dataType": "EMAIL",
                        "value": "ijones@hubspot.com"
                    },
                    {
                        "label": "Resolution type",
                        "dataType": "STRING",
                        "value": "Referred to documentation"
                    },
                    {
                        "label": "Resolution impact",
                        "dataType": "CURRENCY",
                        "value": "94.34",
                        "currencyCode": "GBP"
                    }
                ],
                "actions": [
                    {
                        "type": "IFRAME",
                        "width": 890,
                        "height": 748,
                        "uri": "https://hubspot-tinkle-poc.onrender.com/",
                        "label": "Edit",
                        "associatedObjectProperties": []
                    },
                    {
                        "type": "IFRAME",
                        "width": 890,
                        "height": 748,
                        "uri": "https://example.com/reassign-iframe-contents",
                        "label": "Reassign",
                        "associatedObjectProperties": []
                    },
                    {
                        "type": "ACTION_HOOK",
                        "httpMethod": "PUT",
                        "associatedObjectProperties": [],
                        "uri": "https://example.com/tickets/245/resolve",
                        "label": "Resolve"
                    },
                    {
                        "type": "CONFIRMATION_ACTION_HOOK",
                        "confirmationMessage": "Are you sure you want to delete this ticket?",
                        "confirmButtonText": "Yes",
                        "cancelButtonText": "No",
                        "httpMethod": "DELETE",
                        "associatedObjectProperties": [
                            "protected_account"
                        ],
                        "uri": "https://example.com/tickets/245",
                        "label": "Delete"
                    }
                ]
            },
            {
                "objectId": 988,
                "title": "API-54: Question about bulk APIs",
                // "link": "http://example.com/2",
                "created": "2016-08-04",
                "priority": "LOW",
                "project": "API",
                "reported_by": "ksmith@hubspot.com",
                "description": "Customer is not able to find documentation about our bulk Contacts APIs.",
                "reporter_type": "Support Rep",
                "status": "Resolved",
                "ticket_type": "Bug",
                "updated": "2016-09-23",
                "properties": [
                    {
                        "label": "Resolved by",
                        "dataType": "EMAIL",
                        "value": "ijones@hubspot.com"
                    },
                    {
                        "label": "Resolution type",
                        "dataType": "STRING",
                        "value": "Referred to documentation"
                    },
                    {
                        "label": "Resolution impact",
                        "dataType": "CURRENCY",
                        "value": "94.34",
                        "currencyCode": "GBP"
                    }
                ],
                "actions": [
                    {
                        "type": "IFRAME",
                        "width": 890,
                        "height": 748,
                        "uri": "https://example.com/edit-iframe-contents",
                        "label": "Edit"
                    },
                    {
                        "type": "CONFIRMATION_ACTION_HOOK",
                        "confirmationMessage": "Are you sure you want to delete this ticket?",
                        "confirmButtonText": "Yes",
                        "cancelButtonText": "No",
                        "httpMethod": "DELETE",
                        "associatedObjectProperties": [
                            "protected_account"
                        ],
                        "uri": "https://example.com/tickets/245",
                        "label": "Delete"
                    }
                ]
            },
            // {
            //     "objectId": 988,
            //     "title": "Card 3",
            //     "link": "http://example.com/2",
            //     "created": "2016-08-04",
            //     "priority": "HIGH",
            //     "project": "API",
            //     "reported_by": "ksmith@hubspot.com",
            //     "description": "Customer is not able to find documentation about our bulk Contacts APIs.",
            //     "reporter_type": "Support Rep",
            //     "status": "Resolved",
            //     "ticket_type": "Bug",
            //     "updated": "2016-09-23",
            //     "properties": [
            //         {
            //             "label": "Resolved by",
            //             "dataType": "EMAIL",
            //             "value": "ijones@hubspot.com"
            //         },
            //         {
            //             "label": "Resolution type",
            //             "dataType": "STRING",
            //             "value": "Referred to documentation"
            //         },
            //         {
            //             "label": "Resolution impact",
            //             "dataType": "CURRENCY",
            //             "value": "94.34",
            //             "currencyCode": "GBP"
            //         }
            //     ],
            //     "actions": [
            //         {
            //             "type": "IFRAME",
            //             "width": 890,
            //             "height": 748,
            //             "uri": "https://tools.hubteam.com/integrations-iframe-test-app",
            //             "label": "Edit"
            //         },
            //         {
            //             "type": "CONFIRMATION_ACTION_HOOK",
            //             "confirmationMessage": "Are you sure you want to delete this ticket?",
            //             "confirmButtonText": "Yes",
            //             "cancelButtonText": "No",
            //             "httpMethod": "DELETE",
            //             "associatedObjectProperties": [
            //                 "protected_account"
            //             ],
            //             "uri": "https://api.hubapi.com/linked-sales-objects-test-application/v1/actions/demo-ticket/988",
            //             "label": "Delete"
            //         }
            //     ]
            // }
        ],
        "settingsAction": {
            "type": "IFRAME",
            "width": 890,
            "height": 748,
            "uri": "https://example.com/settings-iframe-contents",
            "label": "Settings"
        },
        "primaryAction": {
            "type": "IFRAME",
            "width": 890,
            "height": 748,
            "uri": "https://cdne-jupiter-dev-uks-01.azureedge.net/",
            "label": "Open Web app"
        }
    }
    const card1 = result.results[0]
    try{

        const response=await fetch("https://api-jupiter-dev-uks-01.azurewebsites.net/api/tier/all")
        const body = await response.json()
        const tiers = body.data
        if(Array.isArray(tiers))        card1.properties= tiers
    }catch(err){
        console.log(err);
    }
    res.send(result)
}
