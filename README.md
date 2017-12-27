# Ember-Is-Visible

This addon provides a `visibility` service to track whether your app is currently visible.

Click to see the [demo](http://jhawk.co/ember-visible-demo)!

## Installation

* `git clone https://github.com/elwayman02/ember-is-visible` this repository
* `cd ember-is-visible`
* `npm install`

## Usage

Simply inject the `visibility` service and check the `visible` and `lostVisibility` properties:

#### `visible`

Indicates whether the app is currently visible

#### `lostVisibility`

Indicates if the app has ever not been visible during the current session.

## Development

This section outlines the details of collaborating on this Ember addon.

### Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
