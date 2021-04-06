
const fs = require('fs'); 


// fs.readFile('./docs/doc1.txt', (err, data) => {     if (err)
// console.log(err);     console.log(data.toString()); });
// fs.writeFile('./docs/doc1.txt', 'Hello World', (err, data) => {     if (err)
//       console.log(err);     console.log('file was written') });
// fs.writeFile('./docs/doc2.txt', 'Hello Again', (err, data) => {     if (err)
//       console.log(err);     console.log('file was written') });

if (!fs.existsSync("./assets")) {

    fs.mkdir('./assets', (err) => {
        if (err) 
            console.log(err);
        console.log("Created Assets");
    });
} else {
    fs.rmdir('./assets', (err) => {

        if (err) 
        console.log(err);
    console.log("Deleted Assets");

    });
}