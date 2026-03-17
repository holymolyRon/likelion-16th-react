import S from "./style.module.css";
import { TodoSearch } from "@/practices";

export default function App() {
  return (
    <div className={S.container}>
      <TodoSearch />
    </div>
  );
}
