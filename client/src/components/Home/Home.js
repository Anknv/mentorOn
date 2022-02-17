import React from "react";

export default function Home() {
  
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"3dacb51e527667db394e5a717dc032b37","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});

  return <h1>
    This is the Home Page
  </h1>
}
