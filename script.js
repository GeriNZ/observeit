var videoId = "video";
var scaleFactor = 0.25;
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

//get timestamp from video
let resEle = document.querySelector(".result");
let BtnEle = document.querySelector(".Btn");
let audioEle = document.querySelector(".audio");

BtnEle.addEventListener("click", () => {
  resEle.innerHTML = "Minutes = " + Math.floor(audioEle.currentTime / 60) + "";
  resEle.innerHTML +=
    " Seconds = " + Math.floor(audioEle.currentTime % 60) + "";
});

function ShowAndHide() {
  var x = document.getElementById("picwrap");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

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
