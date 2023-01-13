
    function RR(nmber){
        var inputEN=document.getElementById("inpt1").value;
        var ta=inputEN[inputEN.length];
        if(inputEN.length<15){
            if( ta==!isNaN|| ta==null ||nmber==isNaN ){
                document.getElementById("inpt1").value=inputEN+nmber;
            }
        }
    }
    function egal(){
        m=document.getElementById("inpt1").value;
        if(m){
           document. getElementById("inpt1").value=eval(m);
        }
    }
    
    

    
    function sustr(){
        var su=document.getElementById("inpt1").value;
        if(su){
            document.getElementById("inpt1").value=delete(su);

        }
    }
    function multiplication(){
        m=document.getElementById("inpt1").value;
        if(m){
            document.getElementById("inpt1").value=multiplication(m) ;
        }
    }
    function division(){
        d=document.getElementById("inpt1").value;
        if(d){
            document.getElementById("inpt1").value=division(d) ;
        }
    }
    function AC(){
        document.getElementById("inpt1").value=" ";
    }
    function SUPR(){
        s=document.getElementById("inpt1").value;
        if(s){
            document.getElementById("inpt1").value=s.substring(0,s.length-1);

        }
    }
    
   function san(){
     document.getElementById("inpt1").value= Math.sin(document.getElementById("inpt1").value);
      
       
   }
   function cas(){
    document.getElementById("inpt1").value= Math.cos(document.getElementById("inpt1").value);
     
      
  }
  function tan(){
    document.getElementById("inpt1").value= Math.tan(document.getElementById("inpt1").value);
     
      
  }
  function sq(){
      e=document.getElementById("inpt1").value;
      document.getElementById("inpt1").value=Math.sqrt(e);
  }
  function p(){
     e= document.getElementById("inpt1").value;
    if(e){
        document.getElementById("inpt1").value=e/100;
    }
    }
   
    

    function nbr(number){
        var tt=document.getElementById("inp").value;
        var td=tt[tt.length];
        if(tt.length<15){
            if( td==!isNaN|| td==null ||number==isNaN ){
                document.getElementById("inp").value=tt+number;
            }
        }
    }