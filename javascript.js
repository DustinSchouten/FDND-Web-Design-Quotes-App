document.querySelector('button').addEventListener('click',generateQuote)

function generateQuote() {
  showLoadingState()

  const apiURL = 'https://quote.api.fdnd.nl/v1/quote'
  fetch(apiURL)
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      }
      else {
        throw Error(response.statusText);
      }
    })
    .then(function(data) {
      hideLoadingState()
      const quotesLength = data.length
      if (quotesLength == 0) {
        showEmptyState()
      }
      else {
        renderQuoteToHTML(data.data)
      }
    })
    .catch((error) => {
      showErrorState()
    })
    .finally(() => {
      console.log('Program finished');
    });
}

function renderQuoteToHTML(data) {
  const quotesLength = data.length
  const randomQuoteId = Math.floor(Math.random()*quotesLength);
  const quoteText = data[randomQuoteId].text
  const name = data[randomQuoteId].name
  const bio = data[randomQuoteId].bio
  const tags = data[randomQuoteId].tags
  const avatarImgURL = data[randomQuoteId].avatar
  document.querySelector('#quoteText').textContent = quoteText
  document.querySelector('#name').innerHTML =  name
  document.querySelector('#bio').innerHTML = bio
  document.querySelector('#tags').innerHTML = tags
  document.querySelector('#personal_info_normal_state').style.display = 'flex'

  //Restart the animation
  document.querySelector('#quoteText').style.animation = 'none'
  document.querySelector('#quoteText').offsetHeight
  document.querySelector('#quoteText').style.animation = null
  if (avatarImgURL != '') { // If there is no image
    document.querySelector('#avatar').src = avatarImgURL
  }
  else {
    document.querySelector('#avatar').src = 'image_skeleton.png'
  }

  if (quoteText.length > 100) { // Set the font size smaller if the quote has much text
    document.querySelector('#quoteText').style.fontSize = '1.5em'
  }
  else {
    document.querySelector('#quoteText').style.fontSize = '2em'
  }
}

function showLoadingState() {
  document.querySelector('#textballoon').style.display = 'none'
  document.querySelector('#textballoon_loading_state').style.display = 'flex'
  document.querySelector('#personal_info_loading_state').style.display = 'flex'
}

function hideLoadingState() {
  document.querySelector('#textballoon').style.display = 'flex'
  document.querySelector('#textballoon_loading_state').style.display = 'none'
  document.querySelector('#personal_info_loading_state').style.display = 'none'
}

function showEmptyState() {
  document.querySelector('#empty_state').style.display = 'inherit'
}

function showErrorState() {
  document.querySelector('#error_state').style.display = 'inherit'
}
