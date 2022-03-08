import { Routie } from './routie.js'
import { switchToIdealState } from './states.js'
import { switchToIdealAutoReloadState } from './states.js'

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
