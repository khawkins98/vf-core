---
title: Sass and CSS guidelines
---

## CSS Naming conventions

Components in the Visual Framework follow the BEM naming convention.

```scss
.pattern {

}

.pattern__item {

}

.pattern--alternative {

}
```

## Namespacing

We namespace all universal patterns with a prefix of `vf-`. This ensures that the component will not break an existing codebase.

```css
.vf-pattern {

}
```

This allows the Visual Framework to also include team specific patterns that are owned by those teams.

```css
.embl-grid {

}
```

## Design Patterns and Components

The Visual Framework makes use of Atomic Design to define components. Instead of using Atoms, Molecules, Organisms the Visual Framework uses the terms Elements, Blocks, and Containers.

In code we do not include further prefixes for the Visual Frameworks version of Atomic Design. Instead we rely on other patterns to help determine what is an Element, a Block, or a Container.

### Elements

An Element: headings, lists, buttons, dividers, links, etc. are named after what they are semantically.

```css
.vf-heading {

}
.vf-heading--xl {

}
```

### Blocks

A Block: headers, lists, etc. are a single purpose design pattern that is also named after what it does or where it would go as part of a document structure. It makes use of Elements in the HTML where needed.

```css
.vf-breadcrumbs {

}
.vf-page-header {

}
```

In the HTML the Visual Framework makes use of `|` to separate Element classes from Block classes

```html
<header class="vf-page-header">
  <h1 class="vf-page-header__heading | vf-heading vf-heading--l">Strategy &amp Communications</h1>
  <span class="vf-page-header__sub-heading | vf-heading vf-heading--r">Blog</span>
</header>
```

### Mixes

When creating components you may find that a block you are wanting to use needs specific styling within it's parent. To do this we make use of BEM's mixes. Where not only do you include the relevant classnames for the block but add an additional class that includes the parent classname.

For example, the page header has two text nodes:

```html
<header class="vf-page-header">
  <h1 class="vf-page-header__heading | vf-text vf-text--heading-l">Strategy &amp Communications</h1>
  <span class="vf-page-header__sub-heading  | vf-text vf-text--heading-r">Blog</span>
</header>
```

The span needs to be a gray colour instead of the default black so we add a mix class to it. Instead of including the elements and relying on the parent class (`.vf-page-header`) to alter the styling, writing our HTML like this:

```html
<header class="vf-page-header">
  <h1 class="vf-text vf-text--heading-l">Strategy &amp Communications</h1>
  <span class="vf-text vf-text--heading-r">Blog</span>
</header>
```

We add component specific mix classes to the `h1` and `span` to be able to style them:
```html
<header class="vf-page-header">
  <h1 class="vf-page-header__heading | vf-text vf-text--heading-l">Strategy &amp Communications</h1>
  <span class="vf-page-header__sub-heading  | vf-text vf-text--heading-r">Blog</span>
</header>
```

#### Notes

It is good practice when creating a component to include a mix for any child element used. All mix classes should be written in the parents `.scss` file. So for the `vf-page-header` example we would write the required CSS in that patterns `.scss` file rather than in the `vf-text.scss` file.

---

### Containers

A Container is a horizontal slice of a page that contains Blocks and Elements. A Container is named after its purpose rather than an abstract concept.

```html
<div class="vf-intro">
  <h1 class="vf-intro__heading | vf-text--heading vf-text--heading-xl">Cancer</h1>
  <p class="vf-lede | vf-text--heading vf-text--heading-l">Cancer is a generic term for lots of different diseases in which cells divide many more times than usual. This abnormal growth can affect many cell types in almost any part of the body.</p>
  <p class="vf-intro__text | vf-text--body vf-text--body-r">Cancer is a multi-stage process. Normal cells begin to divide abnormally, spreading beyond their normal boundaries, and abnormal tissue growth causes swellings called tumours to form. Tumours can be benign – with no harmful effect on the body – or malignant, invading healthy tissue and interfering with normal bodily functions.</p>
  <p class="vf-intro__text | vf-text--body vf-text--body-r">There are more than 100 types of cancer and symptoms vary depending on the type. <a href="JavaScript:Void(0);">Read more about Cancer</a>.</p>
</div>
```

## How to write your Sass

A core principle of the Visual Framework is simple integration into workflows. Accordingly, we use Sass in this project but keep it close to CSS structure so that it's easily understandable.

### Nesting

Sass allows [Nesting](http://www.sitepoint.com/sass-reference/selector-nesting/) of CSS. This is a very nice feature but can be over used and abused. To stop this getting out of hand you should only nest media queries, pseudo classes and where referencing the parent makes sense (things like .vf-no-js and modernizr classes).

For example, in Sass:

```
a {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media (min-width: 800px) {
    font-weight: 700;
  }
  .vf-no-js & {
    color: blue;
  }
}
```

And the compiled CSS:
```
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;  
}
@media (min-width: 800px) {
  a {
    font-weight: 700;
  }
}
.vf-no-js a {
  color: blue;
}
```

### Variables

[Variables](http://www.sitepoint.com/sass-reference/variables/) in Sass allow you to reuse things like font stacks, colors and margins etc. Within the UI Pattern Library there is a file within the `global` folder called `_variables.scss` where these are defined.

If you find yourself repeating a declaration in your CSS a few times it may be worth adding a new variable for this. Try to be as abstract as you can when naming it. For example rather than write `$tab-navigation-padding: 10px;` and `$tab-card-padding: 10px;` consider writing `$tab-padding` or `$padding-small;` so that it can be used elsewhere without confusion.

### Mixins

By default there are only a limited amount of mixins in the UI Pattern Library. They are more to make writing code easier than doing anything fancy. If you take a look at the `_mixin.scss` file that's in the `global` folder in the `scss` folder there is a mixin that will make writing media queries, responsive typography and placeholders's easier when using a pattern. As this UI Pattern Library can make it's way into various aspects of the company mixins should be kept to a minimum so that it is easy to understand what they do.

### Working on a project

When you're working on a project you may need to make notes for things to get back to, or things that are't done and could change. You should use Sass comments for this.

If you have written some code that needs something fixed or added to then add a comment prefixed with `@todo`. Something like this:

```
// @todo fix height issue
```

If you have written some code that may change as it maybe something that gets pushed back into the patter library or something that may change by design use `@maychange`. It would look something like this:

```
// @maychange this shade of blue may change in next design overhaul

```
Depending on your code editor it could be quick to find these when mopping up before a project goes live.
