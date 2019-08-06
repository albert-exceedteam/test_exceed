let student = {
    name: 'Jhon',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
}

let json = JSON.stringify(student)
console.log(typeof json)
console.log('jquery tag', $('p'))
$('#idd').on('click',  () => {
    console.log($('#idd').attr('class'))
    let x = $('#idd').attr('class').replace('a', 'hello moto ')
    console.log(x)
})


console.log('jquery class', $('.asd'))
console.log('jquery id', $('#idd'))

// let say = setTimeout(function tick() {
//     console.log('tack')
//     say = setTimeout(tick, 2000)
// }) 
// рекруссивный setTimeout

// function say(arg, arg1) {
//     console.log(arg + ' ' + arg1)
// }
// setInterval(say, 2000, "hello", "world")

// function say (arg, arg1) {
//     console.log(arg + ' ' + arg1)
// }
// setTimeout(say, 3000, "Hello", "world")

// let timerId = setInterval(() => console.log('tick'), 2000)

// setInterval(() => {
//     clearInterval(timerId)
//     console.log('stop')
// }, 5000)




// let array = ["Apple", "Orange", "Banana"]
// array.push("Orange")
// array.unshift("Banana")
// array.push({a: 1})
// array.push("555")
// array.pop("555")
// array.splice(3, 1)
// console.log(array)

// console.log(array.shift())
// console.log(array)
// console.log(array.length)
// console.log(
//     array.filter((elem, index) => {
//         console.log(elem, index)
//         typeOf(elem) == 'object'
//     })
// )

// function a () {
//     var x
//     if (a==a){

//     }
// }



// if (x.indexOf('my') != -1) {
//     alert('YES')
// }

// let start = x.slice(0, 2)
// let end = x.slice(3)

// let changeSymbol = 'u'


// // console.log( start + changeSymbol + end )


// function changeThirdSymbol (word, number, changeSymbol) {
//     let start = word.slice(0, number)
//     let end = word.slice(number+1)

//     return start + changeSymbol + end
// }

// console.log (changeThirdSymbol(x, 40, 'p') ) 