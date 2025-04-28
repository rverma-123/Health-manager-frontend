import React from 'react'
import { useEffect } from 'react';

function ChatBot() {
    
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
        script.async = true
        document.body.appendChild(script)
     
        script.onload = () => {
          window.botpressWebChat.init({
           
          "composerPlaceholder": "Ask your health query",
          "botConversationDescription": "",
          "botId": "42cc66eb-b6fb-44f8-9d2a-2b732298f460",
          "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
          "messagingUrl": "https://messaging.botpress.cloud",
          "clientId": "264509db-4063-4d2a-a619-d630f607d920", //my botpress id shown in URL 
          "lazySocket": true,
          "botName": "Health Doctor",
          "stylesheet": "https://webchat-styler-css.botpress.app/prod/code/a1ecdf9f-eecd-49d0-af7d-626060e2799b/v28935/style.css",
          "frontendVersion": "v1"
            
          })
        }
      }, [])
   

  return (
    <div></div>
  )
}

export default ChatBot