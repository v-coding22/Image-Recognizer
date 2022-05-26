

Webcam.set({

    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
 
 })
 
   camera = document.getElementById("camera");


 
 function take_snapshot()
 {
     Webcam.snap(function(data_uri) {
        
         document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+ data_uri +'">';
     })
 }

 console.log('ml5 version:', ml5.version);

 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/n2MGtuRAw/model.json',modelLoaded);