
const color_config={
    "green":3000,
    "yellow":1000,
    "red":2000,
    'blue':4000
}

//延时函数
function delay(duration){
    return new Promise(resolve=>{
        // setTimeout(()=>resolve(), duration);
        setTimeout(resolve, duration);
    })
}

async function changeColor(color){
    document.getElementById("traffic-light").style.background = color;

    await delay(color_config[color])
}

async function run (){
    for (const key in color_config) {
        await changeColor(key);
    }
    run();
}

run();