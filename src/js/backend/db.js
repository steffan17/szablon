const Database = require('better-sqlite3')
const dbPath = 'db.db'
const db = new Database(dbPath,{verbose: console.log})

const base = {

getTables: ()=>
    {
    return db.prepare('SELECT name FROM sqlite_schema').all()
    },

test: ()=>
    {  
        return db.prepare('SELECT * FROM example_table').all()
    },
// freeSQL: ()=>
//     {
//         try{ 
//             db.prepare(`
//             INSERT INTO example_table (name, age, weight, date_of_birth, active, earnings)
//             VALUES ('Monika', 35, 50.5, '1988-01-01', 1, 7500);            
//             `).run()
//             // db.prepare(`
//             // INSERT INTO example_table (name, age, weight, date_of_birth, active, earnings)
//             // VALUES ('Jan', 25, 70.5, '1998-01-01', 1, 3500),
//             //        ('Anna', 32, 65.2, '1991-02-15', 0, 4500),
//             //        ('Tomasz', 40, 80.3, '1983-03-20', 1, 5500),
//             //        ('Krzysztof', 36, 85.5, '1987-01-01', 1, 5000),
//             //        ('Magdalena', 29, 55.2, '1994-02-15', 0, 4000),
//             //        ('Paweł', 42, 90.3, '1981-03-20', 1, 6000),
//             //        ('Joanna', 31, 60.4, '1992-04-30', 0, 4500),
//             //        ('Michał', 27, 75.5, '1996-05-31', 1, 3500),
//             //        ('Piotr', 28, 75.4, '1995-12-31', 0, 4000);
            
//             // `).run()
//             return 'OK'}
//         catch(err){
//             console.log(err)
//             return err
//         }
       
//     }
freeSQL: (tableName)=>
    {
        try{ 
            db.prepare(`
                        CREATE TABLE IF NOT EXISTS ${tableName}
                        (
                        id INTEGER PRIMARY KEY,
                        name TEXT NOT NULL,
                        age INTEGER,
                        weight REAL,
                        date_of_birth DATE,
                        active BOOLEAN,
                        earnings NUMERIC
                        )
            `).run()
            return 'OK'}
        catch(err){
            console.log(err)
            return err
        }
       
    }

}

module.exports = base