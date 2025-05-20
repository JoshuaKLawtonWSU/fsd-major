import { isLoggedIn } from "../../utils/auth";
import { redirect } from "next/navigation";
import ProductForm from "../../components/ProductForm";

export default async function AddProduct() {
    const loggedIn = await isLoggedIn();
    if (!loggedIn) {
        redirect("/");
    } else {
        return (
            <div>
                <h1>ProductForm</h1>
                <ProductForm />
            </div>
        );
    }
}