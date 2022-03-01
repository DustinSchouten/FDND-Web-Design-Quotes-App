import { Routie } from './routie.js'
import { getData } from '/modules/getData.js'
import { showLoadingState } from '/modules/states.js'
import { setIdealState } from '/modules/states.js'
import { setIdealAutoReloadState } from '/modules/states.js'

export function handleRoutes() {
  routie(
    {
      'ideal_state' : () => {
        showLoadingState()
        getData()
      },

      'ideal_auto_reload_state' : () => {
        showLoadingState()
        getData()
      }
    })
}

export function changeLocationHash() {
  if (location.hash == '#ideal_state') {
    setIdealState()
  }
  if (location.hash == '#ideal_auto_reload_state') {
    setIdealAutoReloadState()
  }
}

window.onhashchange = changeLocationHash
