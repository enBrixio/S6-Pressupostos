import React from "react";
import Banner from "./Banner";
import BudgetForm from "./BudgetForm";
import BudgetTotal from "./BudgetTotal";
import BudgetCreateForm from "./BudgetCreateForm";

function BudgetPages() {
  return (
<>
<Banner />
<BudgetForm />
<BudgetTotal/>
<BudgetCreateForm />
</>
  );
}

export default BudgetPages;