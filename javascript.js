document.querySelector('button').addEventListener('click',renderQuoteToHTML)
// document.querySelector('button').addEventListener('click',generateQuote)

function generateQuote() {
  const apiURL = 'https://quote.api.fdnd.nl/v1/quote'
  fetch(apiURL)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        renderQuoteToHTML(data.data)
    })
}

function renderQuoteToHTML() {
  // const quotesLength = data.length
  // const randomQuoteId = Math.floor(Math.random()*quotesLength);
  // const quoteText = data[randomQuoteId].text
  // const name = data[randomQuoteId].name
  // const bio = data[randomQuoteId].bio
  // const tags = data[randomQuoteId].tags

  const name = 'Dustin Schouten' // remove later
  const bio = 'The best man!!!' // remove later
  const tags = '#tag tag' // remove later

  // const avatarImgURL = data[randomQuoteId].avatar
  // document.querySelector('#quoteText').textContent = randomQuoteId.toString() + quoteText
  document.querySelector('#name').innerHTML = '<strong>Name: </strong>' + name
  document.querySelector('#bio').innerHTML = '<strong>Bio: </strong>' + bio
  document.querySelector('#tags').innerHTML = tags

  //Restart the animation
  document.querySelector('#quoteText').style.animation = 'none';
  document.querySelector('#quoteText').offsetHeight;
  document.querySelector('#quoteText').style.animation = null;
  // document.querySelector('#avatar').src = avatarImgURL
  if (quoteText.length > 100) {
    document.querySelector('#quoteText').style.fontSize = '1.5em';
  }
  else {
    document.querySelector('#quoteText').style.fontSize = '2em';
  }
}
