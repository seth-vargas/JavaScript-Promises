const randomCardDeckURL = "https://deckofcardsapi.com/api/deck/new/draw/?count=1"
const shuffledCardDeckURL = "https://deckofcardsapi.com/api/deck/new/shuffle"

const cards = document.querySelector("#cards")
const btn = document.querySelector("button")

btn.addEventListener("click", getCard)

axios.get(randomCardDeckURL)
    .then(resp => {
        const data = resp.data.cards[0]
        console.log(`${data.value} of ${data.suit}`)
    })

let deckID = ""

axios.get(shuffledCardDeckURL)
    .then(resp => {
        deckID = resp.data.deck_id
    })

function getCard() {
    axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
        .then(resp => {
            console.log(resp.data)
            const data = resp.data.cards[0]
            const img = document.createElement("img")
            img.src = data.image
            img.style = "position: absolute;"
            img.style.transform = `rotate(${Math.floor(Math.random() * 20)}deg)`
            cards.appendChild(img)
        })
        .catch(error => {
            btn.disabled = true
        })
}