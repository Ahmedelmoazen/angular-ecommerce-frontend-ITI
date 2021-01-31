import { ProductCatgory } from "../_model/product-catogory";

export class ProductCategoryService {

    productCategory: ProductCatgory[] = [
        { id: '5eac38b30cfca15d7c804090', name: 'Arts & Crafts' }
        // { id: 2, name: 'Automotive' },
        // { id: 3, name: 'Baby' },
        // { id: 4, name: 'Books' },
        // { id: 5, name: 'Electronics' },
        // { id: 6, name: 'Fashion Women' },
        // { id: 7, name: 'Fashion Men' },
        // { id: 8, name: 'Health & Household' },
        // { id: 9, name: 'Home & Kitchen' },
        // { id: 10, name: 'Military Accessories' },
        // { id: 11, name: 'Movies & Television' },
        // { id: 12, name: 'Sports & Outdoors' },
        // { id: 13, name: 'Tools & Home Improvement' },
        // { id: 14, name: 'Toys & Games' },

    ];

    getAllCategories(): ProductCatgory[] {
        return this.productCategory.slice();
    }

    
}