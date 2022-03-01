import { hideLoadingState } from '/modules/states.js'
import { showErrorNotLoadedState } from '/modules/states.js'
import { showErrorNoQuotesFoundState } from '/modules/states.js'
import { renderQuoteToHTML } from '/modules/renderQuoteToHTML.js'
import { showLoadingState } from '/modules/states.js'

export function getData() {
  const apiURL = 'https://quote.api.fdnd.nl/v1/quote'
  fetch(apiURL)
    .then((response) => { // Check if the response status is OK, if yes return the response data
      if (response.status >= 200 && response.status <= 299) {
        return response.json()
      }
      else {
        throw Error(response.statusText)
      }
    })

    .then(function(data) {
      hideLoadingState()
      const quotesLength = data.data.length
      if (quotesLength == 0) { // Check if the amount of quotes is zero
        showErrorNoQuotesFoundState()
      }
      else {
        renderQuoteToHTML(data.data)
        document.querySelector('.auto_reload_button').style.display = 'inherit'
      }
    })

    .catch((error) => { // If the response status is not OK
      showErrorNotLoadedState()
    })

    .finally(() => { // Always executed
      console.log('Program finished')
    })
}
