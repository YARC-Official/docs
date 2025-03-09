---
title: 📖 Glossary
description: Some common terms and what they mean
published: true
date: 2025-03-09T17:08:23.630Z
tags: 
editor: markdown
dateCreated: 2024-05-12T21:41:56.593Z
---

# ▶ General Gameplay terms
Terms and conventions common to YARG and other rhythm games

##  💎 Notes/Gems
The colorful blips which represent a part of the song you're meant to 'play' with your guitar, drums or keyboard.

## 🛣 Highway
A vertically-scrolling path the game's notes follow, with distinct lanes for different colors of note.
Some games present their highways as a flat 2d element, but YARG - like the Heros, Bands, and Clones before it - generally applies a perspective, with the notes coming towards you from inside the screen.

## 🌈 Lanes
Typically, one lane carries the notes associated with one color or position on the instrument.
A five-fret guitar highway has five lanes, one for each fret button. Open notes don't get a lane, spanning the highway instead.
A four-lane drum highway has four lanes, one for each pad. Cymbals share a lane with their same-colored pads, and kicks span the highway.
A five-lane drum highway has five lanes, one for each pad or cymbal. Kicks span the highway.

## 🆗 Hit Window
The range wherein notes can be successfully played. Can be conceptualized both temporally (how many milliseconds of leniency there is from the correct instant) and visually (how much space ahead of or behind the Strike Line can a note be played).

## 🔛 Strike line
The point where notes are meant to be played. Commonly at the center of the Hit Window. Visually, often also indicates which inputs are currently being hit, which can be helpful for verifying your controls work and that your hand is positioned where you expect.

## 🔢 Phrase
A region of time and the notes within it. Can be used to refer to Star Power phrases which grant Star Power when performed well, or to the periods of time by which YARG scores vocal/harmony players.

## 📈 Combo
Playing a series of notes correctly. Many rhythm games will reward combos with improved scores. YARG does this by increasing your score multiplier as your combo grows; by 1 for each perfect phrase on vocals, or for each 10 consecutive notes on typical instruments. If you break your combo - typically by missing a note or playing something unintended, like an overstrum - you'll drop back down to a 1× multipler.

## ④ Multiplier
A factor by which the points you score will be multiplied. In YARG your multiplier is an integer, and will typically range from 1× to 4× (or 6× on Bass) if your Star Power is not currently active.

## 🔥 Hot Start, 🏋️‍♀️ Strong Finish
YARG displays Hot Start if you play the first 30 notes of the song without missing a note or otherwise breaking your combo.
Similarly, Strong Finish signifies completing the song with your maximum multiplier active.

## 🌟 Star Power (aka Overdrive)
Star Power (SP) is both a resource - Star Power energy - and application of that resource. You gain SP energy by successfully playing special Star Power phrases. When your SP energy is at least 50% full, you can Activate your Star Power - the energy will begin to drain, and your score multiplier will be double what it otherwise would be, until your SP energy runs out.
Star Power and Overdrive both refer to these same elements, having originated from different games. Both terms can be used interchangably.

## 🎼 Stems
Songs with Stems have multiple audio streams, separating different instruments/parts out from one-another. These stems allow the game to apply different volume levels, effects and muting, depending on how the players are performing.
Because all the audio streams start and end at the same time, games using Stem-based audio have an easier time compensating for latency, as all of the audio can be shifted in time by a static amount to account for the delay.
Not to be confused with Keysounds, which is another technique rhythm games use for dynamic audio.

## 🔊 Keysounds
Similar to Stems, Keysounds are a device used by some rhythm games, whereby the sounds of your instrument are actually triggered by your playing of it. This goes beyond the simple muting effect allowed by Stems, in that the timing of the sound follows the timing of your play - if you play a note early, that sound plays early. Play it late? It plays late. Some games will even track when you play a wrong note, and play a sound that belongs to the input you made.
Compared to Stems, Keysounds have some advantages and disadvantages. Keysounds allow the audio to be much more dynamic and respond to the user's play, which in some games may lend to an element of improvisation. However, that same dynamism can also make it more difficult for the player to recognize when their timing is a little off, as they hear what they're playing, not what they're *meant* to play. It's also much more difficult to account for latency with keysounds, as the game has little opportunity to meaningfully anticipate the player's actions, so Keysounds can end up sounding out of time in high-latency setups.
YARG does not presently support song formats utilizing Keysounds.

## 🔴 Intensity
An approximation of how much effort a player will have to exert to play a particular instrument's part in a given song. Often represented as a series of filled circles, or in YARG as a set of segments surrounding the part's icon. The color of the circles/segments can also differ, to signify greater scales of intensity.

## 📊 Chart, aka Note Chart
The sequence of notes for one instrument on one difficulty on one song. Alternatively, could refer to multiple difficulties for multiple instruments for one song, collected in a single .mid, .chart, or con file.
As a verb, charting refers to the act of creating a chart. Decisions about how to represent various aspects of the song contribute to how it's charted.

## 📶 Difficulty tiers
YARG supports several different charts for each instrument on a given song. The [official setlist](/songs/Setlist) will include most of these; custom songs (including ones from YARN) may contain a subset.

- Easy
- Medium
- Hard
- Expert
- Expert+

By convention, 5-Fret Guitar/Bass charts will typically limit Easy charts to the first three frets, Medium charts to the first four, and Hard/Expert can use all five frets.
Expert+ is only for drum charts, being generally the same as the Expert chart, with the addition of double-bass kick notes.

## 👨‍👩‍👧‍👦 Full Band play
Playing with 3+ players, covering Guitar, Bass, Drums, Vocals, and potentially other supported play modes.

## 💥 Big Rock Ending (BREs)
a Big Rock Ending is a section near the end of the song where charted notes are irrelevant, and players are instead encouraged to wail on their instruments as much as they can for bonus points. Often there can be several final, proper notes placed *after* the BRE comcludes, so be prepared to play them.
BRE support is planned for YARG version 0.14.0

## 🎓 Pro, Elite
Instruments with the Pro prefix are generally intended to better represent really playing that instrument. In YARG, Pro Drums expands 4-lane play with the additon of three cymbals, Pro Guitar ditches the 5 buttons and strum bar for an entire fretboard and six strings, and Pro Keys sees you using a whole two-octive keyboard.
The planned Elite Drums mode is set to further expand upon Pro Drums.
Pro Guitar and Pro Keys are planned for YARG 0.13.0. Elite Drums is planned for 0.14.0.

## 💫 Unison
A Star Power phrase happening simultaneously across multiple instruments may be marked as a Unison phrase. If everyone plays this phrase correctly, additional SP energy will be awarded.
Unison phrases are planned for YARG 0.13.0

## 🚂 Engine
The engine is the code and parameters dictating how the game judges your performance. Different games - even one from within the same series - can use significantly different criteria for successful play.
YARG's system of Engine Presets let you customize its judgement criteria to a certain degree, including general settings for how wide to make the hit-window, and guitar-specific settings like anti-ghosting, infinite front-end, and various leniencies related to strumming. See our [Engine](/Engine) page for more information.

## 🌡 Crowd Meter
Many rhythm games require you to maintain a certain level of performance in order to keep playing - play well and a bar will fill; miss too many notes and the bar will drain out, causing the song to end prematurely. Note that this indicator goes by many different names, depending on the game in question - it could be a Rock Meter, an Excite Gauge, or something play-mode specific like a Dance Gauge.
YARG does not currently have a Crowd Meter, but we do expect to get one eventually, as a task for such can be found in the issue tracker.

# 🎸 Guitar play terms
## ⑥ Bass Groove
In YARG, Bass Guitar players can push their multiplier higher than other instruments, up to 6× before Star Power. Bass Groove is when you reach that 6× multiplier.

## 🎸 Strum notes
Strum notes are the primary sort of note in Guitar and Bass charts, requiring the player to hold down one or more specific fret buttons, and hit the strum bar at the right moment.
Being the main note type, strum notes are frequently just called Notes.

## 🔃 Hammer-On/Pull-Off notes (HOPOs)
HOPOs are a special kind of note in Guitar and Bass charts, which may be played either in the normal manner (fret + strum) or, if you have a non-zero combo, you can play them merely by fretting the note at the right moment.
HOPOs are meant to aproximate the technique of playing a new note by changing which fret you're holding for an already-vibrating string.

## ⤵ Tap notes
Tap notes are similar to HOPOs, in that they may be played without strumming, but they don't typically care whether you have a combo or not. A series of Taps can be more forgiving than the same sequence of HOPOs, as if you make an error with HOPOs you'll have to strum the next note to recover, while if you miss a Tap you can still just Tap the next note.
Some custom charts may use tap notes to represent non-guitar melodies that are nevertheless being giving to a Guitar player.

## 🆙 Open notes
Generally, open notes are notes that are played without holding any frets down, depicted as a colorful line across the whole highway. They may be regular strum notes, or they may be HOPOs/Taps, with distinct appearances. They may also be sustain notes, with a trail extending up the highway.
Originally appearing only in Bass charts, Open notes may be used to represent exceptionally deep notes in a given sequence.

## 🆖 Overstrum
To overstrum is to strum when the game didn't want you to. This will generally break your combo and reset your multiplier.

## 👻 Ghosts, 🚫 Anti-Ghosting
In guitar play, ghosts are when you fret something that doesn't correspond to an upcoming note, usually as a result of 'mashing' to try to pass a particularly difficult span of HOPOs or Taps. YARG's Default engine preset enables an Anti-Ghosting feature, which punishes ghosts by requiring you to strum the next HOPO/Tap.

# 🥁 Drum play terms
## 👻 Ghost notes, 💥 Accent notes, Dynamics
Although not yet supported, YARG plans to include support for drum notes that care about the velocity at which they're played, aka Dynamics. In this context, ghost notes represent very light drum hits, and are correctly played with a lower velocity. Conversely, accent notes represent heavier hits, requiring a greater velocity.
Some games treat dynamics as an aspect of Expert+ difficulty, but YARG intends to support them at any difficulty.

## 2️⃣ Double bass, Double kicks
Some drummers' kits include a second kick pedal. Depending on their setup, this could beat upon a second bass drum, or be mechanically linked to a second beater on a singular bass drum. Either way it can allow for very rapid bass hits, which would be difficult to accomplish with a single kick pedal.
Older games have traditionally lacked any way to signify a kick note as being specific to players with double bass setups, leading some charters to release two variants of the chart: one for regular drums, another specifically for double bass.
At the Expert difficulty, YARG supports charting for both single and double kick pedals in the same chart, with the double kick version being assigned its own special difficulty tier: Expert+

## ➕ Expert+
An additional difficulty tier specific to drums, built on top of to the regular Expert chart. YARG's version of ‍Expert+ adds more bass drum notes, to support double bass pedals, but is otherwise identical to the normal Expert chart. Some other games also include Ghost notes and Accent notes in their Expert+ mode.

# 🔩 Hardware terms
## 🔱 Dongle
Some wireless game controllers cannot communicate directly with the host console/computer. In such cases, they'll commonly come with a small device which plugs into USB or the machine's controller port, to receive the wireless signals from the controller and pass them on to the game. We call this device a 'dongle'; a small object required for a larger device to operate. Controllers meant for use with a dongle often cannot work without one, and many controllers are compatible only with the specific dongle model they shipped with.
For details on which controllers require dongles, check out the [Instruments](/Instruments) page.

## ᚼᛒ Bluetooth
A common short-range wireless communications protocol, supported by many devices, including the official Rock Band 4 PS4 instruments.

## 🎶 MIDI
Musical Instrument Digital Interface is a standard for communication between music-related devices, typically controllers/instruments, and synthesizers. Instead of transmitting actual audio, MIDI carries data about specific notes, devoid of any sound. It's up to the receiving device to determine how to interpret and sound those notes.
While traditional MIDI cables use a 5-pin DIN connector, many recent devices can transmit MIDI over USB, making it convenient to connect such devices to a computer, either for music production or for rhythm games like YARG.

MIDI can also refer to `.mid` files containing a sequence of MIDI events. Many rhythm games, including YARG, use such MIDI files as the foundation for how charts are stored.

## 🥁 E-Kit (aka E-Drums)
an Electronic Drum Kit, consisting of a drum module/brain, a series of pads/triggers wired to the module, and commonly some hardware to support the pads in a comfortable playing position.  Hitting a pad with a drumstick will generate a signal which the module can recognize, and it will either produce a sound, a MIDI note, or both.
A typical entry-level E-Kit will include pads/triggers to represent a snare, three toms, two cymbals, a hihat, a hihat-control pedal, and a bass-kick pedal.
Beyond its use as an instrument, E-Kits are also great for playing YARG's drum modes, especially the upcoming Elite Drums planned for version 0.14.0.

## ➿ Debounce
Debounce is a means for filtering out unintended repeat inputs from a button, switch, or sensor - when a state change is detected, the system will ignore further changes from that input until a small period of time has passed. In YARG, debounce can be configured on a per-button basis, as part of the input bindings for each profile.
Longer time periods means it's harder to double-tap that input, intentionally or unintentionally. As such, you'll want to set your debounce windows *just long enough* to filter out the unwanted inputs your instrument produces, to minimize the impact on deliberate rapid-inputs.
