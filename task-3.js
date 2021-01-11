const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const listRef = document.querySelector('ul#gallery');


listRef.insertAdjacentHTML('afterbegin', '<li></li>');
listRef.firstChild.insertAdjacentHTML('afterend','<li></li>' );
listRef.insertAdjacentHTML('beforeend', '<li></li>');


const itemsRef = listRef.children;

//console.dir(itemsRef);


for (let i = 0; i < itemsRef.length; i += 1){
  const image = document.createElement('img');
  image.classList.add('image-style');
    image.setAttribute('src', images[i].url);
    //image.url = images[i].url;
    image.alt = images[i].alt;
    itemsRef[i].appendChild(image);
}
