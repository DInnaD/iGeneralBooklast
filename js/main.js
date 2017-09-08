;(function () {

/*})();*/

var tmpObj = {};

var modal = document.getElementById("form1");
var btn = document.getElementById("add");
var span = document.getElementsByClassName("close")[0];

// Вывод окна ввода контакта

btn.onclick = function () {
    modal.style.display = "block"
};

span.onclick = function () {
    modal.style.display = "none"
};

// Обработка формы

function valid (fotm) {
    tmpObj.name = document.getElementsByName("name1")[0].value;
    tmpObj.surname = document.getElementsByName('surname')[0].value;
    var phones = document.getElementsByName('phone');
    tmpObj.phones1=[];
    for(var i = 0; i<phones.length; i++){
        tmpObj.phones1.push(phones[i].value);
    }
    var emails = document.getElementsByName('email');
    tmpObj.emails1=[];
    for(var i = 0; i<emails.length; i++){
        tmpObj.emails1.push(emails[i].value);
    }

   localStorage.setItem(tmpObj.name, JSON.stringify(tmpObj));

    alert('Contact ' + tmpObj.name + ' added to memory');
    window.location.reload();
}

// Поиск

function Search() {
    var input, a, i, ul, li, filter;
    input = document.getElementById('poisk');
    filter = input.value.toUpperCase();
    ul = document.getElementById('spisok');
    li = ul.getElementsByTagName('li');

    for(i=0; i<li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }
        else{
            li[i].style.display = "none";
        }
    }
}

// Добавление полей телефонов

var countOfFields = 1;
var curFieldNameId = 1;
var maxFieldLimit = 5;

function deleteField(a) {
    var contDiv = a.parentNode;
    contDiv.parentNode.removeChild(contDiv);
    countOfFields--;
    return false;
}
function addField() {
    if (countOfFields >= maxFieldLimit) {
        alert("The number of fields reached its maximum");
        return false;
    }
    countOfFields++;
    curFieldNameId++;
    var div = document.createElement("div");
    div.innerHTML = "<input name=\"phone\"" + curFieldNameId + "\" type=\"text\" /> <a onclick=\"return deleteField(this)\" href=\"#\">[X]</a>";
    document.getElementById("parentId").appendChild(div);

    return false;
}

// Добавление полей почты

var EcountOfFields = 1;
var EcurFieldNameId = 1;
var EmaxFieldLimit = 5;

function EaddField() {
    if (EcountOfFields >= EmaxFieldLimit) {
        alert("The E-male of fields reached its maximum");
        return false;
    }
    EcountOfFields++;
    EcurFieldNameId++;
    var div = document.createElement("div");
    div.innerHTML = "<input name=\"email\"" + EcurFieldNameId + "\" type=\"text\" /> <a onclick=\"return deleteField(this)\" href=\"#\">[X]</a>";
    document.getElementById("EparentId").appendChild(div);

    return false;
}

// Выведение списков контактов

function seeCntakt() {
    for (var i = 0; i < localStorage.length; i++) {
        var key1 = localStorage.key(i);
        var li = document.createElement("li");
        li.innerHTML = "<a onclick=\"see('"+key1+"')\" href=\"#\" >" + key1 + "</a>";
        document.getElementById("spisok").appendChild(li);

    }
}

// Просмотр кнтакта (недоработано)

var bedit = document.getElementById("edit");
var bdel = document.getElementById("del");
var span2 = document.getElementsByClassName("close2")[0];
var modal2 = document.getElementById("form2");

function see(myKey) {
    modal2.style.display = "block";
    var returnObj = JSON.parse(localStorage.getItem(myKey));
    var span = document.createElement("span");
    span.innerHTML = returnObj.name + "<br><br>";
    document.getElementById("s-cont").appendChild(span);

}

// Закрытие окна просмотра контакта

span2.onclick = function () {
    modal2.style.display = "none"
};
/*(function() {
  document.getElementById('submit_button').addEventListener('click', function(e) {
    e.preventDefault();
    var key = {};
    var key_int = localStorage.length + 1;
    key.id = "item" + key_int;
    //console.log(key.id);
    var itemExists = document.getElementById(key.id);
    if(itemExists !== null) {
      itemExists.remove();
    }
    key.name = document.getElementById("keyName").value;
    //console.log(key.name);
    key.value = document.getElementById("keyValue").value;
    //console.log(key.value);
    var jsonkey = key.value;
    //console.log(jsonkey);
    localStorage[key.name] = JSON.stringify(jsonkey);
    var nodata = document.getElementById("nodata");
    
    var nodataHidden = hasClass(nodata, 'hidden');
    if(nodataHidden == false) {
      nodata.classList.add("hidden");
    }
    
    var storageList = document.getElementById("storageList");
    var listItem = document.createElement("li");
    listItem.setAttribute("id", key.name);
    var item = JSON.parse(localStorage[key.name]);
    //console.log(item.Id);
    //console.log(item.Name);
    //console.log(item.Value);
    var pieces = "Key: " + key.name + ", Value: " + key.value;
    var itemNode = document.createTextNode(pieces);
    listItem.appendChild(itemNode);
    storageList.appendChild(listItem);
    
 
    function hasClass(el, selector) {
      var className = " " + selector + " ";
      if ((" " + el.className + " ").replace(/[\n\t]/g, " ").indexOf(className) > -1) {
        return true;
      }      
      return false;
    };
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
})();
 **********************************************************************************/
/*let addForm = document.getElementById('addForm').addEventListener('submit', saveBookmark);
 
//// generate id++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++// generate id
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
