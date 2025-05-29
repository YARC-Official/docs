---
title: 5-Fret Guitar LD Range Shifts
description: YARG's new visual indicators to tell Easy and Medium players when to move their hands up and down the fret board.
published: false
date: 2025-05-29T00:17:46.871Z
tags: 
editor: markdown
dateCreated: 2025-05-29T00:17:46.871Z
---

# 5-Fret Guitar LD Range Shift Usage

---

## Overview

This document covers YARG 5-fret range shift markers, which are togglable visual indicators to tell Easy and Medium players when to move their hands up and down the fret board. This also covers a new modifier, **No Range Shifts**, which allows charts with range shift markers to predictably use a smaller set of colors. This feature does not require a feature flag and does not cause compatability issues with other games such as Clone Hero or Rock Band.

---

## Syntax

Range shift markers are placed as standard text events on any 5-fret track. The syntax for range shifts is as follows:

```
[ld_range_shift diff position size]
```

| Argument | Type | Description |
| --- | --- | --- |
| `diff` | `int` | The difficulty, where `0` is Easy and `3` is Expert. Note that like existing `mix` events, `diff` is indexed with `0`. |
| `position` | `int` | The index finger position, where `1` is green and `3` is yellow. Note that `position` is indexed with `1`, as `0` is assumed to be open note. |
| `size` | `int?` | The size of the range (e.g., `3` for `GRY` and `4` for `GRYB`). If not provided, the size will be `3` if `diff` is `0`, `4` if `diff` is `1`, and `5` by default. |

### Typical notation

The following include the most common cases. All YARG setlist songs start on `GRY` and `GRYB`, and about 75% of setlist songs utilize `YBO` and `RYBO` (with almost all of the remainder staying at `GRY` or `GRYB`).

| Difficulty | Frets | Long notation | Short notation |
| --- | --- | --- | --- |
| Easy | `G R Y - -` | `[ld_range_shift 0 1 3]` | `[ld_range_shift 0 1]` |
| Easy | `- - Y B O` | `[ld_range_shift 0 3 3]` | `[ld_range_shift 0 3]` |
| Medium | `G R Y B -` | `[ld_range_shift 1 1 4]` | `[ld_range_shift 1 1]` |
| Medium | `- R Y B O` | `[ld_range_shift 1 2 4]` | `[ld_range_shift 1 2]` |

### Atypical notation

Less than 2% of YARG setlist songs use this range. Shifts like these can help to maintain pitch accuracy in a song with only four pitches, but shifts up to `YBO` work better in many cases (and may be less confusing). They also work well for key changes where you want to suggest that the player continue to use their index, middle, and ring finger.

| Difficulty | Frets | Long notation | Short notation |
| --- | --- | --- | --- |
| Easy | `- R Y B -` | `[ld_range_shift 0 2 3]` | `[ld_range_shift 0 2]` |

### Esoteric notation

YARG setlist songs don't use any of the following, but the below examples are technically chartable. Please note that the following list is not comprehensive.

| Difficulty | Frets | Notation |
| --- | --- | --- |
| Medium | `G R Y B O` | `[ld_range_shift 1 1 5]`
| Hard | `- - - B O` | `[ld_range_shift 2 4 2]`
| Expert | `- - - - O` | `[ld_range_shift 3 5 1]`

---

## Placement

When charting range shifts, chart `GRY`/`GRYB` sections and `YBO`/`RYBO` sections as usual. The text events exist purely to make the indicators appear and to "crush down" the chart if **No Range Shifts** is selected. Open notes don't move if this modifier is selected.

The time of the range shift marker in the chart marks the time when the shift is "finalized." As with pro keys, the number of arrows **cannot** be altered.

- For four beats leading up to the time of the text event, range shfting indicators direction arrows will appear will appear and the new frets will flash to the beat.
- At the time of the text event, there will be a thin gold bar indicating the new range, the newly used frets will flash on, and the newly unused frets will flash off.
- The timings for Easy shifts and Medium shifts are allowed to differ, but will only do so rarely.

Please note that a range shift **MUST** be placed at the very start of your chart before any notes. This first text event isn't an actual range shift and simply defines the starting range, just like with pro keys. The game will default to a `GRYBO` range for all notes in the region before the first marker.

---

## Usage Recommendations

Below are the YARG charting team's usage recommendations. These are merely suggestions according to our own YARG charting team style; there exist exceptions, so feel free to use your own discretion.

### Dos

- **Do** start your song on `GRY`/`GRYB` if possible, as the player's index finger will already be on green fret after pressing the start song button.
- **Do** place a range marker at the start of a song so the player knows what set of frets to use, even if no shift will occur and only `GRY`/`GRYB` will be used.
- **Do** set range sizes to 3 frets for Easy and 4 frets for Medium, even if some of the highlighted frets go unused in the section (for example, if a `YBO` section only has B and O in it).
- **Do** use shifts when a long part feels noticeably higher in pitch or just different (high parts, key changes, sections with pedal FX, alt-charted sections, etc.).
- **Do** place shifts on same tick as the first note in the new section, unless the note is off-beat, in which case the closest beat line before the note works better.
- **Do** have roughly 1 measure without notes between ranges on Easy to give the player time to move their hands (placing unsustained notes on beat 1 of a measure is okay).
- **Do** have roughly 1/2 measure without notes between ranges on Medium to give the player time to move their hands (placing unsustained notes on beat 3 of a measure is okay).
- **Do** double or halve the amount of measure space between ranges if songs are extra fast or slow (e.g., 1/2 step on easy and 1/4 step on medium for a 61 bpm song).

### Don'ts

- **Don't** use shifts excessively or use shifts if the new section is very short; constant shifting can be tiring (for a 3- or 4-minute song, 1 shift up is usually plenty, and 3 should be the maximum).
- **Don't** shoehorn a shift in if there is no audible difference in what the player is doing (many bass charts will only have the starting range marker and no shift).
- **Don't** place shift markers on Hard or Expert difficulties (these will still function, but they are mainly meant for Easy and Medium).
- **Don't** place shifts right before giant stretches without any notes (place them at the starts of ranges instead so that they align with the music).
- **Don't** place shifts on `PART DRUMS` (shift markers on this track will be ignored outright).
- **Don't** place shifts on `PART KEYS`, as Easy and Medium typically use all 5 colors on that track (shifts will still work, but we don't recommend them).
- **Don't** place shifts in the middle of a section just because it does not start with a blue or orange note; shifts usually coincide with the starts of sections.
- **Don't** place notes outside of the range during a range section, except open notes (these notes will still appear, but they will break upon selecting the **No Range Shifts** modifier).
- **Don't** put open notes in the measure before a range shift unless absolutely necessary (this isn't entirely disallowed, but open notes can cover shift indicators and be a lot for players to handle).
- **Don't** cut the starts of verses and choruses to make way for a shift gap (cut the ends of the previous section instead).
- **Don't** cut the ends of solos to make way for an upcoming shift gap (as an exception to the above rule, cut the start of a section after a solo instead).
- **Don't** place star power phrases entirely in the gap between range shifts (this can destroy SP pathing and make it impossible to gold-star a chart).
- **Don't** create shifts from one range size to another (e.g., `GRY` &#8594; `RYBO`).
- **Don't** put the chart entirely on `RYB`, `YBO`, or `RYBO` just because it feels high in pitch.

---

**END OF DOCUMENT**
