const lists = [
    {
        heading: 'Dev',
        links: [
            {
                title: 'github',
                url: 'https://www.github.com/'
            }
        ]
    },
    {
        heading: 'Studies',
        links: [
            {
                title: 'udemy',
                url: 'https://cooksystems.udemy.com/organization/home/'
            },
            {
                title: 'hackerrank',
                url: 'https://www.hackerrank.com/'
            }
        ]
    },
    {
        heading: 'Personal',
        links: [
            {
                title: 'gMail',
                url: 'https://mail.google.com/'
            },
            {
                title: 'gDrive',
                url: 'https://drive.google.com/drive/my-drive'
            }
        ]
    },
    {
        heading: 'Media',
        links: [
            {
                title: 'youtube',
                url: 'https://youtube.com/'
            },
            {
                title: 'hacker news',
                url: 'https://news.ycombinator.com/'
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

function handleSearch() {
    let searchInput = document.getElementById("search__field");

    searchInput.addEventListener('keyup', function (e) {
        if (e.key === "Enter") {
            console.log(searchInput.value);
            window.open('https://www.google.nl/search?q=' + searchInput.value).focus();
        }
    })
}

renderLists();
handleSearch();