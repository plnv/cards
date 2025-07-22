import {CardElement} from "./CardBaseClass.js";

export class CardQuote extends CardElement {
    set data(value) {
        this.innerHTML = `
      <div class="card">
          <div class="card-body">
            <blockquote class="blockquote"><p>${value.quote}</p></blockquote>
            <small>— ${value.author}</small>
          </div>
      </div>
    `;
    }
}

customElements.define('card-quote', CardQuote);
