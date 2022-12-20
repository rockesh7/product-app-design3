import 'font-awesome/css/font-awesome.min.css'
import './StarRating.css'
const StarRating  = (props) =>{
    return (
        <div className="crop" style={{width:props.rating*80/5}}>
            <div style={{width:80}}>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>

            </div>

        </div>
    )
}
export default StarRating