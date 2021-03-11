const http = require('http');
const fileServer = require('fs');

http.createServer((req, res) => {
    fileServer.readFile("file.txt", (err, data) => {
        if(err){
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        let info = data.toString('utf-8');
        let allLines = info.split('\n');
        allLines.pop();
        /*
            This problem can alsobe done without using array of objects.....
        */
        let arrayObject = [];
        let firstLine = allLines[0].replace(/["\r]/g, '').split(","); //getting first line..
        for(let i = 1 ; i < allLines.length; i++){
            let line = allLines[i].replace(/["\r]/g, '').split(","); //ggetting all lines for actual data....
            let object = {};
            for(let k = 0 ; k < line.length; k++){ //setting object property..
                object[firstLine[k]] = line[k];
            }
            arrayObject.push(object);
        }
        console.log(arrayObject);
        let sum = 0; 
        arrayObject.forEach(object => sum += parseInt(object.value));
        res.end(`sum : ${sum}`);
    });
}).listen(8080);