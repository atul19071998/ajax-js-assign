//js starts here.
let i=0;//declare a variable
let x;//declare another variable
displayCD(i);//declare a function name.
//declare a function inside a function we request to server in the form of xml.
function displayCD(){
    let xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (this.readyState==4 && this.status==200){//use readystatus of response is finished and ready to work& OK.
            Myfunction(this,i);//create a function
        }
    
    };
    xmlhttp.open("GET","fd_session.xml",true);//use a fetch method inside link the xml file
    xmlhttp.send();//use a fetch method
}
Myfunction=(xml,i) =>{
    let xmlDoc = xml.responseXML;
    x = xmlDoc.getElementsByTagName("CD");///by using getElementsByTagName call a artist name,year,title.
    document.getElementById("ShowCD").innerHTML ="Artist :" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "<br>Title: " +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "<br>Year: " + 
    x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}
//declare a next by arrow functions.
let next=()=> {
    if (i < x.length-1) {
      i++;
      displayCD(i);
      }
    }
    //declare a next by previous functions.
    let previous =()=> {
    if (i > 0) {
      i--;
      displayCD(i);
      }
    }
    //js ends here.