"use client";

import { useState } from "react";
import { putNewProduct } from "../utils/db";
import { redirect } from "next/navigation";
import styles from "./../page.module.css";



export default function ProductForm() {
    const [productTitle, setProductTitle] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productStock, setProductStock] = useState(0);
    // const [productCategory, setProductCategory] = useState("cpu");
    // const [productBrand, setProductBrand] = useState("");

    const productSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const errors = [];

        if (!productTitle || productTitle.trim() === "") {
            errors.push({error: "Product name is required", type: "titleError"});
        }
        // Add max length?

        if (!productDescription || productDescription.trim() === "") {
            errors.push({error: "Product description is required", type: "descriptionError"});
        }
        // Add max length?

        if (typeof productPrice !== "number") {
            errors.push({error: "Product price must be a number", type: "priceError"});
        }
        if (!productPrice || productPrice <= 0) {
            errors.push({error: "Product price must be greater than 0", type: "priceError"});
        }
        
        if (typeof productStock !== "number") {
            errors.push({error: "Product price must be a number", type: "priceError"});
        }
        if (!productStock || productStock < 0) {
            errors.push({error: "Product stock cannot be negative", type: "stockError"});
        }

        if (errors.length > 0) {
            console.log("Errors found:");
            errors.forEach((error) => {
                console.log(error.error);
            });
            return;
        } else {
            console.log("Add in product to DB");
            putNewProduct(productTitle, productDescription, productPrice, productStock)
            redirect("/");
        }
    }

    return (
        <form onSubmit={productSubmit}>
            <div>
                <label htmlFor="name">Product Name:</label>
                <input type="text" name="name" id="name" placeholder="Product Name" value={productTitle} onChange={(e) => setProductTitle(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea name="description" id="description" placeholder="Product Description" value={productDescription} onChange={(e) => setProductDescription(e.target.value)}></textarea>
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input type="number" name="price" id="price" placeholder="Product Price" value={productPrice} onChange={(e) => setProductPrice(e.target.valueAsNumber)} />
            </div>
            <div>
                <label htmlFor="stock">Stock:</label>
                <input type="number" name="stock" id="stock" placeholder="Product Stock" value={productStock} onChange={(e) => setProductStock(e.target.valueAsNumber)} />
            </div>
            <div>
                <label htmlFor="category">Category: FIX THIS</label>
                <select name="category" id="category">
                    <option value="cpu">CPU</option>
                    <option value="gpu">GPU</option>
                    <option value="ram">RAM</option>
                    <option value="motherboard">Motherboard</option>
                </select>
            </div>
            <div>
                <label htmlFor="brand">Brand: FIX</label>
                <input type="text" name="brand" id="brand" placeholder="Product Brand" />
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
}