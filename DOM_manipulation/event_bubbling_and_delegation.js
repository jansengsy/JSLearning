// EVENT BUBBLING

// Child
document.querySelector('.card-title').addEventListener('click', () => {
  console.log('Card title');
});

// Parent
document.querySelector('.card-content').addEventListener('click', () => {
  console.log('Card content');
});

// Parent of parent
document.querySelector('.col').addEventListener('click', () => {
  console.log('Col');
});

// EVENT DELEGATION

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('Delete item');
    e.target.parentElement.parentElement.remove();
  }
}
