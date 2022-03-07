import { Routie } from './routie.js'
import { switchToIdealState } from '/modules/states.js'
import { switchToIdealAutoReloadState } from '/modules/states.js'

export function handleRoutes() {
  routie(
    {
      // 'homepage' : () => {
      // },

      'overviewpage' : () => {
        switchToIdealState() // This function is only needed if there is already switched to the auto reload state
      },

      'overviewpage_auto_reload' : () => {
        switchToIdealAutoReloadState()
      }
    })
}

// export function changeLocationHash() {
//   if (location.hash == '#overviewpage') {
//     setIdealState()
//   }
//   if (location.hash == '#overviewpage_auto_reload') {
//     setIdealAutoReloadState()
//   }
// }
//
// window.onhashchange = changeLocationHash
