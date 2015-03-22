var INTERVAL = Math.floor(1000 / 60)
navigator.vibrate =
  navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate

setInterval(poll, INTERVAL)

function poll() {
  var pitch = pitcher().pitch

  if (!pitch || pitch > 650) { return }

  navigator.vibrate(INTERVAL)
}
