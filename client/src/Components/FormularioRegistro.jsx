import React from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { useInnova } from '../Context/InnovaContext';

function FormularioRegistro() {
    const { register, handleSubmit, formState: { errors },watch, setValue } = useForm();
    const recaptchaRef = React.useRef(null);
    const password = watch('password');

    const {registrarUsuario}= useInnova()

    const onSubmit = data => {
        console.log(data);
        registrarUsuario(data)
    };

    const onRecaptchaChange = (value) => {
        setValue('recaptcha', value);
    };

    return (
        <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className="bg-white shadow-md rounded-md p-6">
                    <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Registro
                    </h2>

                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                            <label htmlFor="nombreApellido" className="block text-sm font-medium text-gray-700">Nombre y Apellido</label>
                            <div className="mt-1">
                                <input
                                    {...register('nombreApellido', { required: true })}
                                    name="nombreApellido"
                                    type="text"
                                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                />
                                {errors.nombreApellido && <span className="text-red-500 text-sm">Este campo es requerido</span>}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="usuario" className="block text-sm font-medium text-gray-700">Usuario</label>
                            <div className="mt-1">
                                <input
                                    {...register('usuario', { required: true })}
                                    name="usuario"
                                    type="text"
                                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                />
                                {errors.usuario && <span className="text-red-500 text-sm">Este campo es requerido</span>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="correo" className="block text-sm font-medium text-gray-700">Email</label>
                            <div className="mt-1">
                                <input
                                    {...register('correo', { required: true })}
                                    name="correo"
                                    type="correo"
                                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                />
                                {errors.correo && <span className="text-red-500 text-sm">Este campo es requerido</span>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                            <div className="mt-1">
                                <input
                                    {...register('password', { required: true })}
                                    name="password"
                                    type="password"
                                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                />
                                {errors.password && <span className="text-red-500 text-sm">Este campo es requerido</span>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">Confirmar contraseñas</label>
                            <div className="mt-1">
                                <input
                                    {...register('confirm_password', {
                                        required: true,
                                        validate: value =>
                                            value === password || 'Las contraseñas no son iguales '
                                    })}
                                    name="confirm_password"
                                    type="password"
                                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                />
                                {errors.confirm_password && <span className="text-red-500 text-sm">{errors.confirm_password.message}</span>}
                            </div>
                        </div>

                        {/*
                        <div>
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey="TU_CLAVE_DEL_SITIO"
                                onChange={onRecaptchaChange}
                            />
                            {errors.recaptcha && <span className="text-red-500 text-sm">Please verify that you are not a robot</span>}
                        </div>
                        */}

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">
                                Registrar Cuenta
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormularioRegistro