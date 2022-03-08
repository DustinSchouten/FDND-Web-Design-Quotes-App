import { getData } from './modules/get_data.js'
import { handleRoutes } from './modules/routes.js'
import { switchFromDifferentIdealStates } from './modules/states.js'

function main() {

  window.location.hash = "#homepage"

  handleRoutes()
}

main()
