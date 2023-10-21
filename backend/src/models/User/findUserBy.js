const Database = require("../../config/db");

class findUserBy {
  constructor() {}

  /**
   * TODO: Fazer com que seja possivel passar mais de 1 parametro, ex: findUserBy.type("admin", "uuid: 123ui")
   * make query with params
   * @param {*} type of filter
   * @returns query formatted
   */
  query(type) {
    return `SELECT * FROM user WHERE ${type} = ?;`;
  }

  async connection(query, params) {
    return new Promise(function (resolve, reject) {
      Database.all(query, [params], (error, rows) => {
        error ? (reject(error), console.log(error)) : resolve(rows);
      });
      // Database.close();
    });
  }

  async id(user_id) {
    return this.connection(this.query("id"), user_id);
  }

  async uuid(user_uuid) {
    return this.connection(this.query("uuid"), user_uuid);
  }

  async email(email_address) {
    return this.connection(this.query("email"), email_address);
  }

  async cpf_cnpj(cpf_cnpj) {
    const type = cpf_cnpj.length >= "12" ? "cnpj" : "cpf";

    return this.connection(this.query(type), cpf_cnpj);
  }

  async type(user_type) {
    return this.connection(this.query("type"), user_type);
  }
}

module.exports = findUserBy;
