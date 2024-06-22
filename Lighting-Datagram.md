---
title: Lighting Datagram
description: 
published: true
date: 2024-06-22T22:24:52.162Z
tags: 
editor: markdown
dateCreated: 2024-06-21T17:46:56.078Z
---

# Header
Your content here

|Slot|Name|Value|Notes|
|:-:|:-:|:-:|:-:|
|Header||||
|0|Header 1|0x59|"Y"|
|1|Header 2|0x41|"A"|
|2|Header 3|0x52|"R"|
|3|Header 4|0x47|"G"|
|Information||||
|4|Datagram Version|0x00|Will be incremented when this protocol changes|
|5|Platform|byte|Unknown = 0, Windows = 1, Linux = 2, Mac = 3|
|6|Scene, pause, and venue size|byte|See below|
|Current Instrument Notes||||
|7|Guitar|byte|See below|
|8|Bass|byte|See below|
|9|Drums|byte|See below|
|10|Keys|byte|See below|
|11|Vocals|byte|?|
|Lighting Information||||
|12|Lighting Cue|byte|See below|
|13|Post Processing|byte|See below|
|14|Fog|byte|Off = 0, On = 1|
|15|Strobe|byte|See below|
|16|Performer|byte|See below|
|17|Beat|byte| Measure = 1, Strong = 2, Weak 3|
|18|Keyframe|byte|Next = 1, Previous = 2, First = 3|
|19|Bonus effects|byte| Triggered = 1|

## ⚠️ Performer Not Yet Implemented!
Sing-alongs
Spotlights
Camera Cuts

### Strobe
|Meaning| Value|
|-|-|-|
|Strobe Off|0|
|Strobe Slow|1|
|Strobe Medium|2|
|Strobe Fast|3|
|Strobe Fastest|4|

### Scene, pause, and venue size
|Meaning| Value| Bit|
|-|-|-|
|Menu|1|1|
|Gameplay|2|2|
|Score|4|3|
|Paused|8|4|
|Large venue|16|5|
Pause and Large Venue are only ever set during the Gameplay scene.

### 🐶 Cue Change Channel
This channel changes whenever a lighting cue is read from the Venue track of a song, load into the score screen, or load into the general menu.
NoCue is only briefly used when YARG first boots but hasn't loaded Menu Lighting yet.
| Meaning | Value|
|-|-|
|NoCue| 0|
|           Menu | 10|
|          Score | 20|
|         Intro | 30|
|        Verse | 40|
|       Chorus | 50|
|      Cool (Loop) | 60|
|     Warm (Loop) | 70|
|    Cool (Manual) | 80|
|   Warm (Manual) | 90|
|  Dischord | 100|
| Stomp | 110|
| Default | 120|
| Harmony | 130|
| Frenzy|  140|
| Silhouettes|  150|
| Silhouettes Spotlight| 160|
| Searchlights| 170|
| Sweep|  180|
| Blackout (Fast)|  190|
| Blackout (Slow)|  200|
| Blackout (Spotlight)|  210|
| Flare (Slow)|  220|
| Flare (Fast)|  230|
| Big Rock Ending|  240|

### 🐶 Post-Processing Channel
Post-processing is the visual effects that are happening to the on screen venue and characters.
| Meaning | Value|
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

### 🦮 Drum Channel
This channel tracks the currently playing drum notes. This is a bitmath channel! See notes below.
| Pad | Value|
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
| Meaning | Value|
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
| Fret | Value|
|-|-|
|None|0|
|   Open|1|
|   Green|2|
|   Red|4|
|  Yellow|8|
| Blue|16|
| Orange|32|

### 🦮 Keys Channel
This channel tracks the currently playing key notes. This is a bitmath channel! See notes below.
| Key | Value|
|-|-|
|None|0|
|   Green|2|
|   Red|4|
|  Yellow|8|
| Blue|16|
| Orange|32|