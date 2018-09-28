import { Category } from './category.enum';

export class Product {
    constructor(public id: number,
        public name: string,
        public imageName: string,
        public price: number,
        public category: Category,
        public isAvailable?: boolean,
        public description?: string ) {
            this.isAvailable = isAvailable || true;
            this.description = description || 'empty description';
        }
}
