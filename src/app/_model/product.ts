import { PaymentType } from "./payment-type";
import { ProductCatgory } from "./product-catogory";
import { ProductLang } from "./product-lang";
import { Tag } from "./tag";

export interface Product {
  _id: string;
  id?: number;
  data: ProductLang[];
  price?: number;
  discount?: number;
  imagesUrls?: string[];
  paymentTypes?: PaymentType[];
  category?: ProductCatgory;
  tags?: Tag[];
} 