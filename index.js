let createEmployeeRecord = function(arr){
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords=function(arrs){
  let newArr=[]
  arrs.forEach(arr=>{
    newArr.push(createEmployeeRecord(arr))
  })
  return newArr
}

function createTimeInEvent(stp){
  let stparr=stp.split(" ")
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(stparr[1]),
    date: stparr[0]
})
return this
}

let createTimeOutEvent=function(stp){
  let stparr=stp.split(" ")
this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(stparr[1]),
    date: stparr[0]
})
return this
}

let hoursWorkedOnDate=function(stp){
 return (this.timeOutEvents[0].hour-this.timeInEvents[0].hour)/100
}

let wagesEarnedOnDate=function(stp){
 let hours= hoursWorkedOnDate.call(this,stp)
return hours * this.payPerHour
}

let allWagesFor=function(){
 
}



// let allWagesFor = function () {
//     let eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     let payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }