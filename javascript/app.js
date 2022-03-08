import { getData } from './modules/get_data.js'
import { handleRoutes } from './modules/routes.js'
import { switchFromDifferentIdealStates } from './modules/states.js'

window.location.hash = "#homepage"

handleRoutes()
