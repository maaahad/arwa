import React, { MutableRefObject, ForwardedRef } from "react";

export const getComponentRef =
  <T>(ref: MutableRefObject<T>, forwardedRef: ForwardedRef<T>) =>
  (el: T) => {
    ref.current = el;

    if (typeof forwardedRef === "function") {
      forwardedRef(ref.current);
    } else if (forwardedRef) forwardedRef.current = ref.current;
  };
