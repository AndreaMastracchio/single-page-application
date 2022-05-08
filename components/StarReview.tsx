/* Style/Icon */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faStar
} from "@fortawesome/free-solid-svg-icons";

const StarReview = ( { index } ) => {

    let review_star = []
    for(let i=0;i<index;i++) {
        review_star.push(
            <FontAwesomeIcon
                key={i}
                icon={faStar}
                style={{ fontSize: 20, color: "darkslategray" }}
            />
        )
    }    

    return (
        <>
            {
                review_star
            }
        </>
    )
}

export default StarReview