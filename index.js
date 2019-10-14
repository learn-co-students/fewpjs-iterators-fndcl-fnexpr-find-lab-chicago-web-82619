const record = [];

function superbowlWin(record) {
  let result = record.find(function(w) {return w.result === "W"})
  return !!result ? result.year : undefined
}
