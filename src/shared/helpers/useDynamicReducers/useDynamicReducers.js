import { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

export const useDynamicReducers = (initialReducers) => {
  const store = useStore();
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(initialReducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    })
  }, [dispatch, initialReducers, store.reducerManager])
}