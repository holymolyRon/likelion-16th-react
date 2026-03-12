import S from "./style.module.css";
import { Debugging } from "@/practices";

export default function App() {
  return (
    <div className={S.container}>
      <Debugging />
    </div>
  );
}
