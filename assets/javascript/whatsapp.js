    var url = 'https://whatsapp.socialintents.com/api/chat/siwhatsapp.1.0.js';
    var s = document.createElement('script');s.type = 'text/javascript';s.async = true;s.src = url;
    var chatSettings = {
        "backgroundColor": "#25d366",
        "textColor": "#ffff",
        "position": "right",
        "marginBottom": "25",
        "marginLeft": "0",
        "marginRight": "25",
        "logo": "https://whatsapp.socialintents.com/images/whatsapp.png",
        "ctaText": "Chat met ons!",
        "chatIcon": "1",
        "chatIconImageUrl": "",
        "showPopup": false,
        "welcomeText": "Stuur ons een bericht als u een vraag of wat anders wilt weten",
        "messageText": "CarCleaningBeerenhout: ",
        "phoneNumber": "+31612639041"
    };
    s.onload = function() {
        addWidget(chatSettings);
    };
    var x = document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);
