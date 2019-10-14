const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(bowls) {

  // return bowls.find( (bowl) => {
  //   if (bowl.result === "W") {
  //     return bowl.year
  //   }
  // })
  // if (found) return found.year
  const found = bowls.find( (bowl) => { return bowl.result === "W" })
  if (found) return found.year
}
