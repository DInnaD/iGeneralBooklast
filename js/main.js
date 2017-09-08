;(function () {

/*})();*/

/*
let addForm = document.getElementById('addForm').addEventListener('submit', saveBookmark);
 console.log(addForm);
 localStorage.setItem('test', 'Hello World');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));

// generate id++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++// generate id

 function generateId(){  
     
    //let key_int = localStorage.length + 1;
    //key.id = key_int;

    try{
   if(localStorage[bookmarks].length === 0){ return 1;
    }else{
      var key_int = localStorage.length - 1;
        return key.id = key_int + 1;
      }
          } catch (e) {
  if (e !==  key.id) {
  alert('Error data');
 }
}

} 
// Save Bookmark+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++addNew
function saveBookmark(e, key.id){
//Object  
let key = {};
  // generate current id  
let id = generateId();
 // Get form values
console.log(id);
    let itemExists = document.getElementById(id);//(key.id)
    if(itemExists !== null) {
      itemExists.remove();
    } 

    key.name_1 = addForm.getElementsByClassName('name_1')[0].value;//document.getElementById("keyName").value;
    //console.log(key.name_1);
    var phone_1 = document.getElementsByName('phone_1');
    key.phones1=[];
    for(var i = 0; i<phone_1.length; i++){
        key.phone_1.push(phone_1[i].value);
    }
    var url_1 = document.getElementsByName('url_1');
    key.url_1=[];
    for(var i = 0; i<url_1.length; i++){
        key.url_1.push(url_1[i].value);
    }
    var info_1 = document.getElementsByName('info_1');
    key.info_1=[];
    for(var i = 0; i<info_1.length; i++){
        key.info_1.push(info_1[i].value);
    }

   localStorage.setItem(key.name, JSON.stringify(key));
}

let jsonkey = {
    name_1: key.name_1,
    phone_1: key.phone_1,
    url_1: key.url_1,
    info_1: key.info_1,

    

    id: key.id
    
  }
console.log(jsonkey);
localStorage[key.name_1] = JSON.stringify(jsonkey);
*/
   })();
