function showSlides() {
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // เปลี่ยนรูปทุก 3 วินาที
}
