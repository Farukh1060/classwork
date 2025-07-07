let date = new Date();
let newdate = new Date(2024,7,25)
console.log(date)
console.log(newdate)
let date2 = newdate - date;

console.log(date2)
function day(set){
    date.setDate(set)
    let  i = date.getDay()
    let day_name = ["sunday","monday","tuesday","wednesday","thrusday","friday","saturday"]
    if(i == 0){
        console.log(`${day_name[i]} is a funday`)
    }else{
        console.log(`${day_name[i]} is a working day`)
        
    }
}
day(4);
