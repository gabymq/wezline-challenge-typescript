# testcafe-reporter-yes
[![Build Status](https://travis-ci.org/gabymq/testcafe-reporter-yes.svg)](https://travis-ci.org/gabymq/testcafe-reporter-yes)

This is the **yes** reporter plugin for [TestCafe](http://devexpress.github.io/testcafe).

<p align="center">
    <img src="https://raw.github.com/gabymq/testcafe-reporter-yes/master/media/preview.png" alt="preview" />
</p>

## Install

```
npm install testcafe-reporter-yes
```

## Usage

When you run tests from the command line, specify the reporter name by using the `--reporter` option:

```
testcafe chrome 'path/to/test/file.js' --reporter yes
```


When you use API, pass the reporter name to the `reporter()` method:

```js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('chrome')
    .reporter('yes') // <-
    .run();
```

## Author
Gaby Moreno (https://github.com/gabymq)
