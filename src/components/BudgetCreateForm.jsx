import React, { useContext, useEffect} from 'react';
import { useState } from 'react';
import { MyContext } from '../context/MyContext';
import { useCheck } from '../hooks/useChek';
import { data } from 'autoprefixer';

function BudgetCreateForm() {
    const {resultado, inputPage, inputLanguage, checkedItems, message} = useContext(MyContext);
    const { setFormData, currentForm, setCurrentForm, setMessage } = useContext(MyContext);
    useEffect(() => {
        setCurrentForm(prevForm => ({
            ...prevForm,
            total: resultado,
            numPages: inputPage,
            numLang: inputLanguage,
        }));
    }, [resultado, inputPage, inputLanguage, checkedItems]); // Asegúrate de incluir checkedItems en las dependencias si su valor afecta el efecto
    
    useEffect(() => {
        // Establece un temporizador para limpiar el mensaje después de 3 segundos
        const timer = setTimeout(() => {
            setMessage(''); // Limpia el mensaje
        }, 5000);

        // Función de limpieza para asegurar que el temporizador se limpie si el componente se desmonta
        return () => clearTimeout(timer);
    }, [message]);
    

  
    // Función para manejar los cambios en el formulario actual
    const handleChange = (event) => {
        const { name, value } = event.target;
        setCurrentForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
        const itemsWithTitles = Object.entries(checkedItems)
            .filter(([key, value]) => value.isChecked)
            .map(([key, { title }]) => ({ id: key, title }));
    
        const formWithTitles = {
          ...currentForm,
          items: itemsWithTitles
        };
    
        setFormData(prevState => {
            const updatedFormData = [...prevState, formWithTitles];
            console.log("Updated formData:", updatedFormData); // Verifica el contenido del nuevo estado
            return updatedFormData;
        });
    
        setCurrentForm({ name: '', phone: '', email: '', items: [] });
        setMessage("Formulario enviado satisfactoriamente");
    };
    
    
    

    return (
        <form>
            <div className='container mx-auto justify-center max-w-6xl mb-20'>
                <div className='grid grid-cols-1 gap-4 mt-5 mx-20 justify-center'>
                    <div className={`bg-white p-4 rounded-3xl shadow-custom grid grid-cols-3 min-h-44 justify-center items-center`}>
                        {/* División para el título */}
                        <div className="col-span-3 mb-4">
                            <h1 className='font-bold text-2xl text-start ms-4'>Demanar Pressupost</h1>
                        </div>
                        {/* División para los campos de entrada y botón */}
                        <div className="col-span-4 grid grid-cols-4 mx-4">
                            <div className={`flex flex-col justify-center`}>
                                <input
                                    type="text"
                                    name="name"
                                    value={currentForm.name}
                                    placeholder="Name"
                                    className='border-solid h-14 border-2 border-gray-300 rounded-lg px-4'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={`flex justify-center items-center`}>
                                <input
                                    type="text"
                                    name="phone"
                                    value={currentForm.phone}
                                    placeholder="Telèfon"
                                    className='border-solid h-14 border-2 border-gray-300 rounded-lg px-4'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={`flex justify-center items-center`}>
                                <input
                                    type="text"
                                    name="email"
                                    value={currentForm.email}
                                    placeholder="Email"
                                    className='border-solid h-14 border-2 border-gray-300 rounded-lg px-4'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col justify-end items-center">
                                <button className='bg-green-700 h-14 rounded-lg text-white font-semibold px-4' onClick={handleSubmit}>Solicitar Presupost</button>
                            </div>
                        </div>
                    </div>
                    <span className=' bg-green-700 text-white text-center font-bold text-xl'>{message}</span>
                </div>
            </div>
        </form>
    );
}

export default BudgetCreateForm;
