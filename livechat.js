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
