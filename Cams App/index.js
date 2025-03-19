document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');

    const style = document.createElement('style');
    style.textContent = `
        body {
            font-family: Arial, sans-serif;
        }
        .navbar {
            overflow: hidden;
            background-color: #333;
        }
        .navbar a {
            float: left;
            display: block;
            color: #f2f2f2;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }
        .navbar a:hover {
            background-color: #ddd;
            color: black;
        }
        .content {
            display: none;
            padding: 20px;
        }
        .content.active {
            display: block;
        }
    `;
    document.head.appendChild(style);

    const navbar = document.createElement('div');
    navbar.className = 'navbar';
    const pages = ['home', 'about', 'services', 'contact', 'blog'];
    pages.forEach(page => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = page.charAt(0).toUpperCase() + page.slice(1);
        link.onclick = function() {
            showPage(page);
        };
        navbar.appendChild(link);
    });
    body.appendChild(navbar);

    const contentData = {
        home: '<h1>Home Page</h1><p>Welcome to the home page.</p>',
        about: '<h1>About Page</h1><p>Learn more about us on this page.</p>',
        services: '<h1>Services Page</h1><p>Discover our services here.</p>',
        contact: '<h1>Contact Page</h1><p>Get in touch with us.</p>',
        blog: '<h1>Blog Page</h1><p>Read our latest blog posts.</p>'
    };

    pages.forEach(page => {
        const contentDiv = document.createElement('div');
        contentDiv.id = page;
        contentDiv.className = 'content';
        if (page === 'home') {
            contentDiv.classList.add('active');
        }
        contentDiv.innerHTML = contentData[page];
        body.appendChild(contentDiv);
    });

    function showPage(pageId) {
        const contents = document.querySelectorAll('.content');
        contents.forEach(function(content) {
            content.classList.remove('active');
        });
        document.getElementById(pageId).classList.add('active');
    }
});
