console.log('Hello from js!');

build();

function build(){

    const navbar = document.createElement('div');
    navbar.setAttribute('id', 'header');
    navbar.className = 'navbar navbar-expand d-flex bg-primary';
    app.appendChild(navbar);
    

    const home = document.createElement('button');
    home.innerHTML = 'HOME';
    home.className = 'btn btn-light';
    navbar.appendChild(home);

    const title = document.createElement('h1');
    title.setAttribute('id', 'h1');
    title.innerHTML = 'William Pettersson';
    title.className = 'h1';
    app.appendChild(title);


}

