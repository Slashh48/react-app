import React, { useEffect, useState } from "react";

//Skraceno bez onog interfejsa i picke materine, ali zipa..... samo ako ima jedan ili dva props-a
const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);
  useEffect(() => {
    console.log("Fetching products in", category);
    //     setProducts(["Clothing", "Household"]);
    //     // prazne kockaste ili ti angel zagrade znaci samo jednom da ga pichne, da ne bih otisao u beskonacni kruzni tok, petlju, cirkular, eksechra eksechra
    //   }, []);

    setProducts(["Clothing", "Household"]);
  }, [category]);

  return <div>ProductList</div>;
};

export default ProductList;
