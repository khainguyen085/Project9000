let n = prompt("");
let arr = n.split('');

function checkNumber(){
    for (i=1;i<arr.length;i++){
        if (arr[i]>arr[i-1]){
              console.log('Metadrome')
        }
        else if(arr[i]<arr[i-1]){
              console.log('Katadrome')
        }
        else if((arr[i]<arr[i-1])&&(arr[i]==arr[i+1])){
               console.log('Nialpdrome')
        }
        else if(arr[i]==arr[i-1]){
              console.log('Repdrome')
        }
        else{
              console.log('Nondrome')
        }
    }
}
checkNumber(arr);
console.log(arr)