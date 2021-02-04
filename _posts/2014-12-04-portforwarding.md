---
layout: post
author: Rob
categories: []
tags: ['linux','port forwarding']
title: "Local Port Forwarding"
---
Recently I needed to learn how to access a http work resource from my home computer. Being relatively new to ssh, I was completely unaware I could forward a port and access the required resource form my local home computer.

If you can ssh into your work server, you can perform local port forwarding using the following ssh command.

**Syntax:** `ssh <username>@<hostname> -L <localport>:<host>:<hostport>`

**Example:** `ssh foobar@example.org -L 8080:localhost:8057`

The above example, forwards localhost:8057 from my work server to my home computer's localhost:8080, giving me local access to a resource previously not accessible.

To learn more about local and remote port forwarding check out this [website](http://www.debianadmin.com/howto-use-ssh-local-and-remote-port-forwarding.html).
