import { Routie } from './routie.js'
import { switchToIdealState } from './states.js'
import { switchToIdealAutoReloadState } from './states.js'

export function handleRoutes() {
  routie(
    {
      'overviewpage' : () => {
        switchToIdealState()
      },

      'overviewpage_auto_reload' : () => {
        switchToIdealAutoReloadState()
      }

    })
}
