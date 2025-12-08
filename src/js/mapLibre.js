import maplibregl from "https://esm.sh/maplibre-gl@5.13.0";

const carte = new maplibregl.Map({
  container: "carte",
  style: "https://api.maptiler.com/maps/019af986-7504-7f70-93cf-fa8e43a07dcc/style.json?key=jP16TNNwnIBXYLtkKGd8",
  center: [139.7716111, 35.6272883],
  zoom: 12,
  attributionControl: false,
  pitch: 40,
});

let secondsPerRevolution = 200;
let startTime = null;
function rotateCamera(timestamp) {
  if (!startTime) startTime = timestamp;
  const elapsedSeconds = (timestamp - startTime) / 1000;
  const bearing = (elapsedSeconds / secondsPerRevolution) * 360;
  carte.setBearing(bearing % 360);
  requestAnimationFrame(rotateCamera);
}
rotateCamera(0);