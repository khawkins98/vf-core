---
title: Changelog
label: CHANGELOG
order: 200
isIndex: true
---

What we've been working on. You can [view and download all releases here](https://github.com/visual-framework/vf-core/releases).

## How to make these release notes?

- Generate with:
  ```
  git log 0.2.2..HEAD --pretty=format:'
  - [%s](https://github.com/visual-framework/vf-core/commit/%H)
      - %b
  ' --reverse```
