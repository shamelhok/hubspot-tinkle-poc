const request = require('request-promise-native');
exports.crmSampleController = async(req, res) => {
    const {query, body}=req
    console.log({body,query});
    res.setHeader('Content-Type', 'application/json');
    const result = {
        "results": [
            {
                "objectId": 1,
                "title": "CRM card title",
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
                        "label": "email example",
                        "dataType": "EMAIL",
                        "value": "ijones@hubspot.com"
                    },
                    {
                        "label": "currenvy example",
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
                        "label": "popup",
                        "associatedObjectProperties": []
                    },
                    {
                        "type": "ACTION_HOOK",
                        "httpMethod": "GET",
                        "associatedObjectProperties": [],
                        "uri": "https://nc-news-api-rwfo.onrender.com/api",
                        "label": "action"
                    },
                    {
                        "type": "CONFIRMATION_ACTION_HOOK",
                        "confirmationMessage": "Are you sure you want to complete this action?",
                        "confirmButtonText": "Yes",
                        "cancelButtonText": "No",
                        "httpMethod": "GET",
                        "associatedObjectProperties": [
                            "protected_account"
                        ],
                        "uri": "https://nc-news-api-rwfo.onrender.com/api",
                        "label": "confirm action"
                    },
                    {
                        "type": "ACTION_HOOK",
                        "httpMethod": "GET",
                        "associatedObjectProperties": [],
                        "uri": "https://nc-news-api-rwfo.fghfgonrender.com/api/dfgdfgrgdg",
                        "label": "failing action "
                    }
                ]
            }
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

        const response=await request.get("https://api-jupiter-dev-uks-01.azurewebsites.net/api/tier/all",
        {
            headers:{
      'X-API-KEY':"436efa91-5a02-4305-b8d5-57d0ab0d2bd6"
            }
        })
        const body = JSON.parse(response)
        const tiers = body.data
        card1.properties.push(
            { 
            "label": "tier name",
            "dataType": "STRING",
            "value": tiers[0].tierName
    })
    }catch(err){
        console.log(err);
    }
    res.send(result)
}

exports.crmNcController= async(req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    const result = {
        "results": [
            {
                "objectId": 1,
                "title": "API sample",
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
            }
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
            "uri": "https://nc-news-shamel.netlify.app/",
            "label": "Open Web app"
        }
    }
    const user={
        username: 'tickle122',
        name: 'Tom Tickle',
        avatar_url:
          'https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953'
      }
}
