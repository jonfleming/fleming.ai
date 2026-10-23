---
title: "Macro Keypad"
description: "A twelve-key, three-knob pad, edited as plain text and flashed with ch57x-keyboard-tool."
status: Active
category: "Tools"
tags:
  - Keypad
  - CH57x
hardware:
  - 12-key 3-knob keypad
updated: 2026-10-23
priority: 10
log:
  - date: 2026-10-23
    summary: The mapping is a text file, drawn as the pad, and flashed from that file.
    article: editing-a-macro-keypad-as-text
---

## What I'm building

A readable mapping for a twelve-key, three-knob keypad. The firmware cannot be read back, so the file on disk is the device. `macros.txt` is the file I edit. A converter turns it into the YAML [ch57x-keyboard-tool](https://github.com/kriomant/ch57x-keyboard-tool) uploads, and a window draws that same text in the shape of the pad.
