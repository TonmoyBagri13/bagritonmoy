function hello(){
    console.log("Hello ! Good Morning !!!");
}

const wait = setTimeout(()=>{
    console.log("I will wait for 10 seconds");
},10000)

function letsPlay(){
    console.log("I play volleyball");
}

hello();
wait;
letsPlay();
//problem = waiting time is not changed
