---
layout: post
author: Rob
categories: []
tags: ['Image Magick', 'pdf', 'convert']
title: "How to convert a pdf into an image file using ImageMagick"
---
The other day I needed to convert a pdf document into an image file using ImageMagick and here are a few things I learned. Note: The following conversion examples were performed in the Linux terminal but ImageMagick is not limited to a Linux OS.

**How to convert a single-page pdf into an image file:**

`convert file.pdf file.png`

**How to convert a multi-page pdf into multiple image files:**

`convert file.pdf file_pg_%d.png`

Note: The following command will output image files where the file names will following the pattern file_pg_#.png. e.g. file_pg_0.png, file_pg_1.png, etc.

**Additional options:**

* You can replace an alpha background with a white background using the parameters -background white and -alpha remove. e.g. `convert -background white -alpha remove file.pdf file.png`
* You can change the density of an image (i.e. specify the dots per inch value) using the -density parameter. e.g. `convert -density 300 file.pdf file.png`

Want to learn more about ImageMagick? Check out their site [here](https://www.imagemagick.org/).

