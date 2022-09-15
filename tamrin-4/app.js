let  amazing ={
    sellcount:70,
    product:{
        brand:'lenovo',
        size:18,
        model:'aaaaaaa',
        percent: function (num , per){
            return (num/100)*per;

        },
    }
}
let total=amazing.product.percent(180000,0.30);
console.log(total);
function req(sell,purchase) 
{
    if(sell<=purchase)
    console.log("عدم موجودی");
    else
    console.log("بخر ");

}
req(3,100)
