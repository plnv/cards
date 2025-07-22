import { CardElement } from "./CardBaseClass.js";

export class CardTodo extends CardElement {
  set data(value) {
    this.innerHTML = `
      <div class="card">
          <div class="card-body">
            <h5 class="card-title"><strong>Задача:</strong> ${value.todo}</h5>
            <p class="card-text">Статус: ${
              value.completed ? "Выполнено" : "Не выполнено"
            }</p>
          </div>
      </div>
    `;
  }
}

customElements.define("card-todo", CardTodo);
