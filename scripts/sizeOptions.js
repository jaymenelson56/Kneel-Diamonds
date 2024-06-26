import { setSize } from "./TransientState.js"

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    document.addEventListener("change", handleSizeChoice)

    let html = "<h2>Sizes</h2>"

      const divStringArray = sizes.map(
        (size) => {
            return `<div>
            <input type='radio' name= 'size' value='${size.id}' /> ${size.carets}
            </div>`
        }
    )
   html += divStringArray.join("")

    return html

}
const handleSizeChoice = (event) => {
    if(event.target.name === "size") {
        setSize(parseInt(event.target.value))
    }
}