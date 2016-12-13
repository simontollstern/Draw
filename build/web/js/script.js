//var url = "ws://localhost:8080/ChatServer/chatserver";
//var ws = new WebSocket(url);
//function sendMessage() {
//    ws.send(messageInput.value);
//    messageInput.value = "";
//}
//ws.onmessage = function process(message) {
//    var jsondata = JSON.parse(message.data);
//    if (Array.isArray(jsondata)) { //Array = users
//        var output = "";
//        for (var i = 0; i < jsondata.length; i++) {
//            output += jsondata[i].username + "\n";
//        }
//        usersTextArea.value = output;
//    } else {
//        messageTextArea.value += jsondata.username + ":" + jsondata.message + "\n";
//    }
//};
//
//var canvas, ctx, flag = false,
//        prevX = 0,
//        currX = 0,
//        prevY = 0,
//        currY = 0,
//        dot_flag = false;
//
//var x = "black",
//        y = 2;
//
//function init() {
//    canvas = document.getElementById('canvas');
//    ctx = canvas.getContext("2d");
//    w = canvas.width;
//    h = canvas.height;
//    console.log(w, h);
//
//    canvas.addEventListener("mousemove", function (e) {
//        findxy('move', e);
//    }, false);
//    canvas.addEventListener("mousedown", function (e) {
//        findxy('down', e);
//    }, false);
//    canvas.addEventListener("mouseup", function (e) {
//        findxy('up', e);
//    }, false);
//    canvas.addEventListener("mouseout", function (e) {
//        findxy('out', e);
//    }, false);
//}
//
//function color(obj) {
//    switch (obj.id) {
//        case "green":
//            x = "green";
//            break;
//        case "blue":
//            x = "blue";
//            break;
//        case "red":
//            x = "red";
//            break;
//        case "yellow":
//            x = "yellow";
//            break;
//        case "orange":
//            x = "orange";
//            break;
//        case "black":
//            x = "black";
//            break;
//        case "white":
//            x = "white";
//            break;
//    }
//    y = 2;
//}
//
//function draw() {
//    ctx.beginPath();
//    ctx.moveTo(prevX, prevY);
//    ctx.lineTo(currX, currY);
//    ctx.strokeStyle = x;
//    ctx.lineWidth = y;
//    ctx.stroke();
//    ctx.closePath();
//}
//
//function erase() {
//    ctx.clearRect(0, 0, w, h);
//}
//
//function findxy(res, e) {
//    if (res === 'down') {
//        prevX = currX;
//        prevY = currY;
//        currX = e.clientX - canvas.offsetLeft - 344;
//        currY = e.clientY - canvas.offsetTop - 2;
//        console.log(currX, currY);
//
//        flag = true;
//        dot_flag = true;
//        if (dot_flag) {
//            ctx.beginPath();
//            ctx.fillStyle = x;
//            ctx.fillRect(currX, currY, 2, 2);
//            ctx.closePath();
//            dot_flag = false;
//        }
//    }
//    if (res === 'up' || res === "out") {
//        flag = false;
//    }
//    if (res === 'move') {
//        if (flag) {
//            prevX = currX;
//            prevY = currY;
//            currX = e.clientX - canvas.offsetLeft - 344;
//            currY = e.clientY - canvas.offsetTop - 2;
//            draw();
//        }
//    }
//}
//
//var time = 30;
//window.setInterval(
//        function () {
//            if (time < 0 || time > 30) {
//                time = 30;
//            } else {
//                if (time > 15) {
//                    document.getElementById("timer").style.color = "#00ff00";
//                } else if (time <= 15 && time > 5) {
//                    document.getElementById("timer").style.color = "#ffff00";
//                } else {
//                    document.getElementById("timer").style.color = "#ff0000";
//                }
//                document.getElementById("timer").innerHTML = time;
//                time--;
//            }
//        }, 1000);

$(window).load(function () {
    $('#testModal').modal('show');
});