// header

window.onscroll = function() { // hàm này bắt sự kiện cuộn trang của user, khi user cuộn trang thì hàm này sẽ được thực thi.

    // Nếu cuộn trang xuống dưới cách top hơn 100px thì sẽ thực hiện câu lệnh ở dòng số 7
    if(window.scrollY > 100){

        // Trỏ đến thẻ có id là header, mình đã nói ở trên, sau đó thêm vào thẻ này 1 class là header-scroll
        document.getElementById('header').classList.add('header-scroll');
    }else {

        // Nếu cuộn trang lên trên cách top nhỏ hơn 100px thì sẽ thực hiện câu lệnh này
        //Lệnh này sẽ trỏ đến thẻ header và xóa class header-scroll đi
        document.getElementById('header').classList.remove('header-scroll');
    }
};

// caí tương tự với cái ở trên ha, mình sẽ trỏ đến cái thẻ có id plan__month và thêm vào thẻ plan__title class plan-month đồng thời xóa class plan-year đi
document.getElementById('plan__month').addEventListener('click', function(){
    document.getElementById('plan__title').classList.add('plan-month');
    document.getElementById('plan__title').classList.remove('plan-year');
})


// caí tương tự với cái ở trên ha, mình sẽ trỏ đến cái thẻ có id plan__year và thêm vào thẻ plan__title class plan-year đồng thời xóa class plan-month đi
// ngược lại với cái ở trên ha
document.getElementById('plan__year').addEventListener('click', function(){
    document.getElementById('plan__title').classList.add('plan-year');
    document.getElementById('plan__title').classList.remove('plan-month');
})
