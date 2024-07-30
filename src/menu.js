import cheeseburger from '../assets/cheeseburger.png'
import hamburger from '../assets/hamburger.png';
import double_cheeseburger from '../assets/double-cheeseburger.png';
import steak from '../assets/steak.png';
import french_fries from '../assets/french-fries.png';

function displayMenu() {
    const contentDiv = document.querySelector('#content');

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menudiv');

    const heading = document.createElement('h1');
    heading.textContent = "Our Menu";
    heading.classList.add('menuheading');

    const menuItems = document.createElement('div');
    menuItems.classList.add('menuitems');

    const menuItem = document.createElement('div');
    menuItem.classList.add('menuitem');

    const img = document.createElement('img');
    img.src = cheeseburger;
    img.classList.add('menuitemphoto');

    const menucontent = document.createElement('div');
    menucontent.classList.add('menucontent');

    const itemHeading = document.createElement('h2');
    itemHeading.textContent = "Cheeseburger";
    itemHeading.classList.add('menuitemheading');

    const itemDescription = document.createElement('p');
    itemDescription.textContent = "Delicious cheeseburger with all the fixings.";
    itemDescription.classList.add('menuitemdescription');

    const menuItem2 = document.createElement('div');
    menuItem2.classList.add('menuitem');

    const img2 = document.createElement('img');
    img2.src = hamburger;
    img2.classList.add('menuitemphoto');

    const menucontent2 = document.createElement('div');
    menucontent2.classList.add('menucontent');

    const itemHeading2 = document.createElement('h2');
    itemHeading2.textContent = "Hamburger";
    itemHeading2.classList.add('menuitemheading');

    const itemDescription2 = document.createElement('p');
    itemDescription2.textContent = "Classic hamburger with juicy patty.";
    itemDescription2.classList.add('menuitemdescription');

    menuItem2.appendChild(img2);
    menucontent2.appendChild(itemHeading2);
    menucontent2.appendChild(itemDescription2);
    menuItem2.appendChild(menucontent2);
    menuItems.appendChild(menuItem2);

    const menuItem3 = document.createElement('div');
    menuItem3.classList.add('menuitem');

    const img3 = document.createElement('img');
    img3.src = double_cheeseburger;
    img3.classList.add('menuitemphoto');

    const menucontent3 = document.createElement('div');
    menucontent3.classList.add('menucontent');

    const itemHeading3 = document.createElement('h2');
    itemHeading3.textContent = "Double Cheeseburger";
    itemHeading3.classList.add('menuitemheading');

    const itemDescription3 = document.createElement('p');
    itemDescription3.textContent = "Two juicy patties with melted cheese.";
    itemDescription3.classList.add('menuitemdescription');

    menuItem3.appendChild(img3);
    menucontent3.appendChild(itemHeading3);
    menucontent3.appendChild(itemDescription3);
    menuItem3.appendChild(menucontent3);
    menuItems.appendChild(menuItem3);

    const menuItem4 = document.createElement('div');
    menuItem4.classList.add('menuitem');

    const img4 = document.createElement('img');
    img4.src = steak;
    img4.classList.add('menuitemphoto');

    const menucontent4 = document.createElement('div');
    menucontent4.classList.add('menucontent');

    const itemHeading4 = document.createElement('h2');
    itemHeading4.textContent = "Steak";
    itemHeading4.classList.add('menuitemheading');

    const itemDescription4 = document.createElement('p');
    itemDescription4.textContent = "Tender and juicy steak cooked to perfection.";
    itemDescription4.classList.add('menuitemdescription');

    menuItem4.appendChild(img4);
    menucontent4.appendChild(itemHeading4);
    menucontent4.appendChild(itemDescription4);
    menuItem4.appendChild(menucontent4);
    menuItems.appendChild(menuItem4);

    const menuItem5 = document.createElement('div');
    menuItem5.classList.add('menuitem');

    const img5 = document.createElement('img');
    img5.src = french_fries;
    img5.classList.add('menuitemphoto');

    const menucontent5 = document.createElement('div');
    menucontent5.classList.add('menucontent');

    const itemHeading5 = document.createElement('h2');
    itemHeading5.textContent = "French Fries";
    itemHeading5.classList.add('menuitemheading');

    const itemDescription5 = document.createElement('p');
    itemDescription5.textContent = "Crispy and golden french fries.";
    itemDescription5.classList.add('menuitemdescription');

    menuItem5.appendChild(img5);
    menucontent5.appendChild(itemHeading5);
    menucontent5.appendChild(itemDescription5);
    menuItem5.appendChild(menucontent5);
    menuItems.appendChild(menuItem5);

    menuItem.appendChild(img);
    menucontent.appendChild(itemHeading);
    menucontent.appendChild(itemDescription);
    menuItem.appendChild(menucontent);
    menuItems.appendChild(menuItem);

    menuDiv.appendChild(heading);
    menuDiv.appendChild(menuItems);

    contentDiv.appendChild(menuDiv);
}

export default displayMenu;