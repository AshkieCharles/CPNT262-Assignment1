function Menu(e){
  /* TO be able to pull down the menu when user clicks*/
  let list = document.querySelector('ul');

  e.name == 'menu' ? (e.name = "close", list.classList.add('top-[80px]'), list.classList.add('opacity-100')) : (e.name = "menu" ,list.classList.remove('top-[80px]'), list.classList.remove('opacity-0'))
}
