
const card = document.querySelector(".card" );
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officia modi blanditiis similique numquam fugiat quibusdam, dolores accusantium velit voluptates voluptatibus quo veniam? Repellat iusto eligendi adipisci voluptas dolores odit!"

const textBlock = document.createElement("p");
textBlock.textContent = text;
card.insertAdjacentElement("beforeend", textBlock)
// створили кнопку
const btn = document.createElement("p");
 btn.textContent = "load less-->";
 btn.classList.add("loadBtn")
 card.insertAdjacentElement("beforeend", btn)
console.dir(textBlock);

btn.addEventListener("click", () => {
if (btn.textContent === "load less-->"){
textBlock.textContent = text;
btn.textContent = "<--Load more";
}else {
    textBlock.textContent = shortText(text);
    btn.textContent = "load less-->"
}
})



function shortText (value){
const maxLength = 120;
console.log(value.Length);
if (value.Length <= maxLength ){
    return value;
}
const shortedText = value.slice(0, maxLength - 3) + "...";
return shortedText;
}

shortText(text);