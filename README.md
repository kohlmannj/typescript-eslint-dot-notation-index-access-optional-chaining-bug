<!--
If you have a problem with a specific rule, please begin your issue title with [rulename] to make it easier to search for.
I.e. "[no-unused-vars] False positive when fooing the bar"

Please don't ignore this template.

If you ignore it, we're just going to respond asking you to fill it out, which wastes everyone's time.
The more relevant information you can include, the faster we can find the issue and fix it without asking you for more info.
-->

<!--
Are you opening an issue because the rule you're trying to use is not found?
🚨 STOP 🚨 𝗦𝗧𝗢𝗣 🚨 𝑺𝑻𝑶𝑷 🚨
1) Check the releases log: https://github.com/typescript-eslint/typescript-eslint/releases
    -  If the rule isn't listed there, then chances are it hasn't been released to the main npm tag yet.
2) Try installing the `canary` tag: `npm i @typescript-eslint/eslint-plugin@canary`.
    - The canary tag is built for every commit to master, so it contains the bleeding edge build.
3) If ESLint still can't find the rule, then consider reporting an issue.
-->

- [x] I have tried restarting my IDE and the issue persists.
- [x] I have updated to the latest version of the packages.
- [x] I have [read the FAQ](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md) and my problem is not listed.

**Repro**

<!--
Include a ***minimal*** reproduction case.
The more irrelevant code/config you give, the harder it is for us to investigate.

Please consider creating an isolated reproduction repo to make it easy for the volunteer maintainers debug your issue.
-->

```JSON
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.json"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "@typescript-eslint/dot-notation": [
      "error",
      {
        "allowIndexSignaturePropertyAccess": true
      }
    ]
  }
}

```

```TS
interface Nested {
  property: string;

  [key: string]: number | string;
}

interface Dingus {
  nested: Nested;
}

let dingus: Dingus | undefined;

dingus?.nested.property;
dingus?.nested['hello'];
```

<!--
Also include your tsconfig, if you're using type-aware linting
-->

```JSON
{
  "compilerOptions": {
    /* Basic Options */
    "lib": ["DOM", "DOM.Iterable", "ES2020"],
    "module": "ES2020",
    "target": "ES2020",

    /* Module Resolution Options */
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "preserveSymlinks": true,

    /* Experimental Options */
    "experimentalDecorators": true,

    /* Advanced Options */
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,

    /* Strict Type-Checking Options */
    "strict": true,

    /* Additional Checks */
    "noFallthroughCasesInSwitch": true,
    "noImplicitReturns": true,
    "noPropertyAccessFromIndexSignature": true,
    "noUncheckedIndexedAccess": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,

    /* Incremental Build Options */
    "incremental": true,

    "baseUrl": "src",
    "noEmit": true
  }
}
```

**Expected Result**

<!--
What did you expect to happen?
Please be specific here - list the exact lines and messages you expect.
-->

The test TS code does not contain any ESLint errors.

**Actual Result**

<!--
What actually happened?
Please be specific here - list the exact lines and messages that caused errors
-->

The last line of the test TS code, `dingus?.nested['hello'];`, has this ESLint error:

> ["hello"] is better written in dot notation.eslint@typescript-eslint/dot-notation

**Additional Info**

This GitHub repo contains this same test code and configs: https://github.com/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug

This is a reproduction of the issue that @eugene-stativka noted here: https://github.com/typescript-eslint/typescript-eslint/pull/3361#issuecomment-848858332

<!--
Did eslint throw an exception?

Please run your lint again with the --debug flag, and dump the output below.
i.e. eslint --ext ".ts,.js" src --debug
-->

<details><summary>Output from <code>eslint --ext ".ts" src --debug</code>

Note: You can rerun this command in https://github.com/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug with the `yarn lint:debug` script.

```
➜  typescript-eslint-dot-notation-index-access-optional-chaining-bug git:(main) ✗ yarn lint:debug
yarn run v1.22.10
$ yarn lint  --debug
$ eslint --ext ".ts" src --debug
  eslint:cli CLI args: [ '--ext', '.ts', 'src', '--debug' ] +0ms
  eslint:cli Running on files +4ms
  eslintrc:config-array-factory Loading JSON config file: /Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug/package.json +0ms
  eslintrc:ignore-pattern Create with: [ IgnorePattern { patterns: [ '/**/node_modules/*' ], basePath: '/Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug', loose: false } ] +0ms
  eslintrc:ignore-pattern   processed: { basePath: '/Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug', patterns: [ '/**/node_modules/*' ] } +1ms
  eslintrc:ignore-pattern Create with: [ IgnorePattern { patterns: [ '/**/node_modules/*' ], basePath: '/Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug', loose: false } ] +1ms
  eslintrc:ignore-pattern   processed: { basePath: '/Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug', patterns: [ '/**/node_modules/*' ] } +0ms
  eslint:file-enumerator Start to iterate files: [ 'src' ] +0ms
  eslint:file-enumerator Directory: /Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug/src +1ms
  eslint:file-enumerator Enter the directory: /Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug/src +0ms
  eslintrc:cascading-config-array-factory Load config files for /Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug/src. +0ms
  eslintrc:cascading-config-array-factory No cache found: /Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug/src. +0ms
  eslintrc:config-array-factory Config file not found on /Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug/src +5ms
  eslintrc:cascading-config-array-factory No cache found: /Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug. +1ms
  eslintrc:config-array-factory Loading legacy config file: /Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug/.eslintrc +0ms
  eslintrc:config-array-factory Config file found: /Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug/.eslintrc +19ms
  eslintrc:config-array-factory Loading parser "@typescript-eslint/parser" from /Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug/.eslintrc +1ms
  eslintrc:config-array-factory Loaded: @typescript-eslint/parser@4.26.1 (/Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug/node_modules/@typescript-eslint/parser/dist/index.js) +1ms
  eslintrc:config-array-factory Loading plugin "@typescript-eslint" from /Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug/.eslintrc +239ms
  eslintrc:config-array-factory Loaded: @typescript-eslint/eslint-plugin@4.26.1 (/Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug/node_modules/@typescript-eslint/eslint-plugin/dist/index.js) +1ms
  eslintrc:config-array-factory Plugin /Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug/node_modules/@typescript-eslint/eslint-plugin/dist/index.js loaded in: 152ms +152ms
  eslintrc:cascading-config-array-factory No cache found: /Users/joseph/Sites/kohlmannj. +413ms
  eslintrc:config-array-factory Config file not found on /Users/joseph/Sites/kohlmannj +0ms
  eslintrc:cascading-config-array-factory No cache found: /Users/joseph/Sites. +0ms
  eslintrc:config-array-factory Config file not found on /Users/joseph/Sites +0ms
  eslintrc:cascading-config-array-factory No cache found: /Users/joseph. +0ms
  eslintrc:cascading-config-array-factory Stop traversing because of considered root. +0ms
  eslintrc:cascading-config-array-factory Configuration was determined: ConfigArray(2) [ { type: 'config', name: 'DefaultIgnorePattern', filePath: '', criteria: null, env: undefined, globals: undefined, ignorePattern: IgnorePattern { patterns: [Array], basePath: '/Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug', loose: false }, noInlineConfig: undefined, parser: undefined, parserOptions: undefined, plugins: undefined, processor: undefined, reportUnusedDisableDirectives: undefined, root: undefined, rules: undefined, settings: undefined }, { type: 'config', name: '.eslintrc', filePath: '/Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug/.eslintrc', criteria: null, env: undefined, globals: undefined, ignorePattern: undefined, noInlineConfig: undefined, parser: { error: null, filePath: '/Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug/node_modules/@typescript-eslint/parser/dist/index.js', id: '@typescript-eslint/parser', importerName: '.eslintrc', importerPath: '/Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug/.eslintrc' }, parserOptions: { project: 'tsconfig.json' }, plugins: { '@typescript-eslint': [Object] }, processor: undefined, reportUnusedDisableDirectives: undefined, root: undefined, rules: { '@typescript-eslint/dot-notation': [Array] }, settings: undefined } ] on /Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug/src +2ms
  eslintrc:ignore-pattern Create with: [ IgnorePattern { patterns: [ '/**/node_modules/*' ], basePath: '/Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug', loose: false } ] +418ms
  eslintrc:ignore-pattern   processed: { basePath: '/Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug', patterns: [ '/**/node_modules/*' ] } +0ms
  eslintrc:ignore-pattern Check {
  filePath: '/Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug/src/index.ts',
  dot: false,
  relativePath: 'src/index.ts',
  result: false
} +1ms
  eslint:file-enumerator Yield: index.ts +418ms
  eslintrc:cascading-config-array-factory Load config files for /Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug/src. +2ms
  eslintrc:cascading-config-array-factory Cache hit: /Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug/src. +0ms
  eslint:cli-engine Lint /Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug/src/index.ts +0ms
  eslint:linter Linting code for /Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug/src/index.ts (pass 1) +0ms
  eslint:linter Verify +0ms
  eslint:linter With ConfigArray: /Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug/src/index.ts +0ms
  eslint:linter Generating fixed text for /Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug/src/index.ts (pass 1) +639ms
  eslint:source-code-fixer Applying fixes +0ms
  eslint:source-code-fixer shouldFix parameter was false, not attempting fixes +0ms
  eslint:file-enumerator Leave the directory: /Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug/src +639ms
  eslint:file-enumerator Complete iterating files: ["src"] +0ms
  eslint:cli-engine Linting complete in: 1058ms +639ms

/Users/joseph/Sites/kohlmannj/typescript-eslint-dot-notation-index-access-optional-chaining-bug/src/index.ts
  14:16  error  ["hello"] is better written in dot notation  @typescript-eslint/dot-notation

✖ 1 problem (1 error, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
➜  typescript-eslint-dot-notation-index-access-optional-chaining-bug git:(main) ✗ 
```

**Versions**

| package                            | version |
| ---------------------------------- | ------- |
| `@typescript-eslint/eslint-plugin` | `4.26.1` |
| `@typescript-eslint/parser`        | `4.26.1` |
| `TypeScript`                       | `4.3.2` |
| `ESLint`                           | `7.28.0` |
| `node`                             | `14.5.0` |
