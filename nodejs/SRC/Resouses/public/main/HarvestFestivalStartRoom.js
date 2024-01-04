// begin copy mã mời bằng link, xử lý sau, thêm 1 file hbs để người dùng nhập tên rồi mới vào 
// var text = document.querySelector("#codeJoinRoom");

// text.addEventListener("click", function() {
//     // Tạo một textarea tạm thời
//     var tempTextarea = document.createElement("textarea");
//     tempTextarea.value = text.innerText;

//     // Thêm textarea vào trang web
//     document.body.appendChild(tempTextarea);

//     // Chọn toàn bộ văn bản trong textarea
//     tempTextarea.select();

//     try {
//         // Thực hiện lệnh copy
//         document.execCommand("copy");

//         // Thông báo hoặc thực hiện các hành động khác sau khi copy
//         alert("Text has been copied!");
//     } catch (err) {
//         console.error("Unable to copy text", err);
//     } finally {
//         // Xóa textarea sau khi đã copy
//         document.body.removeChild(tempTextarea);
//     }
// });
// end copy mã mời

try
{ 
 
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
    var Location=Loca;
    // console.log(Location);
    if (Location=='my')
    {  
    // socket.emit("Create-Room",UserName+"'s Room");
    // var randomNumber = Math.floor(Math.random() * (9000)) + 1000;
    socket.emit("Create-Room", { UserName: UserName, RoomName: UserName + "'s Room",Code:idPlayer1 });
    socket.on("Server-Send-Room",function(data)
    { 
        if (data[data.length-1].UserName === UserName)
        {       
            DeleteRoomInDatabase(data); 
        }
    })  
    }
    else
    if (Location=="your")
    {   
        socket.emit("Create-Room",{UserName: UserName, RoomName:Of });
    }

      //bắt đầu gửi số lượng người còn thiếu
    var countPlayer=document.querySelector("#Count-Player");
    var rn;
    if (Loca==='my')
    rn=Of+"'s Room";
else
    rn=Of;
var t=0;
var Mang=[];
    socket.emit("iWantToKnowMember",rn);
    socket.on("memberWating",function(data){
         t=4-data;
        // console.log(t);
        countPlayer.textContent=`Waiting for ${t.toString()} Player to start`;
        Mang=[idPlayer1,UserName,Loca,Of];
         });
         //gửi số lượng người còn thiếu
         socket.on("Check-people", function () {
            socket.emit("iWantToKnowMember", rn);
          })
          
         joinTheGame.onclick=function(){
            window.location.href = `${local}/HarvestFestival/${Mang}`; 
           }
}
catch
{

}
