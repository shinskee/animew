import { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

export default function DynamicModuleLoader({
  children,
  reducers,
  removeAfterUnmount,
}) {
  const dispatch = useDispatch();
  const store = useStore();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    })
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
        store.reducerManager.remove(name);
        dispatch({ type: `@DESTROY ${name} reducer` });
        })
      }
    };
  }, [dispatch, reducers, removeAfterUnmount, store.reducerManager]);

  return <>{children}</>;
}
