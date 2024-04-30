import React, { useContext, useEffect} from 'react';
import { useState } from 'react';
import { MyContext } from '../context/MyContext';
import { useCheck } from '../hooks/useChek';
import { data } from 'autoprefixer';

function BudgetCreateForm() {
    const [message, setMessage] = useState(''); 
    // Estado para el formuclario actual
    const {resultado, inputPage, inputLanguage, checkedItems} = useContext(MyContext);
    const [currentForm, setCurrentForm] = useState({
        name: '',
        phone: '',
        email: '',
        total: resultado,
        numPages: inputPage,
        numLang: inputLanguage,
        title: data.title,
    });
  
    useEffect(() => {
        setCurrentForm(prevForm => ({
            ...prevForm,
            total: resultado,
            numPages: inputPage,
            numLang: inputLanguage,
            title: checkedItems === true ? data.title : ''  // Asumiendo que quieres guardar esto en una propiedad llamada 'title'
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
    
    // Estado para todos los formularios
    const [formData, setFormData] = useState([]);
  
    // Función para manejar los cambios en el formulario actual
    const handleChange = (event) => {
        const { name, value } = event.target;
        setCurrentForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
  
    // Función para manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();  // Previene la recarga de la página
        setFormData(prevState => {
            const newFormData = [...prevState, currentForm];
            console.log(newFormData); // Ahora muestra el estado actualizado
            return newFormData;
        });
        setCurrentForm({ name: '', phone: '', email: '' }); // Limpia el formulario actual
        setMessage("Formulario enviado satisfactoriamente") 
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
