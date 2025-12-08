import Zdog from "zzz";

const illo = new Zdog.Illustration({
    element: ".zdog-canvas",
    resize: true,
    dragRotate: true,
});

new Zdog.Hemisphere({
    addTo: illo,
    diameter: 200,
    stroke: false,
    color: "#47FF75",
    backface: "#062924",
});

new Zdog.Rect({
  addTo: illo,
  width: 120,
  height: 120,
  stroke: 5,
  color: '#47fff6ff',
});

function animate() {
    illo.rotate.y += 0.003;
    illo.rotate.x += 0.001;
    illo.updateRenderGraph();
    requestAnimationFrame(animate);
}

animate();