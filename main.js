var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();

}
recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if(content=="Take my selfie."){
        speak();
    }
    
}
function speak(){
  var  synth=window.speechSynthesis;
    speak_data="taking your selfie in 7 seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(cam);
setTimeout(function(){
    takemyselfie();
   save();
},7000);
}

 





Webcam.set({
    Width:360,
    height:250,
    image_format:"jpeg",
    jpeg_quality:90
});
cam=document.getElementById("camera");











function takemyselfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="myselfie" src="'+data_uri+'">';

    });

}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("myselfie").src;
    link.href=image;
    link.click();

}