import { Tldraw } from "tldraw";
import 'tldraw/tldraw.css'
export default function Sidebox() {
  return (
    <>
      <div className="w-[60vw] rounded-md mt-4  bg-gray-300">
        <div className="w-full h-full" style={{ position: "relative", inset: 0 }}>
          <Tldraw />
        </div>
      </div>
    </>
  );
}
