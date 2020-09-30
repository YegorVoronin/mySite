//Variables
let body = document.querySelector('body');
    //TOP NAV


    //SIDENAV
let filter = document.querySelector('.filter');

    //SLIDE NAV
let slideNav = document.querySelector('.slideoutNav')
    //LOGO
let logo = document.querySelector('.logo');
let logoOutline = document.querySelector('.logo div');
let logoIcon = document.querySelector('.logo i');
let logo1 = document.querySelector('.logo1');
let logoOutline1 = document.querySelector('.logo1 div');
let logoIcon1 = document.querySelector('.logo1 i');

    //LINKS
let individualLinks = document.querySelectorAll('.links li');
let highlighted = document.querySelector('#highlighted');

    //CONTACT SECTION
let contactInfo = document.querySelector('.contact-info');

    //BURGER
let burger = document.querySelector('.burger');
let slideoutNav = document.querySelector('.slideoutNav');
let line1 = document.querySelector('.line1');
let line2 = document.querySelector('.line2');
let line3 = document.querySelector('.line3');
let openNav = false;

    //SECTIONS
let mainBody = document.querySelector('.main-body');
let homeBTN = document.querySelector('.home');
let skillsBTN = document.querySelector('.skills');
let projectsBTN = document.querySelector('.projects');
let contactBTN = document.querySelector('.contact');

let home1 = document.querySelector('.home1');
let skills1 = document.querySelector('.skills1');
let projects1 = document.querySelector('.projects1');
let contact1 = document.querySelector('.contact1')
// let homeBTNs = document.querySelectorAll('.home');
// let skillsBTNs = document.querySelectorAll('.skills');
// let projectsBTNs = document.querySelectorAll('.projects');
// let contactBTNs = document.querySelectorAll('.contact');

// for (const homeBTN of homeBTNs) {
//     homeBTN.addEventListener('click', getHome);
// }
// for (const skillsBTN of skillsBTNs) {
//     skillsBTN.addEventListener('click', getSkills);
// }
// for (const projectsBTN of projectsBTNs) {
//     projectsBTN.addEventListener('click', getProjects);
// }
// for (const contactBTN of contactBTNs) {
//     contactBTN.addEventListener('click', getContact);
// }

    //MORE LINKS
let moreLinks = document.querySelector('.more-links');

// CARD FLIP
let curtains = document.querySelectorAll('.curtain');
let arrowDowns = document.querySelectorAll('.arrow-down')
// HOME PAGE
let infoOpen = false;
let info = document.querySelector('.info');
let arrowDown = document.querySelector('#aboutMe i');
let homeFilter= document.querySelector('#home-filter')

for (const curtain of curtains) {
    curtain.addEventListener('click', removeCurtain)
}
for (const arrowDown of arrowDowns) {
    arrowDown.addEventListener('click', closeCurtain)
}

burger.addEventListener('click', getSidenav)

homeBTN.addEventListener('click', getHome);
skillsBTN.addEventListener('click', getSkills);
projectsBTN.addEventListener('click', getProjects);
contactBTN.addEventListener('click', getContact);
home1.addEventListener('click', getHome);
skills1.addEventListener('click', getSkills);
projects1.addEventListener('click', getProjects);
contact1.addEventListener('click', getContact);

arrowDown.addEventListener('click', expandInfo)

function removeCurtain(){
    this.style.height = '0%';
    this.style.backgroundColor = '#333';
}
function closeCurtain(){
    let curtain = this.parentElement.parentElement.childNodes[1]
    curtain.style.height = '100%';
    curtain.style.backgroundColor = '#494F77';
}

function stopResumeAnimation(){
    let resumeIcon = document.querySelector('.top-nav-resume i');
    let resumeLetters = document.querySelector('.top-nav-resume p');
    resumeIcon.style.animation = 'none';
    resumeIcon.style.color= '#999999';
    resumeLetters.style.animation = 'none';
    resumeLetters.style.opacity = '1';
    resumeLetters.style.color= '#999999';
};

function getSidenav(){
    if (openNav === false) {
        slideoutNav.style.right = '0%';

        burger.style.top = '45px';
        burger.style.left = '30px';

        line1.style.transform = 'rotateZ(45deg)';
        line1.style.top = '15px';
        line1.style.borderRadius = '15px';

        line2.style.left = '-200px';

        line3.style.transform = 'rotateZ(135deg)';
        line3.style.top = '-15px';
        line3.style.borderRadius = '15px';

        openNav = true;
    } else if (openNav === true) {
        slideoutNav.style.right = '100%';

        burger.style.top = '30px';
        burger.style.left = '10px';

        line1.style.transform = 'rotateZ(0deg)';
        line1.style.top = '0px';
        line1.style.borderRadius = '0px';

        line2.style.left = '0px';

        line3.style.transform = 'rotateZ(0deg)';
        line3.style.top = '0px';
        line3.style.borderRadius = '0px';

        openNav = false;
    };
};

function getHome(){
    mainBody.style.right = '0%';
   
    homeBTN.setAttribute('id', 'highlighted')
    home1.setAttribute('id', 'highlighted');

    skillsBTN.removeAttribute('id');
    projectsBTN.removeAttribute('id');
    contactBTN.removeAttribute('id');

    skills1.removeAttribute('id');
    projects1.removeAttribute('id');
    contact1.removeAttribute('id');
    // this.parentElement.childNodes[3].removeAttribute('id');
    // this.parentElement.childNodes[5].removeAttribute('id');
    // this.parentElement.childNodes[7].removeAttribute('id');
    closeInfo()
}
function getSkills(){
    mainBody.style.right = '100%';
    skillsBTN.setAttribute('id', 'highlighted')
    skills1.setAttribute('id', 'highlighted');

    homeBTN.removeAttribute('id');
    projectsBTN.removeAttribute('id');
    contactBTN.removeAttribute('id');

    home1.removeAttribute('id');
    projects1.removeAttribute('id');
    contact1.removeAttribute('id');
    // this.parentElement.childNodes[1].removeAttribute('id');
    // this.parentElement.childNodes[5].removeAttribute('id');
    // this.parentElement.childNodes[7].removeAttribute('id');
    closeInfo()
}
function getProjects(){
    mainBody.style.right = '200%';
    projectsBTN.setAttribute('id', 'highlighted')
    projects1.setAttribute('id', 'highlighted');

    skillsBTN.removeAttribute('id');
    homeBTN.removeAttribute('id');
    contactBTN.removeAttribute('id');

    skills1.removeAttribute('id');
    home1.removeAttribute('id');
    contact1.removeAttribute('id');
    // this.parentElement.childNodes[1].removeAttribute('id');
    // this.parentElement.childNodes[3].removeAttribute('id');
    // this.parentElement.childNodes[7].removeAttribute('id');
    closeInfo()
}
function getContact(){
    mainBody.style.right = '300%';
    contactBTN.setAttribute('id', 'highlighted')
    contact1.setAttribute('id', 'highlighted');

    skillsBTN.removeAttribute('id');
    projectsBTN.removeAttribute('id');
    homeBTN.removeAttribute('id');
    closeInfo()

    skills1.removeAttribute('id');
    projects1.removeAttribute('id');
    home1.removeAttribute('id');
    // this.parentElement.childNodes[1].removeAttribute('id');
    // this.parentElement.childNodes[3].removeAttribute('id');
    // this.parentElement.childNodes[5].removeAttribute('id');
    closeInfo()
}
function expandInfo(){
    if (infoOpen === false) {
        info.style.height = '200%';
        arrowDown.style.transform = 'rotateZ(180deg)';
        arrowDown.style.position = 'relative';
        arrowDown.style.top = '-45px'
        infoOpen = true;
    } else if (infoOpen === true) {
        info.style.height = '40%';
        arrowDown.style.transform = 'rotateZ(0deg)';
        arrowDown.style.position = 'relative';
        arrowDown.style.top = '0px'
        infoOpen = false;
    }
}
function closeInfo(){
 if (infoOpen === true) {
    info.style.height = '40%';
    arrowDown.style.transform = 'rotateZ(0deg)';
    arrowDown.style.position = 'relative';
    arrowDown.style.top = '0px'
    infoOpen = false;
}
}