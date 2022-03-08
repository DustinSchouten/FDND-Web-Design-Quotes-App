import { getData } from './modules/get_data.js'
import { handleRoutes } from './modules/routes.js'
import { switchFromDifferentIdealStates } from './modules/states.js'

function main() {
  let generate_quote_button = document.querySelector('.generate_quote_button')
  generate_quote_button.addEventListener('click', getData)
  let auto_reload_button = document.querySelector('.auto_reload_button')
  auto_reload_button.addEventListener('click', switchFromDifferentIdealStates)

  window.location.hash = "#homepage"

  handleRoutes()
}

main()
