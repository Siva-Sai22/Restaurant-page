import './style.css';
import createHome from './home';

createHome();

function handleClick(e){
    console.log(e.target.textContent);
}

const links = document.querySelectorAll('a');
links.forEach((link)=>{
    link.addEventListener('click',(handleClick));
})