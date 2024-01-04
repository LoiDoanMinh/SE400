try
{
    var pkl=0;
    var exps=document.querySelectorAll(".exps");
    var exp=document.querySelectorAll(".exp");
    setInterval(() => {
        for (var i=0;i<exps.length;i++)
        {
            if (pkl==0)
        {
        exps[i].querySelector('p').style.display='none';
        exps[i].querySelector('img').style.display='block';
        }
        else
        {
            exps[i].querySelector('p').style.display='block';
            exps[i].querySelector('img').style.display='none';
        }
    }
    if (pkl==0)
    pkl=1;
else
pkl=0;
    }, 5000);
    var GameEndYet=false;

    var Mark=0;
    var MarkPercent=0;
 
    // English vocabulary array++
      var iconsGame=['../main/assets/amazing.png','../main/assets/congratulation.png','../main/assets/greatjob.png','../main/assets/Cool.png','../main/assets/nicework.png','../main/assets/nicework2.png','../main/assets/weldon.png','../main/assets/welldone.png','../main/assets/youdoit.png','../main/assets/champion.png'];
      var backGame=['../main/assets/bumchiu.gif','../main/assets/flow.gif','../main/assets/money.gif','../main/assets/lolo.gif','../main/assets/tede.gif'];
      var backGroundWinner=['../main/assets/TheWinner.gif','../main/assets/TheWinner2.gif','../main/assets/TheWinner3.gif','../main/assets/TheWinner4.gif']
      
      var VocabularyArray;
      function rand(max,min)
      {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      var Starting=document.querySelector("#Starting");
    
  
    // gửi về cho server biết là vào game rồi và truyền độ dài của mảng, nếu bằng 33-32 thì chạy round đầu, còn ko thì chạy round 2 hết
    var Questions=document.querySelectorAll(".cell");
    var Score=document.querySelectorAll(".Score");
    var Ques=document.querySelectorAll(".question");
    var audio2=document.querySelector("#audio2");
    var audio3=document.querySelector("#audio3");
    var audio4=document.querySelector("#audio4");
    var audio5=document.querySelector("#audio5");
    var icon1=document.querySelector("#icon1");
    var icon2=document.querySelector("#icon2");
    var typeAnswer=document.querySelector("#typeAnswer");
    function runEffect(i) {
        if (i < Questions.length)
        {
        for (var j = 0; j < Questions.length; j++)
        {
            Questions[j].style.background = '#5b5b5b';
            Questions[j].style.opacity='0.4';
            Questions[j].style.animation='none';
            Questions[j].style.transform='scale(1)';
            Questions[j].style.zIndex='0';
        }
        color='#fcec78';
        Questions[i].style.opacity='1';
        Questions[i].style.background = color;
        Questions[i].style.animation='glow 2s infinite';
        Questions[i].style.transform='scale(1.25)';
        Questions[i].style.zIndex='1';
        }
    }
    var turn;
var gPoint;
var gScore;
var gQues;
// hàm để bắt đầu vòng chơi mới.
function StartRound(data) {
    if (GameEndYet===false)
    {
    gScore='fkaoksfaoksfokasf';
    gQues='kfaoskfoaksfkasfo';
    return new Promise(function (resolve) {
        var au = document.querySelector("#audio1");
        au.play();

        var i = 0;
        var intervalId = setInterval(function () {
            if (GameEndYet===true)
            clearInterval(intervalId);
            if (i <= 33) {
                runEffect(i);
                i++;
            } else {
                clearInterval(intervalId);
                resolve();
            }
        }, 80);
    }).then(function () {
        return new Promise(function (resolve) {
            var i = 0;
            var intervalId = setInterval(function () {
                if (GameEndYet===true)
                clearInterval(intervalId);
                if (i <= 33) {
                    gPoint = rand(32, 0);
                    runEffect(gPoint);
                    i++;
                } else {
                    runEffect(data.gPoint);
                        // gọi runEffect với gPoint được server gửi về
                        gPoint=data.gPoint;
                    var sc=data.sc;
                    var qu=data.qu;
                    // console.log('gPoint lỗi hay là Score[gPoint]')
                    // console.log(gPoint);
                    // console.log(Score[gPoint]);
                    if (Score[gPoint].querySelector('p')!=null)
                    {
                    Score[gPoint].querySelector('p').textContent = sc.toString();
                 console.log(Ques[gPoint].querySelector('p').textContent);
                    Ques[gPoint].querySelector('p').textContent=data.VocabularyArray.question;    
                }
                else
                {
                console.log("Lỗi");
            clearInterval(intervalId);    
            }
               
                    gScore=sc.toString();
                    gQues=data.VocabularyArray.root;
                    clearInterval(intervalId);
                    resolve();
                }
            }, 80);
        });
    });
}
}
// server gửi về đây là oke, chạy hiệu ứng trận đầu tiên đi và truyền về gồm có sc,qu,gPoint
// đây là round đầu tiên
var cGame=true;
socket.on("RoundInfor",function(data)
{  
 
    if (GameEndYet===false)
    {
    // console.log("dữ liệu trận này");
    // console.log(data);
    turn=data.turn;
    VocabularyArray=data.VocabularyArray;

    StartRound(data).then(function(){
        // console.log(`xong round ${roundInfor.round}`,'câu hỏi là: ', gQues);
      var  reduce1=setInterval(function(){
        if ((parseInt(Score[gPoint].querySelector('p').textContent)-10)<=0)
        {
           
            // console.log(UserName+"đã chạy vào dự đoán");
            Score[gPoint].querySelector('p').textContent ='0';
            gQues='kfaoskfoaksfkasfo';
            var right={
                username:'NoBody',
                room:rn,
                turn:roundInfor.round,
                score:0 ,
                Mark:0,
            }
            socket.emit("IAmRight",right);
            clearInterval(reduce1);
        }
        else
        {
            if (cGame===false)
            {
                cGame=true;
                clearInterval(reduce1);  
               
            }
            else
            {
            if (isNaN(parseInt(Score[gPoint].querySelector('p').textContent))) {
                console.log("Giá trị không phải là một số.");
            } else {
                Score[gPoint].querySelector('p').textContent =(parseInt(Score[gPoint].querySelector('p').textContent)-10).toString();
            }
        }
        }
       },4000);
     
   })
}
})

// bắt đầu round mới ở đây nè

function Congratulation(choise)
{
    if (GameEndYet===false)
    {
   typeAnswer.value='';
   var i1=rand(9,0);
   var i2=rand(4,0);
   if(choise===1)
   {
    icon1.querySelector('img').setAttribute("src",iconsGame[i1]);
    audio2.play();
   }
   else
   {
    icon1.querySelector('img').setAttribute("src", '../main/assets/dontgiveup.png');
    audio3.play();
   }
    icon2.querySelector('img').setAttribute("src",backGame[i2]);
    icon1.style.zIndex='3';
    icon2.style.zIndex='3';

    icon1.style.display='block';
    icon2.style.display='block';
    icon1.classList.remove('hide');
    icon2.classList.remove('hide');

    setTimeout(() => {
        icon1.classList.add('hide');
        icon2.classList.add('hide');

    }, 1500);
}
}
var k=0;
typeAnswer.onkeydown=function(event){
    if (event.key === "Enter" || event.keyCode === 13)
   {
    if (typeAnswer.value.toUpperCase()==='1')
    {

        socket.emit("GameEnd",rn);
    }
else
{
    if (typeAnswer.value.toUpperCase()===gQues.toUpperCase())
  {
    console.log("hehe");
    gQues='kfaoskfoaksfkasfo';
    var right={
        username:UserName,
        room:rn,
        turn:roundInfor.round,
        score:parseInt(Score[gPoint].querySelector('p').textContent) ,
        Mark:Mark,
        MarkPercent:MarkPercent,
    }
    socket.emit("IAmRight",right);
   
//    gửi req về server tôi đã đúng để chặn những người chơi khác lại, sau đó server phải gửi về lại là ai đúng, rồi chạy hiệu ứng chúc
//mừng cho người đó, còn những người kia sẽ hiển thị you not lucky
  }
}
   }
}

socket.on("TheWinner",function(data)
{
    gQues='ìaisjfojaosjfoajsf';
    cGame=false;
    if (data.username===UserName)
    {
        Mark+=data.score;
        MarkPercent+=(data.score)/10+3;
        for (var j=0;j<4;j++)
        if (UI_name[j].textContent===UserName)
        {
        exps[j].querySelector('p').textContent=Mark.toString();
        exp[j].style.height=`${MarkPercent}px`;
        break;    
        }
    Congratulation(1);
    }
        else
        {
            for (var j=0;j<4;j++)
            if (UI_name[j].textContent===data.username)
            {
            exps[j].querySelector('p').textContent=(parseInt(data.mark)+data.score).toString();
            var markpercent=(parseInt(data.MarkPercent)+data.score/10+3);
            exp[j].style.height=`${markpercent}px`;
            break;    
            }

            Congratulation(0);
        }
            setTimeout(() => {
                Score[gPoint].querySelector('p').textContent = '??';
                Ques[gPoint].querySelector('p').textContent = '!!/!!/!!';
                console.log("vừa chạy xong round:", roundInfor.round);
                roundInfor.round+=1;
                // đang bug, chổ này bị nhảy cóc 2 lần dẫn đến nó bị hiện đáp án
            socket.emit("StartGame",roundInfor);
            cGame=true;
            }, 4000);    
})
// chuẩn bị end game nè
socket.on("EndGame",function(data){
    audio5.play();
    audio4.play();
    var NameWinner=document.querySelector("#NameWinner");
    var avtWinner=document.querySelector("#Winner").querySelector('img');
    NameWinner.querySelector('p').textContent=data.us;
    Wating.style.display='none';
    Starting.style.display='none';
    for (var o=4;o<=7;o++)
    if (data.us===UI[o].querySelector(".Character").querySelector(".player-Name").querySelector("p").textContent)
    {
      
        avtWinner.setAttribute("src",UI[o].querySelector(".Character").querySelector(".Player-avatar").querySelector("img").src);
        break;
    }
    GameEndYet=true;
  var backgroundWinner=document.querySelector("#Ranking");
    backgroundWinner.style.display='flex';
    backgroundWinner.style.backgroundImage=`url(${backGroundWinner[rand(3,0)]})`;  
    setTimeout(function(){
        socket.emit("DeleteRoomInfor",rn);
    },3000)

})
socket.on("DeleteDone",function(){
    setTimeout(() => {
        window.history.go(-1);
    }, 7000);
})

// end game
}
catch(error)
{

}