
var allItems = getItems(data);


setItemsOnDragStart(allItems[0]);   

createDraggableArea(['#drag1','#done1'],getItemsForDraggable(data.block1));
createDraggableArea(['#drag2','#done2'],getItemsForDraggable(data.block2));
createDraggableArea(['#drag3','#done3'], getItemsForDraggable(data.block3));
dropBack('#drag1'); dropBack('#drag2'); dropBack('#drag3');

function getItems(arr){
    let resstring=" ";
    var i= 0;
   var num= 0;
   let resarray = [];
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
    return [resstring, num];
}

function setItemsOnDragStart(items) {
    $(items).bind('dragstart', function(event) {
        event.originalEvent.dataTransfer.setData("text/plain", event.target.getAttribute('id'));
    });
}

function getItemsForDraggable(blockobj) {
    let arr = [];
    for (let key in blockobj) {
        let value = blockobj[key];
        arr.push(value.dragid);    
    }
        return arr;
}
 // bind the dragover event on the board sections
function createDraggableArea(areaid, items){
    for(var i = 0; i < areaid.length; i++){
        dragOver(areaid[i])
        dropInArea(areaid[i],items);
    }   
}

function dragOver(areaid) {
    $(areaid).bind('dragover', function(event) {
        event.preventDefault();
    });
}
function dropBack(areaId){
    $(areaId).bind('drop', function(){
        var notecard = event.dataTransfer.getData("text/plain");
        window.sessionStorage.removeItem(notecard);  
        // Turn off the default behaviour
        // without this, FF will try and go to a URL with your id's name
        event.preventDefault();
    })
}
 // bind the drop event on the board sections
function dropInArea(areaid,items) {
    $(areaid).bind('drop', function(event) {
        var notecard = event.originalEvent.dataTransfer.getData("text/plain");
        window.sessionStorage.setItem(notecard,$('#'+notecard).text());
        for(var i = 0; i < items.length; i++){
            if(items[i] == notecard)
            event.target.appendChild(document.getElementById(notecard));
        }
        // Turn off the default behaviour
        // without this, FF will try and go to a URL with your id's name
        event.preventDefault();
        });
    
}



    