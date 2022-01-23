const mysql = require("mysql2");
let con = mysql.createConnection({
    host: "sql11.freemysqlhosting.net",
    user: "sql11467356",
    password: "JyYZZ9Upmr",
    port: 3306,
    database: "sql11467356",
});

const mydata = require("./node_modules/data");
for(let i =0;i<42;i++){
    con.connect(function(err) {
        if (err) throw err;
        con.query("INSERT INTO `Vodne_nadrze` (`Vodná stavba`, `Dátum`, `Hladina v nádrži (m n.m.)`, `Objem zasoby (mil. m3)`, `Objem zasoby v %`, `Objem celkový (mil. m3)`, `Objem celkový v %`, `Bilancia pritoku (m3.s-1)`, `Bilancia odtoku z nádrže (m3.s-1)`, `odber`, `Teplota vody (°C)`) VALUES (?, ?, ?, ?, ?,?,?,?,?, ?, ?)", [mydata[i]["Vodná stavba"] ,mydata[i].Dátum , mydata[i]["Hladina v nádrži (m n.m.)"], mydata[i]["Objem zasoby (mil. m3)"],
            mydata[i]["Objem zasoby  v %"], mydata[i]["Objem celkový (mil. m3)"], mydata[i]["Objem celkový v %"], mydata[i]["Bilancia pritoku (m3.s-1)"] , mydata[i]["Bilancia odtoku z nádrže (m3.s-1)"], mydata[i]["Bilancia odberu  (m3.s-1)"] , mydata[i]["Teplota vody (°C)"] ], function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
    });
}
con.connect(function(err00){
    con.query("SELECT * FROM `Vodne_nadrze` WHERE 1")
})
//con.execute()
//nejak killnut proces
