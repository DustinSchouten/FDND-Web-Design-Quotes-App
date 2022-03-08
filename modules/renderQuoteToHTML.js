export function renderQuoteToHTML(data) {
  const quotesLength = data.length
  const randomQuoteId = Math.floor(Math.random()*quotesLength)
  const quoteText = data[randomQuoteId].text
  const name = data[randomQuoteId].name
  const bio = data[randomQuoteId].bio
  const tags = data[randomQuoteId].tags
  const avatarImgURL = data[randomQuoteId].avatar

  let avatarImgElement = document.querySelector('.avatar')
  let quoteTextElement = document.querySelector('#quoteText')
  let nameElement = document.querySelector('#name')
  let bioElement = document.querySelector('#bio')
  let tagsElement = document.querySelector('#tags')
  let personal_info_empty_stateElement = document.querySelector('#personal_info_empty_state')

  // Set the avatarImgElement. If the avatarImgURL is '', set the src to image_skeleton.png
  avatarImgElement.src = (avatarImgURL || 'image_skeleton.png');

  quoteTextElement.textContent = quoteText
  nameElement.textContent = name
  bioElement.textContent = bio
  tagsElement.textContent = tags
  personal_info_empty_stateElement.style.display = 'flex'

  // Restart the animation
  quoteTextElement.style.animation = 'none'
  quoteTextElement.offsetHeight
  quoteTextElement.style.animation = null
  // Animation restarted

  quoteTextElement.style.fontSize = '1.75em' // Set the font size smaller if the quote has much text
  if (quoteText.length > 100) {
    quoteTextElement.style.fontSize = '1.4em'
  }

}
