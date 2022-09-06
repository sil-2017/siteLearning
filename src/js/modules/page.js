function page() {

    let slideIndex = 1;

    const items = document.querySelectorAll('.present-slider-items');

        function showSlides(n) {
            if(n > items.length) {
                slideIndex = 1;
            }
            if(n < 1){
                slideIndex = items.length;
            }
            items.forEach(item => {
                item.classList.add("animated");
                item.style.display = "none";
            });

            items[slideIndex - 1].style.display = 'block';
        }

        showSlides(slideIndex);

        function plusSlides(n){
            showSlides(slideIndex += n);
        }

        try {
            const prevBtn = document.querySelector('.main-prev-btn'),
            nextBtn = document.querySelector('.main-next-btn');
            prevBtn.addEventListener('click', () => {
                plusSlides(-1);
                items[slideIndex - 1].classList.remove('animated');
                items[slideIndex - 1].classList.add('animated');
            });
            nextBtn.addEventListener('click',() => {
                plusSlides(1);
                items[slideIndex - 1].classList.remove('animated');
                items[slideIndex - 1].classList.add('animated');
            });
        }catch(e){}

};

export default page();