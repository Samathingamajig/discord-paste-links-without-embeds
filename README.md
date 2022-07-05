# discord-paste-links-without-embeds

Wraps URLs with angle brackets (&lt;https://example.com>) when pasting into discord to avoid link embeds

## 📜 Installation

- Install Tampermonkey from the [Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) (or [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/))
- After this, you have two options (only do one of these):
  - **GreasyFork** _(recommended)_: Go to the [GreasyFork page](https://greasyfork.org/en/scripts/447276-discord-paste-links-without-embeds) and click the green "Install this script" button. This will take you to a page on Tampermonkey where you need to click "Install" to install the script.
  - **GitHub/Manual install** _(not recommended)_: Go to the [raw script page](https://raw.githubusercontent.com/Samathingamajig/discord-paste-links-without-embeds/main/discord-paste-links-without-embeds.user.js). Tampermonkey will automatically detect this file as a userscript (since the file is named `*.user.js`), so click the "Install" button to install it. If it doesn't, copy the entire contents of the script into the Tampermonkey script editor (**make sure you save**).
  - If none of these work, look up how to install a Tampermonkey userscript.

## 🚫 Uninstallation

If you don't want to use this script anymore, you can uninstall it anytime.

- Navigate to the Tampermonkey dashboard (click the extension icon in the top right, then click "Dashboard" at the bottom of the popup)
- Click the trashcan on the right side of the page

## ⚙ Config:

There are a few settings you can configure:

```js
const CONFIG = {
  replaceStandaloneLinks: true, // will affect "https://stackoverflow.com", but not "check out https://stackoverflow.com"; can be true or false; default: true
  replaceLinksInMessage: true, // will affect "check out https://stackoverflow.com", but not "https://stackoverflow.com"; can be true or false; default: true
  linkRegexProvider: "discord", // discord doesn't parse links perfectly on the frontend; can be "discord" or "custom"; default: "discord"
  ignoreCaseInLink: true, // discord doesn't treat HTTPS as a valid link, unless you wrap in <>; can be false or true; default true
};
```

Note that "replaceStandaloneLinks" and "replaceLinksInMessage" are not mutually exclusive. When both are `true` (the default setting), links will be affected regardless of if they're the entire clipboard or inside of the clipboard.

To turn off one or both of these, replace `true` with `false`.

##### 📝 Note:

- Changes are only re-evaluated when discord is completely refreshed
- Configuration will be lost on update, if you have any ideas for how to persist this configuration, please let me know in the [Issues tab](https://github.com/Samathingamajig/discord-paste-links-without-embeds/issues).

## 🐛 Bugs:

Please file bugs under the [Issues tab](https://github.com/Samathingamajig/discord-paste-links-without-embeds/issues).

## 🤔 Known Oddities:

- When pasting a link surrounded by some characters, the angle brackets won't be visible, but they're still there and prevent the embed.
- When pasting a message with a link already surrounded by angle brackets, more angle brackets will be added, resulting in the same visual as the source paste except the link will not be hyperlinked or embedded.
