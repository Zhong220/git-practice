function doJob(job, time, cb) {
    setTimeout(() => {
        // 只有在這裡，才能知道這個非同步的 setTimeout 已經做完事情了
        let now = new Date();
        cb(`完成工作 ${job} at ${now.toISOString()}`);
    }, time);
}

// 目標輸出：刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec

/*法一：超笨方法，直接把要等待的時間加總
let now = new Date();
console.log(`開始工作 at ${now.toISOString()}`);

doJob('刷牙', 1000, function (data) { // 等1sec
    console.log(data);
});
doJob('吃早餐', 4000, function (data) { // 等(1+3)sec，以此類推
    console.log(data);
});
doJob('寫功課', 5000, function (data) {
    console.log(data);
});
doJob('吃午餐', 7000, function (data) {
    console.log(data);
});*/

//法二：每個job放在前一個job的callback函數裡面執行，依序觸發
let now = new Date();
console.log(`開始工作 at ${now.toISOString()}`);

doJob('刷牙', 1000, function (data) {
    console.log(data);
    doJob('吃早餐', 3000, function (data) {
        console.log(data);
        doJob('寫功課', 1000, function (data) {
            console.log(data);
            doJob('吃午餐', 2000, function (data) {
                console.log(data);
            });
        });
    });     
});

//法三：




