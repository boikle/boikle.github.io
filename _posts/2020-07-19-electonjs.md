---
layout: post
author: Bob
categories: []
tags: ['electron.js','tips','application','app']
title: "Tips for getting started with Electron.js"
---
Tips For Getting Started With Electron.js

I recently tried Electron.js, and am writing this post to share my thoughts and any useful resources that I encountered that would be good for those starting out with the framework.

For those who aren't familiar with [Electron.js](https://electronjs.org/), it’s a framework which lets you build cross-platform desktop applications using web technologies like JavaScript, HTML and CSS. The framework has been utilized in many well popular projects (e.g. Atom, Slack, Visual Studio Code, etc), and since I frequently code in JavaScript at work, I thought I’d try my hand at Electron.js by creating a simple [countdown timer application](https://github.com/boikle/electron-countdown-timer).

![Countdown Timer](https://github.com/boikle/electron-countdown-timer/blob/master/screenshot/screenshot.png)

When starting fresh with any framework/library, there is always a period of exploration. Some things come easy and others require you to dig deeper, in order to better understand why something is or isn't working. Although Electron was pretty easy to get started with, I've included some bullet points below on some of my initial thoughts on the framework.

* Since Electron is built on web technology the barrier to entry is small if you’re familiar with HTML, CSS, and JS. Applications are easy to build, and can use popular JavaScript libraries that are common in web development.
* Very little code is needed to make a simple app. See first app tutorial in the resources below for an example.
* Flexibility to organize your code the way you want. If you have a specific way of organizing your source code and assets that works well for you in web development. You can likely use it in your Electron.js app. If you take a look at other electron apps, you will often see variation between their structure, and often boiler plate code is helping to define their file structure they've chosen.
* Cross-Platform technology. Although I work mostly in a Linux environment, this is nice bonus for those who make apps for different platforms.
* Understanding the differences between the Main and Renderer Processes can require some time to review if you’re new to Electron. In Electron, you have your main entry point for your application, which is your Main process when the app is run. All of the other browser windows in your app are Renderer processes. Often you will want to communicate between these two processes which can be performed using the inter process communication (IPC). I would recommend anyone whose new to Electron.js to review the API and see how responsibilities are divided between IPCMain and IPCRenderer. Otherwise you may try to do something incorrect like trying to open a dialog window with the IPCRenderer like I did before I took the time to review those modules. 
* Packaged applications are huge, because of the bundled code needed to run your app. For example, the countdown timer app I made, is well under 1mb in size (source directory is 64kb), but when I use the electron-packager to package my application, it was 192mb in size! This could be a deterrent for anyone wanting to make small applications. 

*Resources:*

* https://www.electronjs.org/docs/tutorial/first-app – Official documentation on how to create a single window application with Electron.js. Definitely start with this resource if you’re new.
* https://www.electronjs.org/docs/api – Official API Documentation. Go to resources when you’ve got the basics.
* https://www.youtube.com/watch?v=2RxHQoiDctI – Great YouTube video which walks you through the creation of a multi-window application, which includes covering how to create application windows, communicate between different windows, and system notifications.
* https://www.brainbell.com/javascript/ipc-communication.html – Great blog post explaining Inter Process Communication between the Main and Renderer processes.
* https://www.christianengvall.se/electron-packager-tutorial/ - Great tutorial on packaging your code for Windows, MacOS, and Linux.
