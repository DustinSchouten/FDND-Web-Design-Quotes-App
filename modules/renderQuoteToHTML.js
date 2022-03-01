export function renderQuoteToHTML(data) {
  const quotesLength = data.length
  const randomQuoteId = Math.floor(Math.random()*quotesLength)
  const quoteText = data[randomQuoteId].text
  const name = data[randomQuoteId].name
  const bio = data[randomQuoteId].bio
  const tags = data[randomQuoteId].tags
  const avatarImgURL = data[randomQuoteId].avatar

  let avatarImgElement = document.querySelector('.avatar')
  let quotesTextElement = document.querySelector('#quoteText')

  document.querySelector('#quoteText').textContent = quoteText
  document.querySelector('#name').textContent = name
  document.querySelector('#bio').textContent = bio
  document.querySelector('#tags').textContent = tags
  document.querySelector('#personal_info_empty_state').style.display = 'flex'

  // Restart the animation
  quotesTextElement.style.animation = 'none'
  quotesTextElement.offsetHeight
  quotesTextElement.style.animation = null
  // Animation restarted


  if (avatarImgURL != '') { // Check if there is an image
    avatarImgElement.src = avatarImgURL
  }
  else { // If there is no image
    avatarImgElement.src = 'image_skeleton.png'
  }

  quotesTextElement.style.fontSize = '2em' // Set the font size smaller if the quote has much text
  if (quoteText.length > 100) {
    quotesTextElement.style.fontSize = '1.5em'
  }

}
