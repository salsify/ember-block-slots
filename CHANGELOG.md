# 1.1.0

Supporting nested block slots

<!-- Reviewable:start -->
---
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/ciena-blueplanet/ember-block-slots/34)
<!-- Reviewable:end -->


# 1.0.1

- ensures that the array is unique per instance

fixes #31

<!-- Reviewable:start -->
---
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/ciena-blueplanet/ember-block-slots/32)
<!-- Reviewable:end -->


# 1.0.0

- Overhauled the project to provide a cleaner/simpler interface and unlock additional features
- Updated the README and demo to provide a clearer use case for the addon and more usage examples
- Refer to the demo for the full feature set and syntax

## BREAKING CHANGES

- A mixin is now required to enable slots for a component: `import SlotsMixin from 'ember-block-slots`
- `block-params` are now specified against `yield-slot` instead of `yield`
- `as |slot|` is no longer required on the component interface
- `slot` is no longer required on the `block-slot` interface

<!-- Reviewable:start -->
---
This change is [<img src="https://reviewable.io/review_button.svg" height="34" align="absmiddle" alt="Reviewable"/>](https://reviewable.io/reviews/ciena-blueplanet/ember-block-slots/29)
<!-- Reviewable:end -->


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
