let category = document.querySelectorAll('.category');
let item = document.querySelectorAll('.item');

category.forEach(element => {
    element.addEventListener('click',(event) => {
        if (event.target.nextElementSibling.style.display === 'block') {
        event.target.nextElementSibling.style.display = 'none';
        } else {
            event.target.nextElementSibling.style.display = 'block';
        }
    });
});

item.forEach(element => {
    element.addEventListener('click',(event) => {
        item.forEach(element => element.classList.remove('selected'));
        element.classList.add('selected');
    });
});