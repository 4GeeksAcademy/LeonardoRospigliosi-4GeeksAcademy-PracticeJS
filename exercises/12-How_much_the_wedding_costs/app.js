let guests = prompt('How many people are coming to your wedding?');

const hasta050 = 4000;
const hasta100 = 10000;
const hasta200 = 15000;
const hastaMAS = 20000;

function getPrice(guests){
    let cost = 0;
    // Your code here
   if (guests <= 50) {
    cost=hasta050;
   }else if (guests<=100) {
    cost=hasta100;
   }else if (guests<=200) {
    cost=hasta200;
   }else if (guests>200) {
    cost=hastaMAS; }

    return cost;
}

let price = getPrice(parseInt(guests));
console.log('Your wedding will cost '+price+' dollars');
