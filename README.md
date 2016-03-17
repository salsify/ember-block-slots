[ci-img]: https://img.shields.io/travis/ciena-blueplanet/ember-block-slots.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-blueplanet/ember-block-slots
[cov-img]: https://img.shields.io/coveralls/ciena-blueplanet/ember-block-slots.svg "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-blueplanet/ember-block-slots
[npm-img]: https://img.shields.io/npm/v/ember-block-slots.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-block-slots

# ember-block-slots <br /> [![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]

Support for multiple yield slots within a component block

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

Give credit to @runspired

This README outlines the details of collaborating on this Ember addon.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
