---
title: Lighting Datagram
description: 
published: true
date: 2024-06-21T18:30:58.656Z
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
|4|Datagram Version|0x00|This should be incremented when this protocol changes|
|5|Packet type|0x00|No other packet types at the current time |
|6|Packet size|byte|Calculated|
|7|Platform|byte|Windows = 0x01, Linux = 0x02, Mac = 0x04|
|8|Scene, pause, and venue size|byte|See LINK|
|Current Instrument Notes||||
|9|Guitar|byte|See LINK|
|10|Bass|byte|See LINK|
|11|Drums|byte|See LINK|
|12|Keys|byte|See LINK|
|13|Vocals|byte|See LINK|
|Lighting Information||||
|14|Lighting Cue|byte|See LINK|
|15|Post Processing|byte|See LINK|
|16|Fog and Strobe|byte|See Link|
|17|Performer|byte|See Link|
|18|Beat|byte| Strong = 0x01, Measure = 0x02|