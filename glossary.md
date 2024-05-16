---
title: 📖 Glossary
description: Some common terms and what they mean
published: true
date: 2024-05-16T21:28:13.926Z
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
The range wherein notes can be successfully played.

## 🔛 Strike line
The point where notes are meant to be played. Commonly at the center of the Hit Window. Visually, often also indicates which inputs are currently being hit, which can be helpful for verifying your controls work and that your hand is positioned where you expect.

## 🔢 Phrase
A region of time and the notes within it.

## 📈 Combo
Playing a series of notes correctly. Many rhythm games will reward combos with improved scores. YARG does this by increasing your score multiplier as your combo grows; by 1 for each perfect phrase on vocals, or for each 10 consecutive notes on typical instruments. If you break your combo - typically by missing a note or playing something unintended, like an overstrum - you'll drop back down to a 1× multipler.

## ④ Multiplier
A factor by which the points you score will be multiplied. In YARG your multiplier is an integer, and will typically range from 1× to 4× if your Star Power is not currently active.

## 🔥 Hot Start, 🏋️‍♀️ Strong Finish
YARG displays Hot Start when you reach your maximum multiplier without having missed a single note or otherwise breaking your combo.
Similarly, Strong Finish signifies completing the song with your maximum multiplier active.

## 🌟 Star Power (aka Overdrive)
Star Power (SP) is both a resource - Star Power energy - and application of that resource. You gain SP energy by successfully playing special Star Power phrases. When your SP energy is at least 50% full, you can Activate your Star Power - the energy will begin to drain, and your score multiplier will be double what it otherwise would be, until your SP energy it runs out.
Star Power and Overdrive both refer to these same elements, having originated from different games. Both terms can be used interchangably.

## 🎼 Stems
Songs with Stems have multiple audio streams, separating different instruments/parts out from one-another. These stems allow the game to apply different volume levels, effects and muting, depending on how the players are performing.
Not to be confused with Keysounds, which is another technique some other rhythm games use for dynamic audio.

## 🔴 Intensity
An aproximation of how much effort a player will have to exert to play a particular instrument's part in a given song. Often represented as a series of filled circles, or in YARG as a set of segments surrounding the part's icon.

## 📊 Chart, aka Note Chart
The sequence of notes for one instrument on one difficulty on one song. Alternatively, could refer to multiple difficulties for multiple instruments for one song, collected in a single .mid, .chart, or con file.
As a verb, charting refers to the act of creating a chart. Decisions about how to represent various aspects of the song contribute to how it's charted.

## 📶 Difficulty tiers
YARG supports several different charts for each instrument on a given song. The [official setlist](/songs/Setlist) will include most of these; custom songs may contain a subset.

- Easy
- Medium
- Hard
- Expert
- Expert+

By convention, 5-Fret Guitar/Bass charts will typically limit Easy charts to the first three frets, Medium charts to the first four, and Hard/Expert can use all five frets.
Expert+ drum charts are the same as Expert with the addition of double-bass kick notes.

## 👨‍👩‍👧‍👦 Full Band play
Playing with 3+ players, covering Guitar, Bass, Drums, Vocals, and potentially other supported play modes.

## 💥 Big Rock Ending (BREs)
Big Rock Endings are a section near the end of the song where charted notes are irrelevant, and players are instead encouraged to wail on their instruments as much as they can for bonus points. Often there can be several final, proper notes placed <em>after</em> the BRE comcludes, so be prepared to play them.
BRE support is planned for YARG version 0.14.0

## 🎓 Pro
Instruments with the Pro prefix are generally intended to better represent really playing that instrument. In YARG, Pro Drums expands 4-lane play with the additon of three cymbals, Pro Guitar ditches the 5 buttons and strum bar for an entire fretboard and six strings, and Pro Keys sees you using a whole two-octive keyboard.
The planned Elite Drums mode is set to further expand on the realism and complexity of Pro Drums.
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

## 🔃 Hammer-On/Pull-Off notes (HOPOs)
HOPOs are a special kind of note in Guitar charts, which may be played either in the normal manner (fret + strum) or, if you have a non-zero combo, you can play them merely by fretting the note at the right moment.
HOPOs are meant to aproximate the technique of playing a new note by changing which fret you're holding for an already-vibrating string.

## ⤵ Tap notes
Tap notes are similar to HOPOs, in that they may be played without strumming, but they don't typically care whether you have a combo or not. A series of Taps are more forgiving than the same sequence of HOPOs, as if you make an error with HOPOs you'll have to strum the next note to recover, while if you miss a Tap you can still just Tap the next note.
Some custom charts may use tap notes to represent non-guitar melodies that are nevertheless being giving to a Guitar player.

## 🆖 Overstrum
You strummed when the game didn't want you to. This will generally break your combo.

## 👻 Ghosts, 🚫 Anti-Ghosting
In guitar play, ghosts are when you fret something that doesn't correspond to an upcoming note, usually as a result of 'mashing' to try to pass a particularly difficult span of HOPOs or Taps. YARG's Default engine preset enables an Anti-Ghosting feature, which punishes ghosts by requiring you to strum the next HOPO/Tap.

# 🥁 Drum play terms
## 👻 Ghost notes, 💥 Accent notes
Although not yet supported, YARG plans to include support for drum notes that care about the velocity at which they're played. In this context, ghost notes represent very light drum hits, and are correctly played with a lower velocity. Conversely, accent notes represent heavier hits, requiring a greater velocity.

# 🔩 Hardware terms
## 🔱 Dongle
Some wireless rhythm game controllers cannot communicate directly with the host console/computer. In such cases, they'll commonly come with a small device which plugs into USB or the machine's controller port, to receive the wireless signals from the controller and pass them on to the game. We call this device a 'dongle'; a small object required for a larger device to operate. Controllers meant for use with a dongle often cannot work without one, and many controllers are compatible only with the specific dongle model they shipped with.
For details on which controllers require dongles, check out the [Instruments](/Instruments) page.

## 🎶 MIDI
Musical Instrument Digital Interface is a standard for communication between music-related devices, typically controllers/instruments, and synthesizers. Instead of transmitting actual audio, MIDI carries data about specific notes, devoid of any sound. It's up to the receiving device to determine how to interpret and sound those notes.
While traditional MIDI cables use a 5-pin DIN connector, many recent devices can transmit MIDI over USB, making it convenient to connect such devices to a computer, either for music production or for rhythm games like YARG.

MIDI can also refer to `.mid` files containing a sequence of MIDI events. Many rhythm games, including YARG, use such MIDI files as the foundation for how charts are stored.

## 🥁 E-Kit (aka E-Drums)
an Electronic Drum Kit, consisting of a drum module/brain, a series of pads/triggers wired to the module, and commonly some hardware to support the pads in a comfortable playing position.  Hitting a pad with a drumstick will generate a signal which the module can recognize, and it will either produce a sound, a MIDI note, or both.
A typical entry-level E-Kit will include pads/triggers to represent a snare, three toms, two cymbals, a hihat, a hihat-control pedal, and a bass-kick pedal.
Beyond its use as an instrument, E-Kits are also great for playing YARG's drum modes, especially the upcoming Elite Drums planned for version 0.14.0.

## ➿ Debounce
Debounce is a means for filtering out unintended repeat inputs from a button or switch - when a state change is detected, the system will ignore further changes from that switch until a small period of time has passed. In YARG, debounce can be configured on a per-button basis, as part of the input bindings for each profile.
Longer time periods means it's harder to double-tap that input, intentionally or unintentionally. As such, you'll want to set your debounce windows *just long enough* to filter out the unwanted inputs your instrument produces, to minimize the impact on your actual rapid-inputs.
