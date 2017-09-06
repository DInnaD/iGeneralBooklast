/*(function() {// cherez form ne hoche submityty*/
  let form = document.getElementById('storageForm').addEventListener('submit', function(e) {
   /* console.log('it works');
    e.preventDefault();
  });*/
   /*
     let form = document.getElementById('storageForm').addEventListener('submit', function(e) {
    console.log('it works');
    e.preventDefault();
  });
    // Local Storage Test
    localStorage.setItem('test', 'Hello World');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
  */  

    var key = {};
    var key_int = localStorage.length + 1;
    key.id = "item" + key_int;
    
      //console.log(key.id);+++++++++++++++++++++++++item10
    var itemExists = document.getElementById(key.id);
    if(itemExists !== null) {
      itemExists.remove();
    }
   

    key.name = form.getElementsByClassName('keyName')[0].value;//document.getElementById("keyName").value;
          console.log(keyName);
          //console.log(key.name);
    key.value = form.getElementsByClassName('keyValue')[0].value;//document.getElementById("keyValue").value;
         console.log(key);
         e.preventDefault();
         });/*
     if(!validateForm(keyName, keyValue)){//with getElementById
    return false;
  }
            console.log(key);
            console.log(key.value);
    var jsonkey = key.value;
            console.log(jsonkey);

    // Set to localStorage until 5MB
    try {
    localStorage[key.name] = JSON.stringify(jsonkey);
    } catch (e) {
  if (e == QUOTA_EXCEEDED_ERR) {
   alert('Превышен лимит');
  }
}
    var nodata = document.getElementById("nodata");
    
    var nodataHidden = hasClass(nodata, 'hidden');
    if(nodataHidden == false) {
      nodata.classList.add("hidden");
    }
    
    var storageList = document.getElementById("storageList");
    var listItem = document.createElement("li");
    listItem.setAttribute("id", key.name);
    var item = JSON.parse(localStorage[key.name]);
    
    
    console.log(item.Id);
    console.log(item.Name);
    console.log(item.Value);
    
    
    var pieces = "Key: " + key.name + ", Value: " + key.value +
    ' <a class="toggler" class="btn btn-danger" href="#">More</a> ' +
    ' <a class="btn btn-default" target="_blank" href="' + url + '">Visit</a> ' +
    ' <a storageWell.addEventListener("click", editBookmark(key.id)) class="btn btn-danger" href="#">Edite</a> ' +
    ' <a storageWell.addEventListener("click", deleteBookmark(key.id)) class="btn btn-danger">Delete</a> ';
    var itemNode = document.createTextNode(pieces);
    listItem.appendChild(itemNode);
    storageList.appendChild(listItem);
    
    /**
     * @name hasClass
     * @desc Function to test for class on an element without jquery
     */
   /* function hasClass(el, selector) {
      var className = " " + selector + " ";
      if ((" " + el.className + " ").replace(/[\n\t]/g, " ").indexOf(className) > -1) {
        return true;
      }      
      return false;
    };

     // Clear form
  document.getElementById('storageForm').reset();
  });
  
  
  
  
   // Validate Form
function validateForm(keyName, keyValue){
  if(!keyName || !keyValue){
    alert('Please fill in the form');
    return false;
  }

  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if(!siteUrl.match(regex)){
    alert('Please use a valid data');
    return false;
  }

  return true;
}
*/
/*
})();
*/
