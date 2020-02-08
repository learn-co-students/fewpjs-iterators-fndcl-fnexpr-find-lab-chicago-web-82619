// const testVar = {}

// function testFunc() {
//   return "hi"
// }


function superbowlWin(array) {
    let win = array.find(array => array.result === "W")
    return !!win ? win.year : undefined
}