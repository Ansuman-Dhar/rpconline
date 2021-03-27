const socket = io("https://rock-paper-cissor.herokuapp.com", {
    withCredentials: true,
    extraHeaders: {
        "socket-header": ""
    }
});
var users = [];
var op = document.getElementById('op');

var uname = prompt("What is your name");
socket.emit('userConnected', uname)

socket.on('broadcast', function(data) {
    console.log(data.usersData);
    users = data.usersData;
    op.innerHTML = "";
    users.forEach(e => {
        op.innerHTML += "<a href='#'><b>" + e[0] + '</b>: ' + e[1] + '</a>';
    });
});

























/*function showNames(){

    for (let i = 0; i < usersServer.length; i++) {
        console.log(`This is ${i+1} loop`);
        users[i] = [usersServer[i].split("||")[0], usersServer[i].split("||")[1]];
        console.log(users[i]);
    }

    for (let i = 0; i < usersServer.length; i++) {
        names[i] = usersServer[i].split("||")[0];
        ids[i] = usersServer[i].split("||")[1];
        console.log(names[i]);
        console.log(ids[i]);
    }
    users.forEach(function (str) {
        names = str.split("||");
        console.log(names[0]);
        return names;
    });
}*/
