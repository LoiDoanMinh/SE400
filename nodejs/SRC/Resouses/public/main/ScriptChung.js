function decodeHtmlEntity(encodedString) {
  var doc = new DOMParser().parseFromString(encodedString, 'text/html');
  return doc.documentElement.textContent;
}
var decodedString = decodeHtmlEntity(Of);

var chat=document.querySelector("#chatbar");
function addParagraph(mes) {
    // Tạo một thẻ <p>
    var newParagraph = document.createElement("p");
    newParagraph.classList.add("usernam1-hello-DmX");
    // Thêm nội dung cho thẻ <p> (có thể sửa đổi dòng này để thêm nội dung mong muốn)
    var paragraphContent = document.createTextNode(mes);
    newParagraph.appendChild(paragraphContent);

    // Lấy thẻ <div> dựa trên ID
    var myDiv = document.getElementById("chat");

    // Thêm thẻ <p> vào bên trong thẻ <div>
    myDiv.appendChild(newParagraph);
    myDiv.scrollTop = myDiv.scrollHeight;
  }
  function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
}
chat.onkeydown= function handleKeyDown(event) {
    // Kiểm tra xem phím Enter đã được nhấn hay không (keyCode 13 hoặc key "Enter")
    if (event.key === "Enter" || event.keyCode === 13) {
      // Thực hiện các hành động khi người dùng nhấn Enter ở đây
     var chat1;
      if (Loca==="my")
   {  chat1={
    Room:decodedString+"'s Room",
    chat:chat.value
    }
  }
    else
    if (Loca==='your')
{
  chat1={
    Room:decodedString,
    chat:chat.value
    }
}
if (!isEmptyOrSpaces(chat1.chat))
{
  socket.emit("send-hello",chat1);
}
     
      // addParagraph(chat.value);
      chat.value="";
    }
  }
  socket.on("send-hello-e",function(data)
  {
    addParagraph(data);
  })




  var audio=document.querySelector("#nut");
  var i=0;
 audio.onclick=function() {
      var p=document.querySelector("#audio");
      if (i%2==0)
      {
          audio.setAttribute("src","../main/assets/vector.png");
      p.play();
      }
  else
  {
      audio.setAttribute("src","../main/assets/volumne1.png");
  p.pause();
  }
i++;
  }