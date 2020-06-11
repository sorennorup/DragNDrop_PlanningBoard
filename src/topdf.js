console.log(sessionStorage);

//Saves items on the done boards
let sessionArr = getSessionStorageKeys();
dropedValues = getSessionStorageValues();


storeValuesOnBoard(sessionArr);

function storeValuesOnBoard(arr){
 for(i = 0; i < 10;  i++) {
     let id = arr[i];
    let val = arr[i].substr(4)
     let num = parseInt(val);
     if( num < 5) {
       
        $('#done1').append(document.getElementById(id)); 
     }
     else if(num < 8) {
        $('#done2').append(document.getElementById(id)); 
     }
     else {
        $('#done3').append(document.getElementById(id)); 
     }
 }
}

function getSessionStorageValues(){

    let vals="";
    for(key in sessionStorage){
        sessionStorage[key];
        
        val =sessionStorage.getItem(key);
        if(val!==null){
            vals+=val+"\n";
        }
    }
    return vals;
}

function getSessionStorageKeys(){
    let arr = []; 
    for(key in sessionStorage){
        let val =sessionStorage.getItem(key);
        if(val!==null){
        arr.push(key);
        }
    }
    return arr;
}


var dd = {
    content: [
        {
            text: 'KOMPETENCEPROFIL FOR [KOMMUNE] \n \n',
            style: 'header'
        },

        {
			text: 'KOMPETENCER \n',
            style: 'subheader'
           
        },

        {
        text:getSessionStorageValues()+"\n\n",

        },

        {
			text: 'VIDEN \n',
            style: 'subheader'
           
        },

        {
        text: 'Amden tekst kommer her som ligger under viden \n\n',

        },

        {
			text: 'Færdigheder \n',
            style: 'subheader'
           
        },

        {
        text: 'Amden tekst kommer her som ligger under viden \n\n',

        }
        
        
        
    ],
    defaultStyle: {
        font: 'BarlowSemiCondensedLight'
      },

    styles: {
		header: {
            fontSize: 25, 
        },

        subheader: {
            fontSize: 18
        }  
    }   
} 
pdfMake.fonts = {
    // Default font should still be available
    Roboto: {
        normal: 'Roboto-Regular.ttf',
        bold: 'Roboto-Medium.ttf',
        italics: 'Roboto-Italic.ttf',
        bolditalics: 'Roboto-Italic.ttf'
    },
    // Make sure you define all 4 components - normal, bold, italics, bolditalics - (even if they all point to the same font file)
    BarlowSemiCondensedLight: {
        normal: 'BarlowSemiCondensed-Light.ttf',
        bold: 'BarlowSemiCondensed-Medium.ttf',
    }
};


  // pdfMake.createPdf(dd).download();
    