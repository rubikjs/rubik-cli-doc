

## Usage

```bash
$ npx create-rubik-app my-app
```

## Command

```bash
  rubik build          Build.
  rubik check-package  Check the package.json file is changed from pre version.
  rubik commitlint     Commit lint.
  rubik lint           Eslint.
  rubik serve          Start a http server.
  rubik stylelint      Style lint.
```

## Structure

### App structure

```
├── src
│       │
│       ├── page
│       │       ├── app
│       │       │       ├── index.html
│       │       │       ├── index.js
│       │       │       ├── style.css
│       │       │       └── ...
│       │       ├── home
│       │       
│       ├── static (will be copied to the dist directory directly)
│       │       └── jquery
│       │
│       │
│       ├── any-other
│
│
├── mock
│       └── index.js
│
│
├── rubik.config.js (optional)
├── webpack.config.js (optional)
├── .eslintrc.js (optional)
├── .stylelintrc.js (optional)
├── commitlint.config.js (optional)
│

```

### Library structure

```
├── demo
│       ├── index.html
│       └── index.js
├── src
│       └── index.js
│
├── same as app

```
