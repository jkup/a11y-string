[![Build Status](https://travis-ci.org/jkup/a11y-string.svg?branch=master)](https://travis-ci.org/jkup/a11y-string)

# a11y String

This is a simple, fast module that allows you to run a range of accessibility tests against a string of HTML.

## Installation
```
  npm install a11y-string
```

## Example

```javascript
const a11y = require('a11y-string')

a11y('<html><head><title>Test title</title></head><body><img src="foo.jpg" /></body></html>')
// Throws Error: All images must have an alt attribute
```

## Reasoning

There are a lot of great a11y tools that exist today but all of them require an external URL or are framework specific. This project aims to be a lightweight alternative for people who need to run accessibility tests against just a string of HTML.