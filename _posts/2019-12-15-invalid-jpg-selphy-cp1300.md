---
layout: post
author: Rob
categories: []
title: "Resolve invalid jpg file errors in a Selphy CP1300 photo printer"
tags: ['jpg','Color Profile','Canon Selphy CP1300','Image Magick']
---
Canon’s Selphy CP1300 printer is a great entry level photo printer but it requires images to be in a jpg file format that use the exif standard (see pg 22 of [manual](http://pdisp01.c-wss.com/gdl/WWUFORedirectTarget.do?id=MDMwMDAyNzUwMjAx&cmp=ABR&lang=EN)). Thankfully this is a common standard used by many digital camera but unfortunately if the file is edited or created without a camera, it may not work with the printer resulting in a big yellow question mark on the printer’s preview screen. 

I’ve investigated this problem, and noticed something interesting when comparing image metadata. Unlike valid jpg files, those not considered valid by the printer are missing or have an invalid colour profile. As a result, I've found setting a valid colour profile in the image metadata can resolve this problem. Note: I’ve only successfully used the colour profile sRGB with the Selphy CP1300, but other profiles may also work.

To set the colour profile of an image, you can use a variety of image manipulation tools. In this example I’m using the powerful open source software package [Image Magick](https://imagemagick.org/index.php).

Image Magick can easily add a colour profile to an image by using its convert command and specifying the colourspace. See example below. Note: This was run in a Linux environment, your millage may vary in other OS environments;

Syntax: `convert <input.jpg> -colorspace <color-profile> <output.jpg>`

Example: `convert original.jpg -colorspace sRGB updated.jpg`

Once the conversion is complete, the Selphy CP1300 printer should recognize the newly updated jpg file.
