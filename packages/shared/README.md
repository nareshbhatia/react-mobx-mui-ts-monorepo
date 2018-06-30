Reusable Component Library
==========================

Testing
-------
Note that `jest` and `ts-jest` dependency versions should match exactly as those of create-react-app in the `myapp` folder.

```bash
$ yarn test
$ yarn storybook
```

Linting
-------
```bash
$ yarn lint
```

Note: Windows users need to remove the quotes from the lint command in `package.json`. So replace

    "lint": "tslint --project tsconfig.json -t codeFrame 'src/**/*.ts*'",

with

    "lint": "tslint --project tsconfig.json -t codeFrame src/**/*.ts*",

Building
--------
```bash
$ yarn build
```

The output is stored in the `dist` folder.
