// ==UserScript==
// @name         RobinColorBot
// @namespace    http://simpcraft.com/
// @version      0.3
// @description  tells what a username's color is
// @author       /u/haykam821
// @match        https://www.reddit.com/robin*
// @grant        none
// ==/UserScript==

 function sendMessage(message){
     $("#robinSendMessage > input[type='text']").val(message);
     $("#robinSendMessage > input[type='submit']").click();
 }
 
 function introductionMessage(){
     sendMessage('/vote grow'); // I don't want to be kicked out!
     sendMessage('[RobinColorBot]  Use \"!cb  color (username)\" to find out the color of someone\'s username!');
}

 window.onload = introductionMessage; // Make sure it sends the introduction message!
 
 setTimeout(function(){
 var target = document.querySelector('#robinChatMessageList');
 var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        var msg = $(mutation.addedNodes[0].lastElementChild).text();
        if(msg.includes('!cb color')) {
             var username = str.substring(11, 1000)
             , e = this.get(username).toLowerCase()
             , t = e.replace(/[^a-z0-9]/g, "") // gets rid of special characters like "_"
             , n = parseInt(t, 36) % f; // f = 6
             sendMessage('[RobinColorBot] The color of that user is' + n);
		}
        if(msg.includes('!cb help')) {
            sendMessage('[RobinColorBot] Use \"!cb  color (username)\" to find out the color of someone\'s username!');
		}
        if(msg.includes('!cb commands')) {
            sendMessage('[RobinColorBot] !cb  \[help, commands, creator, version\] or !cb  color [username]');
		}
        if(msg.includes('!cb creator')) {
            sendMessage('[RobinColorBot] I was created by /u/haykam821.');
		}
        if(msg.includes('!cb author')) {
            sendMessage('[RobinColorBot] I was created by /u/haykam821.');
		}
        if(msg.includes('!cb version')) {
            sendMessage('[RobinColorBot] This bot is running RobinColorBot v0.3.');
		}
    });
 });
 observer.observe(target, {childList: true});
 }, 20);
