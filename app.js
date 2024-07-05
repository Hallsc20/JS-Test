window.onload = function(){
    // Getting the button
    const myButton = document.querySelector(".js-show-hide-text");
    const myText = document.querySelector(".js-my-text");
    const myOtherText = document.querySelector(".js-my-other-text");
    
    myButton.addEventListener("click", function(){
        myText.classList.toggle("active");
        myOtherText.classList.toggle("inactive");
    });
    
    
    
    //Clock
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    month += 1;
    let day = date.getDay();
    console.log(year,month,day)

    const longDate = new Date(year,month,day)

    document.getElementById("date").innerHTML = day +"/"+ month +"/"+ year;
    
    //Maths
    
    let x=5;
    let y = 6;
    let z = x + y;
    
    console.log(x,y,z);
    
    let a = 4.5;
    let b = 4.4;
    let c = 4.6;

    let d = Math.round(a);
    let e = Math.round(b);
    let f = Math.round(c);

    let g = Math.ceil(a);
    let h = Math.ceil(b);
    let i = Math.ceil(c);

    let j = Math.floor(a);
    let k = Math.floor(b);
    let l = Math.floor(c);

    console.log(d)
    console.log(e)
    console.log(f)
    console.log(g)
    console.log(h)
    console.log(i)
    console.log(j)
    console.log(k)
    console.log(l)

    //Counter

    const counterUp = document.getElementById("counter-up");
    const upgrade = document.getElementById("upgrade");
    const upgrade2 = document.getElementById("upgrade2");
    const buyGold = document.getElementById("buy-gold");
    const goldUpgrade = document.getElementById("gold-upgrade")
    let score = 1;
    let cash = 0;
    let gold = 0;
    let upgradeCost = 10;
    let upgrade2Cost = 50;
    let upgradeLvl = 0;
    let upgrade2Lvl = 0;
    let goldUpgradeCost = 10;
    let goldUpgradeLvl = 0;

    counterUp.addEventListener("click", function() {
        cash += score;
        counterUp.innerHTML = "Gain + " + score + " Cash | You have: " + Math.ceil(cash);
    })

    upgrade.addEventListener("click", function(){
        if (cash >= upgradeCost){
            cash -= upgradeCost;
            counterUp.innerHTML = "Gain + " + score + " Cash | You have: " + Math.ceil(cash);
            score += 1;
            counterUp.innerHTML = "+" + "Gain + " + score + " Cash | You have: " + Math.ceil(cash);
            upgradeCost *= 1.5;
            upgradeLvl += 1;
            upgrade.innerHTML = "Upgrade + 1 (" + Math.ceil(upgradeCost) + ") | Lvl : " + upgradeLvl;
        }})

    upgrade2.addEventListener("click", function(){
        if (cash >= upgrade2Cost){
            cash -= upgrade2Cost;
            counterUp.innerHTML = "Gain + " + score + " Cash | You have: " + Math.ceil(cash);
            score += 5;
            counterUp.innerHTML = "Gain + " + score + " Cash | You have: " + Math.ceil(cash);
            upgrade2Cost *= 1.5;
            upgrade2Lvl += 1;
            upgrade2.innerHTML = "Upgrade + 5 (" + Math.ceil(upgrade2Cost) + ") | Lvl : " + upgrade2Lvl;
        }})
    buyGold.addEventListener("click", function(){
        if (cash >= 50){
            cash -= 50;
            gold += 1;
            buyGold.innerHTML = "Gold Price: 50 | You have: " + gold;
            counterUp.innerHTML = "Gain + " + score + " Cash | You have: " + Math.ceil(cash);
        }})
    goldUpgrade.addEventListener("click", function(){
        if (gold >= goldUpgradeCost){
            gold -= goldUpgradeCost;
            buyGold.innerHTML = "Gold Price: 50 | You have: " + Math.ceil(gold);
            score += 5;
            counterUp.innerHTML = "Gain + " + score + " Cash | You have: " + Math.ceil(cash);
            goldUpgradeCost *= 1.5;
            goldUpgradeLvl += 1;
            goldUpgrade.innerHTML = "Upgrade + 5 (" + Math.ceil(goldUpgradeCost) + ") | Lvl : " + goldUpgradeLvl;

        }
    })

    //Dice

    document.getElementById("dice").addEventListener("click", function(){
        let roll;
        roll = Math.floor(Math.random() * 6) + 1;
        document.getElementById("random").innerHTML = roll;
        if (roll % 2 == 0) {
            cash *= 1.5;
            counterUp.innerHTML = "Gain + " + score + " Cash | You have: " + Math.ceil(cash);
        } else {
            cash /= 2.5;
            counterUp.innerHTML = "Gain + " + score + " Cash | You have: " + Math.ceil(cash);
        }
    })


    // Loops

    x = 10
    
    while (x > 0) {
        console.log(x)
        x--
    }

    for (x; x <= 10; x++ ) {
        console.log(x)
    }
}