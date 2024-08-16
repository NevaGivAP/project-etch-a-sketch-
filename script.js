const container = document.querySelector("#container");
const button = document.querySelector("#only-button");



function createBox (numOfBox){
    for(let i = 0; i < numOfBox;i++){
        const child = document.createElement("div");
        child.style.flex = 1;
        child.style.display = "flex";
        container.appendChild(child);
        
        for(let j = 0; j < numOfBox;j++){
            child.style.flexDirection = "column";
            const box = document.createElement("div");
            box.style.flex = 1;
            box.style.border = "1px solid black"
            box.className = "box"
            child.appendChild(box);
        }
    }
}

createBox(16);
assignBoxEvent();

function assignBoxEvent(){
    const box = document.querySelectorAll(".box");
    let opacityValue = 0;
    box.forEach((item) => {
        item.addEventListener("mouseover", ()=>{
            item.style.backgroundColor = "blue";
            if(opacityValue === 100){
                opacityValue = 0;
            }
            opacityValue += 10;
            item.style.opacity = `${opacityValue}%`
        })

    })
}


button.addEventListener("click",() =>{
    const userInput = prompt("Input the number of squares per side (Max: 100)");
    container.replaceChildren();
    createBox(+userInput);
    assignBoxEvent();
})