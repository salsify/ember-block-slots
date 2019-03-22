# 1.1.11 (2017-08-01)
* **Added** a CONTRIBUTING.md file
* **Updated** travis CI build to use pr-bumper version 2
* **Updated** PULL_REQUEST_TEMPLATE.md for pr-bumper `#none#` support
* **Updated** secure auth tokens
* **Updated** ember-runtime-enumerable-includes-polyfill to version 2 in PR: https://github.com/ciena-blueplanet/ember-block-slots/pull/51


# 1.1.10 (2017-04-26)

Delay the initialization of the `block-slot` to the `didInsertElement` callback.

`Assertion Failed: You modified "isActive" twice on <xxx@component:yield-slot::ember1525> in a single render. It was rendered in "component:yield-slot" and modified in "component:block-slot". This was unreliable and slow in Ember 1.x and is no longer supported. See https://github.com/emberjs/ember.js/issues/13948 for more details.`

<!-- Reviewable:start -->
---
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/ciena-blueplanet/ember-block-slots/50)
<!-- Reviewable:end -->


# 1.1.9

Expand ember-prop-types dependency range and remove unnecessary installation blueprint.

<!-- Reviewable:start -->
---
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/ciena-blueplanet/ember-block-slots/48)
<!-- Reviewable:end -->


# 1.1.8
- Added a PULL_REQUEST_TEMPLATE.md file

<!-- Reviewable:start -->
---
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/ciena-blueplanet/ember-block-slots/46)
<!-- Reviewable:end -->


# 1.1.7
* 2.10.0 now freezes params, need to clone Array before `Ember.A`ing

<!-- Reviewable:start -->
---
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/ciena-blueplanet/ember-block-slots/44)
<!-- Reviewable:end -->


# 1.1.6
* Forgot one instance where contains was used. Converting that to includes fixes the deprecations in 2.8.

<!-- Reviewable:start -->
---
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/ciena-blueplanet/ember-block-slots/42)
<!-- Reviewable:end -->


# 1.1.5
* Use includes method over contains to fix deprecation in Ember 2.8

<!-- Reviewable:start -->
---
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/ciena-blueplanet/ember-block-slots/41)
<!-- Reviewable:end -->


# 1.1.4

* Removed the 'complex' scenario from the demo, this should be written in a clearer way

<!-- Reviewable:start -->
---
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/ciena-blueplanet/ember-block-slots/40)
<!-- Reviewable:end -->


# 1.1.3

* Yield slots will now find the nearest component with slots to register against - a direct parent with slots is no longer required


# 1.1.2

- Added ember-prop-types to the addon blueprint to install the dependency during `ember install`


# 1.1.1

- Added ember-prop-types to the addon blueprint to install the dependency during `ember install`


# 1.1.0

Supporting nested block slots


# 1.0.1

- ensures that the array is unique per instance

fixes #31


# 1.0.0

- Overhauled the project to provide a cleaner/simpler interface and unlock additional features
- Updated the README and demo to provide a clearer use case for the addon and more usage examples
- Refer to the demo for the full feature set and syntax

## BREAKING CHANGES

- A mixin is now required to enable slots for a component: `import SlotsMixin from 'ember-block-slots`
- `block-params` are now specified against `yield-slot` instead of `yield`
- `as |slot|` is no longer required on the component interface
- `slot` is no longer required on the `block-slot` interface

# 0.12.4

## Non-Breaking

* **Fixed** added arguments to super() calls in block-slot.js and yield-slot.js

# 0.12.3
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.12.2

* **Updated** Array.from usage and instead we define each computed property for yieldedSlot.params.
* **Removed** Unit test for block-slot component since we do not need to verify the number of yieldedSlot.params being generated dynamically.
* **Removed** Entry in travis.yml to run on the latest version of Firefox.
