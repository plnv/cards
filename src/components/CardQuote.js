import {CardElement} from "./CardBaseClass.js";

export class CardQuote extends CardElement {
    set data(value) {
        this.innerHTML = `
      <div class="card">
          <div class="card-body">
              <h5 class="card-title">${value.quote}</h5>
              <p class="card-text">— ${value.author}</p>
          </div>
      </div>
    `;
    }
}

customElements.define('card-quote', CardQuote);
