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

    const titleLeft = document.createElement('h1'); //Skapar en titel för den vänstra diven. 
    titleLeft.innerHTML = 'William Pettersson';
    titleLeft.className = 'h1 mt-3 ms-5';
    left.appendChild(titleLeft);

    const aboutDiv = document.createElement('div'); // Här skapar jag en div för textelementet.
    aboutDiv.className = 'w-75 vh- mt-1 mg-3 ms-5 bg-dark text-light border';
    left.appendChild(aboutDiv);

    const aboutText = document.createElement('p');
    aboutText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare urna blandit, fermentum ex non, efficitur arcu. Aliquam dui purus, ultricies ut efficitur at, volutpat ut felis. Nam interdum magna et arcu tincidunt maximus at sed arcu. Cras ac ligula quam. Quisque condimentum velit sed faucibus aliquam. Ut egestas vulputate malesuada. Nulla aliquam pharetra consequat. In viverra, sapien ut eleifend laoreet, quam lectus consectetur odio, sed interdum purus lectus et massa. Praesent sit amet efficitur ante, facilisis ornare dolor. Vivamus pulvinar vitae mauris sed aliquam. Aenean eros nulla, finibus eu porttitor vehicula, sodales quis lorem. Pellentesque eu vestibulum sapien. Ut scelerisque risus elit, sed cursus ligula semper non.';
    aboutText.className = '';
    aboutDiv.appendChild(aboutText);

    const titleRight = document.createElement('h1'); // Titel för den högra delen av siten. 
    titleRight.innerHTML = 'Hobbies';
    titleRight.className = 'h1 mt-3';
    right.appendChild(titleRight);
}

