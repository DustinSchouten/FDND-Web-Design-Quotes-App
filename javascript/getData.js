import { showLoadingState } from '/javascript/states.js'
import { hideLoadingState } from '/javascript/states.js'
import { showEmptyState } from '/javascript/states.js'
import { showErrorState } from '/javascript/states.js'
import { renderQuoteToHTML } from '/javascript/renderQuoteToHTML.js'

let dataLoaded = false;
export function getData() {
  showLoadingState()

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
        showEmptyState()
      }
      else {
        renderQuoteToHTML(data.data)
      }
    })

    .catch((error) => { // If the response status is not OK
      showErrorState()
    })

    .finally(() => { // Always executed
      console.log('Program finished')
    })
}
