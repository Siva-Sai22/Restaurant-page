import './style.css';
import createHome from './home';
import displayMenu from './menu';

function render() {
    createHome();
    const content = document.querySelector('#content');

    function handleClick(e) {
        while (content.firstChild) {
            content.removeChild(content.lastChild);
        }
        if (e.target.textContent === 'Home') {
            createHome();
        } else if (e.target.textContent === 'Menu') {
            displayMenu();
        }

        const links = document.querySelectorAll('#header a');
        links.forEach((link) => {
            link.classList.remove('activelink');
        });

        e.target.classList.add('activelink');
    }

    const links = document.querySelectorAll('#header a');
    links.forEach((link) => {
        link.addEventListener('click', handleClick);
    });
}

export default render;