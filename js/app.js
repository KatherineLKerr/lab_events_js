document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const handleFormSubmit = function (event) {
    event.preventDefault();

    const newDivItem = document.createElement('div');
    newDivItem.textContent = `${event.target.title.value} ${event.target.author.value} ${event.target.category.value}`

    const list = document.querySelector('.book-list');
    list.appendChild(newDivItem);

    form.reset()
  };

  const form = document.querySelector('#new-item-form')
  form.addEventListener('submit', handleFormSubmit)

  const handleDeleteList = function (event) {
    const list = document.querySelector('.book-list');
    list.textContent = ` `
  }

  const deleteList = document.querySelector('#delete-button')
  deleteList.addEventListener('click', handleDeleteList)
})
