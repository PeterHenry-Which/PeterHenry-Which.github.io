(() => {
  "use strict";
  const whichTest = {
    selector: "#which-live-chat",
    debug: false,
    init: () => {
      helpers.elementLoaded(whichTest.selector, function () {
        setTimeout((argument) => {
          whichTest.log("Test Ready!");
          whichTest.variant();
          whichTest.mainCss();
        }, 1500);
      });
    },
    mainCss: () => {
      const mainCss = `button.whi-greyout { 
                          background: #cccccc; 
                          pointer-events: none; 
                      }
                      /* this is in a seperate file from GTM */
                      .embeddedServiceHelpButton .helpButton .uiButton {
                          background-color: #e30613;
                          font-family: "Open Sans", sans-serif;
                      }
                      .embeddedServiceHelpButton .helpButton .uiButton:focus {
                          outline: 1px solid #e30613;
                      }
                      .embeddedServiceHelpButton .helpButton .uiButton.helpButtonDisabled {
                          display: none;
                      }`;

      const headofdoc = document.getElementsByTagName("head")[0];
      const s = document.createElement("style");
      s.setAttribute("type", "text/css");
      s.appendChild(document.createTextNode(mainCss));
      headofdoc.appendChild(s);
    },

    variant: () => {
      if (document.querySelector("#which-live-chat")) {
        document.querySelector("#which-live-chat").addEventListener(
          "click",
          () => {
            document.querySelector(".embeddedServiceHelpButton button").click();
            if (
              document.querySelector(
                ".embeddedServiceSidebarMinimizedDefaultUI"
              )
            ) {
              document
                .querySelector(".embeddedServiceSidebarMinimizedDefaultUI")
                .click();
            }
          },
          false
        );

        //check if agent is offline
        setTimeout(() => {
          if (
            document
              .querySelector(".embeddedServiceHelpButton button .message")
              .textContent.indexOf("Offline") > -1
          ) {
            //
            document.querySelector("#which-live-chat").textContent =
              "Chat Unavailable";
            document
              .querySelector("#which-live-chat")
              .classList.add("whi-greyout");
          } else {
            document.querySelector("#which-live-chat").textContent =
              "Start Live chat";
            document
              .querySelector("#which-live-chat")
              .classList.remove("whi-greyout");
          }
        }, 1000);
      }
    },

    log: (obj) => {
      if (whichTest.debug === true) {
        console.log(obj);
      }
    },
  };
  const helpers = {
    elementLoaded: (ele, callback) => {
      whichTest.log("elementLoaded::  " + ele + " - Checking...");
      window.clearTimeout(whichTest.eleTimer);
      if (document.querySelectorAll(ele).length > 0) {
        if (typeof callback === "function") {
          whichTest.log("elementLoaded::  " + ele + " - Found!");
          callback();
        }
      } else {
        whichTest.eleTimer = window.setTimeout(() => {
          helpers.elementLoaded(ele, callback);
        }, 100);
      }
    },
  };
  whichTest.init();
})();
