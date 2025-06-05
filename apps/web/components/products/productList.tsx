"use client";

import styles from "./../../app/page.module.css";
import { ProductItem } from "./productItem";

// import type { Product } from "@repo/utils/tempData";
type Product = {
    id: number,
    name: string,
    description: string,
    price: number,
    stock: number,
}

export function ProductList({ products }: { products: Product[] }) {
    if (products.length === 0) {
        return (
            <p>0 products</p>
        );
    } else {
        return (
            <div className={styles.productList}>
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        );
    }
}