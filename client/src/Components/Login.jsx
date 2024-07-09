import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useInnova } from '../Context/InnovaContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signin, Usuario} = useInnova();
  const navigate = useNavigate()

  const onSubmit = (data) => {
    signin(data);
  };
  useEffect(()=>{
    if(Usuario && Usuario.length !== 0){
      navigate("/inicio")
    }else{
      navigate("/login")
    }
  },[Usuario])

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">

          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Login</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    {...register('identificador')}
                    autoComplete="off"
                    id="identificador"
                    type="text"
                    className={`peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none ${errors.identificador ? 'border-red-500' : 'focus:border-rose-600'}`}
                    placeholder="Usuario"
                  />
                  <label
                    htmlFor="identificador"
                    className={`absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm`}
                  >
                    Usuario o Correo
                  </label>
                </div>
                <div className="relative">
                  <input
                    {...register('password')}
                    autoComplete="off"
                    id="password"
                    type="password"
                    className={`peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none ${errors.password ? 'border-red-500' : 'focus:border-rose-600'}`}
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className={`absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm`}
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <button type="submit" className="bg-cyan-500 text-white rounded-md px-2 py-1">
                    Iniciar sesion
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
