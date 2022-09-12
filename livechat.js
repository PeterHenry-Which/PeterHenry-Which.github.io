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
    selector: ".center-content__main",
    debug: false,
    init: function () {
      helpers.elementLoaded(whichTest.selector, function () {
        whichTest.log("Test Ready!");
        whichTest.variant();
      });
    },

    variant: function () {
      var btnInner =
        '<div id="whi-livechat" class="boxed-text-widget contact-us-widget">' +
        '    <h2 class="boxed-text-widget__headline contact-us-widget__headline">Start Live chat' +
        '        <span class="boxed-text-widget__headline-arrow-down contact-us-widget__headline-arrow-down">»</span>' +
        "    </h2>" +
        '    <div class="boxed-text-widget__inner contact-us-widget__content">' +
        '        <div class="boxed-text-widget__content-wrapper"> <div class="boxed-text-widget__content" whi-btn-container>' +
        '            <button class="whi-chat-btn">' +
        '                <span class="embeddedServiceIcon" aria-hidden="true" data-icon=""' +
        '                    style="display: inline-block;"></span>' +
        '                <span class="whi-chat-btn-inner">' +
        '                    <span class="assistiveText">Start Live Chat</span>' +
        '                    <span class="message">Start Live Chat' +
        "                    </span>" +
        "                </span>" +
        "            </button> </div>" +
        "        </div>" +
        '        <div class="boxed-text-widget__content-wrapper">' +
        '            <div class="boxed-text-widget__content whi-text-container">' +
        '                <div class="boxed-text-widget--larger-normal-text">' +
        '                   <p style="margin-top:0;"> Use our LiveChat widget here to start a chatting with us. Available Monday to Friday 8.30am - 6pm,' +
        "                    Saturday" +
        "                    9am-1pm. </p>" +
        "                </div>" +
        "            </div>" +
        "        </div>" +
        "    </div>" +
        "</div>";
      document
        .querySelectorAll("#call")[0]
        .insertAdjacentHTML("beforebegin", btnInner);

      document.querySelector(".whi-chat-btn").classList.add("whi-disable");
      document.querySelector(".whi-chat-btn .assistiveText").innerHTML =
        "Live Chat unavailable";
      document.querySelector(".whi-chat-btn .message").innerHTML =
        "Live Chat unavailable";

      var waitInterval = setInterval(function () {
        if (
          document.querySelector(".uiButton") &&
          !document
            .querySelector(".uiButton")
            .classList.contains("helpButtonDisabled")
        ) {
          // document.getElementById("livechat").style.visibility = "visible"; //MAKE BUTTON VISIBLE
          document
            .querySelector(".whi-chat-btn")
            .classList.remove("whi-disable");
          document.querySelector(".whi-chat-btn .assistiveText").innerHTML =
            "Start Live Chat";
          document.querySelector(".whi-chat-btn .message").innerHTML =
            "Start Live Chat";

          document
            .querySelector(".whi-chat-btn")
            .addEventListener("click", function () {
              whichTest.sendGaEvent(
                "AB TEST",
                "ContactUs",
                "Live Chat proxy Click"
              );
              // embedded_svc.liveAgentAPI.startChat(); //MAXIMISE LIVECHAT BOX
              document.querySelector("#helpButtonSpan") &&
                document.querySelector("#helpButtonSpan").click();
            });
          clearInterval(waitInterval);
        }
      }, 1000);
      setTimeout(function () {
        clearInterval(waitInterval);
      }, 30000);

      // add accordion functionality
      document
        .querySelector("#whi-livechat h2")
        .addEventListener("click", function () {
          if (window.innerWidth < 768) {
            var liveChatOffsetTop =
              document.querySelector("#whi-livechat").offsetTop;
            !document.querySelector(
              "#whi-livechat .contact-us-widget__content.whi-display-toggle"
            ) && whichTest.fnc_scrollto(liveChatOffsetTop);
            document
              .querySelector("#whi-livechat .contact-us-widget__content")
              .classList.toggle("whi-display-toggle");
            document
              .querySelector(
                "#whi-livechat .contact-us-widget__headline-arrow-down"
              )
              .classList.toggle("contact-us-rotated-arrow");
          }
        });
    },
    fnc_scrollto: function (to) {
      to = parseInt(to);
      var i = parseInt(window.pageYOffset);
      if (i < to) {
        var int = setInterval(function () {
          if (i > to - 20) i += 1;
          else if (i > to - 40) i += 3;
          else if (i > to - 80) i += 8;
          else if (i > to - 160) i += 18;
          else if (i > to - 200) i += 24;
          else if (i > to - 300) i += 40;
          else i += 60;
          window.scroll(0, i);
          if (i >= to) clearInterval(int);
        }, 25);
      } else {
        var int = setInterval(function () {
          if (i < to + 20) i -= 1;
          else if (i < to + 40) i -= 3;
          else if (i < to + 80) i -= 8;
          else if (i < to + 160) i -= 18;
          else if (i < to + 200) i -= 24;
          else if (i < to + 300) i -= 40;
          else i -= 60;
          window.scroll(0, i);
          if (i <= to) clearInterval(int);
        }, 25);
      }
    },
    sendGaEvent: function (cat, act, lab) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "tEvent",
        eventCategory: cat,
        eventAction: act,
        eventLabel: lab,
        eventValue: 0,
        eventInteractive: true,
      });
    },
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
