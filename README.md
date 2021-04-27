# Funda Code Challenge

this is a code challenge that developed for Funda

## tl;dr

- clone project
- Install dependencies by executing `npm install` or `yarn`.
- to start server just use this command `npm start`. it will be run on port 3000. you can define a new port in .env file
- to start server with docker you can use docker file that is provided. it will expose 3000 port. docker production is also the same and just diffrent about the node enviroment that it runs.
- you can also start the project with docker-compose. it also start at port 3000

## tools:

- [vite](https://vitejs.dev/). I could develop this project using a custom webpack, but I prefer this standard boilerplate.
- Tailwind for CSS
- Unit tests with jest and vue-test-utils
- husky and lint stage for make sure all commits are fully linted
- Eslint for better code quality and integrated code
- [Cypress for functional test](https://www.cypress.io/)
- webpack as module bundler
- docker and docker compose
- service worker used for offline usage and cache management

## Demo

the project doesn't have real responsive UI and it's just provide main functionalites and one simple page to show the data. the main route is `/` and you can see the sample home data in here.

## project structure

```

.

├── build # Compiled files (just server file is saved as index.js)

├── public # public assets

├── src # main project logic files

│ ├── assets # main assets files that will be bundled by React and won't be cached (because of hash). I put only main images in here.

│ │ ├── mixin # main mixin file (it's not used here)

│ │ ├── error-handler # main error bundary to catch errors and handle them in one place

│ │ ├── router # main router file and it's configuration


│ ├── services # main app services(usualy use it but we don't need any service in here)

│ ├── Store # main Store. I seperated modules for better readability(because of small usage, it's not really neccessary)

│ ├── Styles # main general Styles.

│ ├── UI # main React components including layouts, pages, logical components that might be used or shared in diffrent pages(common) and stateless UI components that are mainly use to show basic UI (base-components) directives and screens (routes) composables(reusable stuff for other components)

│ ├── utils # utilites that are generaly used in project. here is arrays and strings


├── Dockerfile.prod # docker file to build the production ready version

├── Dockerfile # main docker file to run dev server with dev features (hot reload and ...)

├── docker-compose # docker-compose file to build and run docker file

├── LICENSE

└── README.md

└── ... # other configs for editor config, prettier and ...


```

# final words

Like everything else in this world, there are lots of things that can be improved during a better time. hope you enjoy it and thanks for the opportunity
