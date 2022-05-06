const lists = [
    {
        heading: 'dev',
        links: [
            {
                title: 'github',
                url: 'https://www.github.com/'
            }
        ]
    },
    {
        heading: 'studies',
        links: [
            {
                title: 'udemy',
                url: 'udemy url'
            }
        ]
    },
    {
        heading: 'personal',
        links: [
            {
                title: 'gmail',
                url: 'gmail url'
            }
        ]
    },
    {
        heading: 'media',
        links: [
            {
                title: 'youtube',
                url: 'https://youtube.com/'
            }
        ]
    }
];


function renderLists() {
    const linksWrapper = document.querySelector('#links');

    lists.forEach(list => {
        const linksTemplate = list.links.map(link => {
            return `
                <li class="links__item">
                    <a class="links_link" href="${link.url}">${link.title}</a>
                </li>
            `
        })

        const template = `
            <ul class="links">
                <li class="links__item">
                    <span class="links_heading">${list.heading}</span>
                </li>
                ${linksTemplate.join('')}
            </ul>
        `

        linksWrapper.insertAdjacentHTML('beforeend', template)
    });
}

renderLists();