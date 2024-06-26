export const OrderList = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")
    const orders = await response.json()

    

    let orderHTML = "<h2>Custom Jewelry Orders</h2>"
    
    let divString = orders.map(
        (order) => {
            const orderPrice = order.metal.price + order.style.price + order.size.price
            return `<div><section>Order #${order.id} cost $${orderPrice}</section></div>`
        }
    )
    orderHTML += divString.join("")
    return orderHTML
}
