import { getData } from '/javascript/getData.js'

let auto_reloader;

export function locationHashChanged() {
  let generate_quote_button = document.querySelector('.generate_quote_button')
  let auto_reload_button = document.querySelector('.auto_reload_button')
  if (location.hash == '#auto_reload') {
    auto_reloader = setInterval(getData, 5000);
    generate_quote_button.style.display = 'none';
    auto_reload_button.querySelector('img').style.animationName = 'rotatingRefreshIcon'
    auto_reload_button.querySelector('a').href = '#stop_reload'
  }
  if (location.hash == '#stop_reload') {
    clearInterval(auto_reloader);
    generate_quote_button.style.display = 'inherit';
    auto_reload_button.querySelector('img').style.animationName = 'none'
    auto_reload_button.querySelector('a').href = '#auto_reload'
  }
}

window.onhashchange = locationHashChanged;
