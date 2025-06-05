import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { isLoggedIn, logIn, logOut } from "./utils/auth";
// import createClient from "../../../packages/db/prismaClient";
import Link from "next/link";
import { getAllProducts } from "./utils/db";


type Product = {
  id: number,
  name: string,
  description: string,
  price: number,
  stock: number,
}

// const prisma = createClient();
// async function getProducts() {
//   const products = await prisma.product.findMany();
//   return products;
// }

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

export default async function Home() {
  const loggedIn = await isLoggedIn();
  if (!loggedIn) {
    return (
      <div className={styles.loginForm}>
        <h1>PCTech Admin</h1>
        <p>Not logged in</p>
        <form action={logIn}>
          <div className={styles.formGroup}>
            <label>
              Username:
              <input type="text" name="username" id="username" />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>
              Password:
              <input type="password" name="password" id="password" />
            </label>
          </div>
          <div className={styles.buttonRow}>
            <button type="submit" className={styles.logButton}>Login</button>
          </div>
        </form>
      </div>
    );
  } else {
    const allProducts = await getAllProducts();
    console.log(allProducts);
    console.log("Hello console?");
    return (
      <div className={styles.adminLayout}>

        <header className={styles.header}>
          <h1>PCTech Admin Page</h1>
          <button type="submit" onClick={logOut} className={styles.logButton}>
            Logout
          </button>
        </header>

        <aside className={styles.sidebar}>
          <h2>Database Items</h2>
          <ul>
            <li>Products</li>
            <li>Brands</li>
            <li>Categories</li>
          </ul>
        </aside>

        <main className={styles.content}>
          <div className={styles.actionBar}>
            <div className={styles.searchBarContainer}>
              <input
                type="text"
                className={styles.searchBar}
                placeholder="Search products..."
              />
            </div>
            <Link href="/products/add" className={styles.addButton}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.addButtonIcon}>
                <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Add Product
            </Link>
          </div>

          <div className={styles.productGrid}>
            {allProducts.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <Link href={`/product/${product.id}`}>
                  <div className={styles.productContent}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <div className={styles.productMeta}>
                      <span className={styles.price}>${product.price}</span>
                      <span className={styles.stock}>{product.stock} in stock</span>
                      <span className={styles.id}>ID: {product.id}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ThemeImage
          className={styles.logo}
          srcLight="turborepo-dark.svg"
          srcDark="turborepo-light.svg"
          alt="Turborepo logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>apps/web/app/page.tsx</code>
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new/clone?demo-description=Learn+to+implement+a+monorepo+with+a+two+Next.js+sites+that+has+installed+three+local+packages.&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F4K8ZISWAzJ8X1504ca0zmC%2F0b21a1c6246add355e55816278ef54bc%2FBasic.png&demo-title=Monorepo+with+Turborepo&demo-url=https%3A%2F%2Fexamples-basic-web.vercel.sh%2F&from=templates&project-name=Monorepo+with+Turborepo&repository-name=monorepo-turborepo&repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fturborepo%2Ftree%2Fmain%2Fexamples%2Fbasic&root-directory=apps%2Fdocs&skippable-integrations=1&teamSlug=vercel&utm_source=create-turbo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://turborepo.com/docs?utm_source"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
        <Button appName="web" className={styles.secondary}>
          Open alert
        </Button>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com/templates?search=turborepo&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://turborepo.com?utm_source=create-turbo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to turborepo.com →
        </a>
      </footer>
    </div>
  );
}
