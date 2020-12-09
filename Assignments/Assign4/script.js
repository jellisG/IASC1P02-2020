var quotes = [
    'Dealing with network executives is like being nibbled to death by ducks. - Eric Sevareid',
    'You may have to fight a battle more than once to win it. - Margaret Hilda Thatcher',
    'Sometimes the road less traveled is less traveled for a reason. - Jerry Seinfield',
    'There is nothing more requisite in business than dispatch. - Joseph Addison',
    'An era can be said to end when its basic illusions are exhausted. - Arthur Miller',
    'All that is worth cherishing in this world begins in the heart, not the head. - Suzanne Chazin',
    'The strongest principle of growth lies in the human choice. - Geroge Eliot',
    'To play billiards well is a sign of an ill-spent youth. - Herbert Spencer',
    'I am patient with stupidity but not with those who are proud of it. - Dame Edith Sitwell'
];
var info = [
    'This page serves as a basis to capture a viewers attention. As most home pages may be,'+
    'they contain a lot of introductory text. This page however will demonstrate some basic '+
    'capabilities of JavaScript. The text you are reading right now is revealed because of the '+
    'work of JavaScript! It\'s very neat stuff. Don\'t worry though, this page is meant to '+
    'perform functions specfic to this page only. The other\'s... might interact with each other a bit...',

    'This page is input focused. It should rely on the use of user input. Making different '+
    'choices, clicking different buttons and entering text through a textfield. For easy viewing,'+
    ' there will be basic arithmetic functions that will show the result in the page to save time.'+
    ' Beyond that, there should also some special button to change the "creative" features of the page.',

    'This page is mainly used for displaying results from the previous page. Mainly this is just '+
    'to demonstrate that you can definitely transfer results between HTML pages. Results from the'+
    ' previous page can be displayed in a cool format on this page in many different forms. Examples'+
    ' would be like submitting a post onto a forum. One complex way of showing data even without the'+
    ' need for results can also be in the form of local storage.',

    'This page is used soley for citing reference to resources used. It is important to give credit'+
    ' where it is due. Some references have been briefly mentioned, however it a separate page for'+
    ' citations is nice for reference formalties.'
];
var bg = [
    "url('images/blur.png')",
    "url('images/shapes.png')",
    "url('images/realleaves.png')"
];
var saved = [];

// Functions

// Loads each of the functions at the end of reading the JS file. 
function onload() {

    // Loading all the saved items messages
    var temp = [];
    temp = localStorage.getItem('saved');
    temp = JSON.parse(temp);
    if(temp != null) {
        for(var i = 0; i < temp.length; i++) {
            loadMessages(temp[i]);
        }
    }
}

// Loads the messages into the page
// The parameter represents one index in the array of messages
function loadMessages(saved) {
    var listRow = document.createElement('div');
    listRow.classList.add('content-container'); // new div youre making
    var listItems = document.getElementsByClassName('allMessages')[0];

    var id = saved.id;
    var name = saved.name;
    var message = saved.message;
    var time = saved.time;

    var listRowContents = 
    `
    <h2 id="userName">${name}</h2><span></span>
    <small>${time}</small>
    <h3>${message}</h3>
    <button class="button-del remove-message" onclick=removeMessage("${id}")>Remove</button>
    `;

    listRow.innerHTML = listRowContents;
    listItems.append(listRow);
}

// Removes the selected message from the page
function removeMessage(id) {
    var newArr = [];
    newArr = JSON.parse(localStorage.getItem('saved'));

    for(var i = 0; i < newArr.length; i++) {     // loops through all the known indexes of the array 
        if(newArr[i].id == id) {                 // if matching ID's are found, remove that index from the array 
            newArr.splice(i, 1);
            break;
        }
    }
    localStorage.setItem('saved', JSON.stringify(newArr));
    location.reload();
}

// Function for toggling text in the Index Page. 
function show(div,index) {
    var a = document.getElementById(div);

    if(a.innerHTML == "") {
        a.textContent = info[index];
    } else {
        a.textContent = "";
    }
}

// Function for displaying a random quote from an array of different quotes
function displayQuote() {
    var randomQuote = Math.floor(Math.random()*(quotes.length));
    document.getElementById("theQuote").textContent = `${quotes[randomQuote]}`;
    showTime("quoteTime");
}

// When a specific button is clicked, it loads the same function call with 4 different arguements
// The images shown in the Index page will change to another random picture
window.addEventListener('load',
    function() {
        window.clicker.addEventListener('click', function(){ swap('img1'); });
        window.clicker.addEventListener('click', function(){ swap('img2'); });
        window.clicker.addEventListener('click', function(){ swap('img3'); });
        window.clicker.addEventListener('click', function(){ swap('img4'); });
        
    }
);

// Swaps the URL id of the image in Lorem Picsum
function swap(id) {
    image = document.getElementById(id);
    image.src = "https://picsum.photos/2000/3000/?image="+
        Math.floor(Math.random()*10)+
        Math.floor(Math.random()*10)+
        Math.floor(Math.random()*10);
}

// Shows the time in a specific format
function showTime(name) {
    var today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var shift = "am";

    if(hour > 12) { // if hour is past 12, then set the time to PM
        hour -= 12;
        shift = "pm";
    }
    if(min < 10)
        min = "0"+min;
    if(sec < 10)
        sec = "0"+sec;

    var time = hour+":"+min+":"+sec+shift;
    document.getElementById(name).innerHTML = "Retrieved at "+time;
}

// 
function sendMessage() {
    if(localStorage.getItem('saved') != null) {
        saved = localStorage.getItem('saved');
        saved = JSON.parse(saved);
    }
    
    // loads the values of the text areas
    var num = saved.length;
    var n = document.getElementById('name').value;
    var m = document.getElementById('message').value;
    var t = getDate();
    var index = {
        id: num,
        name: n,
        message: m,
        time: t
    };
    document.getElementById('name').value = "";
    document.getElementById('message').value = "";

    saved[saved.length] = index;
    
    // saves the data into local storage
    localStorage.setItem('saved',JSON.stringify(saved));
}

function getDate() {
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var today = new Date();
    var day = days[today.getDay()-1];
    var hour = today.getHours();
    var min = today.getMinutes();
    var shift = "am";

    if(hour > 12) { // if hour is past 12, then set the time to PM
        hour -= 12;
        shift = "pm";
    }
    if(min < 10)
        min = "0"+min;

    var final = "Sent on "+day+", "+hour+":"+min+shift;
    return final;
}

function calculate(operator) {
    var num1 = parseInt(document.getElementById('enter1').value);
    var num2 = parseInt(document.getElementById('enter2').value);
    var result;

    switch(operator) {
        case "+":
            result = num1 + num2;
        break;
        case "-":
            result = num1 - num2;
        break;
        case "*":
            result = num1 * num2;
        break;
        case "/":
            result = num1 / num2;
        break;
        case "%":
            result = num1 % num2;
        break;
        default: 
            result = "Oopsies?"
        break;
    }

    document.getElementById('show-cal-output').textContent = result;
    
    document.getElementById('enter1').value = "";
    document.getElementById('enter2').value = "";
}

function defaultBG() {
    document.body.style.backgroundImage = "url('images/leaves.png')";
}
 
function changeBG() {
    var rand = Math.floor(Math.random()*3);
    document.body.style.backgroundImage = bg[rand];
}



onload();