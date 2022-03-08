export function renderQuoteToHTML(data) {
  const quotes_length = data.length
  const random_quote_id = Math.floor(Math.random()*quotes_length)
  const quote_text = data[random_quote_id].text
  const name = data[random_quote_id].name
  const bio = data[random_quote_id].bio
  const tags = data[random_quote_id].tags
  const avatar_img_url = data[random_quote_id].avatar

  const avatar_img_element = document.querySelector('.avatar')
  const quote_text_element = document.querySelector('#quote_text')
  const name_element = document.querySelector('#name')
  const bio_element = document.querySelector('#bio')
  const tags_element = document.querySelector('#tags')
  const personal_info_ideal_state_element = document.querySelector('#personal_info_ideal_state')

  // Set the avatar_img_element. If the avatar_img_url is '', set the src to image_skeleton.png
  avatar_img_element.src = (avatar_img_url || 'images/image_skeleton.png');
  quote_text_element.textContent = quote_text
  name_element.textContent = name
  bio_element.textContent = bio
  tags_element.textContent = tags
  personal_info_ideal_state_element.style.display = 'flex'

  // Restart the animation
  quote_text_element.style.animation = 'none'
  quote_text_element.offsetHeight
  quote_text_element.style.animation = null
  // Animation restarted

  quote_text_element.style.fontSize = '1.75em' // Set the font size smaller if the quote has much text
  if (quote_text.length > 100) {
    quote_text_element.style.fontSize = '1.4em'
  }

}
