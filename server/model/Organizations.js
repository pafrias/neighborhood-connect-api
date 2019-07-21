const db = require('../model/db');

module.exports = {
  getOrg(id, cb) {
    db.query(`select * from test.organization where id = ${id}`, cb)
  },
  getOrgs(cb) {
    db.query(`select * from test.organization`, cb);
  }
}