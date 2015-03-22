var INTERVAL = Math.floor(1000 / 60)
var VIB_LENGTH = 250
var pollInterval = 0
navigator.vibrate =
  navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate

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
