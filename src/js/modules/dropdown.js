function dropdown(){

    const optionMenu = document.querySelector(".dropdown-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".select-text");
   

    // script for dropdown
    selectBtn.addEventListener("click", () =>
        optionMenu.classList.toggle("active")
    );

    options.forEach((option) => {
        option.addEventListener("click", () => {
          let selectedOption = option.querySelector(".option-text").innerText;
          sBtn_text.innerText = selectedOption;
          
          optionMenu.classList.remove("active");
        });
      });

      
      // function redirect(){
			
      //   document.getElementById('iframeID').src="";
      // }

}
export default dropdown();
  