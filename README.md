<h2 align="center">
  <img src="https://img.shields.io/badge/Next%20Level%20Week-%234-00b8d3?style=for-the-badge" alt="Evento Next Level Week 4" />
  <img src="https://img.shields.io/badge/web%3F-no-00b8d3?style=for-the-badge" alt="Sistema web Yes" />
  <img src="https://img.shields.io/badge/server%3F-yes-00b8d3?style=for-the-badge" alt="Server No" />
  <img src="https://img.shields.io/badge/app mobile%3F-NO-00b8d3?style=for-the-badge" alt="Aplicativo mobile No" />
  <img src="https://img.shields.io/github/license/matheusfelipeog/proffy?color=00b8d3&style=for-the-badge" alt="License" />
</h2>

<h1 align="center">
  <img src="https://crmpiperun.com/wp-content/uploads/2016/11/NPS.jpg" alt="NPS" width="500px" />
</h1>


## 📌 Index

- [About the project](#-About-the-project)
- [Techs](#-techs)
- [Backend Routes](#-Backend-Routes)
- [Installation and start](#-Installation-and-start)
- [Contributions](#-Contributions)
- [License](#-license)


## ❔ About the project

A backend NPS for send surveys and to create reports.

This project is on development in the [Next Level Week 4](https://nextlevelweek.com/inscricao/4)

## 🍃 Backend Routes

- http://localhost:3333/users -> POST create
- http://localhost:3333/send/mail -> POST create user survey
- http://localhost:3333/surveys -> GET all surveys
- http://localhost:3333/surveys -> POST create survey
- http://localhost:3333/answers/:value -> GET user value survey
- http://localhost:3333/nps/:survey_id -> GET calculate NPS

## 🛠 Techs

This project was developed using the following technologies:

- [TypeScript](https://www.typescriptlang.org/)
- [Handlebars](https://handlebarsjs.com/)
- [Nodemailer](https://nodemailer.com/)
- [Handlebars](https://handlebarsjs.com/)
- [Typeorm](https://typeorm.io/#/)
- [Jest](https://jestjs.io/)

## ⚙ Installation and start
```bash
# Clone this repository
$ git clone https://github.com/Olliveer/apinlw.git
# Go into the repository

# Install dependencies
$ yarn install

# copy file .env.example and change URL
$ URL_MAIL=URL/answers

# Start server
$ yarn dev

# running on port 3333
```

## ⚙ Unitary tests
```
$ yarn test
```

## 🤝 Contributions

## 📜 License

The project is under license [MIT](./LICENSE) 