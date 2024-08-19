import { BsCartPlus } from "react-icons/bs";
import { useState, useEffect, useContext } from "react";

import { api } from "../../services/api";
 
import   { CartContext } from "../../contexts/CartContexts" 


import { Link } from "react-router-dom";


export interface productsProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}




export function Home(){
  const [products, setProducts] = useState<productsProps[]>([]);

  const { addItemCart } = useContext(CartContext);

  useEffect(() => {
    async function getProduct(){
      const response = await api.get('/products')
      setProducts(response.data)
    }
    getProduct();
  }, [])


  function handleAddCartItem(produto: productsProps){
    addItemCart(produto);
  }
  
    return (
      <>
        <main className="w-full max-w-6xl px-4 mx-auto">
          <h1 className="font-bold text-3xl mb-4 mt-10 text-center text-slate-800">
            All Products
          </h1>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {products.map((produto) => (
              <section key={produto.id} className="w-full ">
                <Link to={`/product/${produto.id}`}>
                  <img
                    className="w-full rounded-lg max-h-72 object-contain mb-2"
                    src={produto.cover}
                    alt={produto.title}
                  />

                  <p className="font-medium mb-2 mt-1">{produto.title}</p>
                </Link>
                <div className=" flex gap-3 items-center">
                  <strong className="text-green-500">
                    {produto.price.toLocaleString("pt-PT", {
                      style: "currency",
                      currency: "EUR",
                    })}
                  </strong>

                  <button
                    onClick={() => handleAddCartItem(produto)}
                    className="bg-zinc-900 p-1 rounded"
                  >
                    <BsCartPlus size={20} color="#f1f" />
                  </button>
                </div>
              </section>
            ))}
          </div>
        </main>
      </>
    );
}