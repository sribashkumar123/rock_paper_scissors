const rulesBtn= document.getElementById("rule_btn");
const rulesModal = document.getElementById("rules-modal");
const close= document.getElementById("close");


rulesBtn.addEventListener("click", () => {
  rulesModal.style.display = "block";
});

close.addEventListener("click",()=>
{
    rulesModal.style.display="none";
});
