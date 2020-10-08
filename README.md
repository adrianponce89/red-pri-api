# red-pri-api

This is a MERN project created using:

- [Nodejs](https://nodejs.org/) and [Express](https://expressjs.com/)
- [React](https://reactjs.org/) with [NextJS](https://nextjs.org/docs) for Server-Side Rendering
- [React Redux](https://react-redux.js.org/)
- [Mongodb](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- [Passportjs](http://www.passportjs.org/packages/passport-jwt/)
- [React Boostrap](https://react-bootstrap.github.io/)
- [Styled Components](https://styled-components.com/)

It's a app where you can:

- Find profesionals listed by categories (profesion, speciality, themes)
- See listed profesionals on googlemaps
- Read articles
- Register with email
- Add, remove, edit users
- Add, remove, edit rich text articles, with editor included

A working version of the project can be seen at:

[https://redprimerainfancia.com/](https://redprimerainfancia.com/)

![Example_Image_1](https://github.com/adrianponce89/red-pri-api/blob/master/src/public/imgs/Find_Profesionals.png)
![Example_Image_2](https://github.com/adrianponce89/red-pri-api/blob/master/src/public/imgs/Results_Profesionals.png)
![Example_Image_3](https://github.com/adrianponce89/red-pri-api/blob/master/src/public/imgs/Results_Profesionals_map.png)
![Example_Image_4](https://github.com/adrianponce89/red-pri-api/blob/master/src/public/imgs/Articles.png)
![Example_Image_4](https://github.com/adrianponce89/red-pri-api/blob/master/src/public/imgs/Create_Article.png)

# How to run this project locally

- Clone this repo
- Run `npm install`
- Add a `.env` file on the root of the project with the next variables:

```
MONGO_URI=<your_mongo_uri>

# Passport
SESSION_KEY=<your_session_key>
JWT_SECRET=<your_jwt_secret>

# Port
PORT=3000

#
TINY_API_KEY=<your_tiny_api_key>

#Server
DEV_SERVER=http://localhost:3000
PROD_SERVER=<your_prod_server>
DOMAIN_URL=<your_domain_url>

#Imgur
IMGUR_CLIENT=<your_imgur_client>
IMGUR_API_URL=<your_imgur_api_url>
IMGUR_SECRET=<your_imgur_secret>

#Google Maps
GOOGLE_MAPS_API_KEY=<your_google_maps_api_key>
```

- Run `npm run dev` to start the web server. This will open the landing page

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run next`

Builds the app for development to the `src/.next` folder.<br />

### `npm run build`

Builds the app for production to the `src/.next` folder.<br />

### `npm start`

Runs the app for production mode.<br /> The proyect must have been build before<br />
