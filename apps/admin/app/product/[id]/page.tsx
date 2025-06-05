import styles from "./page.module.css";
import { isLoggedIn } from "../../utils/auth";
import Link from "next/link";
import { deleteProduct, getAllProducts, getProduct, editProduct } from "../../utils/db";
import { redirect } from "next/navigation";
import ProductForm from "../../components/ProductForm";


type Product = {
    id: number,
    name: string,
    description: string,
    price: number,
    stock: number,
}

export default async function EditProduct({params}: {params: Promise<{id: string}>}) {
    const loggedIn = await isLoggedIn();
    if (!loggedIn) {
        redirect("/");
    } else {
        const { id } = await params;
        const product = await getProduct(parseInt(id)); // Get error handling for here
        if (!product) {
            return (
                <div>
                    <h1>Product not found</h1>
                    <Link href="/">Back to products</Link>
                </div>
            );
        } else {
            console.log(product);
            return (
                <div>
                    <Link href="/">Back to products</Link>
                    <div>
                        <h1>Singular product here</h1>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <p>Stock: {product.stock}</p>
                        <p>ID: {product.id}</p>
                        <ProductForm />
                    </div>
                    {/* <button onClick={() => deleteProduct(parseInt(id))}>Delete Product</button> */}
                    {/* <button onClick={() => editProduct(parseInt(id))}>Edit Product</button> */}
                </div>
            );
        }
    }
}
