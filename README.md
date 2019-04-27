# Orbit
Orbit is a beginner-friendly community for developers.

## Screenshots

{{ Coming soon }}

## Technologies

- Node.js
- React.js
- PostgreSQL

## Installation and setup

Some initial setup is required before running this project.

The config file is located in `/server/config/config.js`. This file contains the following: 

- Database credentials
- Github OAuth app credentials
- JSON Webtokens secret key

You have to create this file yourself. Here is a template of what this file looks like:

```js
module.exports = {
  database: {
    host: {HOSTNAME},
    dialect: "postgres",
    database: {DATABASE},
    user: {USER},
    port: {PORT},
    password: {PASSWORD},
    uri: `postgres:/{USER}:{PASSWORD}@{HOST}:{PORT}/{DATABASE}`
  },
  github: {
    client_id: {GITHUB_ID},
    client_secret: {GITHUB_SECRET}
  },
  auth: {
    jwtSecret: {SECRET}
  }
};
```

To run this project, first install all dependencies:

```sh
npm run c-install
```

After installation has completed, run the app in development mode:

```sh
npm run c-start-dev
```

Happy coding!

## Try it out

This project will soon be hosted on Heroku.

## Contributors

  **Manaus Transez**
  
-  [Website](https://manatran.github.io/)
-  [Twitter](https://twitter.com/manaus_t)

## License

Licensed under the MIT license.