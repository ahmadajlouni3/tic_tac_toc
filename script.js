let pattern = "";
let number = x = 0;
let obj = {};
let l = "";

const eleArr = document.getElementsByTagName("td");
const arr = [];

for(let i of eleArr){
    arr.push(i)
}
for(let o = 0 ; o < arr.length ; o++){ 
    arr[0].setAttribute("class" , `class_${x}`);
    obj = {
        ele : arr[0],
        number,
        l
    }
    arr.push(obj)
    ++x;
    ++l;
    arr.shift()
}


for(let p of arr){
    p.ele.addEventListener("click" , ()=>{
        if(p.number === 0){
            p.number = 1;
            if(pattern === "" || pattern === "o"){
                p.ele.innerHTML = "<img src='./images/x.png' />"
                pattern = p.l = "x";
            }else if(pattern === "x"){
                p.ele.innerHTML = "<img src='./images/o.png' />"
                pattern = p.l = "o";
            }
        }           
    })
}


for(let y of arr){
    y.ele.addEventListener("click" , ()=>{
        if( arr[0].l === "x" && arr[1].l === "x" && arr[2].l === "x" || 
            arr[3].l === "x" && arr[4].l === "x" && arr[5].l === "x" ||
            arr[6].l === "x" && arr[7].l === "x" && arr[8].l === "x" ||
            arr[0].l === "x" && arr[4].l === "x" && arr[8].l === "x" ||
            arr[2].l === "x" && arr[4].l === "x" && arr[6].l === "x" ||
            arr[0].l === "x" && arr[3].l === "x" && arr[6].l === "x" ||
            arr[1].l === "x" && arr[4].l === "x" && arr[7].l === "x" ||
            arr[2].l === "x" && arr[5].l === "x" && arr[8].l === "x"
        ){
            document.getElementsByTagName("h2")[0].innerText = "(X) Player Win"
            document.getElementById("reset").style.display = "inline";


        }else if(   arr[0].l === "o" && arr[1].l === "o" && arr[2].l === "o" || 
                    arr[3].l === "o" && arr[4].l === "o" && arr[5].l === "o" ||
                    arr[6].l === "o" && arr[7].l === "o" && arr[8].l === "o" ||
                    arr[0].l === "o" && arr[4].l === "o" && arr[8].l === "o" ||
                    arr[2].l === "o" && arr[4].l === "o" && arr[6].l === "o" ||
                    arr[0].l === "o" && arr[3].l === "o" && arr[6].l === "o" ||
                    arr[1].l === "o" && arr[4].l === "o" && arr[7].l === "o" ||
                    arr[2].l === "o" && arr[5].l === "o" && arr[8].l === "o"
        ){
            document.getElementsByTagName("h2")[0].innerText = "(O) Player Win";
            document.getElementById("reset").style.display = "inline";
        }else if(arr[0].number === 1 && arr[1].number === 1 && arr[2].number === 1 &&
                 arr[3].number === 1 && arr[4].number === 1 && arr[5].number === 1 &&
                 arr[6].number === 1 && arr[7].number === 1 && arr[8].number === 1 
        ){
            document.getElementsByTagName("h2")[0].innerText = "Drow";
            document.getElementById("reset").style.display = "inline";
        }
    })
}


document.getElementById("reset").addEventListener("click" , () => {
    location.reload();
})