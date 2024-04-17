import "./App.css";
import Astronaut_glb from "./assets/Astronaut.glb";
// import Astronaut_usdz from "./assets/Astronaut.usdz";

function App() {
  return (
    <div className="abc">
      <model-viewer
        className="test"
        id="hotspot-demo"
        height="500"
        src={Astronaut_glb}
        // ios-src={Astronaut_usdz}
        alt="A 3D model of an astronaut"
        ar
        auto-rotate
        camera-controls
        seamless-poster
        shadow-intensity="1"
      ></model-viewer>

      <h1>USDZ/GLB File Testing</h1>
    </div>
  );
}

export default App;
