// ==UserScript==
// @name         RobinColorBot
// @namespace    http://simpcraft.com/
// @version      0.6
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
        var regex = /^!cb color (.*)/;
      if(msg.match(regex) && msg.match(regex).length > 0){
        var u = msg.match(regex)[1]
             , e = this.get(u).toLowerCase()
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
            sendMessage('[RobinColorBot] This bot is running RobinColorBot v0.6.');
		}
    });
 });
 observer.observe(target, {childList: true});
 }, 20);

