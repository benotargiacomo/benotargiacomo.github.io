const textToWrite = '.goToRepository( )'
const a = document.querySelector('.repository');

function writeText(text) {
  let i = 0;
  const time = setInterval(() => {
    if (i === text.length + 1) {
      return clearInterval(time);
    } 
    a.innerText = text.slice(0, i);
    i += 1;
  }, 200);
}

window.onload  = () => {
  writeText(textToWrite);
}
