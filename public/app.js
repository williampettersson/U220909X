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
    aboutText.innerHTML = 'Hi, my name is William Petterson and I am 19 years old. I recently graduated from Östra gymnasiet in Skogås, '+
    'Huddinge, Stockholm, Sweden. I am currently studying a fourth year on the same school. ';
    aboutText.className = 'bg-secondary';
    aboutDiv.appendChild(aboutText);

    const text2 = document.createElement('p');
    text2.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare urna blandit, fermentum ex non, efficitur arcu.' + 
    ' Aliquam dui purus, ultricies ut efficitur at, volutpat ut felis. Nam interdum magna et arcu tincidunt maximus at sed arcu.';
    text2.className = 'bg-secondary';
    aboutDiv.appendChild(text2);

    const titleRight = document.createElement('h1'); // Titel för den högra delen av siten. 
    titleRight.innerHTML = 'Hobbies';
    titleRight.className = 'h1 mt-3';
    right.appendChild(titleRight); hej
}

