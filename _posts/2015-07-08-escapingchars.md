---
layout: post
author: Rob
categories: []
tags: ['msdos','escaping characters']
title: "Escaping special characters in MS-DOS"
---
The other day I needed to make a batch file, and encountered the problem of having characters (specifically spaces and parentheses), which needed to be escaped in order for the batch file to run correctly in MS-DOS.

An example of this problem would be having the following line in a batch file:

**Non-Escaped Example:**

`C:\Program Files (x86)\Program\executableFile.exe`

This example would result in an error stating: `’C:\Program’ is not recognized as an internal or external command, operable program or batch file.`

This error is caused by multiple special characters which were not escaped. To solve this problem a ‘^’ should be placed before all characters which need to be escaped. See the corrected example below: 

**Escaped Example:**

`C:\Program^ Files^ ^(x86^)\Program\executableFile.exe`

