function min(arr){
    let min= arr[0]
    for(i in arr){
       if(arr[i]<min){
        min =arr[i]
       }
    }
    console.log(min)
}
let arr=[1,2,7,8,-5,10,20,-30];

min(arr)