const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (array) => {
  let result = array.find( record => record.result === "W" )
  return !!result ? result.year : undefined
}