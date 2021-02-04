---
layout: post
author: Rob
categories: []
tags: ['linux','symbolic links', 'ln']
title: "How to create symbolic links"
---
Occasionally you will need to make symbolic links to a file or directory in Linux. To create a symbolic link you will need to use the `ln` command, which will typically follow the format of `ln -s <target> <link name>`.

**Example:**

Assume you frequently use gnome-calculator and decide you want a link on your desktop so you can quickly start that application in the future. To accomplish this with a symbolic link you could do the following; `ln -s /usr/bin/gnome-calculator ~/Desktop/calculator`

You can also update an old symbolic link by overwriting the link using the following command; `ln -sf /usr/bin/gnome-calculator ~/Desktop/calculator` or when linking to directories you will need to include a `n` option. e.g. `ln -sfn /mydir/ mydirlinkname`

