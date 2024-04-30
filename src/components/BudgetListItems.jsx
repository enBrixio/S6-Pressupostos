import React from 'react';

function BudgetListItems({ item }) { // Cambiado de 'func' a 'item' para coherencia con el cambio anterior.
    return (
        <div className='container mx-auto justify-center max-w-6xl mb-4'>
            <div className='grid grid-cols-1 gap-4 mt-5 mx-20 justify-center'>
                <div className='bg-white p-4 rounded-3xl shadow-custom grid grid-cols-3 min-h-44 justify-center items-center'>
                    <div className='col-span-1 flex flex-col justify-center'>
                        <h2 className='text-3xl font-bold mx-5'>{item.name}</h2>
                        <span className=' text-lg mx-5 text-gray-500'>{item.phone}</span>
                        <span className='text-lg mx-5 text-gray-500'>{item.email}</span>
                    </div>
                    <div className='col-span-1 flex-col justify-center items-center'>
                        <p className='font-bold text-xl'>Servicios Contratados:</p>
<ul>
    {item.items.map((service, index) => {
        console.log('esto es service', service.id);
        console.log('esto es numpages', item.numPages);
        console.log('esto es numLang', item.numLang);
        console.log('tipo de ID', typeof service.id); // Agregar para depurar el tipo de ID

        return (
            <li key={service.id} className='text-lg mx-5'>
                {service.id === 3 || service.id === '3' ? // Comprobando tanto para número como para cadena
                    `${service.title} (${item.numPages} Pàgines, ${item.numLang} Llenguatges)` :
                    service.title}
            </li>
        );
    })}
</ul>



                    </div>
                    <div className="col-span-1 flex flex-col justify-end items-center">
                    <h1 className='text-xl font-semibold text-gray-500 text-end'>Total:</h1>
                    <span className='text-5xl font-bold'>{item.total}€</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BudgetListItems;
