  var config = {
    apiKey: "AIzaSyDfMgBHXpGNdBmLjF-0wIDmxiD189HSmUA",
    authDomain: "tstanes-905a0.firebaseapp.com",
    databaseURL: "https://tstanes-905a0.firebaseio.com",
    projectId: "tstanes-905a0",
    storageBucket: "tstanes-905a0.appspot.com",
    messagingSenderId: "844284728080"
  };
  firebase.initializeApp(config);
var data=[];
var rootRef=firebase.database().ref();
$('#newChallan').submit(function(event) {
  $('input[type=text]').each(function() {
    if (this.value != '') {
  var $form = $(this);
  console.log("Submit to Firebase");
  var doif= $('#di1').val();
  var doiw=$('#di2').val();
  var tc=$('#tc').val();
  var place=$('#pl').val();
  var commodity= $('#ic').val();
  var invoice= $('#inn').val();
  var quantity= $('#q').val();
  var valuef= $('#vocf').val();
  var valuew= $('#vocw').val();
  var commodity1= $('#ic1').val();
  var invoice1= $('#inn1').val();
  var quantity1= $('#q1').val();
  var valuef1= $('#vocf1').val();
  var valuew1= $('#vocw1').val();
  var commodity2= $('#ic2').val();
  var invoice2= $('#inn2').val();
  var quantity2= $('#q2').val();
  var valuef2= $('#vocf2').val();
  var valuew2= $('#vocw2').val();
  var namead= $('#na').val();
  var vehicle= $('#vnu').val();
  var newActivity={"doif" : doif,"doiw": doiw,"tc": tc,"place": place,"commodity": commodity,"invoice": invoice,
  "quantity": quantity,"valuef": valuef,"valuew": valuew,"commodity1": commodity1,"invoice1": invoice1,"quantity1": quantity1,
  "valuef1": valuef1,"valuew1": valuew1,"commodity2": commodity2,"invoice2": invoice2,"quantity2": quantity2,
  "valuef2": valuef2,"valuew2": valuew2,"namead": namead,"vehicle": vehicle};
  event.preventDefault();
  data.push(newActivity);
  console.log(data);
  rootRef.set(data, function(err){
      if(err){
        alert("Data no go");
      }
      else
      {
        alert("Data SUBMITTED,PLEASE REFRESH THE PAGE")
      }
    });
  return false;
}
else{

        alert('theres an empty input');
        return false
        }})

})
function click() {
  window.location.reload(true);
}

     


  
