let arr = [1,3,1,1,2,1];
function checkNumberBomerang(){
    for(i=0;i<arr.length;i++){
        if ((arr[i]==arr[i+2])&&(arr[i]!=arr[i+1])){
            console.log("BOMERANG đang có trong chuỗi!!!")
        }
        else if((arr[i]==arr[i+1])&&(arr[i]==arr[i+2])){
            console.log("Lần không tìm thấy Bomerang")
        }
    }
}
checkNumberBomerang();