// ==UserScript==
// @name             显示防盗链图片 for Feedly
// @name:en          Display anti-hotlinking images For Feedly
// @version          0.1
// @namespace        https://github.com/maboloshi/UserScripts/
// @description      通过强制全站不发送 referrer， 实现显示防盗链图片
// @description:en   Display anti-hotlinking images, for forced not send a referrer.
// @match          http*://feedly.com/*
// @icon             http://www.feedly.com/favicon.ico
// @grant none
// ==/UserScript==
var meta = document.createElement('meta');
meta.name = "referrer";
meta.content = "no-referrer";
document.getElementsByTagName('head')[0].appendChild(meta);
