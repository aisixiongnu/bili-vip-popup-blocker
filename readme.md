# B站高码率试看弹窗拦截

[简体中文](README.md) | [繁體中文](README.zh-TW.md) | [English](README.en.md)

一个 Tampermonkey（篡改猴）的用户脚本，用于拦截 Bilibili 指定播放页面中高清画质试看结束后出现的会员弹窗，减少看番时的干扰。

## 功能特性

- 自动移除符合指定选择器的大会员弹窗及相关容器。
- 仅在指定的 Bilibili 播放页面运行。
- 不对会员中心页面执行拦截操作，避免影响正常的会员续费流程。
- 使用 MutationObserver 监听 DOM 变化，处理动态生成的弹窗。

## 适用范围

当前脚本匹配以下页面：

- `https://www.bilibili.com/video/*`
- `https://www.bilibili.com/bangumi/play/*`
- `https://www.bilibili.com/medialist/play/*`

其他域名及未列出的页面不在当前脚本的处理范围内。

## 安装方法

1. 在浏览器中安装 [Tampermonkey（篡改猴）](https://www.tampermonkey.net/)。
2. 在篡改猴中创建一个新脚本。
3. 将本仓库中的用户脚本代码复制进去并保存。
4. 在“篡改猴 — 已安装脚本”中启用该脚本。

## 工作原理

脚本通过 `MutationObserver` 监听页面 DOM 变化，并移除符合指定选择器的弹窗元素。

当前主要处理以下元素：

- `#BilibiliVipDialog`
- `#BiliBiliPayDialog`
- `.bili-pay-plugin-box`

## 限制

- 本脚本仅针对当前识别到的弹窗结构编写。Bilibili 页面更新后，可能需要调整。
- 不保证能够拦截所有类型的会员提示，也不解除服务器端的会员权限或付费内容限制。
- 当前版本不处理试看页面中的会员引导按钮的特殊放行逻辑。

## 版本信息

- 当前版本：1.1
- 运行环境：支持 Tampermonkey 的现代浏览器
- 许可证：[MIT License](LICENSE)

## 免责声明

本项目为独立开源项目，仅用于改善个人浏览体验及研究前端 DOM 行为，不修改账号会员状态、支付记录或服务器端权限验证。