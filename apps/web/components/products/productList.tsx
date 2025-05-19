"use client";

// import type { Product } from "@repo/utils/tempData";
type Product = {
    id: number,
    name: string,
    description: string,
    price: number,
    stock: number,
}

export function ProductList({ products }: { products: Product[] }) {
    return (
        <div>
            {products.map((product) => (
                <div key={product.id} className="product">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <p>Stock: {product.stock}</p>
                    <button onClick={() => alert(`Added ${product.name} to cart!`)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}