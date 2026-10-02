import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// 서버 렌더와 hydration 중에는 false, 클라이언트에서 hydration이 끝난 뒤에는 true를 반환한다.
// window, localStorage 등 브라우저 값에 의존하는 UI를 hydration 불일치 없이 렌더할 때 사용한다.
export function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
