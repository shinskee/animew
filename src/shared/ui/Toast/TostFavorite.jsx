
import transition from "../../../app/transition";

function TostFavorite({children}) {
    return ( 
        <div>
            {children}
        </div>
     );
}

export default transition(TostFavorite);