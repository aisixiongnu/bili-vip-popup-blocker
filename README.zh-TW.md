# B站高碼率試看彈窗攔截

[简体中文](README.md) | [繁體中文](README.zh-TW.md) | [English](README.en.md)

這是一款適用於 Tampermonkey（篡改猴）的使用者腳本，用於攔截 Bilibili 指定播放頁面中高清畫質試看結束後出現的會員彈窗，減少觀看番劇時受到的干擾。

## 功能特色

- 自動移除符合指定選擇器的會員彈窗及相關容器。
- 僅在指定的 Bilibili 播放頁面執行。
- 不會在會員中心頁面執行攔截，盡量避免影響正常的會員續費流程。
- 使用 `MutationObserver` 監聽 DOM 變化，處理動態產生的彈窗。

## 適用範圍

目前腳本會匹配以下頁面：

- `https://www.bilibili.com/video/*`
- `https://www.bilibili.com/bangumi/play/*`
- `https://www.bilibili.com/medialist/play/*`

其他網域及未列出的頁面不在目前腳本的處理範圍內。

## 安裝方式

1. 在瀏覽器中安裝 [Tampermonkey（篡改猴）](https://www.tampermonkey.net/)。
2. 在篡改猴中建立新腳本。
3. 將本儲存庫中的使用者腳本程式碼複製到編輯器中並儲存。
4. 在篡改猴的「已安裝腳本」清單中啟用該腳本。

## 運作原理

腳本透過 `MutationObserver` 監聽網頁 DOM 的變化，並移除符合指定選擇器的彈窗元素。

目前主要處理以下元素：

- `#BilibiliVipDialog`
- `#BiliBiliPayDialog`
- `.bili-pay-plugin-box`

## 限制

- 本腳本僅針對目前已識別的彈窗結構編寫。Bilibili 更新頁面後，可能需要調整腳本。
- 不保證能攔截所有類型的會員提示，也不會解除伺服器端的會員權限或付費內容限制。
- 目前版本不處理試看頁面中會員引導按鈕的特殊放行邏輯。

## 版本資訊

- 目前版本：1.1
- 執行環境：支援 Tampermonkey 的現代瀏覽器
- 授權條款：[MIT License](LICENSE)

## 免責聲明

本專案為獨立開源專案，僅用於改善個人瀏覽體驗及研究前端 DOM 行為，不會修改帳號會員狀態、付款紀錄或伺服器端權限驗證。