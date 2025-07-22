export class CardElement extends HTMLElement {
    constructor() {
        super();
    }

    showSkeleton() {
        this.innerHTML = `
            <div class="card" aria-hidden="true">
                <div class="card-body">
                    <h5 class="card-title placeholder-glow">
                        <span class="placeholder col-5"></span>
                    </h5>
                    <p class="card-text placeholder-glow">
                        <span class="placeholder col-1"></span>
                        <span class="placeholder col-2"></span>
                    </p>
                </div>
            </div>
        `;
    }
}
