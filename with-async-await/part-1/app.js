const multipleNums = document.querySelector("#multiple-nums")
const BASEURL = "http://numbersapi.com"

// get data on multiple numbers in a single request
// put all the number facts on the page
async function getMultipleNums() {
    const resp = await axios.get(BASEURL + "/1,2,3,4")
    for (let num in resp.data) {
        const li = document.createElement("li")
        li.innerHTML = resp.data[num]
        multipleNums.appendChild(li)
    }
}

// get 4 facts on your favorite nuumber
// put them all on the page
const favNum = 52
const favNums = document.querySelector("#favorite-num")
const numFacts = 4
async function getFavNumFacts() {
    for (let i = 0; i < 4; i++) {
        const resp = await axios.get(BASEURL + `/${favNum}`)
        const li = document.createElement("li")
        li.innerHTML = resp.data
        favNums.appendChild(li)
    }
}

getMultipleNums()
getFavNumFacts()