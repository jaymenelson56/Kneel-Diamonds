import { PlaceOrder } from "./TransientState.js"

const handleSurveyClick = (clickEvent) => {
    if (clickEvent.target.id === "placeorder") {
        PlaceOrder()
    }
}


export const OrderThis = () => {

    document.addEventListener("click", handleSurveyClick)

   return  "<div><button id='placeorder'>Place Order</button></div>"
}

