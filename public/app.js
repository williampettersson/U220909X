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

    const twitter = document.createElement('button');  // Här skapar jag en twitterknapp i navigationbar.
    twitter.className = 'btn btn-light ms-3 me-3 fa fa-twitter';
    navbar.appendChild(twitter);

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
    aboutText.innerHTML = 'Hi, my name is William Petterson and I am 19 years old. I recently graduated from Östra gymnasiet in Skogås, Huddinge, Stockholm, Sweden.'+
    ' I am currently studying a fourth year on the same school. Right now I am living with my family which consist of four members. My dad, my mom, my little sister and me.'+
    ' I hope to become a great developer after this year and I might continue to study afterward.';
    aboutText.className = 'bg-secondary p-2';
    aboutDiv.appendChild(aboutText);

    const container = document.createElement('div'); //Här gör jag en div container för de två mindre textelementen. 
    container.className = '';
    aboutDiv.appendChild(container);

    const text2 = document.createElement('p');
    text2.innerHTML = 'As a little kid I grew up to love Hammarby IF, it has been my favourite and only Swedish football my whole life. '+
    'I even have a small shirt for kids that say Hammarby on the chest';
    text2.className = 'bg-secondary p-2 w-50 float-start border-end border-3 border-light';
    container.appendChild(text2);

    const text3 = document.createElement('ul');
    text3.innerHTML = 'Interests' + '<li>Skiing / Snowboarding</li> <li>Gaming</li> <li>Hammarby IF</li>';
    text3.className = 'bg-secondary p-2 w-50 float-end border-start border-3 border-light ps-4';
    container.appendChild(text3);

    const titleRight = document.createElement('h1'); // Titel för den högra delen av siten. 
    titleRight.innerHTML = 'Hobbies';
    titleRight.className = 'h1 mt-3';
    right.appendChild(titleRight);

    const hobbies = document.createElement('div');
    hobbies.className = '';
    right.appendChild(hobbies);

    const img1 = document.createElement('img');
    img1.setAttribute('src','hif.JPG');
    img1.setAttribute('alt','Picture of Hammarby tifo');
    img1.className = ' float-end w-50';
    hobbies.appendChild(img1);

    const img2 = document.createElement('img');
    img2.setAttribute('src','skiing.PNG');
    img2.setAttribute('alt','Picture of me skiing');
    img2.className = 'float-start w-50';
    hobbies.appendChild(img2);

    const pictext = document.createElement('p');
    pictext.className = 'w-50 p-2';
    pictext.innerHTML = 'I love to ski and snowboard and have been doing it since I was about 4 years old.';
    hobbies.appendChild(pictext);
    


}