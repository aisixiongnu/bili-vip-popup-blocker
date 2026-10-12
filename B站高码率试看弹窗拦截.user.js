// ==UserScript==
// @name          B站高码率试看弹窗拦截
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  自动检测并拦截高清画质试看结束后的充会员弹窗
// @match        https://*.bilibili.com/*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement('style');
    style.innerHTML = `
        .bili-pay-plugin-box,
        div[class*="bili-pay-plugin"] {
            display: none !important;
            pointer-events: none !important;
        }
    `;
    
    const injectStyle = () => {
        if (document.head) {
            document.head.appendChild(style);
        } else {
            setTimeout(injectStyle, 10);
        }
    };
    injectStyle();

    const observer = new MutationObserver((mutations) => {
        const popup = document.querySelector('.bili-pay-plugin-box');
        if (popup) {
            popup.remove(); 
        }
    });

    window.addEventListener('DOMContentLoaded', () => {
        if (document.body) {
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        }
    });
})();