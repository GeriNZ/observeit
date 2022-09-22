// Check if user wants to reload the page
window.onbeforeunload = function () {    
  return 'Have you saved all of your data?';
 }

//----------------------------------------------------------------
// create and download main csv file

  //csv download file
  var today = new Date();
  var date =
    today.getDate() +
    "/" +
    (today.getMonth() + 1) +
    "/" +
    today.getFullYear();

  document.getElementById("currentDate").value = date;
  let saveFile = () => {
    // Get the data from each element on the form.
    
    const date = document.getElementById("currentDate");
    const appearance = document.getElementById("appearance");
    const verbal = document.getElementById("verbal");
    const physical = document.getElementById("physical");
    const title = document.getElementById("title");
    const space = document.getElementById("space");
    const traffic = document.getElementById("traffic");
    const people = document.getElementById("people");

    // This variable stores all the data.
    let data =
      //next two lines as 'header title'
      "Title" +
      " , " +
      title.value +
      //r creates new row, comma to separate for csv
      " \r  " +
      "Date" +
      " , " +
      date.value +
      " \r  " +
      "Appearance" +
      " , " +
      appearance.value +
      " \r  " +
      "Verbal behaviour" +
      " , " +
      verbal.value +
      " \r  " +
      "Physical behaviour" +
      " , " +
      physical.value +
      " \r  " +
      "Personal space" +
      " , " +
      space.value +
      " \r  " +
      "Human traffic" +
      " , " +
      traffic.value +
      " \r  " +
      "People who stand out" +
      " , " +
      people.value;
      

    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: "text/csv" });
    const sFileName = "observationData.csv"; // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
      newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none";
      document.body.appendChild(newLink);
    }

    newLink.click();
  };

//--------------------------------------------------------




var videoId = "video1";
var scaleFactor = 0.75;
var snapshots = [];

/**
 * Captures a image frame from the provided video element.
 *
 * @param {Video} video HTML5 video element from where the image frame will be captured.
 * @param {Number} scaleFactor Factor to scale the canvas element that will be return. This is an optional parameter.
 *
 * @return {Canvas}
 */
function capture(video, scaleFactor) {
  if (scaleFactor == null) {
    scaleFactor = 1;
  }
  var w = video.videoWidth * scaleFactor;
  var h = video.videoHeight * scaleFactor;
  var canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, w, h);
  return canvas;
}

/**
 * Invokes the <code>capture</code> function and attaches the canvas element to the DOM.
 */
function shoot() {
  var video = document.getElementById(videoId);
  var output = document.getElementById("output");
  var canvas = capture(video, scaleFactor);
  canvas.onclick = function () {
    window.open(this.toDataURL(image / jpg));
  };
  snapshots.unshift(canvas);
  output.innerHTML = "";
  for (var i = 0; i < 1; i++) {
    output.appendChild(snapshots[i]);
  }
}

(function () {
  var captureit = document.getElementById("cit");
  captureit.click();
})();


//------------------------------------------------------------
//get timestamp from video
let resEle = document.querySelector(".result");
let BtnEle = document.querySelector(".Btn");
let audioEle = document.querySelector(".audio");
let stamp = document.querySelector(".stamp");

BtnEle.addEventListener("click", () => {
  resEle.innerHTML = "Minutes = " + Math.floor(audioEle.currentTime / 60) + "";
  resEle.innerHTML +=
    " Seconds = " + Math.floor(audioEle.currentTime % 60) + "";

});


const list = document.getElementById("list");

function setText(e){
  e.innerHTML = resEle.innerHTML;


   }

//-----------------------------------------------------------
//show or hide the div picwrap
function ShowAndHide() {
  let x = document.getElementById("picwrap");

  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//-----------------------------------------------------------

//textarea download for observationNotes in plain text
function download(filename, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Start file download.
document.getElementById("dwn-btn").addEventListener(
  "click",
  function () {
    // Generate download of observationNotes.txt file with some content
    var text = document.getElementById("text-val").value;
    var filename = "observationNotes.txt";

    download(filename, text);
  },
  false
);


//------------------------------------------------------------

// upload video file
let uploadButton = document.getElementById("upload-button");
let chosenVideo = document.getElementById("chosenVideo");
let fileName = document.getElementById("file-name");

uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        chosenVideo.setAttribute("src",reader.result);
    }
    fileName.textContent = uploadButton.files[0].name;
}


//video 2 screenshots

var videoId1 = "chosenVideo";
var scaleFactor = 0.25;
var snapshots = [];

function capture1(video, scaleFactor) {
    if (scaleFactor == null) {
      scaleFactor = 1;
    }
    var w = video.videoWidth * scaleFactor;
    var h = video.videoHeight * scaleFactor;
    var canvas = document.createElement("canvas1");
    canvas.width = w;
    canvas.height = h;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, w, h);
    return canvas;
  }
  
  /**
   * Invokes the <code>capture</code> function and attaches the canvas element to the DOM.
   */
  function shoot1() {
    var video = document.getElementById(videoId1);
    var output1 = document.getElementById("output1");
    var canvas = capture(video, scaleFactor);
    canvas.onclick = function () {
      window.open(this.toDataURL(image / jpg));
    };
    snapshots.unshift(canvas);
    output.innerHTML = "";
    for (var i = 0; i < 1; i++) {
      output1.appendChild(snapshots[i]);
    }
  }
  
  (function () {
    var captureit = document.getElementById("cit1");
    captureit.click();
  })();

//------------------------------------------------------------

// count characters in textfield
function countChars(countfrom,displayto) {
  var len = document.getElementById(countfrom).value.length;
  document.getElementById(displayto).innerHTML = len;
}


