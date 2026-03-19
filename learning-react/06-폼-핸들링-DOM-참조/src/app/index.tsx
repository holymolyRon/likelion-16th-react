import S from "./style.module.css";
import FileUpload from "@/components/FileUpload/FileUpload";

export default function App() {
  return (
    <div className={S.container}>
      <FileUpload />
    </div>
  );
}
