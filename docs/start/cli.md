# Command line tool

## smallfish dev

Start the local development mode and the app will launch. Data requests will take precedence over local mock data. In general, the script will be specified in `package.json`:

```js
{
  Script: {
    ...
    Dev: 'smallfish dev',
    ...
  }
}
```

More ways:

- HMR=7009 smallfish dev : Specify the port. Because smallfish will detect available ports, it is generally not needed.
- ANALYZE=1 smallfish dev: Generate and open code analysis results after the build is complete, for optimization of code size performance, etc.
- HMR=none smallfish dev: turn off hot deployment

In the case of development, modifying the file does not need to refresh the page, the page will be hMR hot loaded, but the model, config/app.js, view/\*\*/config.js will be restarted, it may be slower, need refresh page.

## smallfish build

Build the code into the dist directory. Can be configured in `config/config.js`:

```js
{
  outputPath: './lib', // modify to the ./lib directory
}
```

## smallfish test

The test/**/*.test.js file under the project is executed automatically.

## smallfish lint

Perform code format verification.

- smallfish lint -- --fix Automatically fix eslint issues.
- smallfish lint -- --prettier Automates formatting code with prettier.
- smallfish lint -- --style check contains style files (JS will still check).
- smallfish lint -- --staged only detects the code to be submitted, it is recommended to configure it in the precommit script.
- smallfish lint -- --glob [pattern] Specifies the content of the test, for chair, the default is src and test.
- smallfish lint -- --quiet Does not display warning.

## smallfish i18n

Extract the copy in the project and replace it with a placeholder that supports multiple languages.

> Stay tuned