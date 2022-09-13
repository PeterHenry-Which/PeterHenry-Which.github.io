(function () {
  var c = function (d) {
    embedded_svc.settings.displayHelpButton = !0;
    embedded_svc.settings.language = "";
    embedded_svc.settings.defaultMinimizedText = "Chat with Advisor";
    embedded_svc.addEventHandler("onAgentJoinedConference", function (a) {
      window.dataLayer.push({
        liveAgentEventCategory: "Live Agent Chat Interaction",
        liveAgentEventAction: "onAgentJoinedConference",
        liveAgentEventLabel: a.liveAgentSessionKey,
        liveAgentEventValue: 0,
        liveAgentEventInteractive: !1,
        event: "liveAgentChatEvent",
      });
    });
    embedded_svc.addEventHandler("onAgentLeftConference", function (a) {
      window.dataLayer.push({
        liveAgentEventCategory: "Live Agent Chat Interaction",
        liveAgentEventAction: "onAgentLeftConference",
        liveAgentEventLabel: a.liveAgentSessionKey,
        liveAgentEventValue: 0,
        liveAgentEventInteractive: !1,
        event: "liveAgentChatEvent",
      });
    });
    embedded_svc.addEventHandler("onAgentMessage", function (a) {
      window.dataLayer.push({
        liveAgentEventCategory: "Live Agent Chat Interaction",
        liveAgentEventAction: "onAgentMessage",
        liveAgentEventLabel: a.liveAgentSessionKey,
        liveAgentEventValue: 0,
        liveAgentEventInteractive: !1,
        event: "liveAgentChatEvent",
      });
    });
    embedded_svc.addEventHandler("onAgentRichMessage", function (a) {
      window.dataLayer.push({
        liveAgentEventCategory: "Live Agent Chat Interaction",
        liveAgentEventAction: "onAgentRichMessage",
        liveAgentEventLabel: a.liveAgentSessionKey,
        liveAgentEventValue: 0,
        liveAgentEventInteractive: !1,
        event: "liveAgentChatEvent",
      });
    });
    embedded_svc.addEventHandler("onChasitorMessage", function (a) {
      window.dataLayer.push({
        liveAgentEventCategory: "Live Agent Chat Interaction",
        liveAgentEventAction: "onChasitorMessage",
        liveAgentEventLabel: a.liveAgentSessionKey,
        liveAgentEventValue: 0,
        liveAgentEventInteractive: !1,
        event: "liveAgentChatEvent",
      });
    });
    embedded_svc.addEventHandler("onChatConferenceEnded", function (a) {
      window.dataLayer.push({
        liveAgentEventCategory: "Live Agent Chat Interaction",
        liveAgentEventAction: "onChatConferenceEnded",
        liveAgentEventLabel: a.liveAgentSessionKey,
        liveAgentEventValue: 0,
        liveAgentEventInteractive: !1,
        event: "liveAgentChatEvent",
      });
    });
    embedded_svc.addEventHandler("onChatConferenceInitiated", function (a) {
      window.dataLayer.push({
        liveAgentEventCategory: "Live Agent Chat Interaction",
        liveAgentEventAction: "onChatConferenceInitiated",
        liveAgentEventLabel: a.liveAgentSessionKey,
        liveAgentEventValue: 0,
        liveAgentEventInteractive: !1,
        event: "liveAgentChatEvent",
      });
    });
    embedded_svc.addEventHandler("onChatEndedByAgent", function (a) {
      window.dataLayer.push({
        liveAgentEventCategory: "Live Agent Chat Interaction",
        liveAgentEventAction: "onChatEndedByAgent",
        liveAgentEventLabel: a.liveAgentSessionKey,
        liveAgentEventValue: 0,
        liveAgentEventInteractive: !1,
        event: "liveAgentChatEvent",
      });
    });
    embedded_svc.addEventHandler("onChatEndedByChasitor", function (a) {
      window.dataLayer.push({
        liveAgentEventCategory: "Live Agent Chat Interaction",
        liveAgentEventAction: "onChatEndedByChasitor",
        liveAgentEventLabel: a.liveAgentSessionKey,
        liveAgentEventValue: 0,
        liveAgentEventInteractive: !1,
        event: "liveAgentChatEvent",
      });
    });
    embedded_svc.addEventHandler("onChatReconnectSuccessful", function (a) {
      window.dataLayer.push({
        liveAgentEventCategory: "Live Agent Chat Interaction",
        liveAgentEventAction: "onChatReconnectSuccessful",
        liveAgentEventLabel: a.liveAgentSessionKey,
        liveAgentEventValue: 0,
        liveAgentEventInteractive: !1,
        event: "liveAgentChatEvent",
      });
    });
    embedded_svc.addEventHandler("onChatRequestSuccess", function (a) {
      window.dataLayer.push({
        liveAgentEventCategory: "Live Agent Chat Interaction",
        liveAgentEventAction: "onChatRequestSuccess",
        liveAgentEventLabel: a.liveAgentSessionKey,
        liveAgentEventValue: 0,
        liveAgentEventInteractive: !1,
        event: "liveAgentChatEvent",
      });
    });
    embedded_svc.addEventHandler("onChatTransferSuccessful", function (a) {
      window.dataLayer.push({
        liveAgentEventCategory: "Live Agent Chat Interaction",
        liveAgentEventAction: "onChatTransferSuccessful",
        liveAgentEventLabel: a.liveAgentSessionKey,
        liveAgentEventValue: 0,
        liveAgentEventInteractive: !1,
        event: "liveAgentChatEvent",
      });
    });
    embedded_svc.addEventHandler("onConnectionError", function (a) {
      window.dataLayer.push({
        liveAgentEventCategory: "Live Agent Chat Interaction",
        liveAgentEventAction: "onConnectionError",
        liveAgentEventLabel: a.liveAgentSessionKey,
        liveAgentEventValue: 0,
        liveAgentEventInteractive: !1,
        event: "liveAgentChatEvent",
      });
    });
    embedded_svc.addEventHandler("onIdleTimeoutClear", function (a) {
      window.dataLayer.push({
        liveAgentEventCategory: "Live Agent Chat Interaction",
        liveAgentEventAction: "onIdleTimeoutClear",
        liveAgentEventLabel: a.liveAgentSessionKey,
        liveAgentEventValue: 0,
        liveAgentEventInteractive: !1,
        event: "liveAgentChatEvent",
      });
    });
    embedded_svc.addEventHandler("onIdleTimeoutOccurred", function (a) {
      window.dataLayer.push({
        liveAgentEventCategory: "Live Agent Chat Interaction",
        liveAgentEventAction: "onIdleTimeoutOccurred",
        liveAgentEventLabel: a.liveAgentSessionKey,
        liveAgentEventValue: 0,
        liveAgentEventInteractive: !1,
        event: "liveAgentChatEvent",
      });
    });
    embedded_svc.addEventHandler("onIdleTimeoutWarningStart", function (a) {
      window.dataLayer.push({
        liveAgentEventCategory: "Live Agent Chat Interaction",
        liveAgentEventAction: "onIdleTimeoutWarningStart",
        liveAgentEventLabel: a.liveAgentSessionKey,
        liveAgentEventValue: 0,
        liveAgentEventInteractive: !1,
        event: "liveAgentChatEvent",
      });
    });
    embedded_svc.addEventHandler("onQueueUpdate", function (a) {
      window.dataLayer.push({
        liveAgentEventCategory: "Live Agent Chat Interaction",
        liveAgentEventAction: "onQueueUpdate",
        liveAgentEventLabel: a.liveAgentSessionKey,
        liveAgentEventValue: 0,
        liveAgentEventInteractive: !1,
        event: "liveAgentChatEvent",
      });
    });
    embedded_svc.addEventHandler("afterDestroy", function (a) {
      window.dataLayer.push({
        liveAgentEventCategory: "Live Agent Chat Interaction",
        liveAgentEventAction: "afterDestroy",
        liveAgentEventLabel: "",
        liveAgentEventValue: 0,
        liveAgentEventInteractive: !1,
        event: "liveAgentChatEvent",
      });
    });
    embedded_svc.addEventHandler("onClickSubmitButton", function (a) {
      window.dataLayer.push({
        liveAgentEventCategory: "Live Agent Chat Interaction",
        liveAgentEventAction: "onClickSubmitButton",
        liveAgentEventLabel: "",
        liveAgentEventValue: 0,
        liveAgentEventInteractive: !1,
        event: "liveAgentChatEvent",
      });
    });
    embedded_svc.addEventHandler("onHelpButtonClick", function (a) {
      window.dataLayer.push({
        liveAgentEventCategory: "Live Agent Chat Interaction",
        liveAgentEventAction: "onHelpButtonClick",
        liveAgentEventLabel: "",
        liveAgentEventValue: 0,
        liveAgentEventInteractive: !1,
        event: "liveAgentChatEvent",
      });
    });
    embedded_svc.addEventHandler("onInviteAccepted", function (a) {
      window.dataLayer.push({
        liveAgentEventCategory: "Live Agent Chat Interaction",
        liveAgentEventAction: "onInviteAccepted",
        liveAgentEventLabel: "",
        liveAgentEventValue: 0,
        liveAgentEventInteractive: !1,
        event: "liveAgentChatEvent",
      });
    });
    embedded_svc.addEventHandler("onInviteRejected", function (a) {
      window.dataLayer.push({
        liveAgentEventCategory: "Live Agent Chat Interaction",
        liveAgentEventAction: "onInviteRejected",
        liveAgentEventLabel: "",
        liveAgentEventValue: 0,
        liveAgentEventInteractive: !1,
        event: "liveAgentChatEvent",
      });
    });
    embedded_svc.addEventHandler("onSettingsCallCompleted", function (a) {
      window.dataLayer.push({
        liveAgentEventCategory: "Live Agent Chat Interaction",
        liveAgentEventAction: "onSettingsCallCompleted",
        liveAgentEventLabel: "",
        liveAgentEventValue: 0,
        liveAgentEventInteractive: !1,
        event: "liveAgentChatEvent",
      });
    });
    embedded_svc.settings.extraPrechatInfo = [
      {
        entityFieldMaps: [
          {
            doCreate: !1,
            doFind: !0,
            fieldName: "LastName",
            isExactMatch: !0,
            label: "Last Name",
          },
          {
            doCreate: !1,
            doFind: !0,
            fieldName: "FirstName",
            isExactMatch: !0,
            label: "First Name",
          },
          {
            doCreate: !0,
            doFind: !0,
            fieldName: "Email",
            isExactMatch: !0,
            label: "Email",
          },
        ],
        entityName: "Contact",
        saveToTranscript: "Contact",
      },
      {
        entityFieldMaps: [
          { doCreate: !0, doFind: !1, fieldName: "Subject", label: "Subject" },
        ],
        entityName: "Case",
        saveToTranscript: "Case",
      },
    ];
    embedded_svc.settings.prepopulatedPrechatFields = {
      FirstName: "First Name",
      LastName: "Last Name",
      Email: "Email",
      Subject: "Subject",
    };
    embedded_svc.settings.enabledFeatures = ["LiveAgent"];
    embedded_svc.settings.entryFeature = "LiveAgent";
    embedded_svc.init(
      "https://which.my.salesforce.com",
      "https://which.secure.force.com/livechat",
      d,
      "00D0X000000slQI",
      "Legal_Chat",
      {
        baseLiveAgentContentURL:
          "https://c.la1-c2-frf.salesforceliveagent.com/content",
        deploymentId: "5720X000000H3sg",
        buttonId: "5730X000000H4w2",
        baseLiveAgentURL: "https://d.la1-c2-frf.salesforceliveagent.com/chat",
        eswLiveAgentDevName:
          "EmbeddedServiceLiveAgent_Parent04I0X00000000LpUAI_170e4a313e0",
        isOfflineSupportEnabled: !1,
      }
    );
  };
  if (window.embedded_svc) c("https://service.force.com");
  else {
    var b = document.createElement("script");
    b.setAttribute(
      "src",
      "https://which.my.salesforce.com/embeddedservice/5.0/esw.min.js"
    );
    b.onload = function () {
      c(null);
    };
    document.body.appendChild(b);
  }
})();

(function () {
  "use strict";
  var whichTest = {
    selector: "#which-live-chat",
    debug: false,
    init: function () {
      helpers.elementLoaded(whichTest.selector, function () {
        setTimeout(function (argument) {
          whichTest.log("Test Ready!");
          whichTest.variant();
          whichTest.mainCss();
        }, 1500);
      });
    },
    mainCss: function () {
      var mainCss = `button.whi-greyout { 
                        background: #cccccc; 
                        pointer-events: none; 
                    }
                    .embeddedServiceHelpButton .helpButton .uiButton {
                        background-color: #e30613;
                        font-family: "Open Sans", sans-serif;
                    }
                    .embeddedServiceHelpButton .helpButton .uiButton:focus {
                        outline: 1px solid #e30613;
                    }
                    .embeddedServiceHelpButton .helpButton .uiButton.helpButtonDisabled {
                        display: none;
                    } 
        `;

      var headofdoc = document.getElementsByTagName("head")[0];
      var s = document.createElement("style");
      s.setAttribute("type", "text/css");
      s.appendChild(document.createTextNode(mainCss));
      headofdoc.appendChild(s);
    },

    variant: function () {
      if (document.querySelector("#which-live-chat")) {
        document.querySelector("#which-live-chat").addEventListener(
          "click",
          function () {
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
        setTimeout(function (argument) {
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

    fireTag: function (element, value) {},
    log: function (obj) {
      if (whichTest.debug === true) {
        console.log(obj);
      }
    },
  };
  var helpers = {
    elementLoaded: function (ele, callback) {
      whichTest.log("elementLoaded::  " + ele + " - Checking...");
      window.clearTimeout(whichTest.eleTimer);
      if (document.querySelectorAll(ele).length > 0) {
        if (typeof callback === "function") {
          whichTest.log("elementLoaded::  " + ele + " - Found!");
          callback();
        }
      } else {
        whichTest.eleTimer = window.setTimeout(function () {
          helpers.elementLoaded(ele, callback);
        }, 100);
      }
    },
  };
  whichTest.init();
})();
