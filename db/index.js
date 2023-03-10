const connection = require ("./connection");

class DB {
    //add construc findall epmployees
}
//ADD DB.FINDALL EPMLOYEE OR DB.FIND EMPLOYEE
findAllDepartments() {
    return this.connection.promise().query(
        "SELECT name, id FROM department;"
    );
}
