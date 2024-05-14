---
title: 🐕 DMX
description: 
published: true
date: 2024-05-14T19:03:18.630Z
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

### 🐶 Master Dimmer
Some DMX fixtures have a  channel  that controls the  dimming of all colors. These channels are set to On when YARG starts.
| Master Dimmer Channels| Value|
|-|-|
|0|Off|
|255|On|

### 🐶  Red Channels
There is 8 Red channels, representing each LED in the light array
| Red Channels| Value|
|-|-|
|0|Off|
|255|On|

### 🐶 Blue Channels
There is 8 Blue channels, representing each LED in the light array
| Blue Channels| Value|
|-|-|
|0|Off|
|255|On|

###  🐶  Green Channels
There is 8 Green channels, representing each LED in the light array
| Green Channels| Value|
|-|-|
|0|Off|
|255|On|

### 🐶 Yellow Channels
There is 8 Yellow channels, representing each LED in the light array
| Yellow Channels| Value|
|-|-|
|0|Off|
|255|On|

### 🐶  Fog Channel
Fog channel represents the fog machine of stage kit.
|Fog Channel| Value|
|-|-|
|0|Off|
|255|On|

### 🐶  Strobe Channel
Strobe channel represents the built-in strobe of the stage kit. In offical songs, only Slow and Fast are used.
|Strobe Channel| Value|
|-|-|
|0|Off|
|64|Slow|
|127|Medium|
|191|Fast|
|255|Fastest|

## Advanced channels
These channels provide additional information as to what YARG is doing, usseful  for DMX sequencers to make complex lighting effects.

|🐶 Cue Change Channel| Value|
|-|-|
|            NoCue| 0|
 |           Menu | 10|
  |          Score | 20|
   |         Intro | 30|
    |        Verse | 40|
     |       Chorus | 50|
      |      CoolLoop | 60|
       |     WarmLoop | 70|
        |    CoolManual | 80|
         |   WarmManual | 90|
          |  Dischord | 100|
           | Stomp | 110|
           | Default | 120|
           | Harmony | 130|
           | Frenzy|  140|
           | Silhouettes|  150|
           | SilhouettesSpotlight| 160|
           | Searchlights| 170|
           | Sweep|  180|
           | BlackoutFast|  190|
           | BlackoutSlow|  200|
           | BlackoutSpotlight|  210|
           | FlareSlow|  220|
           | FlareFast|  230|
           | BigRockEnding|  240|
.
|🐶 Post-Processing Channel| Value|
|-|-|
|0|Off|
|255|On|
.
|🐶 Keyframe Channel| Value|
|-|-|
|0|Off|
|255|On|
.
|🐶 BeatLine Channel| Value|
|-|-|
|0|Off|
|255|On|
.
|🐶 Bonus Effect Channel| Value|
|-|-|
|0|Off|
|255|On|
.
|🐶 Drum Channel| Value|
|-|-|
|0|Off|
|255|On|
.
|🐶 Guitar Channel| Value|
|-|-|
|0|Off|
|255|On|
.
|🐶 Bass Channel| Value|
|-|-|
|0|Off|
|255|On|
.
|🐶 Key Channel| Value|
|-|-|
|0|Off|
|255|On|
