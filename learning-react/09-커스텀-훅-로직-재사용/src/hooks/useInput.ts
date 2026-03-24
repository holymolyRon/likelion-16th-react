import { useCallback, useState } from "react";

export function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const reset = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  // 어떤 모양으로 내보낼까?
  // - 배열? [] 순서가 중요한 상태 값 ✅
  // - 객체? {} 객체의 키가 중요한 상태 값

  // [props, methods]
  return [{ value, onChange }, { reset }] as const;
}
