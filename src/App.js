import {fetchData} from './services/apiService.js';

const LIMIT = 3;

export class App {
    constructor() {
        this.source = 'quotes';
        this.theme = 'light';
        this.page = 0;
        this.total = 0;
        this.container = document.getElementById('card-container');
        this.pageInfo = document.getElementById('page-info');
        this.cardElements = [];
    }

    init() {
        document.getElementById('data-source').addEventListener('change', (e) => {
            this.source = e.target.value;
            this.page = 0;
            this.loadData();
        });

        document.getElementById('theme-selector').addEventListener('change', (e) => {
            this.theme = e.target.value;
            document.documentElement.setAttribute('data-bs-theme', this.theme)
        });

        document.getElementById('prev').addEventListener('click', () => {
            if (this.page > 0) {
                this.page--;
                this.loadData();
            }
        });

        document.getElementById('next').addEventListener('click', () => {
            if ((this.page + 1) * LIMIT < this.total) {
                this.page++;
                this.loadData();
            }
        });

        this.loadData();
    }


    async loadData() {
        this.renderCards(null);
        const skip = this.page * LIMIT;
        try {
            const data = await fetchData(this.source, LIMIT, skip);
            this.total = data.total;
            this.renderCards(data.items);
            this.pageInfo.textContent = `Страница ${this.page + 1} из ${Math.ceil(this.total / LIMIT)}`;
        } catch (err) {
            this.container.innerHTML = 'Ошибка загрузки данных';
        }
    }

    renderCards(items) {
        const tag = this.source === 'quotes' ? 'card-quote' : 'card-todo';
        if (this.cardElements.length !== LIMIT || (this.cardElements[0] && this.cardElements[0].tagName.toLowerCase() !== tag)) {
            this.container.innerHTML = '';
            this.cardElements = [];
            for (let i = 0; i < LIMIT; i++) {
                const el = document.createElement(tag);
                this.cardElements.push(el);
                this.container.appendChild(el);
            }
        }
        if (!items) {
            this.cardElements.forEach(el => el.showSkeleton());
        } else {
            this.cardElements.forEach((el, i) => {
                if (items[i]) {
                    el.data = items[i];
                }
            });
        }
    }
}
