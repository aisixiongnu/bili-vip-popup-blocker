# Bilibili VIP Popup Blocker

[简体中文](README.md)| [繁體中文](README.zh-TW.md) | [English](README.en.md) 

A Tampermonkey userscript that removes supported membership popups appearing after high-quality preview playback ends on selected Bilibili playback pages, helping reduce interruptions while watching anime.
![B站高码率试看弹窗示例](bilibili%20Popup.jpg)

## Features

- Automatically removes membership popups and related containers matching specified CSS selectors.
- Runs only on selected Bilibili playback pages.
- Does not run on membership center pages, helping avoid interference with normal membership renewal.
- Uses `MutationObserver` to detect DOM changes and handle dynamically inserted popups.

## Supported Pages

The script currently matches the following URLs:

- `https://www.bilibili.com/video/*`
- `https://www.bilibili.com/bangumi/play/*`
- `https://www.bilibili.com/medialist/play/*`

Other domains and pages not listed above are outside the script's current scope.

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) in your browser.
2. Create a new userscript in Tampermonkey.
3. Copy the userscript code from this repository into the editor and save it.
4. Enable the script in Tampermonkey's installed scripts list.

## How It Works

The script uses `MutationObserver` to monitor DOM changes and removes popup elements matching the specified CSS selectors.

The current selectors are:

- `#BilibiliVipDialog`
- `#BiliBiliPayDialog`
- `.bili-pay-plugin-box`

## Limitations

- The script targets currently identified popup structures. Updates to Bilibili may require changes to the selectors or implementation.
- It does not guarantee that every membership notice can be removed, and it does not bypass server-side membership checks or paid-content restrictions.
- The current version does not implement special exceptions for membership promotion buttons on preview pages.

## Version Information

- Current version: 1.1
- Environment: Modern browsers that support Tampermonkey
- License: [MIT License](LICENSE)

## Disclaimer

This is an independent open-source project intended to improve personal browsing experience and explore front-end DOM behavior. It does not modify account membership status, payment records, or server-side authorization checks.