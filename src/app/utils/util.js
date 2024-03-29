


export function readJson(file, callback){

    let rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType('application/json');
    rawFile.open('GET', filePath, true);
    rawFile.onreadystatechange = function(){
        if(rawFile.readyState === 4 && rawFile.status === "200"){
            callback(rawFile.responseText);
        } 
    }

    rawFile.send(null);
}