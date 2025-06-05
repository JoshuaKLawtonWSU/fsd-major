import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { greet } from "@repo/utils/messages";
import { AppLayout } from "../components/layout/appLayout";
// import type { Product } from "@repo/utils/data";
// import { products } from "@repo/utils/tempData";
import { ProductList } from "../components/products/productList";
// import { PrismaClient } from "@prisma/client";
import createClient from "../../../packages/db/prismaClient";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

const prisma = createClient();
async function getProducts() {
  const products = await prisma.product.findMany();
  return products;
}
const allProducts = await getProducts();
console.log(allProducts);
console.log("Hello console?");

export default function Home() {
  return (
    <AppLayout>
      <ProductList products={allProducts} />
    </AppLayout>
  );
}
