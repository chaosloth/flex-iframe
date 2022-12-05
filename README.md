# Flex Iframe

Show iframe in Flex using attached data to drive the URL and the URL Parameters

## Studio Example
In Twilio Studio, with the Send To Flex widget, add data attributes, for example:
```json
{
"skillsNeeded" : "General",
"frameUrl":"https://your-serverless-function-here/index.html",
"frameData": {
 "answerPoint":"{{trigger.call.To}}", 
 "id": "{{widgets.connect_virtual_agent_2.VirtualAgentProviderData.ConversationId}}"
 }
}
```

