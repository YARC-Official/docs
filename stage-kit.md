---
title: 💡 Stage Kit
description: Information about the Stage Kit hardware
published: true
date: 2024-12-21T04:04:36.535Z
tags: 
editor: markdown
dateCreated: 2024-06-06T00:19:52.182Z
---

# Rock Band Stage kit
![stagekit.png](/stagekit/stagekit.png)
	The Rock Band Stage Kit was a licensed peripheral made by PDP (formerly known as Pelican Accessories) released on November 11, 2008 for the xbox 360. 
Consisting of a fogger, strobe light, and a colored led array consisting of 32 leds (8 of each red, yellow, blue, and green), it reads the light data of the in-game venue and translates that to real world effects. It supported Rock Band 1, Rock Band 2, and Rock Band 3 on xbox only.

YARG has added support for the Stage Kit and aftermarket Light Shows like the one from FatsCo.

## Venue Size
Venues themsevles are either "large" or "small". Some cues have different lighting patterns for each size.
## Venue Cues
Many songs have a 'venue' track which sets the current state of the fog machine, light array, and strobe machine. If the song is missing its venue track, YARG will automatically generate one for it at play time.

### Fog Machine cues
|name|description|
|:-:|:-|
|Off| No fog|
|On| Sprays fog|

### Strobe Light cues
|name|description|
|:-:|:-|
|Off| No strobe|
|Slow|Strobe light that blinks every 16th note/120 ticks.|
|Medium|Strobe light that blinks every 24th note/90 ticks.*|
|Fast|Strobe light that blinks every 32nd note/60 ticks.|
|Fastest|Strobe light that blinks every 40th note/30 ticks.*|
*Unconfirmed
### Light array cues
|name|description|
|:-:|:-|
|Cool|2 blue and 1 green, rotating.|
|Warm|2 red and 1 yellow, rotating.|
|Dischord| All red on drum red pad, 1 yellow on beat, alternating blue pattern, and rotating green.|
|Stomp| Flashes all colors.|
|Default| Red and blue rings alternating.|
|harmony| 2 blue and 1 green rotating on beat.|
|frenzy| Quickly alternating all colors.|
|silhouettes| Green ring.|
|silhouettes spotlight| Toggles previous call.|
|searchlights| 2 leds rotating together on beat.|
|sweep| Alternate colors of searchlights.|  
|blackout| Turn everything off.|
|flare (slow)|All LEDS on.|
|flare (fast)|All blue LEDS on.|
|Big rock ending| Quickly turn on and alternate every color and led|
|Score card|2 yellow and a blue, timed rotation|
|Menu|1 blue, timed rotation.|