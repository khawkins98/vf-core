---
title: JavaScript guidelines
---

## Just enough JavaScript

The Visual Framework isn't intended as a general-purpose JavaScript solution, however we know it is helpful that a minimal amount of basic functionality is supported.

All patterns are provided as functional solutions, so where JavaScript is required (such as [tabs]({{ path '/components/detail/vf-tabs' }})) there is a fully functional set of JavaScript bundled and available in:

- `vf-tabs.js` and
- `scripts.js`

## An opt-in philosophy

But we know many users would prefer to use their own JavaScript tooling for all -- or some -- patterns on a case-by-case basis.

Why? As [Adobe's Spectrum CSS puts it](https://github.com/adobe/spectrum-css#where-is-the-javascript):

> We have found that JavaScript is where a framework or library quickly becomes opinionated and stops being easy to use with or across other frameworks. To avoid this problem, Spectrum CSS avoids implementation details that require JavaScript.

Likewise we don't require the use of the Visual Framework JavaScript, instead the behviour can be optionally invoke per-pattern with JavaScript data selectors.

So to activate the Visual Framework JavaScript for `vf-tabs` we add `data-vf-js-tabs` and `data-vf-js-tabs-content`, like so:

```html
<div class="vf-tabs">
  <ul class="vf-tabs__list" data-vf-js-tabs>
    <li class="vf-tabs__item">
      <a class="vf-tabs__link" href="#vf-tabs__section--10">Second tab set</a>
    </li>
    <li class="vf-tabs__item">
      <a class="vf-tabs__link" href="#vf-tabs__section--11">Tab</a>
    </li>
  </ul>
</div>

<div class="vf-tabs-content" data-vf-js-tabs-content>
  <section class="vf-tabs__section" id="vf-tabs__section--10">
    <h2>Section 10</h2>
  </section>
  <section class="vf-tabs__section" id="vf-tabs__section--11">
    <h2>Section 11</h2>
  </section>
</div>
```

Leaving these data selectors off will cause `vf-tabs.js` to simply ignore the tabs.

### Naming

The name of your selector should follow your pattern's name, plus an additional `-js-` prefix.

So:
- `vf-tabs` = `data-vf-js-tabs`
- `vf-messages` = `data-vf-js-messages`
- `mycompany-modal` = `data-mycompany-js-modal`
