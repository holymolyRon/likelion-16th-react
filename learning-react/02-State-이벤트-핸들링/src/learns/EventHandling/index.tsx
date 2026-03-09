import S from "./style.module.css";
import EventHandler from "./EventHandler";

// 이름으로 내보내기 (named export)
// - 하나 이상 여러 개를 내보낼 때
export function EventHandling() {
  return (
    <Container className={S.container}>
      <EventHandler />
    </Container>
  );
}

// --------------------------------------------------------------------------

interface ContainerProps {
  className: string;
  children?: React.ReactNode;
}

export function Container({ className, children }: ContainerProps) {
  return <div className={className}>{children}</div>;
}

// 기본 내보내기 (default export)
// - 하나만 모듈을 내보낼 때
export default EventHandling;
