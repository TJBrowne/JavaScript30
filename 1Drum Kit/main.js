function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);

function moveKey(event) {
  var k = event.keyCode,
    chrId = document.getElementById("test"),
    chr = {
      updown: function() {
        var y = parseInt(getComputedStyle(chrId).top);
        if (k == 38) {
          --y;
        } else if (k == 40) {
          ++y;
        }
        return y;
      },

      leftright: function() {
        var x = parseInt(getComputedStyle(chrId).left);
        if (k == 37) {
          --x;
        } else if (k == 39) {
          ++x;
        }
        return x;
      }
    };

  chrId.style.top = chr.updown() + "px";
  chrId.style.left = chr.leftright() + "px";
}

document.addEventListener("keydown", move);
