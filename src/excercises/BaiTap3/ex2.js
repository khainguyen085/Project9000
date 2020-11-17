let cardOnTable = ["A_S", "J_H", "7_D", "8_D", "10_D"];
let cardInHand  = ["J_D", "3_D"];
//Ghép 2 mảng làm 1
let allCard = cardOnTable.concat(cardInHand);
//Xoá 2 dấu 2 bên để thành một chuỗi
let c = allCard.join("");
//Lần lượt xoá dấu _ và các kí tự trong bài poker từ 1 đến A. Này làm vòng lặp nhanh hơn.
c = c.split('_').join('')
c = c.split('A').join('')
c = c.split('Q').join('')
c = c.split('K').join('')
c = c.split('J').join('')
c = c.split('10').join('')
c = c.split('9').join('')
c = c.split('8').join('')
c = c.split('7').join('')
c = c.split('6').join('')
c = c.split('5').join('')
c = c.split('4').join('')
c = c.split('3').join('')
c = c.split('2').join('')
c = c.split('1').join('')
c = c.split('')
//function này nếu console.log ra lá nào 5 lần thì là Flush!
function checkFlush(c){
    for (let i=0;i<c.length;i++){
        if(c[i]=="D"){
           console.log("Diamond")
        }
        else if (c[i]=="S"){
            console.log("Spades")
        }
        else if (c[i]=="H"){
            console.log("Heart")
        }
        else{
            console.log('Club')
        }
    }
}
checkFlush(c);
console.log(Sum)
console.log(c)
console.log(allCard)