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

First, you must add your database credentials, your GitHub app credentials (create a OAuth app at https://github.com/settings/developers), and a JSON webtokens secret key to the `/server/config/config.js` file. You have to create this file yourself. Here is a template of what this file looks like:

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