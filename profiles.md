---
title: 👤 Profiles
description: Information about User Profiles
published: true
date: 2025-01-25T21:10:11.751Z
tags: profile, customization, color, bots, binding
editor: markdown
dateCreated: 2023-07-31T16:54:45.414Z
---

A profile pairs a set of control binds with various preferences for how the game should look and play.

# 👤 Creating a Profile
To create a new profile, navigate to the Profiles menu and click the Add Profile button.
To rename and otherwise customize the profile, you must first Connect it, by clicking its Connect button.

The first time you Connect a new profile, the game will ask you to Add a Device - the controller you want the profile to use. You can change this later.

## Profile settings

### Game Mode
Which sort of play is this profile going to experience?  Current options are:

- Five Fret Guitar
- Standard Drums (covers 4-Lane and Pro)
- 5-Lane Drums
- Vocals

See [Play Modes](/play-modes) for more information.

### Note Speed
Change this parameter from the default value of 5.0 to change how fast notes approach on the highway.  For example: 10.0 is twice as fast as 5.0, while 2.5 would be half as fast.

### Track Length
Change this parameter from the default value of 1.0 to change the amount of time represented by the highway.  For example, a value of 2.0 doubles the time, while 0.5 cuts the time in half.

### Lefty Flip
When enabled, Lefty Flip mirrors the input display for Guitar and Drums gameplay. On guitars this will display the whole highway in right-to-left order. On drums, the lanes will retain their colors, but the note gems will have moved across the highway, and the Green Cymbal (if present) will become a Red Cymbal.

### Engine Preset
Select an existing Preset defining how the game should judge your performance. The default options are:
- Default
- Casual
- Precision

In addition to these presets, you can create and customize your own in the Settings menu. See [Engine](/Engine) for more information.

### Note Theme
Select a theme for how the notes and strike line to be styled. The options are:
- Rectangular
- Circular
- YARG on Fire

### Color Profile
Select a color scheme to apply to the notes and strike line. In addition to profiles designed for each of the Note Themes, you can create and customize your own in the Settings menu.

### Camera Preset
Select how you want the your highway presented on screen; its size, angle, and so on. The default options are:
- Default
- Circular
- High FOV
- The Band (1, 2, 3, or 4)
- Hero (2, 3, Traveling the World, or Live)
- Clone

In addition to these presets, you can create and customize your own in the Settings menu.  You cannot change the options in the built-in presets, but you can make a copy and then change the options.

### Input Calibration
Does this profile's controller require some extra latency compensation not already factored into your Audio Calibration? Specify how many milliseconds here.

### Add New Device
Lets you add new, additional controllers to the profile. Useful for if you want a separate device for navigating menus, or want to split your instrument's inputs across multiple devices.

### Remove Device
Lets you remove a controller from your profile.

# 🎸 Binding Instruments
There are two separate sets of binds for your profile: one specifically for navigating menus, and another for controlling gameplay of your chosen mode.
For any given command, you may bind multiple inputs to it. Each input can then be expanded to reveal options for tweaking how that specific input is handled. For simple commands, this includes Invert, Press Point, and Debounce. For analog commands, you can set the range and deadzone.

## Menu
These will cover much of your menu navigation, though some features may still demand a mouse and keyboard.<br>
Colors here correspond to on-screen prompts.

- Start (Pause)
- Select
- Green (Confirm)
- Red (Back)
- Yellow (Shortcut 1)
- Blue (Shortcut 2)
- Orange (Shortcut 3)
- Up
- Down
- Left
- Right

## Five Fret Guitar
Guitar gameplay requires you to hold down right Frets and then Strum at the right time.
In Lefty Flip, the frets will be presented Right to Left.
Colors here correspond to the Default color profile.

- Green Fret (First)
- Red Fret (Second)
- Yellow Fret (Third)
- Blue Fret (Fourth)
- Orange Fret (Fifth)
- Strum Up
- Strum Down
- Star Power
- Whammy

## Standard Drums
Drums requires you to hit the right drum at the right time. Regular 4-Lane lets you use Pads and Cymbals interchangably; Pro requires you to differentiate.
In Lefty Flip, the right-most Green Cymbal becomes the left-most Red Cymbal. Other binds are unchanged.
Colors here correspond to the Default color profile.

- Red Pad (First)
- Yellow Pad (Second)
- Blue Pad (Third)
- Green Pad (Fourth)
- Yellow Cymbal (Second)
- Blue Cymbal (Third)
- Green Cymbal (Fourth)
  - aka Red Cymbal (First)
- Kick Pedal

## 5-Lane Drums
Drums requires you to hit the right drum at the right time. 5-Lane gives each pad and cymbal its own lane.
Colors here correspond to the Default color profile.

- Red Pad (First)
- Yellow Cymbal (Second)
- Blue Pad (Third)
- Orange Cymbal (Fourth)
- Green Pad (Fifth)
- Kick Pedal

## Vocals
- Star Power Activate

# 🎨 Color Profiles
From the Presets section of the Settings menu, you can create a new Color Profile by copying an existing one to form its basis.
While the menu shows only one highway style at a time, the profile encompases settings for all three.
Each element to be colored has a hexadecimal color code and a separate opacity value. A color picker widget will let you manipulate a given color in terms of Red/Green/Blue or Hue/Saturation/Value.

## Five Fret Guitar
For each of the six note types (Open, Green, Red, Yellow, Blue, Orange), color elements exist for Fret, Fret Inner, Particles, Notes, and Star Power Notes.

## Four Lane Drums
For each of the five main note types (Kick, Red, Yellow, Blue, Green), color elements exist for Fret, Fret Innter, Particles, Drums, and Star Power Drums. Additional colors exist for the four colors of Cymbal  and Star Power Cymbals, plus one for Star Power Activation Notes.

## Five Lane Drums
For each of the six note types (Kick, Red, Yellow, Blue, Orange, Green), color elements exist for Fret, Fret Inner, Particles, Notes, and Star Power Notes, plus one for Star Power Activation Notes.

# 🤖 BOTs
A bot profile can be created using the Add Bot button. The bot can be renamed and configured just like any other profile - including presets for engine settings and appearance - but it has no controller, and no bindings.
When connected, a bot will play their part in the song without any human intervention. This can be helpful for testing custom charts, or for simulating full band gameplay without extra players/peripherals.
