
const BudgetWepPages = () => {
    return (
      <div className="container justify-end">
        <div className="flex items-center mb-4"> {/* Añadido mb-4 para un poco de margen entre los pares */}
          <h1 className="font-serif">Nombre de Pàgines</h1>
          <input maxLength={3} className="text-xl font-semibold text-center mx-5 w-16 h-10 rounded-lg bg-white border-indigo-500/75 focus:border-indigo-500/100 border-2" type="text" />
        </div>
        <div className="flex items-center"> {/* Añadido items-center para alinear verticalmente el texto y el input */}
          <h1 className="font-serif ">Nombre de Idiomes</h1>
          <input maxLength={3} className=" text-xl font-semibold text-center mx-4 w-16 h-10 rounded-lg bg-white border-indigo-500/75 active:border-indigo-500/100 border-2" type="text" />
        </div>
      </div>
    );
  }
  
  export default BudgetWepPages;
  