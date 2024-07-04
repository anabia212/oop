import inquirer from "inquirer"
import {differenceInSeconds} from "date-fns"
function* countdownTimer(second: number){
    while(second>0){
        yield second;
        second--;
}
}
let timeIteration = countdownTimer(10);
function displayCountdown(){
    let result=timeIteration.next();
    if(!result.done){
        const now = new Date();
        const countdownTime = new Date(now.getTime() + (result.value*1000))

        const remainingSeconds = differenceInSeconds(countdownTime, now)
        console.log(`Remaining Seconds: ${remainingSeconds}`)

        setTimeout(displayCountdown, 1000)
    }else{
        console.log("countdown completed!")
    }
    }
    displayCountdown();