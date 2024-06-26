import { setStyle } from "./TransientState.js"

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    document.addEventListener("change", handleStyleChoice)

    let html = "<h2>Styles</h2>"

   const divStringArray = styles.map(
        (style) => {
            return `<div>
            <input type='radio' name= 'style' value='${style.id}' /> ${style.style}
            </div>`
        }
    )
   html += divStringArray.join("")

    return html
}

const handleStyleChoice = (event) => {
    if(event.target.name === "style") {
        setStyle(parseInt(event.target.value))
    }
}