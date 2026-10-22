---
title: "Reachy Mini AI Companion"
description: "Turning a Reachy Mini Lite into a desk companion with local models, memory, and voice."
status: Active
category: "Robotics"
tags:
  - Reachy Mini
  - AI
  - Hindsight
  - Robotics
hardware:
  - Reachy Mini Lite
llm: Local LM Studio
memory: Hindsight
voice: Whisper + TTS
started: 2026-08-01
updated: 2026-10-01
featured: true
priority: 1
log:
  - date: 2026-10-01
    summary: Added persistent memory
  - date: 2026-09-18
    summary: Added visitor recognition
  - date: 2026-09-04
    summary: Added eye-contact tracking
  - date: 2026-08-01
    summary: Initial Reachy Mini setup
---

## What I'm building

I'm experimenting with turning Reachy Mini into a useful desk companion: something on the desk that can see, remember, and talk, with the model running locally.

The stack so far:

```yaml
hardware: Reachy Mini Lite
llm: LM Studio
memory: Hindsight
voice:
  stt: Whisper
  tts: local
```

Vision is still open. Eye contact and visitor recognition are in the project log; the rest of that pipeline is not settled.
