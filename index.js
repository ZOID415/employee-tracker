const inquirer = require("inquirer");



inquirer
  .prompt([{
    type: "list",
    name: "prompt",
    message: "What would you like to do?",
    choices: [
      {
        name:"View All Department",
        value:"VIEW_ALL_DEPARTMENT" },
      { name:"View All Manager",
        value:"VIEW_ALL_MANAGER" },
      {name:"View All Employee",
        value:"VIEW_ALL_EMPLOYEE" },
//ADD EMPLOYEE, rtemove emplooyee, update, update empolyee manager
//DO same thing for department and role
      {name:"Add A Department",
       value:"ADD_A_DEPARTMENT" },
      {name:"Add An Employee", 
    value:"ADD_A_EMPLOYEE"},
     {name: "Update An Employee Role",
    value:"UPDATE_A_EMPLOYEE_ROLE"},
      {name:"Log Out",
      value:"LOG_OUT"},
    ]
}])
.then (res => {
  let prompt = res.prompt;
  switch (prompt){
    case "VIEW_ALL_DEPARTMENT": 
    viewDepartments();
    break;
    case "VIEW_ALL_MANAGER":
      viewManagers();
    break;
  }
} )

function viewDepartments() {
  db.findAllDepartments()
    .then(([rows]) => {
      let departments = rows;
      console.table(departments);
    })
    .then(() => loadMainPrompts());
}
//,then for choice