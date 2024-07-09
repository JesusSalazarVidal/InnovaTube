import React from "react";
import { useInnova } from "../Context/InnovaContext";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom

function Navbar() {
  const { setUsuario, Usuario, logout } = useInnova();
  return (
    <nav className="bg-gray-800 text-white py-3 px-4 flex items-center justify-between">
      <a className="font-bold text-xl tracking-tight" href="#">
        InnovaTube
      </a>
      <div className="flex items-center">
        {Usuario && Usuario.length !== 0 ? (
          <>
            <Link
              to="/"
              className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
            >
              {Usuario.user.nombreApellido}
            </Link>
            <Link
              to="/misFavoritos"
              className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
            >
              Mis Favoritos
            </Link>
            <button
              onClick={() => {
                logout();
              }}
              className="rounded bg-red-900 p-2 font-semibold"
            >
              Cerrar Sesion
            </button>
          </>
        ) : (
          <>
            <a
              className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
              href="#"
            >
              About
            </a>
            <a
              className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
              href="#"
            >
              Contact
            </a>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
