"use client";

export default function ProductForm() {
    const productSubmit = () => {
        console.log("Submitted");
    }
    return (
        <form onSubmit={productSubmit}>
            <div>
                <label htmlFor="name">Product Name:</label>
                <input type="text" name="name" id="name" placeholder="Product Name" />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea name="description" id="description" placeholder="Product Description"></textarea>
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input type="number" name="price" id="price" placeholder="Product Price" />
            </div>
            <div>
                <label htmlFor="stock">Stock:</label>
                <input type="number" name="stock" id="stock" placeholder="Product Stock" />
            </div>
            <div>
                <label htmlFor="category">Category: CHANGE THIS</label>
                <select name="category" id="category">
                    <option value="cpu">CPU</option>
                    <option value="gpu">GPU</option>
                    <option value="ram">RAM</option>
                    <option value="motherboard">Motherboard</option>
                </select>
            </div>
            <div>
                <label htmlFor="brand">Brand:</label>
                <input type="text" name="brand" id="brand" placeholder="Product Brand" />
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
}