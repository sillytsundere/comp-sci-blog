# Tech Talk: A little comp-sci blog

## Descripton



## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To run this application, first download the repository and open in your preferred code editor. Run `npm install` to download the necessary npm package dependencies. These dependencies can be found listed in the package.json file.

Before entering your MySQL shell you will need to create your own dotenv file with the following information:

    DB_NAME: 'blog_db'
    DB_USER: '(your MySQL username)'
    DB_PASSWORD: '(your MySQL password)'
    SESSION_SECRET='(the session secret)'

This is necessary to be able to connect to the database while also keeping your private information separate from the code.

In your MySQL shell create the database locally by running `source db/schema.sql` this will also initiate use of the database as the schema.sql file also contains the code to focus on the correct database; `USE (database)_db`.

After closing the MySQL shell, navigate to the main repository in the command line and run `npm run seed` to seed the database and then run `npm run start` to initialize the application.

## Usage

The deployed site can be viewed [here]().


## Credits

Badges sourced from: [Awesome Badges](https://dev.to/envoy_/150-badges-for-github-pnk)

## License

MIT License

## Badges

![Static Badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

![Static Badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

![Static Badge](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

![Static Badge](https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue)

![Static Badge](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)

![Static Badge](https://img.shields.io/badge/Handlebars%20js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black)

![Static Badge](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

![Static Badge](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)

![Static Badge](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

## Future Developments

These are a few of the application features that we would like to add in the future:

- 