document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("addItemButton").addEventListener("click", function(){
        addItem();
    });
    document.getElementById("editListButton").addEventListener("click", function(){
        editList();
      });
      document.getElementById("deleteListButton").addEventListener("click", function(){
        deleteList();
      });
      document.getElementById("changeListButton").addEventListener("click", function(){
        changeList();
      });
      var list = document.getElementsByClassName('list-style');

      for(let i = 0; i < list.length; i++) {
        list[i].addEventListener("click", function() {
            changeStyle((this.innerHTML).toLowerCase());

        })
      }
  });
function addItem(){
    var myList = document.getElementById("myList");
    var myListItems = myList.childElementCount;
    var newItem = prompt("Please add a new item to your list.")
    if(newItem){
        myList.innerHTML += "<li class='item' id='"+myListItems+"'>"+newItem+"     <span><button class='itemButton buttonHide' onclick='editItem("+myListItems+")'>Edit</button><button class='itemButton buttonHide' onclick='removeItem("+myListItems+")'>Remove</button></span></li>";
    }
}
function removeItem(itemId){
    var item = document.getElementById(itemId);
    item.remove();
}
function editItem(itemId){
    var item = document.getElementById(itemId);
    var itemDetail =  prompt("Please edit this item in your list.", item.innerHTML);
    if(!itemDetail){
        itemDetail = "";
    }
    item.innerHTML = itemDetail;
}
function editList(){
    var item = document.getElementsByClassName('itemButton');

    for (i = 0; i < item.length; i++) {
        if (item[i].classList.contains('buttonHide') ) {
            item[i].classList.add('buttonShow');
            item[i].classList.remove('buttonHide');
        } else {
            item[i].classList.add('buttonHide');
            item[i].classList.remove('buttonShow');        }
      }
}
function deleteList(){
    var myList = document.getElementById("myList");
    myList.innerHTML = "";
}
function changeList(){
    var listContainer = document.getElementById("listContainer");
    var myList = document.getElementById("myList");
    var myListType = myList.nodeName;
    var items = document.getElementsByClassName('item');
    var newlist = "";

    if(myListType == "UL")
    {
        newlist = document.createElement('ol');       
    }
    else{
        newlist = document.createElement('ul');
    }
    if(items.length > 0)
    {
        while(items.length > 0)
        {
            newlist.appendChild(document.getElementById(items[0].id));   
        }
    }
    myList.remove();
    newlist.setAttribute("id", "myList");
    listContainer.appendChild(newlist);
    

}

function changeStyle(styleName){
    document.getElementById("myList").style.listStyleType = styleName;
}