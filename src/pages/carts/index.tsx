import { useContext } from "react"
import { CartContext } from "../../contexts/CartContexts";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export function Cart(){
    const { cart, total, addItemCart, removeItemCart } = useContext(CartContext);



    function  handleTotalBy(){
        toast.success("compra finalizado com sucesso", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
            marginTop: 20,
            fontSize: 12,
          },
        });


    }

  

    return (
      <>
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="font-medium text-2xl text-center my-4 ">
            Meu Carrinho
          </h1>

          {cart.length === 0 && (
            <div className="flex flex-col items-center justify-center my-10">
              <p className="text-center font-bold">
                Ops!.... O seu carrinho está Vazio..
              </p>

              <div className="bg-red-700 my-3 rounded p-1 flex items-center justify-center px-3">
                <Link to="/" className="text-white font-medium items-center ">
                  Acessar lista dos Produtos..
                </Link>
              </div>
            </div>
          )}

          {cart.map((item) => (
            <section
              key={item.id}
              className="flex items-center justify-between border-b-2 border-gray-400 "
            >
              <Link to={`/product/${item.id}`}>
                <img src={item.cover} alt={item.title} className="w-28" />
              </Link>

              <strong>
                preço:
                {item.price.toLocaleString("pt-PT", {
                  style: "currency",
                  currency: "EUR",
                })}
              </strong>

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => removeItemCart(item)}
                  className="bg-red-600/90 px-2 rounded text-black font-medium flex items-center justify-center"
                >
                  -
                </button>

                <span>{item.amount}</span>

                <button
                  onClick={() => addItemCart(item)}
                  className="bg-red-600/90 px-2 rounded text-black font-medium flex items-center justify-center"
                >
                  +
                </button>
              </div>

              <strong className="float-right">
                SubTotal:
                {item.total.toLocaleString("pt-PT", {
                  style: "currency",
                  currency: "EUR",
                })}
              </strong>
            </section>
          ))}

          {cart.length !== 0 && (
            <div className="flex justify-between items-center">
              <p className="font-bold mt-4">Total: {total} </p>

              <button
                onClick={() =>  handleTotalBy()}
                className="flex px-4 py-1 bg-slate-600 rounded mt-1 text-white"
              >
                Finalizar Compra
              </button>
            </div>
          )}
        </div>
      </>
    );
}