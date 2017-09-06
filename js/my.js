(function() {
  document.getElementById('submit_button').addEventListener('click', function(e) {
    
    var key = {};
    var key_int = localStorage.length + 1;
    key.id = "item" + key_int;
 console.log(key.id);
    var itemExists = document.getElementById(key.id);
    if(itemExists !== null) {
      itemExists.remove();
    }
    key.name = document.getElementById("keyName").value;
console.log(key.name);
    key.value = document.getElementById("keyValue").value;
	  
	if(!validateForm(keyName, keyValue)){
    return false;
  }	  
console.log(key.value);
    var jsonkey = key.value;//********************************************get one
    console.log(jsonkey);
console.log(key);	  
    //localStorage[key.name] = JSON.stringify(jsonkey);
	  // Set to localStorage until 5MB
   try {	
      // Test if bookmarks is null
  if(localStorage.getItem('bookmarks') === null){
    // Init array
    var bookmarks = [];
    /// Add to array
    //bookmarks.push(key.name);
	   // Add to array
    bookmarks.push(key);
    // Set to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  
	  
	   //localStorage[key.name] = JSON.stringify(jsonkey);//**************get one
	    
	  }
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
    var pieces = "Key: " + key.name + ", Value: " + key.value;
    var itemNode = document.createTextNode(pieces);
    listItem.appendChild(itemNode);
    storageList.appendChild(listItem);
    
    /**
     * @name hasClass
     * @desc Function to test for class on an element ********************************************edit before .reset() 
     */
    /*function hasClass(el, selector) {
      var className = " " + selector + " ";
      if ((" " + el.className + " ").replace(/[\n\t]/g, " ").indexOf(className) > -1) {
        return true;
      }      
      return false;
    };*/
	  // befor edit
	  // Clear form
//document.getElementById('submit_button').reset();	
	  e.preventDefault();
  });
  document.getElementById('clear_button').addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.clear();
    var storageList = document.getElementById("storageList");
    while (storageList.firstChild) {
    storageList.removeChild(storageList.firstChild);
    }
    var nodata = document.getElementById("nodata");
    nodata.classList.remove("hidden");
  });
	// Validate Form
/*function validateForm(siteUrl, keyName, keyValue){
  if(!siteUrl || !keyName || !keyValue){
    alert('Please fill in the form');
    return false;
  }

  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if(!siteUrl.match(regex)  || !keyValue.match(regex)){
    alert('Please use a valid data!');
    return false;
  }
function phonenumber(keyName) {
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if(keyName.value.match(phoneno)) {
    return true;
  }  
  else {  
    alert("Please use a valid data!");
    return false;
  }
}	

  return true;
}*/

})();
