const Database = require("../config/db");

class findUserBy {
  constructor() {}

  query(type) {
    return `SELECT * FROM users WHERE ${type} = ?;`;
  }

  async connection(query, params) {
    return new Promise(function (resolve, reject) {
      Database.all(query, [params], (error, rows) => {
        error ? (reject(error), console.log(error)) : resolve(rows);
      });
      // Database.close();
    });
  }

  async id(client_id) {
    return this.connection(this.query("id"), client_id);
  }

  async uuid(client_uuid) {
    return this.connection(this.query("uuid"), client_uuid);
  }

  async email(email_address) {
    return this.connection(this.query("email"), email_address);
  }

  async cpf_cnpj(costumer_cpf_cnpj) {
    const type = costumer_cpf_cnpj.length >= "12" ? "cnpj" : "cpf";

    return this.connection(this.query(type), costumer_cpf_cnpj);
  }
}

module.exports = findUserBy;
