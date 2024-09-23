/*有幾種寫法? Ans:成功了6種寫法(但都是套用有遍歷功能的函數)*/

//Arrays.forEach() 陣列內建遍歷元素的方法
function sum1(arr) {
    let value = 0;
    arr.forEach(num => {
        value += num;
    });
    return value;
}

//Array.map() 對陣列中的每個元素進行指令
function sum2(arr) {
    let value = 0;
    let new_arr = arr.map(num => value += num);
    return value;
}

//Array.filter() 對陣列中的元素進行指令，並返回滿足條件的新陣列
function sum3(arr) {
    let value = 0;
    let new_arr = arr.filter(num => value += num);
    return value;
}

//Array.reduce() 累加或聚合陣列的所有元素並產生單一值
function sum4(arr) {
    let value = arr.reduce((acc, num) => acc + num); //acc:累積結果, num當前元素
    return value;
}

/*
Array.some() 只要陣列中有一個元素滿足條件，return true
function sum5(arr){
    let value = 0;
    let TF = arr.some(num => value += num);
    return value;
}

失敗，因為滿足一個就會回傳，故無法加總
*/

//Array.every() 陣列中所有元素都滿足條件，return true
function sum6(arr){
    let value = 0;
    let TF = arr.every(num => value += num);
    return value;
}

//Array.flatMap() 對陣列中的每個元素進行映射並將結果展平為一個單一的陣列
function sum7(arr){
    let value = 0;
    let new_arr = arr.flatMap(num => value += num);
    return value;
}

//optional
function sum8(n){
    let value = 0;
    value = ((n + 1)*n) / 2;
    return value;
}


console.log(sum1([1, 5, 3, 2]));
console.log(sum2([1, 5, 3, 2]));
console.log(sum3([1, 5, 3, 2]));
console.log(sum4([1, 5, 3, 2]));
//console.log(sum5([1, 5, 3, 2]));
console.log(sum6([1, 5, 3, 2]));
console.log(sum7([1, 5, 3, 2]));
console.log(sum8(5));