---
title: 🐕 DMX
description: 
published: true
date: 2024-05-14T18:25:36.268Z
tags: 
editor: markdown
dateCreated: 2024-05-14T18:13:08.409Z
---

# DMX
Digital multiplex with 512 pieces of information revision a, aka DMX512-A, is a protocol used to control lighting fixtures commonly found in theater and DJ equipment.

![3pinxlr.png](/dmx/3pinxlr.png =x300)![5pinxlr.png](/dmx/5pinxlr.png =x300)

DMX uses RS-485 serial communtions over 3 and 5 pin XLR connections to send and recieve the digital signals. Since a PC doesn't natively support these signals, YARG send DMX packets over a network connection using sACN to bundle the DMX data into a TCP/IP packet.

![fixtures.png](/dmx/fixtures.png =x300)

Then these sACN packets can be read by other devices and programs on the network as well as converters that can turn the packet back into raw DMX data, for the fixtures.

This flexiblity allows for unlimited possiblites in your YARG light shows!