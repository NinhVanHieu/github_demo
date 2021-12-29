function send(){
    var arr=document.getElementsByTagName('input');
    var name=arr[0].value;
    var age=arr[1].value;
    var address=arr[2].value;
    var check1=arr[5].checked;
    var check1=arr[6].checked;
    var gender='';
    var check="";
    if(arr[3].checked){
        gender='Phim';
    }
    else{
        gender="Nhạc";
    }

    
    if(name==""||age==""|| address==""){
        alert('Nhập lại ');
        return;
    }
    if (isNaN(age)){
        alert('Nhập lại số');
        return;
        
    }
    
    if(check1||check2){  
    }
    else{
        alert('Xin check');
    }
    for(var i=5; i<=6; i++){
        if(arr[i].check){
            check+=arr[i].value +'';
        }
        
    }
  
    var choice=confirm( name+'\n'+age+'\n'+address+'\n'+gender+'\n'+check);
    if(choice==1){
        alert('Đúng');
    }
    else{
        alert('Sai');
    }
    
    
    
}
function sen(){
    var res=document.getElementsByTagName('form');
    res[0].reset();
}