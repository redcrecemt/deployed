// const fs=require('fs');

const fs= require('fs');

const readstream=fs.createReadStream('./docs/doc1.txt',{encoding:'utf-8'});
const writestream=fs.createWriteStream('./docs/doc3.txt');
readstream.on('data',(chunk)=>{

    console.log('----New Chunk----------');
    console.log(chunk);
    writestream.write(chunk);
});


