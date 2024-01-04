
function DeleteRoomInDatabase(data)
{   
    const request={
        data:JSON.stringify(data),
        range:range,
        gameMode:gameMode,
    }
    
            
    axios.post(`${local}/HarvestFestival/edit`,request
    , {
        headers: {
          'Content-Type': 'application/json',
        },}
    )
        .then(response => {
        console.log('Dữ liệu nhận được sau khi gửi POST request:', response.data);
        })
        .catch(error => {
        console.error('Lỗi khi gửi POST request:', error);
        }); 
}
var back=[
    "url('../main/assets/backgame1.gif')",  "url('../main/assets/backgame2.gif')"
]
var left12=document.querySelector("#leftBodyBombInRoom");
console.log(left12);
left12.style.backgroundImage=back[Math.floor(Math.random() * (1 - 0 + 1))];

var wating=document.querySelectorAll(".leftbodyBomb");
var ButtonStart=document.querySelector("#ButtonStart");
var ButtonLeave=document.querySelector("#ButtonLeave");
var audio=document.querySelector("#audio");
var audio2=document.querySelector("#audio2");
var audio3=document.querySelector("#audio3");
var audio4=document.querySelector("#audio4");
var audio5=document.querySelector("#audio5");

var players=document.querySelectorAll(".playerSpace");
var Location=Loca;
ButtonLeave.onclick=function()
{
    window.history.back();
}
if (Location=='my')
{  
socket.emit("Create-Room", { UserName: UserName, RoomName: UserName + "'s Room",Code:idPlayer1 });
socket.on("Server-Send-Room",function(data)
{ 
    if (data[data.length-1].UserName === UserName)
    {       
        DeleteRoomInDatabase(data); 
    }
})
socket.emit("Create-Player");  

socket.on("Player-At-TheMoment",function(data){
  for (var i=0;i<data.length;i++)
  {players[i].querySelector('.playerNameSpace').querySelector('p').textContent=data[i].Use;
    if (data[i].Use===UserName)
    players[i].querySelector('.playerNameSpace').querySelector('p').style.animation='bounce 1s infinite';
    else
    players[i].querySelector('.playerNameSpace').querySelector('p').style.animation='none';
}
});
}
else
if (Location=="your")
{   
    ButtonStart.style.display='none';
    ButtonLeave.style.display='block';
    socket.emit("Create-Room",{UserName: UserName, RoomName:Of });
    socket.emit("Create-Player");  
    socket.on("Player-At-TheMoment",function(data){
        for (var i=0;i<data.length;i++)
        {  if (data[i].Use===UserName)
            players[i].querySelector('.playerNameSpace').querySelector('p').style.animation='bounce 1s infinite';
            else
            players[i].querySelector('.playerNameSpace').querySelector('p').style.animation='none';
            players[i].querySelector('.playerNameSpace').querySelector('p').textContent=data[i].Use;
        }  
    });
}

var rn;
if (Loca==='my')
rn=Of+"'s Room";
else
rn=Of;
var t=4;
var Mang=[];
socket.emit("iWantToKnowMember",rn);
socket.on("memberWating",function(data){
     t=4-data;
    if (t==3)
    wating[0].style.backgroundImage="url('../main/assets/detectiveWord-5.png')";
   else
    if (t==2)
    wating[0].style.backgroundImage="url('../main/assets/detective-4.png')";
    else
    if (t==1)
    wating[0].style.backgroundImage="url('../main/assets/detective-3.png')";   
    else
    if (t==0)
    wating[0].style.backgroundImage="url('../main/assets/detectiveWord-2.png')";   

});
var imposter;

function zoGame()
{
    var mic={
        MicID:micID,
        rn:rn,
        UserName:UserName,
    }
    socket.emit("MyMic",mic);
socket.on("Mic",function(data123)
{
   if (data123.length===2)
   {
    var ids=[];
    console.log(data123[0].UserName);
    for (var i=0;i<2;i++)
    {
        if (data123[i].UserName!==UserName)
        ids.push(data123[i].MicID);
    }
    calling(ids[0],ids[1],ids[2]);
    }
})
    var set
    set=setInterval(() => {
        audio.volume-=0.04;
    }, 50);
    setTimeout(function () {
        // document.querySelector('.transition-container').style.opacity = '0';
    
       wating[0].style.opacity = '0';
       clearInterval(set);
      }, 1000);
     
      // Redirects to the next page after the transition effect finishes
      setTimeout(function () {
        setTimeout(function(){
            audio.currentTime = 0;
            audio.volume=0.5;
        },500)
        
        wating[0].style.display='none';
        wating[1].style.display='flex';
        clearInterval(set);
      }, 2000); // Change 2000 to match the total duration of your transition effect
}
var Ques=[
  { Word: 'Dog', WordRelative: 'Cat' },
  { Word: 'Sun', WordRelative: 'Moon' },
  { Word: 'City', WordRelative: 'Countryside' },
  { Word: 'Ocean', WordRelative: 'Island' },
  { Word: 'Problem', WordRelative: 'Solution' },
  { Word: 'Hero', WordRelative: 'Villain' },
  { Word: 'Love', WordRelative: 'Hate' },
  { Word: 'Fire', WordRelative: 'Water' },
  { Word: 'Shit', WordRelative: 'Shrimp Paste' },
  { Word: 'Summer', WordRelative: 'Winter' },
  { Word: 'Docter', WordRelative: 'Patient' },
  { Word: 'Rice', WordRelative: 'Drug' },
  { Word: 'Car', WordRelative: 'Bike' },
  { Word: 'Desktop', WordRelative: 'Laptop' },
  { Word: 'Sunny', WordRelative: 'Raining' },
  { Word: 'Train', WordRelative: 'Ship' },
  { Word: 'Cry', WordRelative: 'Laugh' },
  { Word: 'Rich', WordRelative: 'Poor' },
  { Word: 'Black', WordRelative: 'White' },
  { Word: 'Fast', WordRelative: 'Slow' },
  { Word: 'C#', WordRelative: 'HTML' },
  { Word: 'Coconut', WordRelative: 'Pineapple' },
  { Word: 'Street', WordRelative: 'Land' },
  { Word: 'Eagle', WordRelative: 'Pinguine' },
  { Word: 'Eat', WordRelative: 'Drink' },
  { Word: 'Beer', WordRelative: 'Water' },
  { Word: 'Shirt', WordRelative: 'Pants' },
  { Word: 'Cotton', WordRelative: 'Cloud' },
  { Word: 'Mouse', WordRelative: 'Cockroach' },
  { Word: 'Skirt', WordRelative: 'Pants' },
  { Word: 'Red', WordRelative: 'Yellow' },
  { Word: 'Crush', WordRelative: 'Debtor' },
  { Word: 'Female', WordRelative: 'Male' },
  { Word: '18', WordRelative: '5' },
  { Word: 'Grass', WordRelative: 'Tree' },
];
var Round=0;
var Vote=0;
ButtonStart.onclick=function()
{
 t=0;
if (t>0)
alert("Vui lòng chờ đủ 4 người chơi để bắt đầu");
else
if (t==0)
{

    var obj=
    {
        rn:rn,
        Ques:Ques,
    }
    socket.emit("StartDetec",obj);
}
}
var Bom=document.querySelector("#Bom");
  var Bum=document.querySelector("#Bom1");
  var Ques1=document.querySelector("#Ques");
function mytimer (ques)
{

  setTimeout(()=>{Bom.style.transform= "scale(1.2)";},300); 
  setTimeout(()=>{Bom.style.transform= "scale(1.5)";},600); 
  setTimeout(()=>{Bom.style.transform= "scale(2.)";},800); 
  setTimeout(()=>{Bom.style.transform= "scale(2.5)"; Bum.style.display="block";  audio2.play();},1000); 
  setTimeout(()=>{ Bom.style.opacity="0"; Bom.style.transform= "scale(0.8)"; },1200);
  setTimeout(()=>{ Bom.style.opacity="1"; Bum.style.display="none"; Ques1.querySelector('p').textContent=ques},1600);
}
socket.on("DetecStart",function(){
        zoGame(rn);
        setTimeout(() => {
            Round++;
            socket.emit("DecStartRound",Round);
        }, 3000);
});
var r;
socket.on("RoundInforDec",function(data){
    imposter=data.imposter;
   if (players[data.imposter].querySelector('.playerNameSpace').querySelector('p').textContent===UserName)
   {
    mytimer(data.ques.WordRelative);
   }
else
{

   mytimer(data.ques.Word);
}
// gửi đi vote của mọi người, trong khoảng thời gian trước đó là chơi
setTimeout(function(){


        r=10;
        var timeover= setInterval(function(){
       Ques1.style.marginTop='-3%';
       audio3.play();
       audio3.volume=0.2;
       Ques1.querySelector('p').textContent=`The Time comming Over,please Voted Who is Imposter ${r}`;
       r--;
       if (r<0)
       {
        var obj={
            Vote:Vote,
            rn:rn,
        }
           clearInterval(timeover);
           socket.emit("Voted",obj);
       }
       },1000);
      
},30000);
});
// hiển thị ai bị nhốt, và sau đó ai là import tở
socket.on("TheImposter",function(data1){
    audio3.pause();
   
    Ques1.style.marginTop='0';
    var name=players[data1].querySelector('.playerNameSpace').querySelector('p').textContent;
      Ques1.querySelector('p').textContent=`'${name}' got the most votes`;
      audio2.play();
       name=players[imposter].querySelector('.playerNameSpace').querySelector('p').textContent;
      var avt=players[data1].querySelector('.playeravtSpace').querySelector('img').src;
if(data1===1)
{
    Bom.style.width='50%';
}
Bom.setAttribute("src",avt);
players[data1].style.opacity=0;

Bom1.setAttribute("src","../main/assets/prison.png");
Bom1.style.display='block';
Bom1.style.width='80%';
Bom1.style.top='-10px';
Bom1.style.left='10%';
Bom1.style.opacity='0.8';
var tt;
setTimeout(function(){
    Ques1.querySelector('p').textContent=`The Imposter is ${name}`;

    if (data1==imposter)
    {   
        audio4.play();
        if (data1===1)
        Bom.style.width='80%';
        Bom1.style.top='-30px';
        avt='../main/assets/Virus.png';
        Bom.setAttribute("src",avt);  
        tt= players[imposter].querySelector('.playeravtSpace').querySelector('img').src;
    }
    else
    {
     audio5.play();
    players[imposter].querySelector('.playeravtSpace').querySelector('img').style.width='90%';
     tt= players[imposter].querySelector('.playeravtSpace').querySelector('img').src;
    players[imposter].querySelector('.playeravtSpace').querySelector('img').setAttribute("src","../main/assets/Virus.png");
    }

    setTimeout(function(){
       
        Ques1.querySelector('p').textContent='';
        Bom.setAttribute("src","../main/assets/questionBox.png");
        Bom1.setAttribute("src"," ../main/assets/bum.gif");
     players[imposter].querySelector('.playeravtSpace').querySelector('img').setAttribute("src",tt)
      players[imposter].querySelector('.playeravtSpace').querySelector('img').style.width='50%';
     Bom.style.width='70%';
     Bom.style.transform='1';
    Ques1.style.marginTop='0';
    Bom1.style.display='none';
    Bom1.style.width='150%';
    Bom1.style.top='-100px';
    Bom1.style.left='-80px';
    Bom1.style.opacity='1';
    players[data1].style.opacity=1;
    if (rn===UserName+"'s Room")
    { 
        setTimeout(function(){
            StartNewRound();
        },3000);
    }
    },5000);

},5000);
   });
//    kết thúc round đấu vì đã xong hoặc là có người out
   socket.on("TurnBack",function(reason){
    if (reason===1)
    alert("Trò chơi đã kết thúc, nhấn OK để quay lại phòng");
    else
    alert("Trò chơi buộc phải kết thúc vì có người đã rời phòng");
    location.reload(true);
   });
//    hàm để qua round mới
function StartNewRound() {
    if (rn === UserName + "'s Room") {
        Round++;
        if (Round===10)
        {
            var re={
                rn:rn,
                reason:1,
            }
        socket.emit("EndGameDec",re);
        }
    else
        socket.emit("DecStartRound", Round);
    }
}
// bắt sự kiện có người out
socket.on("OutSoEndGame",function(){

    if(Round!=0&&Round!=10)
    {
        var re={
            rn:rn,
            reason:0,
        }
        if (UserName+"'s Room"===rn)
    socket.emit("EndGameDec",re);
    }
});
for (var i=0;i<players.length;i++)
{   
    (function (index) {
    players[index].onclick=function(){
    for (var j=0;j<players.length;j++)
    players[j].style.animation='none';
    players[index].style.animation='glow 2s infinite';
    Vote=index;
  
            }
        })(i);
}
     socket.on("Check-people", function () {
        socket.emit("iWantToKnowMember", rn);

      })
