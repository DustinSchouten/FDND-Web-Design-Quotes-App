import { getData } from '/modules/getData.js'

export function showLoadingState() {
  document.querySelector('#textballoon_empty_state').style.display = 'none'
  document.querySelector('#textballoon_loading_state').style.display = 'flex'
  document.querySelector('#personal_info_loading_state').style.display = 'flex'
}

export function hideLoadingState() {
  document.querySelector('#textballoon_empty_state').style.display = 'flex'
  document.querySelector('#textballoon_loading_state').style.display = 'none'
  document.querySelector('#personal_info_loading_state').style.display = 'none'
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
