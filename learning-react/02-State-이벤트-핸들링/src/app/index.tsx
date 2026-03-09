import S from "./style.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "@/components/Image";

export default function App() {
  return (
    <div className={S.container}>
      <Header>
        <h2 className={S.imageWrapper}>
          <Image src="/react.svg" alt="" width={32} height={32} />
          컴포넌트 디자인
        </h2>
      </Header>

      <Footer slogan={"완주 이후엔 스스로 학습이 가능!"} />
    </div>
  );
}
