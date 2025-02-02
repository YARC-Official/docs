---
title: Troubleshooting instruments
description: Tips and tricks to get your controllers working!
published: true
date: 2025-02-02T13:19:10.974Z
tags: instruments, troubleshooting
editor: markdown
dateCreated: 2025-01-07T20:23:14.531Z
---

# Instrument Troubleshooting
## Adapters

Cheap PS2 adapters on Amazon are hit-or-miss.

❗Windows: X360 wireless adapters are often missing drivers.  You may be able to use the drivers built-in to Windows 10 and 11.  From Device Manager:
1. Right-click and **Update Driver**
2. Select **Let me pick from a list of available drivers on my computer**
3. Select **Xbox 360 Wireless Receiver for Windows** and then **Next**
4. You may need to reboot for the drivers to take effect.

## Guitars

PS3 Les Paul often has a capacitor issue that prevents it from syncing.
PS2 wireless have bad input latency.
PS3 Les Pauls have bad input latency.
The Jaguar will need a firmware update. <a href="https://harmonix.zendesk.com/hc/en-us/articles/115004839308-MANDATORY-Xbox-One-Jaguar-guitar-controller-firmware-update">See this link</a>
If you are using a gamepad instead of a guitar, make sure you turn on the **All Taps** modifier.

## Microphones

Since USB microphones are just input devices instead of being controllers, nearly all will work. If your computer detects it normally, you are ready to rock! However, if a microphone needs a speical driver that has to be installed before it will work, such as the Lips mics, it won't work with YARG.

❗Windows: If you are experiencing echo, make sure *Audio enhancements* are turned off.  Outside of YARG, check Windows' System / Sound / Properties / Microphone, and under Input settings, make sure *Audio enhancements* is set to **Off** instead of the default *Device Default Effects*.

❗Mac: YARG might not ask for mic access. Launch the .app manually instead of going through the launcher


## Drums

❗E-kit not being detected  
Make sure you have the [Microsoft Visual C++ redistributables](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170) installed.
Make sure nothing else is open that is also using the e-kit. Windows only allows one program to access a MIDI device at a time.  
Make sure you hit something on the kit before hitting "Add Device"; the list doesn't refresh automatically.

❗Extra triggers breaking combo
Some lower budget e-kits have issues with occasional extra triggers.  In YARG's Bindings menu, you can pull down each input pad and access a more detailed menu with options for Debounce and Threshold that may help.

**Roland-specific troubleshooting**
❗Open/closed hi-hat
Most Roland kits allow mapping open and closed hi-hat to different MIDI notes.  Look for something like this in the documentation - for example, [TD-27](https://static.roland.com/assets/media/pdf/TD-27_Data_List_eng04_W.pdf):
*MIDI note numbers transmitted and received by the hi-hat
HI-HAT OPEN <BOW|EDGE>  Midi number transmitted and received by open hi-hat (bow, edge)
HI-HAT CLOSE <BOW|EDGE>  Midi number transmitted and received by closed hi-hat (bow, edge)*

❗Extra trigger when releasing hi-hat pedal
Higher end Roland kits support Foot Splash, where releasing the hi-hat pedal will cause an extra hi-hat trigger.  You can avoid this by reducing the *Foot Splash Sens* parameter.
