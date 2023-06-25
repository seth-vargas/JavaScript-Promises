const randomCardDeckURL = "https://deckofcardsapi.com/api/deck/new/draw/?count=1"
const shuffledCardDeckURL = "https://deckofcardsapi.com/api/deck/new/shuffle"

const cards = document.querySelector("#cards")
const btn = document.querySelector("button")
let deckID = ""

btn.addEventListener("click", getCard)

async function getCardFromRandomDeck() {
    const resp = await axios.get(randomCardDeckURL)
    const data = resp.data.cards[0]
    console.log(`${data.value} of ${data.suit}`)
}

async function getShuffledDeck() {
    const resp = await axios.get(shuffledCardDeckURL)
    deckID = resp.data.deck_id
}

async function getCard() {
    try {
        const resp = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
        const data = resp.data.cards[0]
        const img = document.createElement("img")
        img.src = data.image
        img.style = "position: absolute;"
        img.style.transform = `rotate(${Math.floor(Math.random() * 20)}deg)`
        cards.appendChild(img)
    } catch (error) {
        btn.disabled = true
    }
}

getCardFromRandomDeck()
getShuffledDeck()