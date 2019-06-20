   function change1(user){
   $(document).ready(function(){ 
                $('.qw').click(function(){ 
                if (user=="1") {
                   document.getElementById("hell").innerHTML='<object type="text/html" data="Circuits/Parallel Shift Reg.html" width="2400" height="1000" left="100"></object>';
                }
                else{
                  document.getElementById("hell").innerHTML='<object type="text/html" data="Circuits/FullAdder.html" width="2400" height="1000" left="100"></object>';
                }
                });
            }); 
}
   function change(){
       var selvalue=document.getElementById('company');
         var user=selvalue.options[selvalue.selectedIndex].value;
         var temp=change1(user);
   }
 function hello4(){
   window.location.reload();
  } 
