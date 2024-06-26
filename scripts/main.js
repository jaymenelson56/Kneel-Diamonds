import { OrderList } from "./CustomOrderList.js"
import { MetalOptions } from "./MetalOptions.js"
import { OrderThis } from "./PlaceOrder.js"
import { SizeOptions } from "./sizeOptions.js"
import { StyleOptions } from "./styleOptions.js"

const container = document.querySelector("#container")

const render = async () => {
    const metalHTML = await MetalOptions()
    const sizeHTML  = await SizeOptions()
    const styleHTML = await StyleOptions()
    const buttonHTML = await OrderThis()
    const orderListHTML = await OrderList()

    container.innerHTML = `
    <article>
    <h1>Kneel Diamonds</h1>

    <section>
    ${metalHTML}
    </section>

    <section>
    ${sizeHTML}
    </section>

    
    <section>
    ${styleHTML}
    </section>

    <section>
    ${buttonHTML}
    </section>

    <section>
    ${orderListHTML}
    </section>

    </article>
    `
}
document.addEventListener("ListIt", render)

render()