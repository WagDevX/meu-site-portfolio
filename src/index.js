import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(<App/>, document.querySelector("#root"))


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function runHoverAnimation() {
  const h1Element = document.querySelector("h1");

  function animateText() {
    let iteration = 0;
    let interval = setInterval(() => {
      h1Element.innerText = h1Element.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return h1Element.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= h1Element.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 4;
    }, 30);
  }

  setTimeout(animateText, 100);

  h1Element.onmouseover = animateText;
}

document.addEventListener("DOMContentLoaded", runHoverAnimation);