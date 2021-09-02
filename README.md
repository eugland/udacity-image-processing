# Udacity-Image-Processing-API


## Overview
This image allows user to resize 6 presented image. Once a new resize has been recieved, it will be cached on system's file system 
such that when future user request the same size, it will get from the cache.

## To run
- to run a dev server: `npm run start`, then check your [localhost](http://localhost)

- to test: `npm run test`

- to build: `npm run build`

- to build and run prod `npm run prod`

## Built with
- Typscript
- Nodejs
- Sharp
- Jest
- ejs
- Morgan

## Walk through
### 1. Homepage endpoint
`http://localhost:80`

Images are presented here

### 2. Resize endpoint
Us this endpoint to resize your image to 500 x 400, or change the dimension parameter to your liking.
`http://localhost:5000/resize?w=500&h=400`

## Middlewwares to be aware of
- morgan logger,
- PageNotFound Controller 

