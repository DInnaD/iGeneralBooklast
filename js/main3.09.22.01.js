// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save Bookmark
function saveBookmark(e){
  // Get form values
  let siteName =document.getElementById('siteName').value;
  let sitePhone =document.getElementById('sitePhone').value;
  let siteEmail =document.getElementById('siteEmail').value;
  let siteUrl =document.getElementById('siteUrl').value;

  if(!validateForm(siteName, sitePhone, siteEmail, siteUrl)){
    return false;
  }

  let bookmark = {
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
    let bookmarks = [];
    // Add to array
    bookmarks.push(bookmark);
    // Set to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    // Get bookmarks from localStorage
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
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

// Delete bookmark
function deleteBookmark(phone, email, url){
  // Get bookmarks from localStorage
  let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Loop throught bookmarks
  for(let i =0;i < bookmarks.length;i++){
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
  let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Get output id
  let bookmarksResults = document.getElementById('bookmarksResults');

  // Build output
  bookmarksResults.innerHTML = '';
  for(let i = 0; i < bookmarks.length; i++){
    let name = bookmarks[i].name;
    let phone = bookmarks[i].phone;
    /*------------------------------------------look more*/
    let email = bookmarks[i].mail;
    let url = bookmarks[i].url;

    bookmarksResults.innerHTML += '<div class="well">'+
                                  '<h3>'+name+phone+email+url+
                                  //---------------------------------------------------------------more
                                  ' <a class="btn btn-default" target="_blank" href="'++'" href="#">More</a> ' +
                                  ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> ' +
                                  ' <a onclick="editBookmark(\''+name+phone+email+url+'\')" target="_blank" class="btn btn-danger" href="#">Edite</a> ' +
                                  ' <a onclick="deleteBookmark(\''+phone+email+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                  '</h3>'+
                                  '</div>';
  }
}
function search() {
    var input, a, i, ul, li, filter;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    ul = document.getElementById('bookmarksResults');
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
// Validate Form
function validateForm(siteName, sitePhone, siteEmail, siteUrl){
  if(!siteName || !sitePhone ||!siteEmail || !siteUrl){
    alert('Please fill in the form');
    return false;
  }

  let expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  let regex = new RegExp(expression);

  if(!siteUrl.match(regex)){
    alert('Please use a valid URL');
    return false;
  }

  return true;
}
