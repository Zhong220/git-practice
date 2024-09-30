function doJob(job, time, cb) {
    setTimeout(() => {
        // 只有在這裡，才能知道這個非同步的 setTimeout 已經做完事情了
        let now = new Date();
        cb(`完成工作 ${job} at ${now.toISOString()}`);
    }, time);
}

doJob('刷牙', 1000, function (data) { // 等1sec
    console.log(data);
});

var delay = function(value, time){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve([value, time]);
        }, time);
    });
};

delay('a', 0).then(function(v){
    console.log(v[0], v[1]);
    return delay('b', 1000);
}).then(function(v){
    console.log(v[0], v[1]);
}).then(function(v){
    console.log(v[0], v[1]);
});