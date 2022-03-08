import { hideLoadingState } from './states.js'
import { showErrorNotLoadedState } from './states.js'
import { showErrorNoQuotesFoundState } from './states.js'
import { renderQuoteToHTML } from './render_quote_to_html.js'
import { showLoadingState } from './states.js'

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
      const filtered_data = data.data.filter((item) => { // Use filter function to remove all the quotes that has less than or equal to 10 characters;
        return item.text.length > 10
      })
      const quotesLength = filtered_data.length
      if (quotesLength == 0) { // Check if the amount of quotes is zero
        showErrorNoQuotesFoundState()
      }
      else {
        renderQuoteToHTML(filtered_data)
        if (window.location.hash == '#homepage') { //Only relevant if the function is executed at the first time
          window.location.hash = '#overviewpage'
        }
        const auto_reload_button = document.querySelector('.auto_reload_button')
        auto_reload_button.style.display = 'inherit'
      }
    })

    .catch((error) => { // If the response status is not OK
      showErrorNotLoadedState()
    })

    .finally(() => { // Always executed
      console.log('Program finished')
    })
}
