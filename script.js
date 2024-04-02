function calculate()

const totalamount = document.getElementById("Total-Amount");
const principalInput = document.getElementById("Principal");
const ratelInput = document.getElementById("Rate");
const yearsInput = document.getElementById("Years");

let Principal = Number(principalInput.value);
let Rate = Number(rateInput.value /100);
let Years = Number(yearsInput.value);

if(Principal<0 || isNaN(Principal)){
    Principal = 0;
    principalInput = 0;
}

if(Rate<0 || isNaN(Rate)){
    Rate = 0;
    ratelInput = 0;
}

if(Years<0 || isNaN(Years)){
    Years = 0;
    yearsInput = 0;
}

const result = Principal *Math.pow((1+Rate/1),1*years);

totalamount.totalcontent = result.toLocaleString(undefined
                                                {Style: "currency"}
                                                currency: INR)