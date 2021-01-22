
    var db = require('./connect_database.js');
    var createTable = require('./create_table.js');

    let sql = `CREATE TABLE Locatii ( 
                    IdLocatie int(6) PRIMARY KEY AUTO_INCREMENT NOT NULL,
                    NumeLocatie VARCHAR(30) NOT NULL
                );`;
    createTable('Locatii', sql);

    sql = `CREATE TABLE Utilizatori ( 
                    IdUtilizator int(6) PRIMARY KEY AUTO_INCREMENT NOT NULL,
                    IdLocatie int(6),
                    Nume VARCHAR(30) NOT NULL,
                    Email VARCHAR(30) NOT NULL,
                    Parola VARCHAR(30) NOT NULL,
                    FOREIGN KEY (IdLocatie) REFERENCES Locatii(IdLocatie)
                );`;
    createTable('Utilizatori', sql);
    
    sql = `CREATE TABLE Obiecte ( 
                    IdObiect int(6) PRIMARY KEY AUTO_INCREMENT NOT NULL,
                    IdLocatie int(6),  
                    NumeObiect VARCHAR(30) NOT NULL,
                    DataAchizitie date,
                    ValObiect int(10),
                    DescriereObiect TEXT,
                    FOREIGN KEY (IdLocatie) REFERENCES Locatii(IdLocatie)
                );`;
    createTable('Obiecte', sql);
