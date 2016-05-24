[ci-img]: https://img.shields.io/travis/ciena-blueplanet/ember-block-slots.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-blueplanet/ember-block-slots
[cov-img]: https://img.shields.io/coveralls/ciena-blueplanet/ember-block-slots.svg "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-blueplanet/ember-block-slots
[npm-img]: https://img.shields.io/npm/v/ember-block-slots.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-block-slots
[lic-img]: https://img.shields.io/npm/l/ember-block-slots.svg
[lic-url]: LICENSE.md
[dep-img]: https://img.shields.io/david/ciena-blueplanet/ember-block-slots.svg
[dep-url]: https://david-dm.org/ciena-blueplanet/ember-block-slots
[devdep-img]: https://img.shields.io/david/dev/ciena-blueplanet/ember-block-slots.svg
[devdep-url]: https://david-dm.org/ciena-blueplanet/ember-block-slots#info=devDependencies
[eo-img]: https://emberobserver.com/badges/ember-block-slots.svg
[eo-url]: https://emberobserver.com/addons/ember-block-slots
[embercli-url]: https://embadge.io/v1/ciena-blueplanet/ember-block-slots/master/ember-cli.svg

# ember-block-slots <br />

[![NPM][npm-img]][npm-url] ![Ember CLI version][embercli-url] [![License][lic-img]][lic-url]

[![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![Ember Observer][eo-img]][eo-url]

[![Dependencies][dep-img]][dep-url] [![Dev Dependencies][devdep-img]][devdep-url]

Support for multiple yield slots, including default slots, within a component block

Target syntax is:

```
{{#sample-component}}
  {{#block-slot 'header' as |x|}}
    I am the content {{x}}
  {{/block-slot}}
  {{#block-slot 'main'}}
    I am the content
  {{/block-slot}}
  {{#block-slot 'footer' as |y z|}}
    I am the content {{y}} {{z}}
  {{/block-slot}}
{{/sample-component}}
```

The component needs to yield for each slot, so the conditional in the component won't work, but we still need to handle defaults, which means that if a slot isn't provided we need an option to go back to the component template for the default.  It's like we need to yield *once* to let all the block slots activate, but wait for the block slots to then put content back in (instead of coming from the yield? seems portal-ish)

Give credit to [@runspired](https://twitter.com/Runspired)

This README outlines the details of collaborating on this Ember addon.

## Demo

**[http://ciena-blueplanet.github.io/ember-block](http://ciena-blueplanet.github.io/ember-block-slots)**

## Using this addon in your application

### Installation

    ember install ember-block-slots

### Usage

In the component template, place a "named" yield-slot block with what will be passed though for that named slot.


```
sammple-component.hbs

{{yield}}
{{#yield-slot 'header'}}
  <div>
    {{yield (block-params header 'hello' 'world')}}
  </div>
{{/yield-slot}}

{{#yield-slot 'main'}}
  {{yield (block-params body 'goodnight' 'moon')}}
{{else}}
  Default {{sampleBody}}
{{/yield-slot}}

{{#yield-slot 'footer'}}
  <div>
    {{yield (block-params footer 'awesome' 'you')}}
  </div>
{{/yield-slot}}
```

Then, in your parent template place your component with the block-slots inside, matching them by name to the yield-slot. Within each block-slot, place the content that you want to yield for that block.

```
parent-template.hbs

{{#sample-component sampleBody='BODY' as |slot|}}
  {{#block-slot slot 'header' as |info w1 w2|}}
    I am the content {{info.title}} | {{w1}} | {{w2}}
  {{/block-slot}}
  {{#block-slot slot 'footer' as |info w1 w2|}}
    I am the content {{info.title}} | {{w1}} | {{w2}}
  {{/block-slot}}
{{/sample-component}}
```

Given this data:

```
header: { title: 'HEADER' },
body: { title: 'BODY' },
footer: { title: 'FOOTER' }
```

The rendered output is:

```
I am the content HEADER | hello | world
Default BODY
I am the content FOOTER | awesome | you
```

## Development Environment

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Documentation

* `ember ember-cli-jsoc` or `npm run docs` (shortcut setup in this repo)
* Visit *http://localhost:4200/docs*

### Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

## Versioning

Employs [Semantic Versioning 2.0.0](http://semver.org/)
