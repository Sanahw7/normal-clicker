let points = 100

let halfGrownlevel = 0
let upgrade1Level = document.getElementById('upgrade1Level')

let fullGrown = 0 
let upgradeLevel2 = document.getElementById("upgradeLevel2")

function changePoint(amount){

    points = points + amount

    console.log(points)

    pointCounter.innerText = points.toFixed(2) + 'Points'

}


function buySprout() {

    if (points >=100){
     changePoint(-100)


    }
}























function bigClick(){
    
    changePoint(basePoint)
let basePoint = 1 + (plantThing ** 1.05)

}