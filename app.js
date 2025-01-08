const questions = document.querySelectorAll(".question");

questions.forEach((que) => {
    const btn = que.querySelector(".question-btn");
    btn.addEventListener("click", () =>{
        questions.forEach((item) => {
            if(item !== que){
                item.classList.remove("show-text")
            }
        })
        que.classList.toggle("show-text")
    })
})