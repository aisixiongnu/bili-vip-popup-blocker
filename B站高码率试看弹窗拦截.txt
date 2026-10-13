// ==UserScript==
// @name         B站高码率试看弹窗拦截
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  拦截高清画质试看结束后的充会员弹窗
// @match        https://www.bilibili.com/video/*
// @match        https://www.bilibili.com/bangumi/play/*
// @match        https://www.bilibili.com/medialist/play/*
// @icon           https://www.bilibili.com/favicon.ico
// @grant        none
// @run-at       document-start
// @license      MIT
// ==/UserScript==

 (function () {
     'use strict';

     // 双保险：会员中心不执行
     if (location.hostname === 'account.bilibili.com') return;

     // 仅在播放页生效
     const isVideoPage =
         location.hostname === 'www.bilibili.com' &&
         (
             location.pathname.startsWith('/video/') ||
             location.pathname.startsWith('/bangumi/play/') ||
             location.pathname.startsWith('/medialist/play/')
         );

     if (!isVideoPage) return;

     const SELECTOR = [
         '#BilibiliVipDialog',
         '#BiliBiliPayDialog',
         '.bili-pay-plugin-box'
     ].join(',');

     function removePopups(root) {
         if (!root) return;

         if (
             root.nodeType === Node.ELEMENT_NODE &&
             root.matches(SELECTOR)
         ) {
             root.remove();
             return;
         }

         if (typeof root.querySelectorAll === 'function') {
             root.querySelectorAll(SELECTOR).forEach(el => el.remove());
         }
     }

     const observer = new MutationObserver(mutations => {
         for (const mutation of mutations) {
             for (const node of mutation.addedNodes) {
                 removePopups(node);
             }
         }
     });

     function start() {
         const root = document.documentElement;
         if (!root) return false;

         observer.observe(root, {
             childList: true,
             subtree: true
         });

         removePopups(root);
         return true;
     }

     if (!start()) {
         const bootstrap = new MutationObserver(() => {
             if (start()) bootstrap.disconnect();
         });

         bootstrap.observe(document, {
             childList: true,
             subtree: true
         });
     }
 })();
