let idp=null;
let count=0;
let flag=1;
let prevElement;
function disappear(idx)

{   
    element=document.getElementById(idx);
    element.style.visibility = "hidden";
    if (idp!=null){
        prevElement=document.getElementById(idp);
        
        if ((idx=='b1' && idp=='b3')||(idx=='b3' && idp=='b1'))
        {
            count+=1;
            setTimeout(function(){document.getElementById('img1').style.visibility="hidden";document.getElementById('img3').style.visibility="hidden";},500); 
        }
        else if ((idx=='b2' && idp=='b4')||(idx=='b4' && idp=='b2'))
        {
            count+=1;
            setTimeout(function(){document.getElementById('img2').style.visibility="hidden";document.getElementById('img4').style.visibility="hidden";},500); 
        }
        else
        {
            setTimeout(function(){element.style.visibility="visible";prevElement.style.visibility="visible";},400);   
        }
    }
    if (flag==1)
    {
        idp=idx;
    }
    else{
        idp=null;
    }
    flag=flag*-1;
    if (count==2)
    {
        setTimeout(function(){alert("Congratulations!!");},1500);
    }
}