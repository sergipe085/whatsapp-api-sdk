import { WhatsappBusinessApiClient } from "./src/business-api/business-api-client"
import { WhatsappCloudApiClient } from "./src/cloud-api/cloud-api-client"

const waba = new WhatsappBusinessApiClient({
    token: "EAAgqwGZCwoScBOzGmJP4rxQgLfzditlzcNZAlskeZCC9uEE3j8VxgPfpiU6HUZAEKd9X3kuqxoVm1KR6NtdhYMc9JFtk4HyBQ29VK5bTM5N3D4RcBzVNpI9u4BK8Qpl8x6fN9zOtp1xgndC7AJHsZA9lkCL9ZBMtTjqI5ReZBv5P9kGC7VLL29GZBDkZClu8zG0OZCMgZDZD",
    businessAccountId: "541534382373602" // business id
})

const wa = new WhatsappCloudApiClient({
    token: "EAAgqwGZCwoScBOzGmJP4rxQgLfzditlzcNZAlskeZCC9uEE3j8VxgPfpiU6HUZAEKd9X3kuqxoVm1KR6NtdhYMc9JFtk4HyBQ29VK5bTM5N3D4RcBzVNpI9u4BK8Qpl8x6fN9zOtp1xgndC7AJHsZA9lkCL9ZBMtTjqI5ReZBv5P9kGC7VLL29GZBDkZClu8zG0OZCMgZDZD",
    phoneNumberId: "477996918733962" // business id
})

async function main() {
    const templates = await waba.message_templates.getMessageTemplates();
    console.log(JSON.stringify(templates, null, 2))

    const messageResponse = await wa.messages.sendText('+5585985509999', 'API OFICIAL DO ZAP FUNCIONANDOOOO');
    console.log('Message sent:', messageResponse);
}

main();