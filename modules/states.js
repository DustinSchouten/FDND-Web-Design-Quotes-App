import { getData } from '/modules/getData.js'

let textballoon_empty_state = document.querySelector('#textballoon_empty_state')
let textballoon_loading_state = document.querySelector('#textballoon_loading_state')
let personal_info_loading_state = document.querySelector('#personal_info_loading_state')

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
  document.querySelector('#error_no_quotes_found_state').style.display = 'inherit'
}

export function showErrorNotLoadedState() {
  document.querySelector('#error_not_loaded_state').style.display = 'inherit'
}


let auto_reloader
let generate_quote_button = document.querySelector('.generate_quote_button')
let auto_reload_button = document.querySelector('.auto_reload_button')
let progress_bar = document.querySelector('.progress_bar')

export function setIdealAutoReloadState() {
  auto_reloader = setInterval(getData, 5000)
  generate_quote_button.style.display = 'none'
  auto_reload_button.querySelector('img').style.animationName = 'rotatingRefreshIcon'
  progress_bar.style.animationName = 'progressBar'
  auto_reload_button.querySelector('a').href = '#ideal_state'
}

export function setIdealState() {
  clearInterval(auto_reloader)
  generate_quote_button.style.display = 'inherit'
  auto_reload_button.querySelector('img').style.animationName = 'none'
  progress_bar.style.animationName = 'none'
  auto_reload_button.querySelector('a').href = '#ideal_auto_reload_state'
}
