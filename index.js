const noteForm = document.querySelector("#note-form")
const noteList = document.querySelector("#note-list")
const increaseNumForm = document.querySelector("#increase-value-form")
const likeButton = document.querySelector("#like-button")
const dislikeButton = document.querySelector("#dislike-button")
const likes = document.querySelector("#like-count")

noteForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const li = document.createElement('li');
    li.textContent = e.target["new-note"].value;

    noteList.append(li)
})

increaseNumForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let number = parseInt(document.querySelector("#value").textContent)
    number += parseInt(e.target["new-value"].value)
    document.querySelector("#value").textContent = number
})

likeButton.addEventListener("click", ()=>{
    let num = parseInt(likes.textContent)
    num += 1
    likes.textContent = num
})

dislikeButton.addEventListener("click", ()=> {
    if (likes.textContent <= 1) {
        likes.textContent = 0
    } else {
        let num = parseInt(likes.textContent)
        num -= 1
        likes.textContent = num
    }
})

