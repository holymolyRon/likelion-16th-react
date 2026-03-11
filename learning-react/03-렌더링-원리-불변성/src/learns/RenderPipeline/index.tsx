import { useEffect, useState } from "react";
import S from "./style.module.css";

// React 렌더 파이프라인(Render Pipeline)
// 1. 트리거(trigger) -> 2. 렌더(render) -> 3. 커밋(commit)

// 리액트 스토어(Store)
// orderCount = 0
// [1] RenderPipeline 컴포넌트 실행 <- orderCount 스냅샷 (0) 불변(변경 ❌)
// orderCount = 1 (리액트가 상태 변경)
// [2] RenderPipeline 컴포넌트 실행 <- orderCount 스냅샷 (1) 불변(변경 ❌)

// 개발자 렌더 트리거(render trigger) nextOrderCount = 1

export default function RenderPipeline() {
  // 상태 선언
  const [orderCount, setOrderCount] = useState(0);

  // 2. 렌더(Render)
  //    트리거된 이후, 상태 업데이트 하고나서 컴포넌트를 다시 실행 (re-render)
  console.log(
    `[Render] 리액트 주방에서 주문받은 요리(주문 번호: ${orderCount}) 중...`,
  );

  // 상태 업데이트 로직이 포함된 핸들러 작성
  const handleOrder = () => {
    // 1. 트리거(Trigger)
    //    리액트에게 상태 업데이트 요청
    setOrderCount((oc) => oc + 1);
    console.log("[Trigger] 리액트 주방에 주문하기");
    // const nextOrderCount = orderCount + 1
    // setOrderCount(nextOrderCount)
  };

  // 3. 커밋(Commit)
  //    컴포넌트 렌더 결과(JSX 반환 = 리액트 DOM 트리(Tree) 재구성) -> 실제 DOM 반영
  useEffect(() => {
    console.log("[Commit] 실제 DOM에 반영해 화면을 업데이트하기");
  });

  return (
    <section className={S.container}>
      <h2 className={S.title}>리액트 주방 (파이프라인)</h2>

      <div className={S.display}>
        <p className={S.text}>
          현재 주문 번호: <strong>{orderCount}</strong>
        </p>
      </div>

      <button type="button" className={S.button} onClick={handleOrder}>
        [Trigger] 새 요리 주문하기
      </button>
    </section>
  );
}
