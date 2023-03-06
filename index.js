const inquirer = require("inquirer");

inquirer
  .prompt([{
    type: "list",
    name: "prompt",
    message: "What would you like to do?"
    choices: ["View All Departments", "View All Roles", "View All Employees", "Add A Department", "Add An Employee", "Update An Employee Role", "Log Out"]
}])