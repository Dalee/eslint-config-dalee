# eslint-config-dalee

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the Dalee IA style


## Install

```
$ npm install --save-dev eslint eslint-config-dalee
```

## Usage

Create a eslint configuration file that extends the package (`.eslintrc.json` for example):

```
{
    "extends": "eslint-config-dalee"
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
