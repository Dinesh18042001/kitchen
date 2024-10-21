import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/compoents/Header";
import Banner from "@/compoents/Banner";
import ProductsOption from "@/compoents/ProductsOption";

export default function Home() {
  return (
    <>
      <Header />
      <Banner/>
      <ProductsOption/>
    </>
  );
}
