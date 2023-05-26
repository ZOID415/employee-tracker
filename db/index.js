const inquirer = require('inquirer');
const mysql = require('mysql2');


const db = mysql.createConnection(
  {
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'root',
    database: 'tracker_db'
  },
  console.log(`Connected to the tracker_db database.`)
);


loadPrompts();

async function loadPrompts() {
  const { choice } = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View All Departments",
          value: "VIEW_DEPARTMENTS",
        },
        {
          name: "View All Employees",
          value: "VIEW_EMPLOYEES",
        },
        {
          name: "View All Roles",
          value: "VIEW_ROLES",
        },
        {
          name: "Add Employee",
          value: "ADD_EMPLOYEE",
        },
        {
          name: "Remove Employee",
          value: "REMOVE_EMPLOYEE",
        },
        {
          name: "Update Employee Role",
          value: "UPDATE_EMPLOYEE_ROLE",
        },
        {
          name: "Add Role",
          value: "ADD_ROLE",
        },
        {
          name: "Remove Role",
          value: "REMOVE_ROLE",
        },
        {
          name: "Add Department",
          value: "ADD_DEPARTMENT",
        },
        {
          name: "Remove Department",
          value: "REMOVE_DEPARTMENT",
        },
        {
          name: "Quit",
          value: "QUIT",
        },
      ],
    },
  ]);
  switch (choice) {
    case "VIEW_EMPLOYEES":
      viewEmployees();
      break;
    case "ADD_EMPLOYEE":
      addEmployees();
      break;
    case "REMOVE_EMPLOYEE":
      removeEmployee();
      break;
    case "UPDATE_EMPLOYEE_ROLE":
      updateEmpRole();
      break;
    case "VIEW_ROLES":
      viewRoles();
      break;
    case "ADD_ROLE":
      addRole();
      break;
    case "REMOVE_ROLE":
      removeRole();
      break;
    case "VIEW_DEPARTMENTS":
      viewDepartments();
      break;
    case "ADD_DEPARTMENT":
      addDepartment();
      break;
    case "REMOVE_DEPARTMENT":
      removeDepartment();
      break;
    default:
      quit();
  }
}
function viewEmployees() {
  db.query(`SELECT employees.id AS "Id", employees.first_name AS "First Name", employees.last_name AS "Last Name", roles.title AS "Title", roles.salary AS "Salary" FROM employees INNER JOIN roles ON employees.role_id=roles.id`, function (err, result) {
    if (err) throw err;
    if (result) {
      console.table(result);
      loadPrompts();
    }
  });
}

async function addEmployees() {
  const str = await inquirer.prompt([
    {
      type: "message",
      name: "name",
      message: "First and last name of the employee you would like to add?",
    },
    {
      type: "message",
      name: "role",
      message: "Employees role id? (1-14)"
    },
  ]);
  const newEmp = str.name.split(' ');
  const newInt = parseInt(str.role);
  if (newInt >= 8) {
    db.query(`INSERT INTO employees(first_name, last_name, role_id, is_supervisor) VALUES("${newEmp[0]}", "${newEmp[1]}", "${str.role}", true)`, async function (err, result) {
      if (err) throw err;
      if (result) {
        viewEmployees();
      }
    });
  } else {
    db.query(`INSERT INTO employees(first_name, last_name, role_id, is_supervisor) VALUES("${newEmp[0]}", "${newEmp[1]}", "${str.role}", false)`, async function (err, result) {
      if (err) throw err;
      if (result) {
        viewEmployees();
       }
    });
  }
}

async function removeEmployee() {
  const str = await inquirer.prompt([
    {
      type: "message",
      name: "id",
      message: "Id of the employee you would like to remove?",
    },
  ]);
  console.log(str);
  db.query(`DELETE FROM employees WHERE id=${str.id}`, async function (err, result) {
    if (err) throw err;
    if (result) {
      viewEmployees();
      
    }
  });
}

async function updateEmpRole() {
  const str = await inquirer.prompt([
    {
      type: "message",
      name: "role",
      message: "What is the id of the employee whose role you'd like to change?"
    },
    {
      type: "message",
      name: "newrole",
      message: "What is this this employees new role id? (1-14)"
    },
  ]);

  const newInt = parseInt(str.newrole);

  db.query(`UPDATE employees SET role_id = ${newInt} where id = ${parseInt(str.role)}`, async function (err, result) {
    if (err) throw err;
    if (result) {
      viewEmployees();
    }
  });
}

async function viewRoles() {
  db.query(`SELECT roles.id AS "Id", roles.title AS "Title", roles.salary AS "Salary", departments.dep_name AS "Department" FROM roles INNER JOIN departments ON roles.department_id=departments.id`, function (err, result) {
    if (err) throw err;
    if (result) {
      console.log("Here is a table of roles including the salary and department associated with each.");
      console.table(result);
      loadPrompts();
    }
  })
};

async function addRole() {
  const { choice } = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "Select the role you would like to add or create a new role",
      choices: [
        {
          name: "Electrical Engineer",
          value: "electrical",
        },
        {
          name: "Painter",
          value: "painter",
        },
        {
          name: "Plumber",
          value: "plumber",
        },
        {
          name: "Go Back",
          value: "go_back",
        },
      ],
    },
  ]);
  switch (choice) {
    case "electrical":
      db.query(`INSERT INTO roles(title, salary, department_id) VALUES("Electrical Engineer", "30000", "8")`, async function (err, result) {
        if (err) throw err;
        if (result) {
          console.table(result);
          await loadPrompts();
        }
      })
      break;
    case "painter":
      db.query(`INSERT INTO roles(title, salary, department_id) VALUES("Painter", "25000", "8")`, async function (err, result) {
        if (err) throw err;
        if (result) {
          console.table(result);
          await loadPrompts();
        }
      })
      break;
    case "plumber":
      db.query(`INSERT INTO roles(title, salary, department_id) VALUES("Plumber", "20000", "8")`, async function (err, result) {
        if (err) throw err;
        if (result) {
          console.table(result);
          await loadPrompts();
        }
      })
      break;
    default: 
      await loadPrompts();
  }
};

async function viewDepartments() {
  db.query(`SELECT id AS "Id", dep_name AS "Department Name" FROM departments`, function (err, result) {
    if (err) throw err;
    if (result) {
      console.log("Here is a table of all the departments.");
      console.table(result);
      loadPrompts();
    }
  })
}


async function addDepartment() {
  const str = await inquirer.prompt([
    {
      type: "message",
      name: "depName",
      message: "Name of the department you would like to add?",
    },
  ]);
  db.query(`INSERT INTO departments(dep_name) VALUES ("${str.depName}")`, async function (err, result){
    if (err) throw err;
        if (result) {
        }
  })
}

async function removeDepartment() {
  const str = await inquirer.prompt([
    {
      type: "message",
      name: "id",
      message: "What is the id of the department you would like to remove?",
    },
  ]);
  db.query(`DELETE FROM departments WHERE id=${str.id}`, async function (err, result) {
    if (err) throw err;
    if (result) {
      viewDepartments();
    }
  });
}

async function removeRole() {
  const str = await inquirer.prompt([
    {
      type: "message",
      name: "id",
      message: "Id of the role you would like to remove?",
    },
  ]);
  db.query(`DELETE FROM roles WHERE id=${str.id}`, async function (err, result) {
    if (err) throw err;
    if (result) {
      viewRoles();
    }
  });
}

async function quit() {
  process.exit();
}