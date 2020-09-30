//Variables
//StartBtn
let startBtn = document.querySelector('.start-btn');
let startMenu = document.querySelector('.startmenu');
let moreApps = document.querySelector('#more-apps');
let moreProgramsBtn = document.querySelector('.more-programs');
let offClick1 = document.querySelector('.offClick1');
let offClick2 = document.querySelector('.offClick2');
//Time
let timeDisplay = document.querySelector('.display-time');
//User Screen
let userBtn = document.querySelector('#user');
let userScreen = document.querySelector('.user-screen');
let welcome = document.querySelector('.welcome-screen');
//shutdown button and logoff button
let shutdown = document.querySelector('.shutdown');
let logOff = document.querySelector('.log-off');


//loading screen
function loadDisapear(){
    let loadScreen = document.querySelector('.loading-screen');
    loadScreen.style.display = 'none';
}
setTimeout('loadDisapear()', 4500);

//user screen
userBtn.addEventListener('click', hideUserScreen);

function hideUserScreen(){
    userScreen.style.display = 'none';
    setTimeout('closeWelcome()', 1500);
}
function closeWelcome(){
    welcome.style.display = "none";
}

// Desktop 
//Start Menu
startBtn.addEventListener('click', getStartMenu);
moreProgramsBtn.addEventListener('click', getMoreApps);
offClick1.addEventListener('click', closeStartMenu);
offClick2.addEventListener('click', closeStartMenu);

let startMenuOpen = false;
let programMenuOpen = false;

function getMoreApps(){
    if (programMenuOpen === false) {
        openMoreApps();
    } else if (programMenuOpen === true) {
        closeMoreApps();
    }
}

function getStartMenu(){
    if (startMenuOpen === false) {
        openStartMenu();  
    } else if (startMenuOpen === true) {
        closeStartMenu();
    }
};

function openStartMenu(){
    startMenu.style.width = '380px';
    startBtn.style.boxShadow = '0px 5px 10px #333 inset';
    offClick1.style.visibility = 'initial';
    offClick2.style.visibility = 'initial';
    startMenuOpen = true;
};

function closeStartMenu() {
    startMenu.style.width = '0px';
    startMenuOpen = false;
    startBtn.style.boxShadow = '0px 5px 10px #79ce71 inset';
    offClick1.style.visibility = 'hidden';
    offClick2.style.visibility = 'hidden';
    closeMoreApps();
};

function openMoreApps(){
    moreApps.style.width = '180px';
    programMenuOpen = true;
};

function closeMoreApps(){
    moreApps.style.width = '0px';
    programMenuOpen = false;
};
//clock
function clock(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();

    if (hour < 10) {
        hour = '0' + hour;
    };

    if (minute < 10) {
        minute = '0' + minute;
    };

    let time = hour + ':' + minute;

    timeDisplay.textContent = time;
    setTimeout(clock, 1000);

}
clock()

//log off and shutdown buttons

logOff.addEventListener('click', showUserScreen);
function showUserScreen(){
    closeStartMenu();
    welcome.style.display = "initial";
    userScreen.style.display = 'initial';
    setTimeout('closeWelcome()', 1500);
};
shutdown.addEventListener('click', restartNow)
function restartNow(){
    closeStartMenu();
}
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }



function dragComp(){
    const boxesComp = document.querySelectorAll('.box-comp');
    const myComp = document.querySelector('.myComp');

    // myComp.addEventListener('dragstart', dragStart);
    // myComp.addEventListener('dragend', dragEnd);

    for (const boxComp of boxesComp){
        boxComp.addEventListener('dragenter', dragEnter);
        boxComp.addEventListener('dragover', dragOver);
        boxComp.addEventListener('dragleave', dragLeave);
        boxComp.addEventListener('drop', dragDrop);
    };

    function dragStart(){
        console.log('start');
    };
    function dragEnter(e){
        e.preventDefault();
        console.log('enter');
    };
    function dragOver(e){
        e.preventDefault();
        console.log('over');
    };
    function dragLeave(){
        console.log('leave');
    };
    function dragDrop(){
        this.append(myComp);
    };
    function dragEnd(){
        console.log('end');
    };
}








