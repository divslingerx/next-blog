# THIS IS A WORK IN PROGRESS

A simple blogging platform built on NextJs, GraphQL and MongoDB

## Software used for this project

- Next JS
- mongoDB
- Apollo/Graphql
- JSON Web Tokens utilizing access and refresh tokens

## Getting Started

First, open the file .env-sample and add the fields

```bash
BRAND_NAME=
BRAND_TAG=

MONGO_URI=
SECRET=
ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_URL=
```

once all the fields are entered, rename this file to

```bash
mv .env-sample .env
```

First here start the server

```bash
npm run dev
# or
yarn dev
```
