const accordion = document.querySelectorAll(".flex-container");

console.log("INNNN", accordion.length)

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        const answer = this.nextElementSibling;  // nextElementSibling -> returns the next element in the same tree level
        answer.style.display = answer.style.display === "none" ? "block" : "none";
      });
    
}