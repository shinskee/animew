import { useEffect, useRef } from "react";

function useOutClick(onOutsideClick) {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log('click');
        
        onOutsideClick();
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [ref]);

  return ref;
}

export default useOutClick;