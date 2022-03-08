import { getData } from './getData.js'

let textballoon_empty_state = document.querySelector('#textballoon_empty_state')
let textballoon_loading_state = document.querySelector('#textballoon_loading_state')
let personal_info_loading_state = document.querySelector('#personal_info_loading_state')
let error_no_quotes_found_state = document.querySelector('#error_no_quotes_found_state')
let error_not_loaded_state = document.querySelector('#error_not_loaded_state')

let auto_reloader
let generate_quote_button = document.querySelector('.generate_quote_button')
let auto_reload_button = document.querySelector('.auto_reload_button')
let auto_reload_button_rotating_img = auto_reload_button.querySelector('img')
let progress_bar = document.querySelector('.progress_bar')

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
