export function locationHashChanged() {
  if (location.hash == '#maak_h1_rood') {
    document.querySelector('h1').style.backgroundColor = 'red';
  }
  if (location.hash == '#maak_h1_blauw') {
    document.querySelector('h1').style.backgroundColor = 'blue';
  }
}

window.onhashchange = locationHashChanged;
