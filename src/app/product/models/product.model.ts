import { Category } from '../enums/category.enum';


export class Product {
    public choosen: boolean;

    constructor(public id: number,
        public name: string,
        public imageName: string,
        public price: number,
        public category: Category,
        public amount?: number,
        public description?: string ) {
            this.amount = this.amount || 3;
            this.description = description || 'empty description';
            this.choosen = false;
        }

    public isAvailable(): boolean {
        return !this.choosen && this.amount > 0;
    }
}
