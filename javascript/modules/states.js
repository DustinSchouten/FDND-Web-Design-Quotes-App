import { getData } from './get_data.js'

const textballoon_empty_state = document.querySelector('#textballoon_empty_state')
const textballoon_loading_state = document.querySelector('#textballoon_loading_state')
const personal_info_loading_state = document.querySelector('#personal_info_loading_state')
const error_no_quotes_found_state = document.querySelector('#error_no_quotes_found_state')
const error_not_loaded_state = document.querySelector('#error_not_loaded_state')

let auto_reloader = undefined
const generate_quote_button = document.querySelector('.generate_quote_button')
const auto_reload_button = document.querySelector('.auto_reload_button')
generate_quote_button.addEventListener('click', getData)
auto_reload_button.addEventListener('click', switchFromDifferentIdealStates)
const auto_reload_button_rotating_img = auto_reload_button.querySelector('img')
const progress_bar = document.querySelector('.progress_bar')

export function showLoadingState() {
  textballoon_empty_state.style.display = 'none'
  textballoon_loading_state.style.display = 'flex'
  personal_info_loading_state.style.display = 'flex'
}

export function hideLoadingState() {
  textballoon_empty_state.style.display = 'flex'
  textballoon_loading_state.style.display = 'none'
  personal_info_loading_state.style.display = 'none'
}

export function showErrorNoQuotesFoundState() {
  error_no_quotes_found_state.style.display = 'inherit'
  window.location.hash = '#errorpage'
}

export function showErrorNotLoadedState() {
  error_not_loaded_state.style.display = 'inherit'
  window.location.hash = '#errorpage'
}

export function switchFromDifferentIdealStates() {
  if (window.location.hash == '#overviewpage') {
    window.location.hash = '#overviewpage_auto_reload'
  }
  else {
    window.location.hash = '#overviewpage'
  }
}

export function switchToIdealAutoReloadState() {
  auto_reloader = setInterval(getData, 5000)
  generate_quote_button.style.display = 'none' // Remove the generate quote button because the quotes will be now auto generated
  auto_reload_button_rotating_img.style.animationName = 'rotatingRefreshIcon'
  progress_bar.style.animationName = 'progressBar'
}

export function switchToIdealState() {
  clearInterval(auto_reloader)
  generate_quote_button.style.display = 'inherit' // If it's set to none, set it back to inherit
  auto_reload_button_rotating_img.style.animationName = 'none' // Stop the rotating arrows animation
  progress_bar.style.animationName = 'none '// Stop the progress bar animation
}
