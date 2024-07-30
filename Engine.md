---
title: ⚙️ Engine
description: Information about YARG default engines
published: true
date: 2024-07-30T19:58:28.288Z
tags: 
editor: markdown
dateCreated: 2023-07-30T03:59:19.435Z
---

YARG features a customizable engine, allowing players to customize the engine to their liking. These are done via Engine Presets, where the engine settings can be customized.

# 🔧 Settings
## 👻 Anti-Ghosting
This setting applies to HO/POs and tap notes.
If enabled, HOPO/tap notes are disabled if the player presses an incorrect fret. Those notes can still be strummed, however.
Pressing a fret that is below a currently held one (i.e. pressing Green while holding Red) does **not** count as ghosting, and is allowed.
If disabled, the player can press whatever they want, and as long as they eventually hit the correct fret within the hit window, the note will be hit.

## ♾ Infinite Front-End
If enabled, HOPOs and Taps can be fretted before they enter the hit window, and will be scored as they enter it.
If disabled, HOPOs and Taps can only be fretted while they are already within the hit window.

## 🔃 HOPO Leniency
This setting dictates the amount of time during which a HOPO note is allowed to take a strum input. Strum inside this window, and the strum is consumed; strum outside this window and you'll overstrum, breaking your combo.

## 🔀 Strum Leniency
Defines the grace-period wherein a strum can preceed fretting the correct note. Fretting within this window will score the note, fretting outside of the window will cause an overstrum and break your combo.

## 🔜 Strum Leniency (No Notes)
The amount of time a note can be strummed before it enters the hit window and it still receive the strum. Strumming earlier than this will cause an overstrum.

## 🎯 Dynamic Hit Window
If disabled, the hit window size will always be the same (140ms in the Default preset).
If enabled, the hit window will start at its maximum size (130ms in the Precision preset), but will shrink depending on the distance between the notes, up to a minimum value (40ms in the Precision preset).
It is possible to edit the value of the hit window size, maximum hit window size and minimum hit window size.

## 👥 Crowd Meter
Not yet implemented.

# 📊 Engine Presets
Engine presets are a collection of settings that allows the player to customize the engine to their liking. Players can easily share presets with each other by using the Import/Export function.
Three default presets are included:

## 🌐 Default
Aimed at the average player, this requires the player to be relatively accurate and have a clean playstyle, while not being overly strict.

| Parameter    | Value | Instruments |
| -------- | :-------: | :-------: |
| **Anti-Ghosting** | ✅ | 5-Fret |
| **Infinite Front-End** | ❌ | 5-Fret |
| **HOPO Leniency** | 80ms | 5-Fret |
| **Strum Leniency** | 50ms | 5-Fret |
| **Strum Leniency (no notes)** | 25ms| 5-Fret |
| **Dynamic Hit Window** | ❌ | All |
| **Hit Window Size** | 140ms | All |

## 🔰 Casual
Aimed at players who play for fun rather than for the challenge, or players who are used to more lenient engines found in other games.

| Parameter    | Value | Instruments |
| -------- | :-------: | :-------: |
| **Anti-Ghosting** | ❌ | 5-Fret |
| **Infinite Front-End** | ✅ | 5-Fret |
| **HOPO Leniency** | 80ms | 5-Fret |
| **Strum Leniency** | 70ms | 5-Fret |
| **Strum Leniency (no notes)** | 35ms| 5-Fret |
| **Dynamic Hit Window** | ❌ | All |
| **Hit Window Size** | 140ms | All |

## 💎 Precision
Aimed at hardcore players who want a greater challenge, and/or thrive on strict engines.

| Parameter    | Value | Instruments |
| -------- | :-------: | :-------: |
| **Anti-Ghosting** | ✅ | 5-Fret |
| **Infinite Front-End** | ❌ | 5-Fret |
| **HOPO Leniency** | 80ms | 5-Fret |
| **Strum Leniency** | 40ms | 5-Fret |
| **Strum Leniency (no notes)** | 20ms| 5-Fret |
| **Dynamic Hit Window** | ✅ | All |
| **Hit Window Max Size** | 130ms | All |
| **Hit Window Min Size** | 40ms | All |

##  🆕 Creating new presets
You cannot edit existing presets, but you can copy them by hitting the COPY button in Settings > Customization tab.
This will create a copy of the selected engine preset, and will show the values on screen, which you can edit.
Values are different per game mode.
Values are saved automatically upon exiting the settings screen.

## 📁 Importing/Exporting Presets
The action of importing/exporting engine presets is found in the Settings > Customization tab.

To export an engine preset, click the Export button.
That action will open a window asking where you want to save the file.
The file is a `.preset` file, which you can share around with other players.

To import an existing `.preset` file, click the Import button.
That action will open a window asking which file you want to load.
Upon selecting the correct file, the preset will be imported, with all of its values.

# 📈 Scoring
These are in a separate category because they aren't editable, unlike the other engine settings.

## 💯 Points
Each note awards 50 points, except for Pro Drums, where each notes award 60 points.
Sustains award 25 points per beat.
Scoring in vocals works differently, on a per-phrase basis.
Every 10 notes hit in a row (or 1 vocal phrase hit with AWESOME rating), a multiplier will increase (up to 4× in most instruments, 6× in bass), which affects the points given by notes/phrases.
Missing or overstrumming resets the multiplier to 1x. In the case of vocals, getting any rating below AWESOME on a phrase resets the multiplier to 1×.

## ⭐ Stars
Stars are calculated based on the base score - for instance, a threshold of 2 means the player must reach 2x the amount of the base score to reach that star threshold.
The base score is 50 points for each note (or 60 for Pro Drums), and for sustains, 25 points per beat.
Base score calculation for vocals is done differently.

| Stars    | Guitar | Bass | Drums | Vocals |
| :--------: | :-------: | :-------: | :-------: | :-------: |
| ★☆☆☆☆ | 0.21 | 0.21 | 0.21 | 0.21 |
| ★★☆☆☆ | 0.46 | 0.50 | 0.46 | 0.46 |
| ★★★☆☆ | 0.77 | 0.90 | 0.77 | 0.77 |
| ★★★★☆ | 1.85 | 2.77 | 1.85 | 1.85 |
| ★★★★★ | 3.08 | 4.62 | 3.08 | 3.08 |
| ⭐⭐⭐⭐⭐ | 4.52 | 6.78 | 4.29 | 4.18 |