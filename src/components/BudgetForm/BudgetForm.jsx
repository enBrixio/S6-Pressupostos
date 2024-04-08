import BudgetFormItems from "../BudgetFormItems/BudgetFormItems";

function BudgetForm() {
  return (
    <form>
    <BudgetFormItems product={"Seo"} price={`${300}`} description={"Juan SEO"} />
    <BudgetFormItems product={"Ads"} price={`${400}`} description={"Juan Digital Business"} />
    <BudgetFormItems product={"Web"} price={`${500}`} description={"By Juan.dev"} />
    </form>


  );
}
export default BudgetForm;