/*


<!--script>
function CountryChange() {
      
      if (document.getElementById("statebox").style.display == "block") 
      {
        document.getElementById('statebox').style.display = 'none';
        document.getElementById('statebox').style.visibility = 'none';
      }
      else 
        document.getElementById('statebox').style.display = 'block';
        document.getElementById('statebox').style.visibility = 'visible';
      }
        
    }
    </script>       
    
!-- BOX to switch on/off --
    <div class="control-group" id="statebox" name="statebox" style="display: none">
         <label class="control-label">Bla Bla Bla...</label>
    </div>
    !-- Pic to click --
    <img onclick="javascript:CountryChange()" src="https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_284x96dp.png" name="picpincountry"/-->
<!--  
/*$('div a').on('click', function() {
    var href = $(this).attr('href');
    window.open(href, '_blank').focus();
});*/
/*создаем обработчик события на саму обертку (в нашем случае это будут #blok_1 и #blok_3). На случай, если ссылки могут появиться внутри блока динамически. Можно повесить событие непосредственно на ссылки, дело от этого не изменится;
фильтровать будет только ссылки по их селектору: a:not([href^="#"]) или a[href^="http://"] и a[href^="https://"]; хочется же, чтобы переход был именно по ссылке, а не по якорю.
в обработчике остановим обработку события по-умолчанию, чтобы переход внутри страницы не был совершен (надо смотреть, чтобы это не повредило общей логики работы сайта) и совершим переход с помощью window.open();
соответственно работать с этой функцией так: inNewWindow(document.getElementById('blok_1')).
	function inNewWindow(block1) {
    block1.on('click', 'a:not([href^="#"])', function(evt) {
        evt.preventDefault();
        window.open(evt.target.href, '_blank');
    })
}
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
<hr>
 <div id="box" style="display: none; text-align: center; position: relative;">   
<div class="container clearfix">
++++++++++++++++++++++++++++++++++++++++++++++++++
 <div class="content">
 <div id="box" style="display: none; text-align: center; position: relative;">
      <div class="jumbotron">
      <form method="GET" action="#">
 <div id="parentId">
 <div>
 <input name="name_1" type="text" placeholder="I wish to remember.." /> 
 <a onclick="return deleteField(this)" href="#" class="btn btn-circle"><i class="fa fa-ban" aria-hidden="true"></i></a>
 </div>
 </div>
 <input class="btn btn-circle" type="submit"  value="GO!" />
</form>
<a onclick="return addField()" href="#" class="btn btn-circle">
    <i class="fa fa-plus" aria-hidden="true"></i></a>
<hr>
-->
    
    
 <!--form method="GET" action="#"-->
 <!--div id="parentId">
 <div>
 <input name="name_1" type="text" /> 
 <a onclick="return deleteField(this)" href="#">[X]</a>
 </div>
 </div-->
 <!--input class="s" type="submit" value="GO!" /-->
<!--/form-->
<!--a onclick="return addField()" href="#">Добавить поле</a-->
    <!--

$('div').hide(); //прячет все дивы на странице
$('div[name="lol"]').hide();  //прячет только те дивы, у которых есть name="lol" 
$('[name="lol"]').hide();  //прячет все элементы, у которых есть name="lol"
Нужно понимать логику работы: сначала идёт выборка всех элементов - получаем набор объектов, а потом разом у всех получаем один html(), но у элементов нет одного общего на всех кода. Также нельзя получить, например, высоту каждого из блоков разом (если высота не задана в стилях для всех ) -так как у них нет общей высоты. Т.е. то, что индивидуально нужно получать в цикле. 
Ваш пример - поступают таким образом:
JavascriptВыделить код

var kod="";   
$('.dd').each(function(){
var dd = $(this).html()
kod=kod+dd;
});            
alert(kod);

$('.dd').hide();-->
<!--
1 grupa na back-end Danylevska Inna , @media dopyshu do 10 chysla, , view: https://dinnad.github.io/danylevskafinal/ html: https://github.com/DInnaD/danylevskafinal/blob/master/indexfinal.html css: https://github.com/DInnaD/danylevskafinal/blob/master/css/stylefinal.css
-->

<!--
$('div').hide(); //прячет все дивы на странице
$('div[name="lol"]').hide();  //прячет только те дивы, у которых есть name="lol" 
$('[name="lol"]').hide();  //прячет все элементы, у которых есть name="lol"
Нужно понимать логику работы: сначала идёт выборка всех элементов - получаем набор объектов, а потом разом у всех получаем один html(), но у элементов нет одного общего на всех кода. Также нельзя получить, например, высоту каждого из блоков разом (если высота не задана в стилях для всех ) -так как у них нет общей высоты. Т.е. то, что индивидуально нужно получать в цикле. 
Ваш пример - поступают таким образом:
JavascriptВыделить код
var kod="";   
$('.dd').each(function(){
var dd = $(this).html()
kod=kod+dd;
});            
alert(kod);
$('.dd').hide();-->
	
    <!--script>
/*var searchForm = document.getElementById('search');*/
/*var seeSearchForm = document.getElementById('search');*/
input=document.getElementsByTagName("input")[0]

d=document.getElementsByTagName("div")[0]

 

/*input.style.width="100%"*/

 

 

base=[ ' Служебный номер АТС 35 Отдел автоматизации систем управления предприятием АТС 7700 48-500',

 ' Дежурные водители водители 10 Транспортный цех бокс для автомобилей № 3 1876 68-501',

 ' Петрова Лидия Николаевна Ведущий товаровед 25 Отдел материально-технического обеспечения №3- общий кабинет товароведов 6733 83-782 7-90-06',

 

]

 

search=function(pattern){

var out=[]

var re=new RegExp(pattern, "i")

for(var i=0; i<base.length; i++){

if(base[i].match(re)) {

base[i]=base[i].replace(/((\d{4} \d{2}-\d{3})|(\d{4} \d{2}-\d{3} \d{1}-\d{2}-\d{2}))$/, "<b>$1</b>")

out.push(base[i])

}

 

}

return out

}

 

firstSearch=function(){

d.innerHTML=""

input.style.color=null

var out=search(input.value)

if(out.length<1) return secondSearch()

var str=out.join("<br><br>")

d.innerHTML=str

}

 

secondSearch=function(){

input.style.color="red"

d.innerHTML="I don't know <b>"+input.value+"</b>"

}

onload=firstSearch

input.oninput=firstSearch

input.focus()

onkeydown=function(){input.focus()}

</script-->













<!--script>
// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);
// Save Bookmark
function saveBookmark(e){
  // Get form values
  var siteName =document.getElementById('siteName').value;
 var sitePhone =document.getElementById('sitePhone').value;
  var siteEmail =document.getElementById('siteEmail').value;
 var siteUrl =document.getElementById('siteUrl').value;
  
    if(!validateForm(siteName, sitePhone, siteEmail, siteUrl)){
    return false;
  
  var bookmark = {
    name: siteName,
    phone: sitePhone,
    email: siteEmail,
    url: siteUrl
  }
/* 
    // Local Storage Test
    localStorage.setItem('test', 'Hello World');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
  */
  // Test if bookmarks is null
  if(localStorage.getItem('bookmarks') === null){
    // Init array
    var bookmarks = [];
    // Add to array
    bookmarks.push(bookmark);
    // Set to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      
     } else {
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Add bookmark to array
    bookmarks.push(bookmark);
    // Re-set back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }
  // Clear form
  document.getElementById('myForm').reset();
  // Re-fetch bookmarks
  fetchBookmarks();
  // Prevent form from submitting
  e.preventDefault();
}
// EDIT Bookmark
    /*
    
function updateInput(ish){
    document.getElementById("fieldname").value = ish;
} 
<input type="text" name="fieldname" id="fieldname" />  
<input type="text" name="thingy" onchange="updateInput(this.value)" /> 
    */
 document.getElementById('myForm1').addEventListener('submit', saveBookmark);
function editBookmark(e, phone, email, url){
  var bookmarks = [];
   // Test if bookmarks is null
  if(localStorage.getItem('bookmarks') === null){
    }else{
    // Init array
    
    
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    
//del
// Loop throught bookmarks
  for(var i =0;i < bookmarks.length;i++){
    if(bookmarks[i].phone == phone || bookmarks[i].email == email || bookmarks[i].url == url){
      // Remove from array
      bookmarks.splice(i, 1);
    }
   }
  // Re-set back to localStorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));  
 // Re-set back to localStorage
 // localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
   
  // Get form values
  var siteName1 =document.getElementById('siteName1').value;
  var sitePhone1 =document.getElementById('sitePhone1').value;
  var siteEmail1 =document.getElementById('siteEmail1').value;
  var siteUrl1 =document.getElementById('siteUrl1').value;
  /*if(!validateForm(siteName, sitePhone, siteEmail, siteUrl)){
    return false;
  }*/
  var bookmark = {
    name: siteName1,
    phone: sitePhone1,
    email: siteEmail1,
    url: siteUrl1
  }
/* 
    // Local Storage Test
    localStorage.setItem('test', 'Hello World');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
  */
 // Add bookmark to array
    bookmarks.push(bookmark);
     // Re-set back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
 
  
  }
  
  
  // Clear form
  document.getElementById('myForm1').reset();
  // Re-fetch bookmarks
  fetchBookmarks();
  // Prevent form from submitting
  e.preventDefault();
}
// Delete bookmark
function deleteBookmark(phone, email, url){
  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Loop throught bookmarks
  for(var i =0;i < bookmarks.length;i++){
    if(bookmarks[i].phone == phone || bookmarks[i].email == email || bookmarks[i].url == url){
      // Remove from array
      bookmarks.splice(i, 1);
    }
  }
  // Re-set back to localStorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  // Re-fetch bookmarks
  fetchBookmarks();
}
// Fetch bookmarks
function fetchBookmarks(){
  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Get output id
  var bookmarksResults = document.getElementById('bookmarksResults');
  // Build output
  bookmarksResults.innerHTML = '';
  for(let i = 0; i < bookmarks.length; i++){
    var name = bookmarks[i].name;
    var phone = bookmarks[i].phone;
  
    var email = bookmarks[i].email;
    var url = bookmarks[i].url;
    bookmarksResults.innerHTML += '<div class="well">'+
                                  '<h3>'+name+ phone+ '<div class="toggle">' + '<div class="content">' + email+ url+ '</div>'+                                  
                                  ' <a class="toggler" class="btn btn-danger" href="#">More</a> ' + '</div>'+
                                  ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> ' +
                                  ' <a onclick="editBookmark(\''   '\')" target="_blank" class="btn btn-danger" href="#">Edite</a> ' +
                                  ' <a onclick="deleteBookmark(\''+phone+email+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                  '</h3>'+
                                  '</div>';
                              
  }
}
/*
<form name = "phonebookForm" id = "phonebookForm">
<h4 id ="search">Search Phonebook: <input type = "text" id="inputIdSearch" onblur="search()">
    <span id="searchResult"></span></h4>
  <h4 id ="input">Add entry: <input type = "text" id="inputIdInput"></h4>
  <h4 id ="view">View all entries: <input type = "text" id="inputIdView"></h4>
  </form>
		<script>
 myPhonebook = Array (
Array(' Robert Mory ',' 07554035121 '),
Array(' Susie Thompson ',' 0785430270 '))

document.write("<pre>")
 for (j = 0 ; j < myPhonebook.length ; ++j)
 {
 for (k = 0 ; k < myPhonebook.length ; ++k)
 document.write(myPhonebook[j][k])
 document.write("<br />")
   }
   document.write("</pre>")
var search = function(){

var searchInput = document.getElementById('inputIdSearch').value
document.getElementById('searchResult').innerHTML = 
      ("Searching for: " + searchInput + "...")
document.writeln(myPhonebook.indexOf('searchInput'))
</script>
*/
/*function search() {
    var input, a, i, div, ul, li, filter;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    div = document.getElementById('bookmarksResults');
    ul = document.getElementById('ul');
    li = div.ul.getElementsByTagName('li');
    for(i=0; i<li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }
        else{
            li[i].style.display = "none";
        }
    }
}*/
function search() {
    var input, a, i, div, filter;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    div = document.getElementById('bookmarksResults');
    
    for(i=0; i<div.length; i++){
        a = div[i].getElementsByTagName("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            div[i].style.display = "";
        }
        else{
            div[i].style.display = "none";
        }
    }
}
// Validate Form
function validateForm(siteName, sitePhone, siteEmail, siteUrl){
  if(!siteName || !sitePhone ||!siteEmail || !siteUrl){
    alert('Please fill in the form');
    return false;
  }
  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);
  if(!siteUrl.match(regex)){
    alert('Please use a valid URL');
    return false;
  }
  return true;
}

</script-->

*/

// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);
// Save Bookmark
function saveBookmark(e){
  // Get form values
  var siteName =document.getElementById('siteName').value;
 var sitePhone =document.getElementById('sitePhone').value;
  var siteEmail =document.getElementById('siteEmail').value;
 var siteUrl =document.getElementById('siteUrl').value;
  
    if(!validateForm(siteName, sitePhone, siteEmail, siteUrl)){
    return false;
  
  var bookmark = {
    name: siteName,
    phone: sitePhone,
    email: siteEmail,
    url: siteUrl
  }
/* 
    // Local Storage Test
    localStorage.setItem('test', 'Hello World');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
  */
  // Test if bookmarks is null
  if(localStorage.getItem('bookmarks') === null){
    // Init array
    var bookmarks = [];
    // Add to array
    bookmarks.push(bookmark);
    // Set to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      
     } else {
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Add bookmark to array
    bookmarks.push(bookmark);
    // Re-set back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }
  // Clear form
  document.getElementById('myForm').reset();
  // Re-fetch bookmarks
  fetchBookmarks();
  // Prevent form from submitting
  e.preventDefault();
}
// EDIT Bookmark
  document.getElementById('myForm1').addEventListener('submit', saveBookmark);
function editBookmark(e, phone, email, url){
  var bookmarks = [];
   // Test if bookmarks is null
  if(localStorage.getItem('bookmarks') === null){
    }else{
    // Init array
    
    
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    
//del
// Loop throught bookmarks
  for(var i =0;i < bookmarks.length;i++){
    if(bookmarks[i].phone == phone || bookmarks[i].email == email || bookmarks[i].url == url){
      // Remove from array
      bookmarks.splice(i, 1);
    }
   }
  // Re-set back to localStorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));  
 // Re-set back to localStorage
 // localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
   
  // Get form values
  var siteName1 =document.getElementById('siteName1').value;
  var sitePhone1 =document.getElementById('sitePhone1').value;
  var siteEmail1 =document.getElementById('siteEmail1').value;
  var siteUrl1 =document.getElementById('siteUrl1').value;
  /*if(!validateForm(siteName, sitePhone, siteEmail, siteUrl)){
    return false;
  }*/
  var bookmark = {
    name: siteName1,
    phone: sitePhone1,
    email: siteEmail1,
    url: siteUrl1
  }
/* 
    // Local Storage Test
    localStorage.setItem('test', 'Hello World');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
  */
 // Add bookmark to array
    bookmarks.push(bookmark);
     // Re-set back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
 
  
  }
  
  
  // Clear form
  document.getElementById('myForm1').reset();
  // Re-fetch bookmarks
  fetchBookmarks();
  // Prevent form from submitting
  e.preventDefault();
}
// Delete bookmark
function deleteBookmark(phone, email, url){
  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Loop throught bookmarks
  for(var i =0;i < bookmarks.length;i++){
    if(bookmarks[i].phone == phone || bookmarks[i].email == email || bookmarks[i].url == url){
      // Remove from array
      bookmarks.splice(i, 1);
    }
  }
  // Re-set back to localStorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  // Re-fetch bookmarks
  fetchBookmarks();
}
// Fetch bookmarks
function fetchBookmarks(){
  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Get output id
  var bookmarksResults = document.getElementById('bookmarksResults');
  // Build output
  bookmarksResults.innerHTML = '';
  for(let i = 0; i < bookmarks.length; i++){
    var name = bookmarks[i].name;
    var phone = bookmarks[i].phone;
  
    var email = bookmarks[i].email;
    var url = bookmarks[i].url;
    bookmarksResults.innerHTML += '<div class="well">'+
                                  '<h3>'+name+ phone+ '<div class="toggle">' + '<div class="content">' + email+ url+ '</div>'+                                  
                                  ' <a class="toggler" class="btn btn-danger" href="#">More</a> ' + '</div>'+
                                  ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> ' +
                                  ' <a onclick="editBookmark(\''+name+phone+email+url+'\')" target="_blank" class="btn btn-danger" href="#">Edite</a> ' +
                                  ' <a onclick="deleteBookmark(\''+phone+email+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                  '</h3>'+
                                  '</div>';
                            
  }
}
function search() {
    var input, a, i, div, ul, li, filter;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    div = document.getElementById('bookmarksResults');
    ul = document.getElementById('ul');
    li = div.ul.getElementsByTagName('li');
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
// Validate Form
function validateForm(siteName, sitePhone, siteEmail, siteUrl){
  if(!siteName || !sitePhone ||!siteEmail || !siteUrl){
    alert('Please fill in the form');
    return false;
  }
  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);
  if(!siteUrl.match(regex)){
    alert('Please use a valid URL');
    return false;
  }
  return true;
}
