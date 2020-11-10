let n = prompt("")
function checkNumber(){
    let sum = 0;
    while (n != 0)  
    {
        let r = n % 10; 
        sum = sum + r; 
        n = n / 10; 
    } 
    console.log(sum);
    return sum;
}
function checkJunctionNumber(){
    let count = 0; 
    for (let i = 1; i <= n; i++) 
    { 
        if (i + sum(i) == n) 
            count++; 
    } 
    console.log(count);
    return count >= 2; 

}
function bigCheck(){
    checkNumber();
    checkJunctionNumber();
    if (checkJunctionNumber()) 
       console.log("Yes"); 
    else
       console.log("No"); 
}
bigCheck(); 