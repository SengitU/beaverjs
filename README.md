# Kavun

Kavun is a light weight spec runner library for Javascript.

### Usage Examples

#### Unit

A sync example for unit

```js
const assert = require('assert');
const { unit } = require('kavun');

unit('Example unit', () => {
  const expected = 2;
  const actual = 2;
  assert.equal(actual, expected);
});
```

An async example with async/await

```js
const assert = require('assert');
const { unit } = require('kavun');

unit('Example async unit with async / await', async () => {
  const actual = () => new Promise(resolve => resolve(true));
  const expected = true;
  const result = await actual();
  
  assert.equal(expected, result);
});
```

An async example with Promise, don't forget to return the `promise`

```js
const assert = require('assert');
const { unit } = require('kavun');

unit('Example async unit with async / await', async () => {
  const actual = () => new Promise(resolve => resolve(true));
  const expected = true;
  
  return actual().then(result => assert.equal(expected, result));
});
```

#### Spec

```js
const assert = require('assert');
const { spec, unit } = require('kavun');

spec('Example Spec', () => {
  unit('unit', () => {
    const expected = 2;
    const actual = 2;
    assert.equal(actual, expected);
  });

  spec('Async', () => {
    unit('with async / await', async () => {
      const actual = () => new Promise(resolve => resolve(true));
      const expected = true;

      const result = await actual();

      assert.equal(expected, result)
    });
  });
});

```

Npm registry will be added soon.

To contribute, clone the repository then;

`npm i`

To run the tests;

`npm test`

### Install/setup, via nix

The project can be built and run locally using nix, to reproduce the environment.
1) Make sure to have nix installed (see [nixos.org/nix][nix]) and then
1) `cd <project-dir>`
1) run `nix-shell` (or simply `nix-shell`) and you should have the blog

[nix]: http://nixos.org/nix/
