import React, { createContext, useState, useContext, useEffect } from 'react';
import { loginRequest, registerRequest} from '../api/auth';
import {createFavoritoRequest, getFavoritosByUserRequest} from '../api/favoritos'

export const InnovaContext = createContext();

export const useInnova = () => {
    const context = useContext(InnovaContext);
    if (!context) {
        throw new Error("useInnova must be used within an InnovaProvider");
    }
    return context;
};

export function InnovaProvider({ children }) {
    const [Usuario, setUsuario] = useState([]);
    const [videos, setVideos] = useState([])


    useEffect(() => {
        // Intentar obtener el usuario del localStorage al cargar el componente
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUsuario(JSON.parse(storedUser));
        }
    }, []);

    const signin = async (usuario) => {
        try {
            const res = await loginRequest(usuario); // Espera a que se complete la petición
            setUsuario(res.data); // Actualiza el estado con los datos recibidos
            localStorage.setItem('user', JSON.stringify(res.data));
        } catch (error) {
            console.error('Error en la solicitud de inicio de sesión:', error);
            // Manejar errores según sea necesario
        }
    };

    const logout = () => {
        // Limpiar el estado y el localStorage
        setUsuario(null);
        localStorage.removeItem('user');
    };

    const registrarUsuario = async (usuario)=>{
        try {
            const res = await registerRequest(usuario)
            setUsuario(res.data)
        } catch (error) {
            console.error('Error al registrar Usuario', error)
        }
    }

    const createFavorito = async (video)=>{
        
        try {
            const res = await createFavoritoRequest(video)
        } catch (error) {
            console.error(error)
        }
    }

    const getFavoritosByUser = async(idUsuario)=>{
        try {
            const res =await  getFavoritosByUserRequest(idUsuario)
            setVideos(res.data)

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <InnovaContext.Provider value={{
            Usuario,
            signin,
            logout,
            registrarUsuario,
            createFavorito,
            getFavoritosByUser,
            videos
        }}>
            {children}
        </InnovaContext.Provider>
    );
}
