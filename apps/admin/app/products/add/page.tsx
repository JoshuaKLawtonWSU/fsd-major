import { isLoggedIn } from "../../utils/auth";
import { redirect } from "next/navigation";
import ProductForm from "../../components/ProductForm";
import Link from "next/link";

export default async function AddProduct() {
    const loggedIn = await isLoggedIn();
    if (!loggedIn) {
        redirect("/");
    } else {
        return (
            <div>
                <Link href="/">Back to products</Link>
                <h1>ProductForm</h1>
                <ProductForm />
            </div>
        );
    }
}