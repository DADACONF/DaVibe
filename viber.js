var INTERVAL = Math.floor(1000 / 60)
var VIB_LENGTH = 500 
var CLIFF = 650

// UI
window.onload = function() {
  var crank = document.querySelector('#refractory')
  var cliff = document.querySelector('#threshold')

  crank.value = +VIB_LENGTH
  cliff.value = +CLIFF

  crank.addEventListener('change', function() { VIB_LENGTH = +crank.value })
  cliff.addEventListener('change', function() { CLIFF = +cliff.value })
}

// Business Logix
navigator.vibrate =
  navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate

// Signal vibration presence
navigator.vibrate([500, 500, 500, 500])

setTimeout(poll, 2000)

function poll() {
  var pitch

  while (true) {
    pitch = pitcher().pitch
    if (!pitch || pitch > CLIFF) { continue }

    navigator.vibrate(VIB_LENGTH)
    setTimeout(poll, VIB_LENGTH)
    break
  }
}
