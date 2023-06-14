started = function (){
    console.log("started Download");
};

updated = function (){
    for(x = 0; x <= 100; x++)
        console.log(x+"% de download");
};

completed = function (){
    console.log("finish")
};

function performDownload(started, updated, completed){
    started();
    updated();
    completed();
};

performDownload(started,updated,completed);