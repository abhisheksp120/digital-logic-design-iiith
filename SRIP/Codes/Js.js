   function change1(user){
   $(document).ready(function(){ 
                $(".button3").click(function(){ 
                if (user==="1") {
                	 document.getElementById("div4").innerHTML='<object type="text/html" data="Circuits/Parallel Shift Reg.html" width="2400" height="1000" left="100"></object>';
                }
                else{
                	document.getElementById("div4").innerHTML='<object type="text/html" data="Circuits/FullAdder.html" width="2400" height="1000" left="100"></object>';
                }
                });
            }); 
}
   function change(){
   		 var selvalue=document.getElementById("sel");
         var user=selvalue.options[selvalue.selectedIndex].value;
         var temp=change1(user);
   }
 function hello4(){
   window.location.reload();
  } 
