export function showLoadingState() {
  document.querySelector('#textballoon_normal_state').style.display = 'none'
  document.querySelector('#textballoon_loading_state').style.display = 'flex'
  document.querySelector('#personal_info_loading_state').style.display = 'flex'
}

export function hideLoadingState() {
  document.querySelector('#textballoon_normal_state').style.display = 'flex'
  document.querySelector('#textballoon_loading_state').style.display = 'none'
  document.querySelector('#personal_info_loading_state').style.display = 'none'
}

export function showEmptyState() {
  document.querySelector('#empty_state').style.display = 'inherit'
}

export function showErrorState() {
  document.querySelector('#error_state').style.display = 'inherit'
}
