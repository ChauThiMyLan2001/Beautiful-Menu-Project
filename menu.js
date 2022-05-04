
    const foodBtns = document.querySelectorAll('.food-menu button')
    const foodList = document.querySelectorAll('.food-list .food-item')

    foodBtns.forEach((btn) => {
        btn.onclick = function() {
        //  remove class="active" nút đang được active
            document.querySelector('.food-menu button.active').classList.remove('active')
        //  thêm class="active" vào nút vừa click
            this.classList.add('active')

        foodList.forEach((item) => {
        //  nếu title = all hoặc title của menu trùng title của ảnh thì hiển thị hình ảnh
            if (btn.getAttribute('title') == 'all' || btn.getAttribute('title') == item.getAttribute('title')) {
                item.classList.remove('hide')
            }
        //  nếu title của menu không trùng với title của ảnh thì ẩn hình đó đi
            else {item.classList.add('hide')}   
            })
        }
    })