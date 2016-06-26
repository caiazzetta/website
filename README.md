# App

This app is an webapp, using Bower for frontend packages, Material Design for a frontend framework, and Font Awesome for icons.

## Getting started

Requires `node` and `npm` installed globally. Now, diving in...

```sh
$ npm install                                         <-- install Node dependencies
$ bower install                                       <-- install Bower dependencies
```

### Running the app

#### Environment Variables

Environment variables handle all app settings. You might want to use [smartcd](https://github.com/cxreg/smartcd) to avoid conflicts locally. Vars should default to 'undefined' unless otherwise noted. All are required.

- PORT (development only; default: 3700)
- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY

#### Executing

```sh
$ npm start                                           <-- start development server
```

Finally, open http://local.iazzetta.eu:3700 in your browser.
