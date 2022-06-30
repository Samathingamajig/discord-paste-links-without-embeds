# discord-paste-links-without-embeds
Wraps URLs with angle brackets (&lt;https://example.com>) when pasting into discord to avoid link embeds

## 🐛 Bugs:
Please file bugs under the [Issues tab](https://github.com/Samathingamajig/discord-paste-links-without-embeds/issues).

## ⚙ Config:
There are two settings you can configure:
```js
const CONFIG = {
  replaceStandaloneLinks: true, // will affect "https://stackoverflow.com", but not "check out https://stackoverflow.com"; default: true
  replaceLinksInMessage: true, // will affect "check out https://stackoverflow.com", but not "https://stackoverflow.com"; default: true
};
```

Note that these settings are not mutually exclusive. When both are `true` (the default setting), links will be affected regardless of if they're the entire clipboard or inside of the clipboard.

To turn off one or both of these, replace `true` with `false`. **NOTE:** Changes are only re-evaluated when discord is completely refreshed
