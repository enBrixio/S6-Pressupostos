import React from "react";
import Banner from "./Banner";
import BudgetForm from "./BudgetForm";
import BudgetTotal from "./BudgetTotal";
import BudgetCreateForm from "./BudgetCreateForm";
import BudgetList from "./BudgetList";

function BudgetPages() {
  return (
<>
<Banner />
<BudgetForm />
<BudgetTotal/>
<BudgetCreateForm />
<BudgetList />
</>
  );
}

export default BudgetPages;