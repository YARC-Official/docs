---
title: 🐕 DMX
description: 
published: true
date: 2024-05-14T18:50:00.849Z
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

# DMX Channels
Each of the  512 bytes, known  as channels,  in a DMX  packets  can hold a value from 0 to 255. YARG  will  set these values to indciate  various changes as follows:
|Channel Type Ledgend|||
|-|-|-|
|🐶| Toggled| This channel will stay set at this value until set to another value|
|🦮| Note length| This channel will stay at this value until the note  ends, then set to 0
|🐕‍🦺| Triggered| This channel will stay at this value for exactly one DMX packet, then set to 0
## Basic channels
Basic channels replicate the Rock Bane Stage  Kit.

Some DMX fixtures have a  channel  that controls the  dimming of all colors. These channels are set to On when YARG starts.
|🐶 Master Dimmer Channels| Value|
|-|-|
|0|Off|
|255|On|
There is 8 Red channels, representing each LED in the light array
|🐶 Red Channels| Value|
|-|-|
|0|Off|
|255|On|
There is 8 Blue channels, representing each LED in the light array
|🐶 Blue Channels| Value|
|-|-|
|0|Off|
|255|On|
There is 8 Green channels, representing each LED in the light array
|🐶 Green Channels| Value|
|-|-|
|0|Off|
|255|On|
There is 8 Yellow channels, representing each LED in the light array
|🐶 Yellow Channels| Value|
|-|-|
|0|Off|
|255|On|
Fog channel represents the fog machine of stage kit.
|🐶 Fog Channel| Value|
|-|-|
|0|Off|
|255|On|

Strobe channel represents the built-in strobe of the stage kit.
|🐶 Strobe Channel| Value|
|-|-|
|0|Off|
|64|Slow|
|127|Medium|
|191|Fast|
|255|Fastest|

## Advanced channels
