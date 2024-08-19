import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContexts";

export function Header(){
  const { cartAmount } = useContext(CartContext) ;
    return (
      <>
        <header className="w-full px-1 bg-slate-800">
          <nav className="w-full max-w-6xl h-14 flex items-center justify-between px-5 mx-auto">
            <Link to="/" className="font-bold text-2xl text-white">
              <h1>PET SHOP</h1>
            </Link>

            <Link to="cart" className="relative">
              <BiShoppingBag size={24} color="#FFFF" />

              {cartAmount > 0 && (
                <span className="absolute -right-3 px-2.5 bg-red-700 -top-3 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">
                  {cartAmount}
                </span>
              )}
            </Link>
          </nav>
        </header>
      </>
    );
}