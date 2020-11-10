let w = Number(prompt("độ rộng ma trận"));
let h = Number(prompt("độ cao ma trận"));
let icon = String(prompt("nhập ký tự đặc biệt"));

function newFrame(){
    let print = document.getElementById("root")
    for (i=1; i<w; i++){
        print.innerHTML += icon;
    }
    for(i=1; i<h; i++){
        print.innerHTML +=  icon + '</br>';
    }
    for (i=1; i<=w; i++){
        print.innerHTML += icon;
    }
}
newFrame();