---
layout: post
author: Rob
categories: []
title: "How to compress a PDF with Image Magick"
tags: ['Image Magick']
---
The other day a colleague brought a large PDF to me and asked if I knew a way to compress the file size. Although there are a number of ways to compress a pdf document, one easy way can be performed through the command line using a program called Image Magick.
 
**How to Compress a PDF File:**

Syntax: `convert -density <size> -quality <percentage> -compress <type> <input-pdf> <output-pdf>`

Example: `convert -density 300 -quality 92 -compress jpeg original.pdf compressed.pdf`

In the example above, various options are used to compress the pdf in manner most people will be interested int. This includes; specifying the *density* which refers to the image resolution (72 dots per inch is the default), *quality* which ranges from 1 (lowest quality) to 100 (highest quality), and *compress* which defines what type of compression used. 

For a complete list of options, see the [Image Magick documentation](https://imagemagick.org/script/command-line-options.php).
