function BudgetTotal({total}) {
    return (
        <div className="container">
        <span className="my-10 flex justify-end me-72 text-3xl font-bold flex space-x-5"><h2 className="text-3xl mx-16">Preu Pressuposat:     </h2>{total}€</span>
        </div>
    );
}
export default BudgetTotal;