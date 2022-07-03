# discord-paste-links-without-embeds

Wraps URLs with angle brackets (&lt;https://example.com>) when pasting into discord to avoid link embeds

## 🐛 Bugs:

Please file bugs under the [Issues tab](https://github.com/Samathingamajig/discord-paste-links-without-embeds/issues).

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

## 🤔 Known Oddities:

- When pasting a link surrounded by some characters, the angle brackets won't be visible, but they're still there and prevent the embed.
- When pasting a message with a link already surrounded by angle brackets, more angle brackets will be added, resulting in the same visual as the source paste except the link will not be hyperlinked or embedded.
