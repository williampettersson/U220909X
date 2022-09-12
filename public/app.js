console.log('Hello from js!');

build();

function build() {
    const navbar = document.createElement('div'); // Skapar en div för själva navbaren och header.
    navbar.className = 'navbar d-flex bg-primary';
    app.appendChild(navbar);
    
    const left = document.createElement('div'); // Här delar jag upp sidan i två olika divar för att kunna strukturera sidan.
    left.className = 'float-start w-50';
    app.appendChild(left);

    const right = document.createElement('div'); // -"-
    right.className = 'float-end w-50';
    app.appendChild(right);
    

    const home = document.createElement('button');  // Här skapar jag en hemknapp i navigationbar.
    home.className = 'btn btn-light ms-3 fa fa-home';
    navbar.appendChild(home);

    const github = document.createElement('button');  // Här skapar jag en githubknapp i navigationbar.
    github.className = 'btn btn-light ms-3 me-3 fa fa-github';
    navbar.appendChild(github);

    const mail = document.createElement('button');  // Här skapar jag en mailnapp i navigationbar.
    mail.className = 'btn btn-light ms-3 me-3 fa fa-envelope';
    navbar.appendChild(mail);

    const titleLeft = document.createElement('h1'); //Skapar en titel för den vänstra diven. 
    titleLeft.innerHTML = 'William Pettersson';
    titleLeft.className = 'h1 mt-3 ms-5';
    left.appendChild(titleLeft);

    const aboutDiv = document.createElement('div'); // Här skapar jag en div för textelementet.
    aboutDiv.className = 'w-75 h-25 mt-2 mg-3 ms-5 text-light';
    left.appendChild(aboutDiv);

    const aboutText = document.createElement('p');
    aboutText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare urna blandit, fermentum ex non, efficitur arcu.' + 
    ' Aliquam dui purus, ultricies ut efficitur at, volutpat ut felis. Nam interdum magna et arcu tincidunt maximus at sed arcu.' +
    ' Cras ac ligula quam. Quisque condimentum velit sed faucibus aliquam. Ut egestas vulputate malesuada. Nulla aliquam pharetra consequat.' +
    ' In viverra, sapien ut eleifend laoreet, quam lectus consectetur odio, sed interdum purus lectus et massa.';
    aboutText.className = 'bg-secondary p-2';
    aboutDiv.appendChild(aboutText);

    const container = document.createElement('div'); //Här gör jag en div container för de två mindre textelementen. 
    container.className = '';
    aboutDiv.appendChild(container);

    const text2 = document.createElement('p');
    text2.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare urna blandit, fermentum ex non, efficitur arcu.';
    text2.className = 'bg-secondary p-2 w-50 float-start border-end border-3 border-light';
    container.appendChild(text2);

    const text3 = document.createElement('p');
    text3.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare urna blandit, fermentum ex non, efficitur arcu.';
    text3.className = 'bg-secondary p-2 w-50 float-end border-start border-3 border-light';
    container.appendChild(text3);

    const titleRight = document.createElement('h1'); // Titel för den högra delen av siten. 
    titleRight.innerHTML = 'Hobbies';
    titleRight.className = 'h1 mt-3';
    right.appendChild(titleRight);

    const img1 = document.createElement('img');
    img1.innerHTML = 'bild.jpg';
    right.appendChild(img1);

}

