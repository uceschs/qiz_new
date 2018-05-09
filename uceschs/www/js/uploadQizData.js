
function qizDataUpload() {



  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var module = document.getElementById("module").value;
  var question = question;


  var postString = "name="+name +"&surname="+surname +"&module="+module +"&question="+question;

  alert("Submit successfully");
  // now get the radio button values
  if (document.getElementById("answer_1").checked) {
     postString=postString+"&answer=answer_1";
  }
  if (document.getElementById("answer_2").checked) {
     postString=postString+"&answer=answer_2";
  }
  if (document.getElementById("answer_3").checked) {
     postString=postString+"&answer=answer_3";
  }
  if (document.getElementById("answer_4").checked) {
     postString=postString+"&answer=answer_4";
  }
  
  processData(postString);

  alert("Upload successfully");
}

var client;

function processData(postString) {
   client = new XMLHttpRequest();
   client.open('POST','http://developer.cege.ucl.ac.uk:30296/uploadQizData',true);
   client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   client.onreadystatechange = dataUploaded;  
   client.send(postString);
}
// create the code to wait for the response from the data server, and process the response once it is received
function dataUploaded() {
  // this function listens out for the server to say that the data is ready - i.e. has state 4
  if (client.readyState == 4) {
    // change the DIV to show the response
    document.getElementById("dataUploadResult").innerHTML = client.responseText;
    }
}
