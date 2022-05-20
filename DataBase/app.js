const sqlite3 = require('sqlite3')
const dbname = 'main.db'

let db = new sqlite3.Database(dbname, err => {
	
	if (err)
		throw err

	console.log('Database stated on ' + dbname)

	// Creation de Table enregistrement
	//db.run(`CREATE TABLE t_enregistrement(
		//Id INTEGER PRIMARY KEY AUTOINCREMENT,
		//Email varchar(50) not null,
		//Password varchar(50) not null,
		// Prenom varchar(20)not null)`)
	
	
	// Insertion des données dans la base de données
	const sql = 'INSERT INTO t_enregistrement(Email,Password,Prenom) VALUES(?,?,?)';

	db.run(sql,["toto@gmail.com","123","toto"],
	(err) => {
		if (err) return console.error(err.message);

		console.log('A new row has been created');
	});

	// Renvoi tout les éléments du Table t_enregistrement
	db.all('SELECT * FROM t_enregistrement',(err,data) => {
		if (err)
			throw err
		console.log(data)
	
	})

})
