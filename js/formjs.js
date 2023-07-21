function validationform()
       {
            var name=document.validation.fullname.value;
            var gadget=document.validation.gadgetname.value;
            var message=document.validation.message.value;
            var npatt=/^[a-zA-Z' ']+$/;
            var mpatt=/^[a-zA-Z' ']+$/;
            var gpatt=/^[a-zA-Z' ']+$/;
            if(name=="" || name.length<=8){
                alert("Please enter Full Name");
            }
            else if(name.match(npatt)){
                alert("Valid name");
            }
            else{
                alert("Only Character is include in name");
            }

            var email=document.validation.email.value;
            var epatt=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
            if(email==""){
               alert("Please enter Email");
           }
            else if(email.match(epatt)){
           alert("Valid Email");
           }
           else{
           alert("Invalid Email enter");
           }

             if(gadget=="" || gadget.length<=5){
                alert("Please enter Gadget Name");
            }
            else if(gadget.match(gpatt)){
                alert("Valid Gadget Name");
            }
            
            else{
                alert("gadgetname is invalid ");
            }

            if(message=="" || message.length<8){
                alert("Please How can we help you?");
            }
            else if(message.match(mpatt)){
                alert("Valid email");
            }
            else{
                alert("Invalid entry");
            }

           
       }