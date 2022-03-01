import { getData } from '/modules/getData.js'
// import { locationHashChanged } from '/modules/states.js'
import { handleRoutes } from '/modules/routes.js'
document.querySelector('button').addEventListener('click', getData)


handleRoutes()
