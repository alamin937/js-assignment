// first problem seerToMon

function seerToMon(seer){
    if(typeof seer !='number'){
        return 'please give a number';
    }
    let mon = seer / 40;
    return mon;
}

let monCount = seerToMon('anik');
console.log(monCount);

// second problem total sales

function totalSales(shirt, pant , shoe){
    if(typeof shirt !='number'){
        return 'give the number';
    }
    else if(typeof pant !='number'){
        return 'give the number';
    }
    else if(typeof shoe !='number'){
        return 'give the number';
    }
    let shirtRates = 100;
    let pantRates = 200;
    let shoeRates = 500;

    let shirtTotalRates = shirt * 100;
    let pantTotalRates = pant * 200;
    let shoeTotalRates = shoe * 500;

    totalSalesCount = shirtTotalRates + pantTotalRates + shoeTotalRates;

    return totalSalesCount;

 }

let totalRates = totalSales(1, 8, 1);
console.log(totalRates);

// third problem deliveryCost

function deliveryCost(items){
    if(typeof items !='number'){
        return 'give the number now';
    }
    if(items > 100 && items <= 200){
        let rate = 10000;
         let rate2 = 80;
         let num = items - 100;
         let itemRate2 = rate + num * rate2;
         return itemRate2;
     }

    else if(items <= 100){
        let rate1 = 100;
        let itemRate = items * rate1;
        return itemRate;
    }
    else{
        rate4 = 18000;
        let rate3 = 50;
        let item = items - 200;
        let itemRate3 = rate4 + item * rate3;
        return itemRate3;
    }
  
}

let totalCost = deliveryCost(120);
console.log(totalCost);

// fourth problem perfect friend

function perfectFriend(friendsName){
    if(typeof friendsName !='object'){
        return 'only take a string';
    }
    let fixedNumber = 5
   for(let i=0; i<friendsName.length; i++){
        let names = friendsName[i];
      if(friendsName[i].length == fixedNumber){
          fixedNumber = friendsName[i];
      }
   }
   return fixedNumber;
}
let friendsName = ['anik', 'rony', 'kamal', 'jamal', 'alamin'];
let friend = perfectFriend(friendsName);
console.log(friend);
