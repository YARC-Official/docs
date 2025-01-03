---
title: 💡 Stage Kit
description: Information about the Stage Kit hardware
published: true
date: 2025-01-03T23:51:47.036Z
tags: 
editor: markdown
dateCreated: 2024-06-06T00:19:52.182Z
---

# Rock Band Stage kit
![stagekit.png](/stagekit/stagekit.png)
	The Rock Band Stage Kit was a licensed peripheral made by PDP (formerly known as Pelican Accessories) released on November 11, 2008 for the xbox 360. 
Consisting of a fogger, strobe light, and a light array, it reads the light data of the in-game venue and translates that to real world effects. It supported Rock Band 1, Rock Band 2, and Rock Band 3 on xbox only.

YARG has added support for the Stage Kit and aftermarket Light Shows like the one from FatsCo.
## Light Array
The led light array consists of 32 single color clear 5mm leds. Eight of each color, red, yellow, blue, and green in the following pattern:
![alllights.png](/stagekit/alllights.png)
## Venue Size
Venues themsevles are either "large" or "small". Some cues have different lighting patterns for each size.
## Venue Cues
Many songs have a 'venue' track which sets the current state of the fog machine, light array, and strobe machine. If the song is missing its venue track, YARG will automatically generate one for it at play time.

### Fog Machine cues
|name|description|
|:-:|:-|
|Off|No fog.|
|On|Sprays fog.|

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
## F.A.Q
❓I don't have the fog machine, can I use just the light pod?
Yes, but you need to power it somehow. Get a ps/2 to usb adapter, a usb cord, and a power brick. Connect it all together into the light pod to give it power.

❓My strobe doesn't seem to be working?
First, test with a song that starts with a strobe, such as RB2 Painkiller.
If that works it is one of three problems with the songs:
1) The song doesn't have any strobe effects. Not all songs do.
Sometimes the strobe just isn't the right fit!
2) The song doesn't have a venue track at all which happens with most custom songs.
YARG will automatically generate a light show for songs which do not have a venue track. It changes on section change and tends to be more sedate than authored venue tracks. Fog will turn on every 8 measures. Strobe is NOT auto-generated.
3) The song had its venue track stripped out.
The dlc format xbox uses is a Con file which package together the files a song chart needs. One file the charts need is the midi file. In RB1 and RB2, plus all their dlc, the Venue track is within the .mid. When RB3 came out they moved some data (including the Venue track) from the midi file to its own file, called a milo, within the con. When people converted these that extra data was lost, which is why song_updates exists to put it back. The Rock Band Network songs have a venue track in the midi, but they tend to use Magma's auto-generated venue track. RB4 con files are the same as RB3.


