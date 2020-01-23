module.exports = {
  get: function(connectDB, callback) {
    connectDB.query(`SELECT * FROM book`, callback);
  },

  getById: function(connectDB, id, callback) {
    connectDB.query(`SELECT * FROM book WHERE id= ${id}`, callback);
  },

  create: function(connectDB, data) {
    connectDB.query(`INSERT INTO book set ?`, [data]);
  },
  update: function(con, data, id, callback) {
    connectDB.query(`UPDATE book SET ? WHERE id = ${id}`, [data]);
  },
  destroy: function(connectDB, id, callback) {
    connectDB.query(`DELETE FROM book WHERE id = ${id}`, callback);
  }
};
