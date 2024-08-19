import { createContext, ReactNode, useState } from "react";

import { productsProps } from "../pages/home";
import toast from "react-hot-toast";

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemCart: (newItem: productsProps) => void;
  removeItemCart: (product: CartProps) => void;
  total: string;
}

interface CartProps {
  id: number;
  title: string;
  price: number;
  cover: string;
  description: number;
  amount: number;
  total: number;
}

interface CartProviderProps {
  children: ReactNode;
}
export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);
  const [total, setTotal] = useState("")
 

  //funçao para adicionar item no carinho

  function addItemCart(newItem: productsProps) {
    const indexItem = cart.findIndex((item) => item.id === newItem.id);

    //verificaçao
    if (indexItem !== -1) {
      let cartList = [...cart];
       cartList[indexItem].amount = cartList[indexItem].amount + 1;
     /*  cartList[indexItem].amount += 1; */

      cartList[indexItem].total =
        cartList[indexItem].amount * cartList[indexItem].price;
      setCart(cartList);
      totalResultCart(cartList);
      return;
    }
    //adicionar item
    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };

     setCart((products) => [...products, data]);
     totalResultCart([...cart, data]);
  }
  // funçao para remover item do carinho

  function removeItemCart(product: CartProps) {
    const indexItem = cart.findIndex((item) => item.id === product.id);
    if (cart[indexItem]?.amount > 1) {
      let cartList = [...cart];
      cartList[indexItem].amount -= 1;

      cartList[indexItem].total =
        cartList[indexItem].total - cartList[indexItem].price;

      setCart(cartList);
      totalResultCart(cartList);
      return;
    }
    const removeItem = cart.filter((item) => item.id !== product.id);
    setCart(removeItem);

    totalResultCart(removeItem);
  }

  //funçao para exibir total

  function totalResultCart(item: CartProps[]){
    let myCart = item;
    let result = myCart.reduce((acc, item) => {
      return acc + item.total;
    },0);

    const formatResult = result.toLocaleString("pt-PT", {
      style: "currency",
      currency: "EUR",
    });
    setTotal(formatResult);
    
  }



  return (
    <CartContext.Provider
      value={{
        cart,
        cartAmount: cart.length,
        total,
        addItemCart,
        removeItemCart,
   
      
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
