$('document').ready(init);
		
        function init(){
            var itemArray = ['item1', 'item2','item3'];
            var itemArray3 = ['item4', 'item5'];
            var itemArray2 = ['item6', 'item7','item8'];

            $('#item1, #item2,#item3,#item4,#item5,#item6,#item7,#item8').bind('dragstart', function(event) {
                event.originalEvent.dataTransfer.setData("text/plain", event.target.getAttribute('id'));
            });
            
  		    // bind the dragover event on the board sections
            $('#done1').bind('dragover', function(event) {
                event.preventDefault();
            });
			// bind the drop event on the board sections
  			$('#done1').bind('drop', function(event) {
            var notecard = event.originalEvent.dataTransfer.getData("text/plain");
            for(var i = 0; i < itemArray.length; i++){
               if(itemArray[i] == notecard)
               event.target.appendChild(document.getElementById(notecard));
            }
			// Turn off the default behaviour
			// without this, FF will try and go to a URL with your id's name
            event.preventDefault();
			});

             // bind the dragover event on the board sections
             $('#done2').bind('dragover', function(event) {
                event.preventDefault();
            });
			// bind the drop event on the board sections
  			$('#done2').bind('drop', function(event) {
            var notecard = event.originalEvent.dataTransfer.getData("text/plain");
            for(var i = 0; i < itemArray.length; i++){
               if(itemArray2[i] == notecard)
               event.target.appendChild(document.getElementById(notecard));
            }
			// Turn off the default behaviour
			// without this, FF will try and go to a URL with your id's name
            event.preventDefault();
			});

            // bind the dragover event on the board sections
            $('#done3').bind('dragover', function(event) {
                event.preventDefault();
            });
			// bind the drop event on the board sections
  			$('#done3').bind('drop', function(event) {
            var notecard = event.originalEvent.dataTransfer.getData("text/plain");
            for(var i = 0; i < itemArray.length; i++){
               if(itemArray3[i] == notecard)
               event.target.appendChild(document.getElementById(notecard));
            }
			// Turn off the default behaviour
			// without this, FF will try and go to a URL with your id's name
            event.preventDefault();
			});
        }