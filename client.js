function Menu(e){
  /* TO be able to pull down the menu when user clicks*/
  let list = document.querySelector('ul');
  /* e is the variable name of the class for the button. Here we use the name of icon of menu and simply state to change the class into close to change the hamburger menu into an X after the user has clicked on it. I have also changed the css through javascript by adding top px to provide a scrolling down mechanic with the list.*/
  e.name == 'menu' ? (e.name = "close", list.classList.add('top-[80px]'), list.classList.add('opacity-100')) : (e.name = "menu" ,list.classList.remove('top-[80px]'), list.classList.remove('opacity-0'))
}

for (i = 1; i <= 9; i++){
  /* takes the id of the div and create 9 different images. */
  Images.innerHTML += "<div><img src= /images/"+i+".jpg></div>";

}
  