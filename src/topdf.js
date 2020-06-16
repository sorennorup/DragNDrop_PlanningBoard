console.log(sessionStorage);

let numitemsbox1 = getNumItems(data)[1][0].length+1;
let numitemsbox2 = getNumItems(data)[1][1].length;
let numitemsbox3 = getNumItems(data)[1][2].length+1;
console.log(numitemsbox1);
console.log(numitemsbox1+numitemsbox2);
console.log(numitemsbox3);

//Saves items on the done boards
let sessionArr = getSessionStorageKeys();
console.log(sessionArr);
dropedValues = getSessionStorageValues();
storeValuesOnBoard(sessionArr);


function getNumItems(arr){
    let resstring=" ";var i= 0;var num= 0;let resarray = [];
    for (let key1 in arr){
    if(i > 0){
            let arrayName = "array"+key1; 
            arrayName = [];
            for (let key2 in arr[key1]) {
                let value2 = arr[key1][key2];
                resstring+="#"+value2.dragid+',';
                arrayName.push(value2.dragid);
                num++;  
            }
            resarray.push(arrayName);
        }
        i++; 
    }
    console.log(num);
    return [num,resarray];
}

function storeValuesOnBoard(arr){

    //let num1 = getNumItems(arr)[1];
    for(i = 0; i < getNumItems(data)[0];  i++) {
        if(arr[i]!==undefined){
        let id = arr[i];
        let num = intIfyId(arr[i]);
        if( num < numitemsbox1) {
            $('#done1').append(document.getElementById(id)); 
        }
        else if(num < numitemsbox1+numitemsbox2) {
            $('#done2').append(document.getElementById(id)); 
        }
        else if(num < numitemsbox1+numitemsbox2+numitemsbox3) {
            $('#done3').append(document.getElementById(id)); 
        }
        }
    }
}
// Adds the stored values to 3 different strings to store in the pdf boxes
function getSessionStorageValues(){
    var i = 0;
    let values1=""; let values2 = ""; let values3 = "";
    for(key in sessionStorage){
   
        let num = intIfyId(key);
        let val =sessionStorage.getItem(key);
        
        if(val!==null){
            console.log(key);
            if(isInBox(num,numitemsbox1)){  
            values1+=val+"\n";
            }
            else if(isInBox(num,numitemsbox1+numitemsbox2)){
                values2+=val+"\n";    
            }
            else if(isInBox(num,numitemsbox1+numitemsbox2+numitemsbox3)) {
                values3+=val+"\n";
             }
        }
        i++;
    
    }
    console.log(values2);
    return [values1,values2,values3];
}

function isInBox(number,boxnumber) {
    if(number < boxnumber){  
        return true;
        }
}

function intIfyId(item){
    let val = item.substr(4)
    let num = parseInt(val);
    return num;
}

function getSessionStorageKeys(){
    let arr = []; 
    for(key in sessionStorage){
        if(key!=="name" && key!=="firstload" && key!=="date"){
        let val =sessionStorage.getItem(key);
        if(val!==null){
        arr.push(key);
        }
    }
    }
    return arr;
}


var dd = {
    content: [
        {
            text: 'KOMPETENCEPROFIL FOR '+sessionStorage.getItem('name').toUpperCase()+' \n \n',
            style: 'header'
        },
        {
            text: sessionStorage.getItem('date').toUpperCase()+' \n \n',
        },

        {
			text: 'KOMPETENCER \n',
            style: 'subheader'
           
        },

        {
        text:getSessionStorageValues()[0]+"\n\n",

        },

        {
			text: 'VIDEN \n',
            style: 'subheader'
           
        },

        {
        text:getSessionStorageValues()[1]+"\n\n",

        },

        {
			text: 'Færdigheder \n',
            style: 'subheader'
           
        },

        {
            text:getSessionStorageValues()[2]+"\n\n",

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

