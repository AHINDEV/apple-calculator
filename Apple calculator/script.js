function btnclick(val)
{
        document.getElementById("screen").value+=val;
}

function clearfuction(){
        document.getElementById("screen").value=""
}
function equalclick(){
        var text= document.getElementById("screen").value
        try{
        var result=eval(text)
        document.getElementById('screen').value=result
        }
        catch(error){
                result ="Endha ada adikunne"
        }
        
}