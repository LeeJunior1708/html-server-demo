var canvas= document.getElementById('gamezone');
var context= canvas.getContext('2d');
var scoreshow=document.getElementById('score');

var UFOimg= new Image();
var hinhnenchinh=new Image();
var ongtren= new Image();
var ongduoi=new Image();

//Nạp hình vào
UFOimg.src="images/UFOimg.png";
hinhnenchinh.src="images/nenchinh.png";
ongtren.src="images/ongtren.png";
ongduoi.src="images/ongduoi.png";

//Tạo 1 số biến cần thiết
var score=0;
var khoangcachhaiong=140; // Khoảng cách hai ống
var khoangcachdenongduoi; // Khoảng cách từ đầu ống trên

// tạo ra 1 object chim với tọa độ x y là 1 nữa canvas
var UFO={x: hinhnenchinh.width/5,y: hinhnenchinh.height/2}

var ong=[]; //tạo mảng ống để chứa các ống di chuyển

// khởi tạo ống đầu tiên nằm bên phải ngoài cùng và y=0;
ong[0]={x:canvas.width,y:0}

//tạo function để chạy trò chơi
function run(){
    // load hình ảnh vào
    context.drawImage(hinhnenchinh,0,0);
    context.drawImage(UFOimg,UFO.x,UFO.y);

    for(var i=0;i<ong.length;i++){
        khoangcachdenongduoi=ongtren.height+khoangcachhaiong;

        // vẽ ống trên theo tọa độ của ống đó
        //  ống dưới phụ thuộc ống trên
        context.drawImage(ongtren,ong[i].x,ong[i].y);
        
        // vị trí ống trên cộng khoảng cách đến
        // ống dưới thì random nó lên xuống
        context.drawImage(ongduoi,ong[i].x,ong[i].y+khoangcachdenongduoi);

        ong[i].x-=5; //để ống di chuyển

        // thêm ống khi ống di chuyển đến giữa nó sẽ tạo thêm 1 ống nữa
        if(ong[i].x ==canvas.width/2){
            ong.push({
                x:canvas.width,
                y:Math.floor(Math.random()*ongtren.height)-ongtren.height
            })
        }

       // if(ong[i].x ==0 )ong.splice(0,1); // xóa ống khi đụng lề trái
        if(ong[i].x==UFO.x)score++; // điều kiện cộng điểm

        // điều kiện kết thúc game
        if(UFO.y+UFOimg.height==canvas.height|| UFO.x+UFOimg.width>= ong[i].x && UFO.x <= ong[i].x +ongtren.width && (UFO.y<=ong[i].y+ongtren.height|| UFO.y +UFOimg.height>= ong[i].y+ khoangcachdenongduoi)) return;
    }

    scoreshow.innerHTML="score: " + score;

    // cho UFO rơi xuống
    UFO.y+=2;
    requestAnimationFrame(run);
}

//function làm UFO bay lên khi nhấn
document.addEventListener("keydown",function(){UFO.y-=50;})
run();