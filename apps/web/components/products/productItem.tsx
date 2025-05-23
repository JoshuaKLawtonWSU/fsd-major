import styles from "./../../app/page.module.css";

type Product = {
    id: number,
    name: string,
    description: string,
    price: number,
    stock: number,
}

export function ProductItem({ product }: { product: Product }) {
    return (
        <div className={styles.product}>
            <h2>{product.name}</h2>
            <p className={styles.productDescription}>{product.description}</p>
            <div className={styles.productMeta}>
                <span className={styles.price}>${product.price.toFixed(2)}</span>
                <span className={styles.stock}>{product.stock} in stock</span>
            </div>
            <button 
                className={styles.addButton}
                onClick={() => alert(`Added ${product.name} to cart!`)}
            >
                Add to Cart
            </button>
        </div>
    );
}