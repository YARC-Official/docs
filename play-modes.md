---
title: ▶️ Play Modes
description: Useful information about the current supported play modes
published: true
date: 2025-03-20T21:30:36.936Z
tags: 
editor: markdown
dateCreated: 2024-04-03T20:39:05.082Z
---

# 🎸 Guitar & Bass

## 5 Fret
The classic model; five color-coded fret buttons on the neck, a two-way strum bar on the body, a tilt sensor, and a whammy bar.

Note gems come towards you along a five-lane highway; you play those notes primarily by holding down the matching fret buttons and strumming as they reach the strike line, though some notes - HOPOs and Taps - may be played merely with well-timed fretting. Sustain notes have a visible trail that follows behind them, with extra points awarded for keeping the right frets held throughout. Lastly, Open notes span the width of the highway, and are played without holding any fret buttons.
Playing enough notes correctly in sequence will increase your score multiplier, up to a maximum of 4× for Guitar, or 6× for Bass. A missed or incorrect note will reset the multiplier to 1×.

When judging single-fret notes, higher notes (closer to the guitar's body) take priority over lower ones (closer to the headstock). So in a long sequence without chords, it's possible to hold a lower fret button while still playing higher notes.

Correctly playing all notes in a special glowing Star Power phrase will fill your SP meter by 25%. Additional SP energy can be gained by using the whammy bar during Sustain notes in an SP phrase.
When your SP meter is at or above 50%, you can activate Star Power with a button press or your guitar's tilt sensor. When Star Power is active, your SP meter will gradually drain and your score multiplier will be doubled for the duration, for a max of 8× for Guitar or 12× for Bass. When the SP meter fully drains, Star Power is deactivated and your multiplier returns to normal.

In addition to the typical Guitar and Bass charts, some songs may include charts for Co-op Guitar, Rhythm Guitar, or 5-lane Keys. Any of these charts may be played on 5 fret Guitar.

Some guitars may have extra controls, such as a fret slider or a second set of fret buttons. These won't confer their original game-specific gimmicks in YARG, but you may be able to map them to regular guitar inputs.

## 6 Fret
A guitar with two buttons for each of three frets, traditionally presented on a three lane highway with distinct note shapes/colors to denote which button the note belongs to.
This play mode is not currently supported in YARG, but is likely to be added at some point. In the meanwhile, you can map the controls on a six button guitar for 5 Fret play, but the mismatch of layouts is likely to make it somewhat awkward to play that way.

## Pro
*(Not to be confused with* Festival's ***Pro Lead** and **Pro Bass** modes, which more resemble YARG's **5 Fret** play.)*
Meant to better represent a real guitar, the reference Pro Guitar controller has six short strings along the body for strumming, and six buttons for each of seventeen frets - 102 in total - arrayed down the neck. Support for pro guitar and pro bass is planned to return for YARG version 0.13.0.

# 🥁 Drums

## 4 Lane
Four generic pads and a kick pedal; the base Band standard.  Optionally supports up to three Pro cymbals as alternate inputs for the matching colored pads.

Note gems come towards you along a four-lane highway; you play those notes by hitting the matching pad as they reach the strike line. Kick notes are represented with a bar that spans the width of the highway; play kicks by stomping your kick pedal.
Playing enough notes correctly in sequence will increase your score multiplier, up to a maximum of 4×. A missed or incorrect note will reset the multiplier to 1×.

Correctly playing all notes in a special glowing Star Power phrase will fill your SP meter by 25%. When your SP meter is at or above 50%, you can activate Star Power by correctly playing the special highlighted notes which will appear at certain points in the chart. When Star Power is active, your SP meter will gradually drain and your score multiplier will be doubled for the duration, for a max of 8×. When the SP meter fully drains, Star Power is deactivated and your multiplier returns to normal.

Some drum charts may include an Expert+ difficulty level. Expert+ is the same as the regular Expert chart, with additional bass kicks for play with double bass pedals.

## 5 Lane
Three pads, two cymbals, and a kick pedal; a Heroic kit.
Similar to 4 Lane drums, you play the notes that come at you along a five lane highway. The 1st, 3rd and 5th lanes map to pads, while the 2nd and 4th go to the cymbals.

4 Lane drum charts map to 5 Lane kits as follows:
- 4 Lane Yellow tom -> 5 Lane Blue tom
- 4 Lane Blue or Green cymbal -> 5 Lane Orange cymbal

## Pro
Four pads, three cymbals, and a kick pedal; an expanded Band kit.
Pro drums use the same four-lane highway as regular 4 Lane drums, but with distinct note shapes to distinguish between pads and cymbals for the 2nd, 3rd and 4th lanes. In Pro Drums mode, the pad and cymbal of a color are *not* interchangable - a pad note requires a pad hit; a cymbal note requires a cymbal hit.

## Elite
Designed for play with a typical midi e-drum kit, elite drum support is planned for YARG version 0.14.0.
Planned features include:
- Seven or eight lanes, for a Snare, three Toms, a Hi-hat, a Ride cymbal, and one or two Crash cymbals, plus bass kicks.
- Lane reordering, so the highway can reflect your kit's arrangement.
- Ghost and Accent notes - velocity matters.
- Flam notes.
- Hi-hat Open, Closed, and Stomp notes - hi-hat control matters.

# 🎤 Vocals

## Solo Vocals
Unlike Guitar, Bass, Drums, or Keys, Vocals does not use a traditional Highway with discrete notes moving towards you. Instead, Vocals uses a region at the top of the screen, moving horizontally. Each note is shown as a line, with its vertical position representing its pitch, horizontal position representing its timing, and length its duration.
Some parts of a song may not require you to sing a specific pitch, but still needs your voice. Talkies like that are signified by a note that spans the height of the vocal chart, so that any pitch is correct.

The song's vocals are broken up into phrases. Singing the correct pitch at the correct time fills a meter, and at the end of the phrase you're judged by how full the meter got. If the meter was full then your score multiplier will increase, up to a maximum of 4×; otherwise it will reset to 1×.

Some charts may incorporate vocal percussion notes, represented by a large circle at center height. These notes are optional, and can be hit either with a special controller bind on your profile, or with a sudden sound on the mic, traditionally from hitting it with your hand.

The songs lyrics will also be displayed, but they do not factor into the game's judgement of your performance.

## Harmonies
In Harmony modes, two or three distinct vocal parts will appear simultaneously, distinguished by color.
YARG currently requires each harmony player to specify which part they'll be singing, and they'll only be rewarded for notes and phrases belonging to their chosen part.

# 🎹 Keys
## 5 Fret
Five white piano keys, plus a tilt sensor and a pitch bend. Plays similarly to 5 fret guitar - and can indeed play any 5 fret guitar or bass chart - but there's no need to strum, and there's no 'anchoring'; each key has equal priority.
Proper keys support is planned for YARG v0.13.0, but in the meantime you can play 5 fret keys charts in guitar mode, and enable the All Taps modifier to remove the need to strum.

## Pro
Two octaves - 25 keys - of a piano keyboard, with color-coded segments for a wide highway. Pro keys support is planned for YARG v0.13.0.

# 🔮 Potential future play modes
These have no specific timeframe, but are either in the issue tracker or at least under consideration.

## 💿 DJ
A turntable, three buttons, and a fade slider; a Heroic spinoff.
A task for this exists in the issue tracker.

## 🪘 Bongos
A pair of bongos and a clap detector, associated with a stubborn gorilla. Each bongo has two distinct sensors.
A task for this exists in the issue tracker.

## 🎸 real Guitar
An actual electric guitar, plugged into your computer. We wouldn't be able to treat it exactly like its plastic counterparts, but it may be possible to play Pro Guitar charts this way in future.
A task for this exists in the issue tracker.

## 🕺 4-panel Dance
Floor panels in the four cardinal directions, printed with matching arrows - a Revolutionary layout.
Not in the issue tracker, but specs exist for charts of this sort within formats YARG already supports.
