const navMenu = document.querySelector('.main');
const menu = document.querySelector('.menu');
const filters = document.querySelectorAll('.filters');
const projects = document.getElementById('projects__canva');
const filterSection = document.querySelector('.categories__filter');
const filterAll = document.getElementById('filter-all');
const filterBranding = document.getElementById('filter-branding');
const filterWeb = document.getElementById('filter-web');
const filterPhotography = document.getElementById('filter-photography');
const filterApp = document.getElementById('filter-app');
const filterParameter = document.querySelectorAll('div.categories__filter > h3');
const navAll = document.getElementById('nav-all');
const navBranding = document.getElementById('nav-branding');
const navWeb = document.getElementById('nav-web');
const navPhotography = document.getElementById('nav-photography');
const navApp = document.getElementById('nav-app');

// Mobile Menú

menu.addEventListener('click', (event) => {
    event = window.matchMedia('screen and (max-width:850px)');
    if (event.matches) {
        menu.addEventListener('click', hideShow);
    } else {
        menu.addEventListener('click', hideShow);
    };
});

function hideShow() {
    if (!navMenu.classList.contains('no-active')) {
        navMenu.classList.add('no-active');
    } else {
        navMenu.classList.remove('no-active');
    };
};

//// Link Filter Selected

// Nav Menú

navAll.addEventListener('click', () => {
    if (!filterAll.classList.contains('selected')) {
        filterParameter.forEach(filter => {
            filter.classList.remove('selected');
        });
        filterAll.className = 'selected';
    }
});

navBranding.addEventListener('click', () => {
    if (!filterBranding.classList.contains('selected')) {
        filterParameter.forEach(filter => {
            filter.classList.remove('selected');
        });
        filterBranding.className = 'selected';
    }
});

navWeb.addEventListener('click', () => {
    if (!filterWeb.classList.contains('selected')) {
        filterParameter.forEach(filter => {
            filter.classList.remove('selected');
        });
        filterWeb.className = 'selected';
    }
});

navPhotography.addEventListener('click', () => {
    if (!filterPhotography.classList.contains('selected')) {
        filterParameter.forEach(filter => {
            filter.classList.remove('selected');
        });
        filterPhotography.className = 'selected';
    }
});

navApp.addEventListener('click', () => {
    if (!filterApp.classList.contains('selected')) {
        filterParameter.forEach(filter => {
            filter.classList.remove('selected');
        });
        filterApp.className = 'selected';
    }
});

// Nav Filter

filterAll.addEventListener('click', () => {
    if (!filterAll.classList.contains('selected')) {
        filterParameter.forEach(filter => {
            filter.classList.remove('selected');
        });
        filterAll.className = 'selected';
    }
});

filterBranding.addEventListener('click', () => {
    if (!filterBranding.classList.contains('selected')) {
        filterParameter.forEach(filter => {
            filter.classList.remove('selected');
        });
        filterBranding.className = 'selected';
    }
});

filterWeb.addEventListener('click', () => {
    if (!filterWeb.classList.contains('selected')) {
        filterParameter.forEach(filter => {
            filter.classList.remove('selected');
        });
        filterWeb.className = 'selected';
    }
});

filterPhotography.addEventListener('click', () => {
    if (!filterPhotography.classList.contains('selected')) {
        filterParameter.forEach(filter => {
            filter.classList.remove('selected');
        });
        filterPhotography.className = 'selected';
    }
});

filterApp.addEventListener('click', () => {
    if (!filterApp.classList.contains('selected')) {
        filterParameter.forEach(filter => {
            filter.classList.remove('selected');
        });
        filterApp.className = 'selected';
    }
});

//// Render All Projects On Load Page

const getData = async () => {

    try {

        let res = await fetch('https://sneak-brown.vercel.app/data.json');
        let json = await res.json();

        const canvaGrid = document.createElement('div');
        canvaGrid.className = 'canva-grid';
        canvaGrid.id = 'canva-grid';

        for (let index = 0; index < json.data.length; index++) {

            const element = json.data[index];

            const projects = document.getElementById('projects__canva');

            const addImg = document.createElement('div');
            addImg.classList.add('canva-img');
            addImg.setAttribute('id', 'canva-img');
            addImg.style.backgroundImage = `url(${element.image})`;

            const addInfo = document.createElement('div');
            addInfo.classList.add('info');

            const addTitle = document.createElement('h3');
            addTitle.classList.add('title');
            addTitle.innerHTML = `${element.title}`

            const addHr = document.createElement('hr');

            const addDescription = document.createElement('p');
            addDescription.innerHTML = `${element.description}`;
            addDescription.classList.add('description');

            addInfo.appendChild(addTitle);
            addInfo.appendChild(addHr);
            addInfo.appendChild(addDescription);
            addImg.appendChild(addInfo);
            canvaGrid.appendChild(addImg);
            projects.appendChild(canvaGrid);
        }
    } catch (error) {
        console.log(error);
    };
};

document.addEventListener('DOMContentLoaded', getData);

//// Filter and Render Grid Content

const filtros = async function () {

    const gridCanva = document.querySelectorAll('.canva-grid');

    gridCanva.forEach(canva => canva.remove());

    let cate = this.innerText;
    // let res = await fetch('http://localhost:7000/data.json');
    let res = await fetch('https://sneak-brown.vercel.app/data.json');
    let json = await res.json();

    let filter;

    if (cate === 'Branding') {
        filter = json.data.filter(project => project.category == 'Branding');
    } if (cate === 'Web') {
        filter = json.data.filter(project => project.category == 'Web');
    } if (cate === 'Photography') {
        filter = json.data.filter(project => project.category == 'Photography');
    } if (cate === 'App') {
        filter = json.data.filter(project => project.category == 'App');
    } if (cate === 'All') {
        getData();
    };

    try {

        const canvaGrid = document.createElement('div');
        canvaGrid.className = 'canva-grid';
        canvaGrid.id = 'canva-grid';

        for (let index = 0; index < filter.length; index++) {

            const element = filter[index];

            const addImg = document.createElement('div');
            addImg.classList.add('canva-img');
            addImg.style.backgroundImage = `url(${element.image})`;

            const addInfo = document.createElement('div');
            addInfo.classList.add('info');

            const addTitle = document.createElement('h3');
            addTitle.classList.add('title');
            addTitle.innerHTML = `${element.title}`

            const addHr = document.createElement('hr');

            const addDescription = document.createElement('p');
            addDescription.innerHTML = `${element.description}`;
            addDescription.classList.add('description');

            addInfo.appendChild(addTitle);
            addInfo.appendChild(addHr);
            addInfo.appendChild(addDescription);
            addImg.appendChild(addInfo);
            canvaGrid.appendChild(addImg);
            projects.appendChild(canvaGrid);
        }
    } catch (error) {
        console.log(error);
    };
};

filters.forEach(filter => {
    filter.addEventListener('click', filtros);
});