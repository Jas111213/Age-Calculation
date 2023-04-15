function ageCalculate(){
    let userDate=document.getElementById("date").value;
    let userMonth=document.getElementById("month").value;
    let userYear=document.getElementById("year").value;
    console.log(userDate)
    console.log(userMonth)
    console.log(userYear)
    let daysOfMonths=[31,28,31,30,31,30,31,31,30,31,30,31]
    let isValidateAll=validateInputs(userDate,userMonth,userYear,daysOfMonths);
    if(isValidateAll){
      let todayDate=new Date().getDate();
     let todayMonth=new Date().getMonth();
      let todayYear=new Date().getFullYear();
      

      if(userDate > todayDate){
        todayDate=todayDate + daysOfMonths[userMonth-1];
        todayMonth=todayMonth-1;
    }
    if(userMonth > todayMonth){
        todayMonth=todayMonth+12;
        todayYear=todayYear-1;
    }
    let noOfDays=todayDate-userDate;
    let noOfMonths=todayMonth-userMonth;
    let noOfYears=todayYear-userYear;

    document.getElementById("message").innerText=`Your Age Is ${noOfYears} Years, ${noOfMonths} Months & ${noOfDays} Days`;
}
function validateInputs(userDate,userMonth,userYear,daysOfMonths)
{
    let msg=document.getElementById("message");
    //option a
    if(userDate==null || userDate==""){
        msg.innerText="Please provide Date";
        return false;
    }
    if(userMonth==null || userMonth==""){
        msg.innerText="Please provide Month";
        return false;
    }
    if(userYear==null || userYear==""){
        msg.innerText="Please provide Year";
        return false;
    }
    //option b
    if(parseInt(userMonth) >12){
        msg.innerText="Please provide Month value in the range from 1 to 12";
        return false;
    
    }
    //option c
    if(parseInt(userYear.length) <4){
        msg.innerText="Provide year in format YYYY";
        return false;
    }
    //option d
    if(isNaN(userDate)){
        msg.innerText="Please provide valid Date";
        return false;
    }
    if(isNaN(userMonth)){
        msg.innerText="Please provide valid Month";
        return false;
    }
    if(isNaN(userYear)){
        msg.innerText="Please provide valid Year";
        return false;
    }
    //option e
    if(parseInt(userDate) <=0){
        msg.innerText="Date cannot be 0 or less than 0";
        return false;
    }
    if(parseInt(userMonth) <=0){
        msg.innerText="Month cannot be 0 or less than 0";
        return false;
    }
    if(parseInt(userYear)<=0){
        msg.innerText="Year cannot be 0 or less than 0";
        return false;
    }

    //option f
    if(parseInt(userDate)> daysOfMonths[parseInt(userMonth)-1]){
        msg.innerText="Please provide valid Date with respect to Month";
        return false;
    }
    return true;
}

}