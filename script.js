const textareaEl = document.getElementById("textarea");
const remainingCounter = document.getElementById("remaining-counter");
const totalCounter = document.getElementById("total-counter");

textareaEl.addEventListener("keyup", () => {
    updateCounter()
})

function updateCounter() {
    let textNumber = textareaEl.value.length;
    let maxCharacter = textareaEl.getAttribute("maxLength")
    totalCounter.textContent = textNumber;
    remainingCounter.innerText = maxCharacter - textNumber;
}

updateCounter()
