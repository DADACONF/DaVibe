var INTERVAL = Math.floor(1000 / 60)
navigator.vibrate =
  navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate

// Test vibration 
navigator.vibrate([500, 500, 500, 500])

setTimeout(function() {
  setInterval(poll, INTERVAL)
}, 2000)

function poll() {
  var pitch = pitcher().pitch

  if (!pitch || pitch > 650) { return }

  navigator.vibrate(INTERVAL)
}
