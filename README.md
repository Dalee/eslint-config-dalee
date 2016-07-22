# eslint-config-dalee

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the Dalee IA style


## Install

```
$ npm install --save-dev eslint eslint-config-dalee
```

## Usage

Create a `eslint` configuration file that extends the package (`.eslintrc.json` for example):

```
{
    "extends": "eslint-config-dalee"
}
```

By default it lints against `es5` rules. To enable `es6` rules (inheriting `es5`) use:

```
{
    "extends": "eslint-config-dalee/es6"
}
```

Add a shortcut to `package.json`:

```
{
    "scripts": {
        "lint": "eslint ."
    }
}
```

And finally run it:

```
$ npm run lint
```
