$(function() { 
	var config = {
    apiKey: "AIzaSyDfMgBHXpGNdBmLjF-0wIDmxiD189HSmUA",
    authDomain: "tstanes-905a0.firebaseapp.com",
    databaseURL: "https://tstanes-905a0.firebaseio.com",
    projectId: "tstanes-905a0",
    storageBucket: "tstanes-905a0.appspot.com",
    messagingSenderId: "844284728080"
  };
  firebase.initializeApp(config);
var rRef=firebase.database().ref();
  rRef.on('value', gotUserData);
   function gotUserData(snapshot) {
   snapshot.forEach(userSnapshot => {
   var k = userSnapshot.key;
   var di = userSnapshot.val().doif;
   var dw= userSnapshot.val().doiw;
   var timec=userSnapshot.val().tc;
   var pla=userSnapshot.val().place;
var nd=userSnapshot.val().namead;
var vnum= userSnapshot.val().vehicle;
var d2=userSnapshot.val().commodity;
var d1=userSnapshot.val().invoice;
var d3=userSnapshot.val().quantity;
var d4=userSnapshot.val().valuef;
var d5=userSnapshot.val().valuew;
var d21=userSnapshot.val().commodity1;
var d11=userSnapshot.val().invoice1;
var d31=userSnapshot.val().quantity1;
var d41=userSnapshot.val().valuef1;
var d51=userSnapshot.val().valuew1;
var d22=userSnapshot.val().commodity2;
var d12=userSnapshot.val().invoice2;
var d32=userSnapshot.val().quantity2;
var d42=userSnapshot.val().valuef2;
var d52=userSnapshot.val().valuew2;
$('#di').val(di);
$('#dw').val(dw);
$('#timec').val(timec);
$('#pla').val(pla);
$('#nd').val(nd);
$('#vnum').val(vnum);
$('#d1').val(d1);
$('#d2').val(d2);
$('#d3').val(d3);
$('#d4').val(d4);
$('#d5').val(d5);
$('#d11').val(d11);
$('#d21').val(d21);
$('#d31').val(d31);
$('#d41').val(d41);
$('#d51').val(d51);
$('#d12').val(d12);
$('#d22').val(d22);
$('#d32').val(d32);
$('#d42').val(d42);
$('#d52').val(d52);
            console.log(di,dw,timec,pla,nd,vnum);
        });
}

})

