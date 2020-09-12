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
  let rightOne = this.timeInEvents.find(e=>{return e.date==stp})
  let i= this.timeInEvents.indexOf(rightOne)
  return (this.timeOutEvents[i].hour-this.timeInEvents[i].hour)/100
  }


let wagesEarnedOnDate=function(stp){
 let hours= hoursWorkedOnDate.call(this,stp)
return hours * this.payPerHour
}


let allWagesFor=function(){
 let total=0
  for(let i=0; i< this.timeInEvents.length; i++){
    let stp=`${this.timeInEvents[i].date}`
    total+=wagesEarnedOnDate.call(this,stp)
    }
    return total
}

let findEmployeeByFirstName=function(arr, firstName){
  return arr.find(ele=>{return ele.firstName===firstName})
}

let calculatePayroll=function(arr){
  let total=0
  arr.forEach(ele=>{
     total+=allWagesFor.call(ele)
  })
  return total
}


