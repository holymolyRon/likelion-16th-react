import S from "./style.module.css";
import { ReferenceCheck } from "@/components";

export default function App() {
  return (
    <div className={S.container}>
      <ReferenceCheck />
    </div>
  );
}
