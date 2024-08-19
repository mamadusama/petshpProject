import { Link } from "react-router-dom"


export function NotFound(){
    return (
      <div className="flex w-full min-h-screen justify-center items-center flex-col text-white">
        <h1 className="font-bold text-6xl mb-4 text-zinc-800">404</h1>
        <p className="font-bold text-3xl mb-4 text-zinc-600">
          Page não encontarda
        </p>
        <p className="italic text-1xl mb-4 text-zinc-600">
          você caiu na pagina que não existe
        </p>

        <Link
          to="/"
          className=" bg-slate-800 py-1 px-4 rounded-md mb-4 transition-transform hover:scale-105 duration-1000 cursor-pointer"
        >
          <h4>Volte para pagina dos Produtos</h4>
        </Link>
      </div>
    );
}