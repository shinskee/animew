import { useEffect } from "react";

function useOutClick(onOutsideClick, ref) {

    const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          onOutsideClick();
        }
      }

    useEffect(() => {
        document.addEventListener("click", handleClick)

        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [handleClick])
}

export default useOutClick;