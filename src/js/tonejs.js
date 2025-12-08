import * as Tone from "tone.js";
import { ToneVisualizer } from "tone-visualizer";

const player = new Tone.Player("assets/audio/suspense-cyberpunk-375986.mp3").toDestination();

document.querySelector("body")?.addEventListener("click", async () => {
	await Tone.start();

  Tone.loaded().then(() => {
    player.start();
  });

  const viz = new ToneVisualizer('.visualizer', player, {Tone});
});