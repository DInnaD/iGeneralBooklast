// Listen for form submit
let form = document.getElementById('form').addEventListener('submit', saveBookmark);

// Save Bookmark
function saveBookmark(e){
  // Get form values
//  var siteName =document.getElementById('siteName').value;
//  var siteUrl =document.getElementById('siteUrl').value;
form.getElementsByClassName('name')[0].value;
form.getElementsByClassName('url')[0].value;
  
  if(!validateForm(siteName, siteUrl)){//with getElementById
    return false;
  }
//for
  let bookmark = {
    name: [],
    url: []
  }

let id = function generatId(){

  bookmark = {
  bookmark.name = [],
  bookmark.url = [],
  bookmark.id = id
  }


  try {

    if(localStorage.['bookmarks'].lenght === 0){ return 1;
       }else{
        lastElementIndex = localStorage.lenght - 1;
         return lastElementIndex + 1;
       }
  if (!bookmarks.name || !bookmarks.url) {
    throw new SyntaxError("Ошибка в данных");
  }

  blabla(); // произошла непредусмотренная ошибка

  alert( bookmarks.name, bookmarks.url );

} catch (e) {

  if (e.name == "SyntaxError" || e.url == "SyntaxError") {
    alert( "Извините, в данных ошибка" );
  } else {
    throw e;
  }

}

}// the end of let id = function generatId(){


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
    // Set to localStorage until 5MB
    try {
   localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
} catch (e) {
  if (e == QUOTA_EXCEEDED_ERR) {
   alert('Превышен лимит');
  }
}
   
  } else {
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Add bookmark to array
    bookmarks.push(bookmark);
    // Re-set back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  // Clear form
  document.getElementById('form').reset();

  // Re-fetch bookmarks
  fetchBookmarks();

  // Prevent form from submitting
  e.preventDefault();
}
/*
// Delete bookmark
function deleteBookmark(url){
  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Loop throught bookmarks
  for(var i =0;i < bookmarks.length;i++){
    if(bookmarks[i].url == url){
      // Remove from array
      bookmarks.splice(i, 1);
    }
  }
  */
// Delete bookmark
function deleteBookmark(id){
  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Loop throught bookmarks
  for(var i =0;i < bookmarks.length;i++){
    if(bookmarks[i].id === id){
      // Remove from array
      bookmarks.splice(i, 1);
    }
  }
  // Re-set back to localStorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  // Re-fetch bookmarks
  fetchBookmarks();
}
// EDIT Bookmark
function editBookmark(e, id){
   // Test if bookmarks is null
  if(localStorage.getItem('bookmarks') === !null){
    // Init array
    let bookmarks = [];
    
    // Get bookmarks from localStorage
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    
//del
// Loop throught bookmarks
  for(let i =0;i < bookmarks.length;i++){
    if(bookmarks[i].id === id){
      // Remove from array
      bookmarks.splice(i, 1);
    }
 // Re-set back to localStorage
 // localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
   
  // Get form values
  form.getElementsByClassName('name')[0].value;
form.getElementsByClassName('url')[0].value;
  
  if(!validateForm(siteName, siteUrl)){//with getElementById
    return false;
  }
//for
  let bookmark = {
    name1: [],
    url1: []
  }

let id = function generatId(){

  bookmark = {
  bookmark.name1 = name,
  bookmark.url1 = url,
  bookmark.id = id
  }


  try {

    if(localStorage.['bookmarks'].lenght === 0){ return 1;
       }else{
        lastElementIndex = localStorage.lenght - 1;
         return lastElementIndex + 1;
       }
  if (!bookmarks.name || !bookmarks.url) {
    throw new SyntaxError("Ошибка в данных");
  }

  blabla(); // произошла непредусмотренная ошибка

  alert( bookmarks.name, bookmarks.url );

} catch (e) {

  if (e.name == "SyntaxError" || e.url == "SyntaxError") {
    alert( "Извините, в данных ошибка" );
  } else {
    throw e;
  }

}

}// the end of let id = function generatId(){

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
  document.getElementById('myForm').reset();
  // Re-fetch bookmarks
  fetchBookmarks();
  // Prevent form from submitting
  e.preventDefault();
}
// Fetch bookmarks
function fetchBookmarks(){
  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Get output id
  var bookmarksResults = document.getElementById('bookmarksResults');

  // Build output
  bookmarksResults.innerHTML = '';
  for(var i = 0; i < bookmarks.length; i++){
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML += '<div class="well">' +
    '<h3>' + name + '<div class="toggle">' + '<div class="content">' + url + '</div>' +
    ' <a class="toggler" class="btn btn-danger" href="#">More</a> ' + '</div>' +
    ' <a class="btn btn-default" target="_blank" href="' + url + '">Visit</a> ' +
    ' <a bookmarksResults.addEventListener("click", editBookmark(id)) class="btn btn-danger" href="#">Edite</a> ' +
    ' <a bookmarksResults.addEventListener("click", deleteBookmark(id)) class="btn btn-danger">Delete</a> ' +
    '</h3>' +
    '</div>';
  }
}
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
/*function getAll() {
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var div = document.createElement("div");
        div.innerHTML = "<a href=\"#\">" + key + "</a>";
        document.getElementById("bookmarksResults").appendChild(div);

    }
}*/
// Validate Form
function validateForm(siteName, siteUrl){
  if(!siteName || !siteUrl){
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
