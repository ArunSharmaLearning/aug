import "./App.css";
import Astronaut_glb from "./assets/Scv_textured_mesh.glb";
// import { ABC } from "./assets/ABC.usdz";

function App() {
  return (
    <div className="abc">
      <model-viewer
        className="test"
        id="hotspot-demo"
        height="500"
        src={Astronaut_glb}
        // ios-src={ABC}
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
