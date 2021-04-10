
export {pageLoad}
function pageLoad() {
    window.addEventListener('load', () => {
        const content = document.querySelector('#content');
        addHeaderImage(content);
        addNavBar();
        addTitle();
        addMenu(content);
        addContact(content);
        addAboutSushi(content);
    });
}

function addHeaderImage(content) {
    
    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    content.appendChild(header);
}

function addNavBar() {
    const header = document.querySelector('#header');
    const navBar = document.createElement('ul');
    navBar.id = 'nav-bar';
    const items = ['Home', 'Menu', 'Contact','About'];
    items.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        li.appendChild(a);
        a.textContent = item;
        a.href = '#'+item.toLowerCase();
        navBar.appendChild(li);
    });
   header.appendChild(navBar);
}

function addTitle() {
    const header = document.querySelector('#header');
    const title = document.createElement('h1');
    title.id = 'home';
    title.innerHTML = 'Sushi Restaurant';
    header.appendChild(title);
}

function addMenu(content) {
    const menuTitle = document.createElement('h2');
    content.appendChild(menuTitle);
    menuTitle.textContent ='Menu';
    menuTitle.id = 'menu';
    const menu = document.createElement('div');
    content.appendChild(menu);
    menu.id = 'menu-section';
    let items = ['./images/CaliforniaRolls.jpg','./images/Gunkan.jpg','./images/Maki.jpg','./images/MisoSoup.jpg','./images/SalmonNigiri.jpg','./images/Sashimi.jpg','./images/SushiPlate.jpg','./images/Wasabi.jpg','./images/SoySauce.jpg']
    
    items.forEach(item => {
        const div = document.createElement('div');
        div.classList = 'menu-item';
        const h3 = document.createElement('h3');
        h3.classList ='item-name'
        const image = document.createElement('img');
        image.classList = 'menu-image';        
        h3.innerHTML = item.slice((item.lastIndexOf('/'))+1,item.lastIndexOf('.'));
        image.src = item;
        div.appendChild(image);
        div.append(h3);
        menu.appendChild(div);
    });
    
}

function addContact(content) {
    const contact = document.createElement('div');
    contact.id = 'contact';
    const h2 = document.createElement('h2');
    h2.textContent = 'Contact information:'
    h2.id = 'contact-info';
    contact.appendChild(h2);
    content.appendChild(contact);
    const list = document.createElement('ul');
    contact.appendChild(list);
    const contactInfo = [
        'phone: +40737024273',
        'email: tiberiu.miinea@gmail.com'
    ]
    contactInfo.forEach(info=> {
        const li = document.createElement('li');
        li.textContent = info;
        list.appendChild(li);
    });
}

function addAboutSushi(content) {
    const about = document.createElement('div');
    about.id = 'about';
    content.appendChild(about);
    const h2 = document.createElement('h2');
    h2.id = 'about-title';
    about.appendChild(h2);
    h2.textContent = 'About sushi';
    const p = document.createElement('p');
    const a = document.createElement('a');
    a.href = 'https://en.wikipedia.org/wiki/Sushi';
    a.target = '_blank';
    a.textContent = 'Click here';
    p.textContent = 'Want to know more about Sushi? ';
    p.appendChild(a);
    about.appendChild(p);

}
