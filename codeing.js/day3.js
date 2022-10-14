// let drinkOrder =[
// 'maisie - vinilla late',
// 'ben - hot choc ',
// 'adam -water'
// ]
// // console.log(drinkOrder)

// // drinkOrder[2] = 'paul - fanta'

// drinkOrder.push('paul-beer'[2])
// console.log (drinkOrder)

// let song_ =[
//     'good am',
//     'spins',
//     'electric avenue'
// ]
// song_.push ('ed sheran')
// song_.push ('adel')

// song_.pop()

// console.log(song_)

// let bestDrinks=[
//     'fanta',
// 'milkshake',
// 'oasis'
// ]

// for (let i=0;  i <bestDrinks.length; i++){
//     console.log(bestDrinks[i])
// }

// let num =15

// if(num % 5 ==0 && num % 3 == 0){
//     console.log('FIZZ BUZZ')
// }else if (num %5==0){
//     console.log('BUZZ')
// }else if (num% 3==0){
//     console.log('FIZZ')
// }else{
//     console.log|(num+'....booooo....')
// }


// let evenNumbers =[]

// for (let i =0; i < 20; i++){
//     if (i % 2== 0){
//         evenNumbers.push(i)
//     }
// }
// console.log(evenNumbers)


// let num =Math.floor(Math.random()*10)
// while(num !=5){
//     console.log(num+"   thats not 5 ")
//     num=Math.floor(Math.random()*10)
// }
// console.log("its 5!!!")


let cards =['diamond','spade','heart','club'] 
let currentCard ='club'

while (currentCard !='spade'){
    console.log(currentCard)
    currentCard= cards[Math.floor(Math.random()*4)]
}

console.log(currentCard)