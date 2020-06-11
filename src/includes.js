
includeFiles();

function includeFiles(){

    const x = document.createElement('script');
    const x2 = document.createElement('script');
    x.src = 'src/drag.js';
    x2.src = 'src/topdf.js';
    document.getElementsByTagName("head")[0].appendChild(x2);
    document.getElementsByTagName("head")[0].appendChild(x);
}

