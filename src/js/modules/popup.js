function popup(){

    // variables for popup
    let btnPopup = document.getElementById('pop');
    let popUp = document.querySelector(".pop-up");

     // script for popup
  function popups(content){
    const box = document.createElement('div');
    box.style.color ='#F0F0F0';
    popUp.appendChild(box);
    box.innerHTML = `<div> ${content} </div>`;
   
    btnPopup.removeEventListener("click",popups);
  }

  btnPopup.addEventListener('click', function(){
    // block.classList.toggle('pop-up');
    popUp.style.transform =`translateX(0)`; 

  });

    btnPopup.addEventListener("click", popups('info'), {once: true}); 

    document.body.addEventListener('mousedown', function(e){
        if(e.target.closest('.pop-up') === null){
        // popUp.style.display = 'none';
        popUp.style.transform =`translateX(-300%)`; 
        }
    });

    
  // classList.remove
  // window.addEventListener('click', function(e) {
  //   if (!e.target.closest('.pop-up') && !e.target.closest('#pop')){
  //     popUp.style.display = "none";
     
  //     }
  // });

   
    
  }
  
  
  export default popup();
  