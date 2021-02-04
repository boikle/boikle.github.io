---
layout: post
author: Rob
categories: []
tags: ['ArcMap','hillshades','tinting']
title: "Tinting Your Hillshade in ArcMap"
---
I want to share a tutorial that I read on tinting a hillshade in ArcMap. The tutorial is available at the following [ESRI Blog post](http://blogs.esri.com/esri/arcgis/2012/03/08/an-alternative-to-overlaying-layer-tints-on-hillshades/). I've used this technique in the past, and it's a great way to keep your base map crisp and colourful [crisp example](http://downloads2.esri.com/MappingCenter2007/blog/Mar12Images/PS2_UsingFunctions.png), instead of the typical dull appearance produced when a semi-transparent DEM layer is placed over a hillshade [dull example](http://downloads2.esri.com/MappingCenter2007/blog/Mar12Images/PS2_OverlayWithTransparency.png).

The tutorial uses pansharpening to fuse a hillshade raster with a DEM that has had a colour ramp applied to it and broken in to RGB layers. It may take a few attempts to get the final result you want, but the result is an excellent way to make your base layer really stand out. Give it a try, you may be surprised how much your hillshade's appearance is improved.
