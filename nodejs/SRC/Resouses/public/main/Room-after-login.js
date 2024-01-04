// Tạo hiệu ứng nhảy cho cái hình Festival và lựa chọn gameMode
var gameMode=document.querySelectorAll(".choose");
var Dance=document.querySelector("#Dance");
var GameMode=-1;
var dance=0;
var gameMode = Array.from(gameMode);
for (var i=0;i<4;i++)
{
    gameMode[i].onclick=function()
    {  GameMode=gameMode.findIndex(element => element === this);
        this.classList.add("active");
        this.classList.remove("active");
        for (var j=0;j<3;j++)
        {
       gameMode[j].style.opacity="1";
       dance=1;
       dancing();
        }
    if (this!=gameMode[3])
    {  
        this.style.opacity="0.6";
    }
    else
    {
    dance=0;
   dancing();
    }
    }
}

function dancing()
{
    if (dance%2==0)
    Dance.src="main/assets/harvest.gif";
else
Dance.src="../main/assets/harvestfestival-1.png"; 
}
// xong phần lựa chọn gameMode

// Bắt sự kiện chọn loại room Public hay private
var range=1;
var Public=document.querySelector("#Left");

var Private=document.querySelector("#Right");

var Mid=document.querySelector("#Mid");
Private.onclick =function(){
    range=0;
    Mid.style.transform = "translateX(100%)";
}

Public.onclick =function(){
    range=1;
    Mid.style.transform = "translateX(0%)";
}
// kết thúc sự kiện chọn loại hình room
var Loca;
// biến để biết là người dùng đang tạo room mới hay là vừa join room
// bắt sự kiện tạo mới room 
// tạo mới room có gì không
document.getElementById("createNewRoom").addEventListener("mousedown", function() {

    Loca='my';
    if (GameMode==-1)
    {
        alert("Vui lòng chọn chế độ chơi trước khi tạo room");
    }
    else
    if (GameMode==1)
    {
    var idplayer=Math.floor(Math.random()*4)+1;

    window.location.href = `${local}/bombparty?idplayer=${idplayer}&Username=${Username}&Loca=${Loca}`;
    }
    else
    if (GameMode==2)
    {
        var randomNumber = Math.floor(Math.random() * (9000)) + 1000;
        var idplayer=randomNumber;
        console.log(`${local}/DetectiveWord?idplayer=${idplayer}&Username=${Username}&Loca=${Loca}&Of=${Username}&range=${range}&gameMode=${GameMode}`);
        window.location.href = `${local}/DetectiveWord?idplayer=${idplayer}&Username=${Username}&Loca=${Loca}&Of=${Username}&range=${range}&gameMode=${GameMode}`;  
    }
    else
    if (GameMode==3)
    {
        var randomNumber = Math.floor(Math.random() * (9000)) + 1000;
        var idplayer=randomNumber;
        window.location.href = `${local}/HarvestFestival?idplayer=${idplayer}&Username=${Username}&Loca=${Loca}&Of=${Username}&range=${range}&gameMode=${GameMode}`;  
    }
});


var joinRoom=document.querySelector("#joinRoom");
var codeJoinRoom=document.querySelector("#codeJoinRoom");
joinRoom.onclick=function()
{
   Loca="your"; 
   if (codeJoinRoom.value=='')
   alert("Vui lòng nhập mã code để tham gia phòng");
    else
    {   
        // call API để lấy được data mới nhất
        axios.get(`${local}/home/edit`)
            .then(response => {
            console.log('Dữ liệu nhận được sau khi gửi request xem room mới nhất:');
            rooms=response.data;
             var idplayer;
             var check=false;
        for (var i=0;i<rooms.length;i++)
        {
            if (codeJoinRoom.value===rooms[i].Code)
        {   check=true;
            idplayer=rooms[i].Code;
            var Of=rooms[i].Room;
            if (rooms[i].gameMode==3)
            window.location.href = `${local}/HarvestFestival?idplayer=${idplayer}&Username=${Username}&Loca=${Loca}&Of=${Of}`;
            else
            if (rooms[i].gameMode==2)
            window.location.href = `${local}/DetectiveWord?idplayer=${idplayer}&Username=${Username}&Loca=${Loca}&Of=${Of}`;
            break;
         }
        }
        if (check===false)
    alert("Mã Code không tồn tại");
            })
            .catch(error => {
            console.error('Lỗi khi gửi get request:');
            console.log(error);
            });   
    }

}
// join room public
var RoomGames = document.querySelectorAll(".bombparty-room-TbT");
var RoomGamesArray = Array.from(RoomGames);

for (var i = 0; i < RoomGamesArray.length; i++) {
    (function (index) {
        RoomGamesArray[index].onclick = function () {
            Loca = "your";
            idplayer = room0[index].Code;
            var Of = room0[index].Room;
            if(room0[index].gameMode==='3')
            window.location.href = `${local}/HarvestFestival?idplayer=${idplayer}&Username=${Username}&Loca=${Loca}&Of=${Of}`;
             else
            if(room0[index].gameMode==='2')
            window.location.href = `${local}/DetectiveWord?idplayer=${idplayer}&Username=${Username}&Loca=${Loca}&Of=${Of}`;
        };
    })(i);
}
document.getElementById("Refresh").addEventListener("mousedown", function() {
    this.classList.add("active");
    location.reload(true);
});

document.getElementById("Refresh").addEventListener("mouseup", function() {
    this.classList.remove("active");
});