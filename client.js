function Menu(e){
  /* TO be able to pull down the menu when user clicks*/
  let list = document.querySelector('ul');
  /* e is the variable name of the class for the button. Here we use the name of icon of menu and simply state to change the class into close to change the hamburger menu into an X after the user has clicked on it. I have also changed the css through javascript by adding top px to provide a scrolling down mechanic with the list.*/
  e.name == 'menu' ? (e.name = "close", list.classList.add('top-[80px]'), list.classList.add('opacity-100')) : (e.name = "menu" ,list.classList.remove('top-[80px]'), list.classList.remove('opacity-0'))
}
const imgGalleryArray = new Array()

for (i = 1; i <= 9; i++){
  /* takes the id of the div and create 9 different images. */
  imgGalleryArray[i] = new Image()
  if (i==1) {
    imgGalleryArray[i].src = 'assets/images/titanfall.jpg'
    document.getElementById("Images").prepend(imgGalleryArray[i])
  }
  if (i==2) {
    imgGalleryArray[i].src = 'assets/images/titanfall.jpg'
    document.getElementById("Images").prepend(imgGalleryArray[i])
  }
  if (i==3) {
    imgGalleryArray[i].src = 'assets/images/titanfall.jpg'
    document.getElementById("Images").prepend(imgGalleryArray[i])
  }
  if (i==4) {
    imgGalleryArray[i].src = 'assets/images/titanfall.jpg'
    document.getElementById("Images").prepend(imgGalleryArray[i])
  }
  if (i==5) {
    imgGalleryArray[i].src = 'assets/images/titanfall.jpg'
    document.getElementById("Images").prepend(imgGalleryArray[i])
  }
  if (i==6) {
    imgGalleryArray[i].src = 'assets/images/titanfall.jpg'
    document.getElementById("Images").prepend(imgGalleryArray[i])
  }
  if (i==7) {
    imgGalleryArray[i].src = 'assets/images/titanfall.jpg'
    document.getElementById("Images").prepend(imgGalleryArray[i])
  }
  if (i==8) {
    imgGalleryArray[i].src = 'assets/images/titanfall.jpg'
    document.getElementById("Images").prepend(imgGalleryArray[i])
  }
  if (i==9) {
    imgGalleryArray[i].src = 'assets/images/titanfall.jpg'
    document.getElementById("Images").prepend(imgGalleryArray[i])
  }

 
}



/*Images.innerHTML += "<div><img class=\"hover:scale-125 duration-700 cursor-pointer rounded max-w-[25rem]\"src= /assets/images/"+i+".jpg></div>"; */