function tab(){
    
    let display='block';
    const header = document.querySelector('.tab_header'),
            tab = document.querySelectorAll('.tab_block'),
            content = document.querySelectorAll('.tab_content');

        function hideTabcontent() {
            content.forEach(item => {
                item.style.display = 'none';
            });
        }

        function showTabContent(index = 0) {
            content[index].style.display = display;
        }

        hideTabcontent();
        showTabContent();

        header.addEventListener('click', (event) => {
            const target = event.target;
            
            if(target && (target.classList.contains('tab_block'.replace(/\./,"")) || target.parentNode.classList.contains('tab_block'.replace(/\./,"")))){
                 tab.forEach((item, index) => {
                     if(target == item || target.parentNode == item) {
                         hideTabcontent();
                         showTabContent(index);
                     }
                });

            }
        });
}
export default tab();