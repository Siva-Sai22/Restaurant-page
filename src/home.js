function createHome() {
    const contentDiv = document.querySelector('#content');

    const homeDiv = document.createElement('div');
    homeDiv.classList.add('homediv');

    const mainPara = document.createElement('p');
    mainPara.classList.add('mainpara');
    mainPara.textContent = "Indulge Your Senses and Elevate Your Dining Experience";

    const belowText = document.createElement('p');
    belowText.classList.add('belowtext');
    belowText.textContent = 'Tasty and affordable';

    const orderButton = document.createElement('button');
    orderButton.textContent = "Order Now";

    const addDiv = document.createElement('div');
    addDiv.classList.add('addDiv');

    const addPara = document.createElement('p');
    addPara.textContent = `1024 Oakwood Ave San Diego, CA 22434`;

    const timePara = document.createElement('p');
    timePara.textContent = "Mon-Thurs:8am-8pm Fri-Sun:8am-11pm";

    addDiv.appendChild(addPara);
    addDiv.appendChild(timePara);

    homeDiv.appendChild(mainPara);
    homeDiv.appendChild(belowText);
    homeDiv.appendChild(orderButton);
    homeDiv.appendChild(addDiv);

    contentDiv.appendChild(homeDiv);
}

export default createHome;