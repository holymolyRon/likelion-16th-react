import S from "./style.module.css";
import { StateInitialization } from "@/practices";

export default function App() {
  return (
    <div className={S.container}>
      <StateInitialization />
    </div>
  );
}
