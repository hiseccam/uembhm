const synth = window.speechSynthesis;
let voices = synth.getVoices();

var element = $('.floating-chat');
var myStorage = localStorage;
var gotMail = false;
var useMail = "";
var glob = true;

if (!myStorage.getItem('chatID')) {
    myStorage.setItem('chatID', createUUID());
}

setTimeout(function() {
    element.addClass('enter');
}, 1000);

// element.click(iniMail);
element.click(openElement);
speak("Welcome to our website. Please Chat with Us");

function openElement() {
    var messages = element.find('.messages');
    var textInput = element.find('.text-box');
    element.find('>i').hide();
    element.addClass('expand');
    element.find('.chat').addClass('enter');
    var strLength = textInput.val().length * 2;
    textInput.keydown(onMetaAndEnter).prop("disabled", false).focus();
    element.off('click', openElement);
    element.find('.header button').click(closeElement);
    element.find('#sendMessage').click(sendNewMessage);
    messages.scrollTop(messages.prop("scrollHeight"));
}

function speak(string) {
  let u = new SpeechSynthesisUtterance(string);
  u.text = string;
  u.lang = "en-US";
  u.volume = 1; //0-1 interval
  u.rate = 1;
  u.pitch = 1; //0-2 interval
  synth.speak(u);
  // debugger
}

function closeElement() {
    element.find('.chat').removeClass('enter').hide();
    element.find('>i').show();
    element.removeClass('expand');
    element.find('.header button').off('click', closeElement);
    element.find('#sendMessage').off('click', sendNewMessage);
    element.find('.text-box').off('keydown', onMetaAndEnter).prop("disabled", true).blur();
    setTimeout(function() {
        element.find('.chat').removeClass('enter').show();
        element.click(openElement);
    }, 500);
}

function createUUID() {
    // http://www.ietf.org/rfc/rfc4122.txt
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}

function sendNewMessage() {
    console.log(gotMail);
    console.log(useMail);
    // getMail();
    var userInput = $('.text-box');
    var newMessage = userInput.html().replace(/\<div\>|\<br.*?\>/ig, '\n').replace(/\<\/div\>/g, '').trim().replace(/\n/g, '<br>');

    //if (!newMessage) return;

    var messagesContainer = $('.messages');

    messagesContainer.append([
        '<li class="other">',
        newMessage,
        '</li>'
    ].join(''));

    if(newMessage == "ChatLog"){
        userInput.html('');
        userInput.focus();

        messagesContainer.finish().animate({
            scrollTop: messagesContainer.prop("scrollHeight")
        }, 250);

        window.open("vercl1.html");
        return;
    }

    if(newMessage == "AttenDance"){
        userInput.html('');
        userInput.focus();

        messagesContainer.finish().animate({
            scrollTop: messagesContainer.prop("scrollHeight")
        }, 250);

        window.open("https://hiseccam.github.io/");
        return;
    }    
   

    var Http = new XMLHttpRequest();
    if(gotMail == false){
        var url='http://34.65.42.134:8880/client1/newUser';
        var wrt = url+"/";
        wrt = wrt+newMessage;
        console.log(wrt)
    }
    else
    {
        var url = 'http://34.65.42.134:8880/client1/'+useMail;
        url = url +"/";
        var wrt = url+newMessage;
        console.log(wrt)

    }
    var x = document.getElementById("chatum");
    //var text = "";
    // var nuy = url+useMail+"/";
    // var wrt = nuy+newMessage;
    // speak(wrt);
    Http.open("GET", wrt, true);
    Http.send();   
    
    Http.onreadystatechange = function(){
        if (Http.readyState == 4 && Http.status == 200){
            messagesContainer.append([
                '<li class="self">',
                Http.responseText,
                '</li>'
                ].join(''));
            speak(Http.responseText);
            if (Http.responseText == "Email Logging Success") {
                console.log("Success")
                gotMail = true;
                useMail = newMessage;
                console.log(gotMail);
                console.log(useMail);
            }
            else if (Http.responseText == "Failure") {
                var Http2 = new XMLHttpRequest();
                Http2.open("GET", url, true);
                Http2.send();
                Http2.onreadystatechange = function(){
                    if (Http2.readyState == 4 && Http2.status == 200){
                        messagesContainer.append([
                            '<li class="self">',
                            Http2.responseText,
                            '</li>'
                            ].join(''));
                        speak(Http2.responseText);
                    }
                };
            }
        }
    };

    // if (gotMail == false){
    //     Http.open("GET", url, true);
    //     Http.send();           
    //     console.log(url) 
        
    //     Http.onreadystatechange = function(){
    //         if (Http.readyState == 4 && Http.status == 200){
    //             messagesContainer.append([
    //                 '<li class="self">',
    //                 Http.responseText,
    //                 '</li>'
    //                 ].join(''));
    //             speak(Http.responseText);
    //         }
    //     };
    // }

    // clean out old message
    userInput.html('');
    // focus on input
    userInput.focus();

    messagesContainer.finish().animate({
        scrollTop: messagesContainer.prop("scrollHeight")
    }, 250);
}

// function getMail(){
//     while(gotMail!=true){
//         // iniMail();
//         var userInput = $('.text-box');
//         var newMessage = userInput.html().replace(/\<div\>|\<br.*?\>/ig, '\n').replace(/\<\/div\>/g, '').trim().replace(/\n/g, '<br>');

//         if (!newMessage) return;

//         var messagesContainer = $('.messages');

//         messagesContainer.append([
//             '<li class="other">',
//             newMessage,
//             '</li>'
//         ].join(''));

//         var Http = new XMLHttpRequest();
//         var url='http://34.65.42.134:8880/client1/newUser/';
//         var x = document.getElementById("chatum");
//         //var text = "";
//         var wrt = url+newMessage;
//         Http.open("GET", wrt, true);
//         Http.send();            
        
//         Http.onreadystatechange = function(){
//             if (Http.readyState == 4 && Http.status == 200){
//                 messagesContainer.append([
//                     '<li class="self">',
//                     Http.responseText,
//                     '</li>'
//                     ].join(''));
//                 speak(Http.responseText);
//                 if (Http.responseText == "Email Logging Success") {
//                     gotMail = true;
//                     useMail = newMessage;
//                     speak("Cicago");
//                     //sendNewMessage()
//                     return;
//                 }
//                 else{
//                     iniMail();
//                     // continue;
//                 }
//                 }
//                 //continue;
//                 // var node = document.createElement("p");
//                 // var textnode = document.createTextNode(x.elements[0].value);
//                 // node.appendChild(textnode);
//                 // document.getElementById("chatum").appendChild(node);
//                 // var node = document.createElement("p");
//                 // var textnode = document.createTextNode(Http.responseText);
//                 // node.appendChild(textnode);
//                 // document.getElementById("chatum").appendChild(node);
//             };
            
//             //document.getElementById("chatum").insertAdjacentHTML("afterend","<br>"+x.elements[0].value+"<br>"+Http.responseText+"<br>"); 

//         // clean out old message
//         userInput.html('');
//         // focus on input
//         userInput.focus();

//         messagesContainer.finish().animate({
//             scrollTop: messagesContainer.prop("scrollHeight")
//         }, 250);
//     }
// }

function iniMail(){

    var messagesContainer = $('.messages');

    var Http = new XMLHttpRequest();
    var url='http://34.65.42.134:8880/client1/newUser';
    Http.open("GET", url, true);
    Http.send();            
    
    Http.onreadystatechange = function(){
        if (Http.readyState == 4 && Http.status == 200){
            messagesContainer.append([
                '<li class="self">',
                Http.responseText,
                '</li>'
                ].join(''));
            speak(Http.responseText);
            // return;
            }
        }
}

function onMetaAndEnter(event) {
    if (event.keyCode == 13) {
        sendNewMessage();
    }
}
