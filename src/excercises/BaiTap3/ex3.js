let n = prompt('');
let arr = n.split('');
let pro = 0;
function rolls(){
    for (let i = 0;i<arr.length;i++){
        pro = pro + Number(arr[i]);
        if (arr[i]=="1"){
            pro = pro - Number(arr[i+1])
            
                 
        }
        else if(arr[i]=="6"){
            pro = pro + Number(arr[i+1]*2) - arr[i+1]
        }
    }
}
rolls();
console.log(pro);
console.log(arr)