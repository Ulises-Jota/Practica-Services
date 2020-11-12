import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    getProducts() {
        return [{
            id: 1,
            name: 'Shampoo'
            },
            {
            id: 2,
            name: 'Acondicionador'
            },
            {
            id: 3,
            name: 'Jabon'
            }]
    }
}
