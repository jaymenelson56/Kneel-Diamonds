import { setMetal } from "./TransientState.js"

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    document.addEventListener("change", handleMetalChoice)

    let html = "<h2>Metals</h2>"

    const divStringArray = metals.map(
        (metal) => {
            return `<div>
            <input type='radio' name= 'metal' value='${metal.id}' /> ${metal.metal}
            </div>`
        }
    )
   html += divStringArray.join("")

    return html
}

const handleMetalChoice = (event) => {
    if(event.target.name === "metal") {
        setMetal(parseInt(event.target.value))
    }
}