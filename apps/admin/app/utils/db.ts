"use server";
import createClient from "../../../../packages/db/prismaClient";

export async function getAllProducts() {
    const prisma = createClient();
    const products = await prisma.product.findMany();
    return products;
}

export async function getProduct(id: number) {
    const prisma = createClient();
    const product = await prisma.product.findUnique({
        where: {
            id: id,
        },
    });
    return product;
}

export async function putNewProduct(name: string, description: string, price: number, stock: number) {
    const prisma = createClient();
    const product = await prisma.product.create({
        data: {
            name: name,
            description: description,
            price: price,
            stock: stock,
        },
    });
}

export async function deleteProduct(id: number) {
    const prisma = createClient();
    const product = await prisma.product.delete({
        where: {
            id: id,
        },
    });
    console.log("Product Deleted");

}

export async function editProduct(id: number, name: string, description: string, price: number, stock: number) {
    const prisma = createClient();
    const product = await prisma.product.update({
        where: {
            id: id,
        },
        data: {
            name: name,
            description: description,
            price: price,
            stock: stock,
        },
    });
}