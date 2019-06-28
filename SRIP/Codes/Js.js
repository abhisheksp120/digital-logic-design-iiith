  var x=$("#div").width();
  var y=x*1.2;

var counter={
    "width":y,
            "height":800,
            "showToolbox":true,
            "toolbox":[
            {"type":"In"},
            {"type":"Out"},
            {"type":"DC"},
            {"type":"OSC","freq":1},
            {"type":"Joint"},
            {"type":"LED"},
            {"type":"PushOn"},
            {"type":"PushOff"},
            {"type":"Toggle"},
            {"type":"NOT"},       
            {"type":"AND"},
            {"type":"NAND"},
            {"type":"OR"},
            {"type":"4bitAdder"},
            {"type":"Parallel Shift Reg"},
            {"type":"DSO","numInputs":6},
            {"type":"Selector"},
            {"type":"JK-FF"},
            {"type":"D-FF"},
            {"type":"FullAdder"}
    ],
    "devices":[
   
    ],
    "connectors":[
   
    ]
  };
var html1=JSON.stringify(counter);
  document.querySelector(".simcir").innerHTML=html1;
  
$(".simcir_outer_div").width(x*0.8);

   function change1(user){
   $(document).ready(function(){ 
                $(".button1").click(function(){ 
                if (user==="1") {
                	 document.getElementById("div4").innerHTML='<object type="text/html" data="Circuits/Parallel Shift Reg.html" width="2800" height="1000" left="100"></object>';
                }
                else{
                	document.getElementById("div4").innerHTML='<object type="text/html" data="Circuits/FullAdder.html"  width="2800" height="1000" left="100" ></object>';
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
