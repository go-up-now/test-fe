
// slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    // slideshow header
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // ---- slidshow customer
    let j;
    let slides1 = document.getElementsByClassName("mySlides1");
    let dots1 = document.getElementsByClassName("dot1");
    if (n > slides1.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides1.length }
    for (j = 0; j < slides1.length; j++) {
        slides1[j].style.display = "none";
    }
    for (j = 0; j < dots1.length; j++) {
        dots1[j].className = dots1[j].className.replace(" active", "");
    }
    slides1[slideIndex - 1].style.display = "block";
    dots1[slideIndex - 1].className += " active";
}
setInterval(plusSlides, 5000, 1);

// --------------------------------------------------
// carousel 1
let currentIndex = 0; // Vị trí hiện tại của carousel
const thumbnailsArray = Array.from(document.querySelectorAll('.image-thumbnails .thumbnails-container .thumbnail'));
const totalThumbnails = thumbnailsArray.length; // Số lượng hình ảnh trong carousel
const visibleThumbnails = 8; // Số lượng hình ảnh hiển thị mỗi lần

// Hàm để di chuyển carousel
function moveCarousel() {
    const offset = -(currentIndex * (thumbnailsArray[0].offsetWidth + 40)); // 40px là khoảng cách giữa các hình

    // Di chuyển .image-thumbnails để hiển thị các hình ảnh tương ứng
    document.querySelector('.thumbnails-container').style.transform = `translateX(${offset}px)`;

    // Loại bỏ lớp "active" khỏi tất cả hình ảnh
    document.querySelectorAll('.image').forEach(image => {
        image.className = image.className.replace(" active1", "");
    });

    // Thêm lớp "active" vào hình ảnh hiện tại
    const activeThumbnail = thumbnailsArray[currentIndex].querySelector('.image');
    activeThumbnail.className += " active1";

    // Cập nhật chỉ số hình ảnh hiện tại
    currentIndex = (currentIndex + 1) % totalThumbnails;
}

setInterval(moveCarousel, 3000);

// --------------------------------------------
// carousel 2
let currentIndex1 = 0; // Vị trí hiện tại của carousel
const partnersArray = Array.from(document.querySelectorAll('.partners .partner-logos .image'));
const totalPartners = thumbnailsArray.length; // Số lượng hình ảnh trong carousel
const visiblePartners = 7; // Số lượng hình ảnh hiển thị mỗi lần

// Hàm để di chuyển carousel
function moveCarousel1() {
    const offset = -(currentIndex1 * (partnersArray[0].offsetWidth + 186)); // 40px là khoảng cách giữa các hình

    // Di chuyển .image-thumbnails để hiển thị các hình ảnh tương ứng
    document.querySelector('.partner-logos').style.transform = `translateX(${offset}px)`;

    // Cập nhật chỉ số hình ảnh hiện tại
    currentIndex1 = (currentIndex1 + 1) % totalPartners;
}

setInterval(moveCarousel1, 3000);

// ----------------------------------

// Lấy phần tử nút và navbar (toggle)
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

// Thêm sự kiện click để hiển thị/ẩn menu
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});