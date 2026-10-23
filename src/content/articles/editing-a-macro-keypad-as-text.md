---
title: "Editing a Macro Keypad as Plain Text"
description: "A twelve-key, three-knob pad whose mapping lives in a text file, because the firmware cannot be read back."
date: 2026-10-23
category: "Tools"
tags:
  - Keypad
  - CH57x
---

The keypad on the desk is a small one. Twelve square keys, in three rows of four, and three knobs on a metal plate above them. The right-hand knob is the large one. Each key can type a sentence, send a chord, or fire a media key. Each knob can do three different things: turn one way, press, turn the other way. The board has three layers, switched by a button on the side, so the same physical key is a different action depending on which layer is lit.

That is a lot of behavior for an object that will not tell you what it is doing.

The firmware cannot be read back. Plug it in, and it types whatever was last flashed. There is no "download the current mapping" command that returns the truth from the device. The truth is the file you last uploaded. If that file is wrong, or lost, the pad still works and you are left guessing which key is which. So the project is not really about the hardware. It is about keeping a readable copy of the mapping, and making the flash step use that copy.

## What came with it

The pad shipped with a Windows program, `MINI_KEYBOARD.exe`. It draws a keypad and lets you fill in slots. That is fine for "this key is Ctrl+C." It gets clumsy once a key is a short sequence, a knob has three independent actions, and the same grid exists three times over for the three layers. The program is also the only place the mapping lives, which is the wrong place for something you cannot read back out of the device.

These boards are a known family. They use a CH57x chip, and [ch57x-keyboard-tool](https://github.com/kriomant/ch57x-keyboard-tool) already knows how to validate a mapping and upload it over USB. That tool is the part I did not want to rewrite. It wants YAML. YAML is a reasonable file to hand to a flasher. It is a poor file to edit by hand when the thing you mean is "type this, then press Enter."

A typed phrase comes apart. `Hello` is not the word Hello in the YAML. It is the keys a US keyboard would press to produce it: shift-h, e, l, l, o. A knob is three fields named `ccw`, `press`, and `cw`. After a few layers, the file is a grid of tokens you have to reassemble in your head before you know what the upper-left key does. The flasher is happy. The person editing it is not.

## A file you can read

The mapping I actually edit is a text file, `macros.txt`. Letters, digits, spaces, and punctuation stay as themselves. Anything that is a key, a chord, a media key, or a mouse action goes in braces. The two mix in one action, because that is how the keys get used.

```
[1,1] Hello{enter}
[1,2] {ctrl-c}
[1,4] {win-r}notepad{enter}
knob 3: {volumedown} | {mute} | {volumeup}
```

`[1,1]` is the upper-left key, the row nearest the knobs. Knob 1 is the left knob. A knob line is always the same three positions: turn left, press, turn right. An empty action is a dash. A real brace character is written by doubling it. Layers are headings, `=== Layer 1 ===` and so on, because the pad really does have three of them and they are easy to confuse.

The text file is not a second format that drifts. A small converter turns it into the YAML the flasher expects, and turns that YAML back into the same text. `Hello{enter}` goes out as the shift-and-letter sequence, and comes back as `Hello{enter}`. The round trip is the test that the readable form and the upload form are the same mapping.

The everyday loop stays short on purpose:

```
python converter.py download   # last YAML -> macros.txt
# edit the text
python converter.py upload     # text -> YAML -> keypad
```

`download` does not talk to the device. It exports the last YAML you trust, and it says so, because pretending otherwise would be a lie about the hardware. `upload` converts, writes a backup of the previous YAML, asks `ch57x-keyboard-tool` to validate, and only then flashes. Validation before flashing matters more on a device you cannot dump. A bad file is a pad that types the wrong thing until you notice.

## The picture is the same file

A text grid is readable. It is still a grid you hold in your head. Row 2, column 4, layer 3, the right turn of the middle knob: those are easy to point at on the object and easy to mis-count in a file. The next step was to draw the file as the pad.

The editor is a window shaped like the hardware. Knobs along the top, the large one on the right, twelve keys underneath, colored the way the underglow runs from the back row to the front. Click a key and you are editing that cell. Click the turn-left, press, or turn-right row under a knob and you are editing that action. The panel shows a short label, `Ctrl+B` or `Vol −`, and under it the exact line that will be written to `macros.txt`. The insert buttons only drop tokens into that line. They do not invent a second syntax.

Layers are the same three the file already has. Switching layers does not change the picture of the hardware. It changes which mapping you are looking at, which is what the side button on the pad does.

Save writes the text file and nothing else. Upload saves, converts, validates, and flashes, through the same path as the command line. The picture cannot get ahead of the file, because the picture is a view of the file. Close the window without saving and the YAML the flasher knows about has not moved.

## Why both

The text file is what I want to keep. It diffs. It is obvious when a key is empty. A phrase looks like a phrase. The YAML is what the device's tool chain already understands, so the converter's job is to be boring and exact, including the backup it writes before it replaces that YAML.

The picture is for the moment before a flash, when the question is not "is this valid YAML" but "is this the key I think it is." The pad will accept a mapping that puts volume on the wrong knob. It will not argue. The only check is looking at the layout the way the object is laid out, then letting the validator run.

None of this changes the keypad. It is still a small USB board with twelve keys and three knobs. The work is the habit around it: one text file that is the mapping, a picture of that file in the shape of the board, and an upload that will not flash until the existing tool says the YAML is valid.
