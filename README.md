# sortable-firefox-bug

RubaXa's Sortable library does not support Firefox v34.0.5 when the `setData` option is set to `true`.
This repository demonstrates the problem with an isolated example.

#### Installation

- Clone the repository.
- Open `index.html` in target browsers. It works in all browsers except Firefox.
- Comment out the `setData` line in `script.js` to see that it then works in Firefox.
