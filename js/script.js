function check(){
    var cnt=0;
    var count=document.getElementsByClassName('checkbox');
    
    for (let i = 0; i < count.length; i++) {
        if(count[i].checked == true){
            cnt++;  
        }
        document.getElementById('items').innerText=cnt;
    } 
}

var sum=0;
function changdat(d) {
    var check = document.getElementById('addcart' + d); 
    var amount = document.getElementById('rupee' + d).innerHTML;
    // var amount = parseFloat(amountString.replace(/[^0-9.]/g, '')); 

    if(check.checked == true){

        sum = sum + parseInt(amount);

    }
    else{
        
        sum = sum - amount;
        
    }

    document.getElementById('amounts').innerText = sum;

     var gst=sum*18/100;

    document.getElementById('gst').innerText=gst;   
    document.getElementById('total_amount').innerText=gst+sum;   

} 

function submit(){
    
    var pay=document.getElementById('total_amount').innerText;
    var text=document.getElementById('code').value;

    
    if (text == '#111') {
        var p_amt=pay*25/100;
        document.getElementById('payable_amt').innerText=pay-p_amt;
        document.getElementById('discount').innerText='-'+p_amt;
    }
    if (text == '#222') {
        var p_amt=pay*50/100;
        document.getElementById('payable_amt').innerText=pay-p_amt;
        document.getElementById('discount').innerText='-'+p_amt;
    }
    if (text == '#333') {
        var p_amt=pay*80/100;
        document.getElementById('payable_amt').innerText=pay-p_amt;
        document.getElementById('discount').innerText='-'+p_amt;
    }
  }