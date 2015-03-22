var INTERVAL = Math.floor(1000 / 60)
var VIB_LENGTH = 500 

// UI


// Business Logix
var pollInterval = 0

navigator.vibrate =
  navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate

window.onload = function() {
  var crank = document.querySelector('#refractory')

  crank.value = +VIB_LENGTH

  crank.addEventListener('change', function() { VIB_LENGTH = +crank.value })
}

// Signal vibration presence
navigator.vibrate([500, 500, 500, 500])

setTimeout(function() {
  var pollInterval = setInterval(poll, INTERVAL)
}, 2000)

function poll() {
  var pitch = pitcher().pitch

  if (!pitch || pitch > 650) {
    // Resume polling
    if (!pollInterval) { pollInterval = setInterval(poll, INTERVAL) }

    return
  }

  clearInterval(pollInterval)

  navigator.vibrate(VIB_LENGTH)
  setTimeout(poll, VIB_LENGTH)
}
