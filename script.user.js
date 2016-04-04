// ==UserScript==
// @name         CommunityVote
// @namespace    http://simpcraft.com/
// @version      0.1
// @description  allows robin users to choose what i vote
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
            sendMessage('[RobinColorBot] The color of that user is *n*.');
		}
        if(msg.includes('!cb help')) {
            sendMessage('[RobinColorBot] Use \"!cb  color (username)\" to find out the color of someone\'s username!';
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
            sendMessage('[RobinColorBot] This bot is running RobinColorBot v0.1.');
		}
    });
 });
 observer.observe(target, {childList: true});
 }, 20);
