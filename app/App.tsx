import Portfolio2026_1_86 from "./generated/Portfolio2026_1_86";
import "../styles/visual-ir.css";

const ROOT_FRAME_WIDTH = 1440;
const ROOT_FRAME_HEIGHT = 12550;

export default function App() {
  return (
    <div className="visual-ir-page">
      <div
        className="visual-ir-stage"
        style={{
          width: ROOT_FRAME_WIDTH,
          height: ROOT_FRAME_HEIGHT,
        }}
      >
        <Portfolio2026_1_86 />
      </div>
    </div>
  );
}
