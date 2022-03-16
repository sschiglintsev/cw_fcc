const today = new Date()
const a = new Date()
a.setDate(today.getDate() - 1)
console.log(a==today)