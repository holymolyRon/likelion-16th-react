import Footer from "@/components/Footer";
import S from "./style.module.css";
// import { createElement } from "react";

export default function App() {
  return (
    <div className={S.container}>
      <div data-placeholder />
      <Footer slogan={["완주 이후엔", "스스로 학습이 가능!"]} />

      {/* Vite (with TypeScript) 컴파일 결과 (JSX => JavaScript)
        jsxDEV(Footer, { slogan: ["완주 이후엔", "스스로 학습이 가능!"] }, void 0, false, {
          fileName: "/Users/yamoo9/Desktop/likelion-16th-react/learing-react/02-State-이벤트-핸들링/src/app/index.tsx",
          lineNumber: 9,
          columnNumber: 7
        }, this)
      */}

      {/* {createElement(
        // 컴포넌트 이름 (Component Name)
        Footer,
        // 컴포넌트 속성 (Component Props)
        { slogan: "완주 이후엔 스스로 학습 가능!" },
      )} */}
    </div>
  );
}
