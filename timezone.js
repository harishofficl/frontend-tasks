const c1 = { name: "TrusTrace", offset: "+5.5", location: "India" };
const c2 = { name: "Zoho", offset: "+5.5", location: "India" };
const c3 = { name: "Healthy Hunger", offset: "-8", location: "US" };
const c4 = { name: "Apple", offset: "-8", location: "US" };

const companies = [c1, c2, c3, c4];

let localDate = new Date();

let localOffSet = -(localDate.getTimezoneOffset() / 60);

//apple,CA
let destOffSet = c4.offset;

console.log(localOffSet + " hours");
console.log(destOffSet + " hours");

let offset = destOffSet - localOffSet;

// destination time
let destinationTime = new Date(new Date().getTime() + offset * 3600 * 1000);

let date = destinationTime.toDateString().split(" ");
let time = destinationTime.toTimeString().split(" ")[0].split(":");
console.log(date);
console.log(time);

// check for weekends
if(date[0]==="Sat" || date[1]==="Sun"){
    console.log("Holiday!");
}
else{
    // check time is in b/w 10am-6pm [open]
    if(time[0]>=10 && time[0]<=6){
        console.log("Open!");
    }else{
        console.log("Closed!")
    }
}