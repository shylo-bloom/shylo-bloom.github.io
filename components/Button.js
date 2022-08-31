import Splitting from 'splitting';

export const Button = () => {

  Splitting();

var freq = window.document.querySelectorAll("feturbulence");
var displace = window.document.querySelectorAll("fedisplacementmap");
var frames = 0;
var rad = Math.PI / 180;
var bfxstart = 0.0;
var bfystart = 0.0;
var scale = [0, 0];
var scaletoggle = [0, 0];

function freqAnimation() {
  bfx = 0.005;
  bfy = 0.01;
  frames += 4;
  bfx += 0.001 * Math.cos(frames * rad);
  bfy += 0.005 * Math.sin(frames * rad);

  bf = bfx.toString() + " " + bfy.toString();

  displace.forEach((displaceNum, i) => {
    if (scale[i] < 60 && scaletoggle[i] == 1) {
      scale[i] += 2;
    }
    if (scale[i] > 0 && scaletoggle[i] == 0) {
      scale[i] -= 2;
    }
    displaceNum.setAttributeNS(null, "scale", scale[i]);
    freq[i].setAttributeNS(null, "baseFrequency", bf);
  });
  window.requestAnimationFrame(freqAnimation);
}

window.requestAnimationFrame(freqAnimation);

window.document.querySelectorAll("button").forEach((button, i) => {
  button.addEventListener("mouseover", function () {
    scaletoggle[i] = 1;
  });

  button.addEventListener("click", function () {
    window.document.body.classList.add("btn" + i);
    setTimeout(() => {
      document.body.classList.remove("btn" + i);
    }, 2000);
  });

  button.addEventListener("mouseleave", function () {
    scaletoggle[i] = 0;
  });
});



  return (
    <div>
      <div id="container">
        <p>Continue?</p>
        <div class="buttons">
          <div class="btnwrap">
            <button type="button" id="buttonone">
              Confirm
            </button>
            <div>
              <span data-splitting="chars">Confirm</span>
            </div>
          </div>
          <div class="btnwrap">
            <button type="button">Cancel</button>
            <div>
              <span data-splitting="chars">Cancel</span>
            </div>
          </div>
        </div>
      </div>

      <svg id="blob" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="left">
            <feturbulence
              basefrequency="0.000 0.0"
              numoctaves="1"
              result="noise"
              type="fractalNoise"
              seed="13"
            ></feturbulence>
            <fedisplacementmap
              in2="noise"
              in="SourceGraphic"
              scale="46"
            ></fedisplacementmap>
          </filter>
          <filter id="right">
            <feturbulence
              basefrequency="0.000 0.0"
              numoctaves="1"
              result="noise"
              type="fractalNoise"
              seed="10"
            ></feturbulence>
            <fedisplacementmap
              in2="noise"
              in="SourceGraphic"
              scale="46"
            ></fedisplacementmap>
          </filter>
        </defs>
      </svg>
    </div>
  );
};
