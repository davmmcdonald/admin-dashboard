// Select HTML elements
const category = document.querySelectorAll('.category');
const item = document.querySelectorAll('.item');
const bar = document.querySelectorAll('.bar');
const sessions = document.querySelectorAll('.sessions');
const change = document.querySelectorAll('.change');
const color = document.querySelectorAll('.color');

// Randomize pie graph and its corresponding label
const angle = Math.floor(Math.random() * 315) + 46;
document.querySelector(':root').style.setProperty('--angle', `${angle}deg`);
document.querySelector('.mask').innerText = `${Math.round(angle / 360 * 100)}%`;

// Show / hide containers underneath categories on the sidebar
category.forEach(element => {
    element.addEventListener('click', event => {
        if (event.target.nextElementSibling.style.display === 'block') {
        event.target.nextElementSibling.style.display = 'none';
        } else {
            event.target.nextElementSibling.style.display = 'block';
        }
    });
});

// Select active "tab" from the sidebar and highlight
item.forEach(element => {
    element.addEventListener('click', event => {
        item.forEach(element => element.classList.remove('selected'));
        event.target.classList.add('selected');
    });
});

// Randomize bar height on sessions graph
bar.forEach(element => {
    element.style.height = `${Math.floor(Math.random() * 75) + 26}%`;
});

// Randomize sessions and percent change on three bottom tables
sessions.forEach(element => {
    element.innerText = `${Math.floor(Math.random() * 999) + 1}`;
});

change.forEach(element => {
    const temp = Math.floor(Math.random() * 300) - 150;
    element.innerText = `${temp}%`;
    if (temp >= 0) {
        element.style.color = 'green';
    } else {
        element.style.color = 'red';
    }
});

// Randomize color on cicles for each row in three bottom tables
color.forEach(element => {
    const red = Math.floor(Math.random() * 255) + 1;
    const blue = Math.floor(Math.random() * 255) + 1;
    const green = Math.floor(Math.random() * 255) + 1;
    element.style.backgroundColor = `rgb(${red},${blue},${green})`;
});