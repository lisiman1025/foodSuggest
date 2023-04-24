import CommentSection from "../../components/comment"
import RestaurantInfo from "../../components/RestaurantInfo"
import Pictures from"../../components/pictures"
import RecommendDish from "../../components/RecommendedDishes;"
import WaterfallGridDemo from "../../components/waterfall-1"
function Details(){
    return(
    <div>
        <div className="pic">
            <Pictures/>
        </div>
        <RestaurantInfo/>
    <div style={{ borderBottom: '2px solid gray',borderTop:'2px solid gray',borderRadius:'10px', paddingBottom: '10px' }}>
        <RecommendDish/>
    </div>
    <div style={{  paddingBottom: '10px' }}>
        <CommentSection/>
    </div>
        <WaterfallGridDemo/>
  </div>
    )
}
export default Details