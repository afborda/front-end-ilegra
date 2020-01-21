const sql = require("../config/db");

const Book = function (book) {
this.name_book = book.name_book;
this.genre = book.genre;
};

Book.create = (newBook , result) =>{
    sql.query("INSERT INTO book SET ?", newBook, (err, res) =>{
        if(err){
            console.log("Error: ", err );
            result(err, null);
        }
        console.log("Created customer: ", {id:res.insertId, ...newBook});
        result(null, {id:res.insertId, ...newBook});
    });
};
