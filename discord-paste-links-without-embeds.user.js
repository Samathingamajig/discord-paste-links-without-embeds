// ==UserScript==
// @name         Discord Paste Links without Embeds
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Wraps URLs with angle brackets (<https://example.com>) when pasting into discord to avoid link embeds
// @author       Samathingamajig
// @match        https://discord.com/channels/*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @grant        none
// ==/UserScript==

(async () => {
  "use strict";

  // Config for the script
  // NOTE: Changes are only re-evaluated when discord is completely refreshed
  const CONFIG = {
    replaceStandaloneLinks: true,
    replaceLinksInMessage: true,
  };

  if ([CONFIG.replaceStandaloneLinks, CONFIG.replaceLinksInMessage].every((bool) => bool === false)) return;

  const linkRegexBase = () =>
    /((?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?)/;
  const linkRegexSingle = () => new RegExp("^" + linkRegexBase().source + "$", "i");
  const linkRegexGlobal = () => new RegExp(linkRegexBase(), "gi");

  const pasteEventListener = (event) => {
    const paste = event.clipboardData?.getData("text");
    if (!paste || paste.length === 0) return;
    const oldGetData = event.clipboardData?.getData;
    const newGetData = (textReturn) => (format) => {
      switch (format.toLowerCase()) {
        case "test":
        case "text/plain":
          return textReturn;
        default:
          return oldGetData(format);
      }
    };

    const isLink = linkRegexSingle().test(paste);

    if (isLink && CONFIG.replaceStandaloneLinks) {
      event.clipboardData.getData = newGetData(`<${paste}>`);
    } else if (!isLink && CONFIG.replaceLinksInMessage) {
      event.clipboardData.getData = newGetData(paste.replaceAll(linkRegexGlobal(), "<$1>"));
    }
  };

  document.body.addEventListener("paste", pasteEventListener, true);
})();
