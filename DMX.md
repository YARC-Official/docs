---
title: 🐕 DMX
description: 
published: true
date: 2024-05-14T20:15:08.067Z
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

### 🐶 Cue Change Channel
This channel changes whenever a lighting cue is read from the Venue track of a song, load into the score screen, or load into the general menu.
NoCue is only briefly used when YARG first boots but hasn't loaded Menu Lighting yet.
| Cue Change Channel| Value|
|-|-|
|NoCue| 0|
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

### 🐶 Post-Processing Channel
Post-processing is the visual effects that are happening to the on screen venue and characters.
| Post-Processing Channel| Value|
|-|-|
|Default| 0|
|             Basic effects|
|           Bloom | 4|
|          Bright | 14|
|         Contrast | 24|
|        Mirror | 34|
|       Photo Negative | 44|
|      Posterize | 54|
|             Color filters/effects|
|           Black And White | 64|
|          Sepia Tone | 74|
|         Silver Tone | 84|
|        Choppy Black And White | 94|
|       Photo Negative Red And Black | 104|
|      Polarized Black And White | 114|
|     Polarized Red And Blue | 124|
|    Desaturated Red | 134|
|   Desaturated Blue | 144|
|  Contrast Red | 154|
| Contrast Green | 164|
|Contrast Blue | 174|
|             Grainy|
|           Grainy Film | 184|
|          Grainy Chromatic Abberation | 194|
|          Scanlines|
|        Scanlines | 204|
|       Scanlines Black And White | 214|
|      Scanlines Blue | 224|
|     Scanlines Security | 234|
|             Trails|
|           Trails | 244|
|          Trails Long | 252|
|         Trails Desaturated | 253|
|        Trails Flickery | 254|
|       Trails Spacey | 255|
### 🐕‍🦺 Keyframe channel
Keyframes are used to change the status of the current lighting cue and/or current animations, for example, once Stomp is set as the current cue, subsequent Next calls will toggle all lights (both in-game and on the stage kit) either on or off.
| Keyframe Channel| Value|
|-|-|
|0|Off|
|            Off | 0|
|           Keyframe Next | 3|
|          Keyframe Previous | 13|
|         Keyframe First | 23|
### 🐕‍🦺 Beatline channel
Every beat strong (major) or measure (minor) beat this  channel will be set.
| BeatLine Channel| Value|
|-|-|
|Off | 0|
|Measure | 1|
|Strong | 11|
### 🐕‍🦺 Bonus Effect channel
Bonus effects are instantaneous one-off stage effects, such as pyrotechnics or lightning
| Bonus Effect Channel| Value|
|-|-|
|0|Off|
|2|On|
### 🦮 Drum Channel
This channel tracks the currently playing drum notes. This is a bitmath channel! See notes below.
| Drum Channel| Value|
|-|-|
|None|0|
|        Kick|1|
|        RedDrum|2|
|       YellowDrum|4|
|      BlueDrum|8|
|     GreenDrum|16|
|        YellowCymbal|32|
|       BlueCymbal|64|
|      GreenCymbal|128|

### 🦮 Guitar Channel
This channel tracks the currently playing guitar notes. This is a bitmath channel! See notes below.
| Guitar Channel| Value|
|-|-|
|None|0|
|   Open|1|
|   Green|2|
|   Red|4|
|  Yellow|8|
| Blue|16|
| Orange|32|

### 🦮 Bass Channel
This channel tracks the currently playing bass notes. This is a bitmath channel! See notes below.
| Bass Channel| Value|
|-|-|
|None|0|
|   Open|1|
|   Green|2|
|   Red|4|
|  Yellow|8|
| Blue|16|
| Orange|32|
### 🦮 Key Channel
This channel tracks the currently playing key notes. This is a bitmath channel! See notes below.
| Key Channel| Value|
|-|-|
|None|0|
|   Green|2|
|   Red|4|
|  Yellow|8|
| Blue|16|
| Orange|32|

#### ⚠️ Bitmath
A bitmath channel sums up total of the frets currently hit and sets that as the value. For example, if a guitar chord is red/green/yellow then the value of the channel will be red (4) + green (2) + yellow (8) = 14. The problem with trying to read this value in a DMX sequencer like lightjams is that, for example, you want to see if a red is pressed, you would need check if the channel value is 4 or 6 or 14 or 20 or 36, etc etc. This ends up with a huge list of statements that is hard to maintain and change when needed.

Each channel is one byte, which is 8 bits. Each bit can be a 1(on) or 0(off). If we think about each bit as having a decimal value we can understand the following:
||
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|bit 8|bit 7|bit 6|bit 5|bit 4|bit 3|bit 2|bit 1|
|0|0|0|0|0|0|0|0|
|128|64|32|16|8|4|2|1|
so in the above example would be shown as:
||
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|bit 8|bit 7|bit 6|bit 5|bit 4|bit 3|bit 2|bit 1|
|0|0|0|0|1|1|1|0|
|128|64|32|16|8|4|2|1|
|n/a|n/a|Open|Blue|Yellow|Red|Green|Open|

So instead of checking the decimal total, we can check which bits are set. If bit 3 is ever 1 we know this value has the red fret pressed!

Please note that while humans start numbering things at 1, a computer will start numbering things at 0. Each program does things different so be sure to double check what your program does. You might see the bits numbered like this:

||
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
Computers call it:|bit 7|bit 6|bit 5|bit 4|bit 3|bit 2|bit 1|bit 0|
Humans call it: |bit 8|bit 7|bit 6|bit 5|bit 4|bit 3|bit 2|bit 1|
Bits:|0|0|0|0|1|1|1|0|
decimal value:|128|64|32|16|8|4|2|1|
guitar fret:|n/a|n/a|Open|Blue|Yellow|Red|Green|Open|

