console.log('Hello from js!');

build();

function build(){
    const left = document.createElement('div');
    app.appendChild(left);

    const right = document.createElement('div');
    right.className = 'float-start';
    app.appendChild(right);

    const navbar = document.createElement('div');
    navbar.className = 'navbar d-flex bg-primary';
    left.appendChild(navbar);
    

    const home = document.createElement('button');
    home.innerHTML = 'HOME';
    home.className = 'btn btn-light ms-2';
    navbar.appendChild(home);

    const titleLeft = document.createElement('h1');
    titleLeft.innerHTML = 'William Pettersson';
    titleLeft.className = 'h1 mt-3 ms-3';
    left.appendChild(titleLeft);

    const aboutDiv = document.createElement('div');
    aboutDiv.className = 'w-50 mg-3 ms-3 bg-dark text-light border';
    left.appendChild(aboutDiv);

    const aboutText = document.createElement('p');
    aboutText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare urna blandit, fermentum ex non, efficitur arcu. Aliquam dui purus, ultricies ut efficitur at, volutpat ut felis. Nam interdum magna et arcu tincidunt maximus at sed arcu. Cras ac ligula quam. Quisque condimentum velit sed faucibus aliquam. Ut egestas vulputate malesuada. Nulla aliquam pharetra consequat. In viverra, sapien ut eleifend laoreet, quam lectus consectetur odio, sed interdum purus lectus et massa. Praesent sit amet efficitur ante, facilisis ornare dolor. Vivamus pulvinar vitae mauris sed aliquam. Aenean eros nulla, finibus eu porttitor vehicula, sodales quis lorem. Pellentesque eu vestibulum sapien. Ut scelerisque risus elit, sed cursus ligula semper non.';
    aboutText.className = '';
    aboutDiv.appendChild(aboutText);

    const titleRight = document.createElement('h1');
    titleRight.innerHTML = 'Hobbies';
    titleRight.className = 'h1';
    right.appendChild(titleRight);
}

