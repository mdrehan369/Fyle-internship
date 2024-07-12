$(
    $('#popup').hide(),

    $('#show').click(function () {
        $('#popup').show();
    }),

    $('#close').click(function (e) {
        $('#popup').hide()
    }),

    $('form').submit(function (e) {
        e.preventDefault();
        const form = document.getElementsByTagName('form')[0]
        const formData = new FormData(form)

        $.ajax({
            method: "POST",
            url: "https://getform.io/f/e3854e68-4296-42f3-9dcf-a1a0a7cb20b8",
            crossDomain: true,
            data: formData,
            dataType: "json",
            processData: false,
            contentType: false,
            headers: {
                "Accept": "application/json"
            },
            success: (response) => {
                console.log(response)
                $('#popup').hide();
            }
        });
    }),

    $('.caption').click(function (e) {
        if (this.id == 'first') {
            $('#img').attr('src', 'assets/stock1.jpg');
        } else if (this.id == 'second') {
            $('#img').attr('src', 'assets/image.png');
        } else {
            $('#img').attr('src', 'assets/stock2.jpg');
        }
        $('.caption').removeClass('selected');
        $(this).addClass('selected');
    }),

)

const slider = document.getElementById('innerSlider')
const nav = document.getElementsByClassName('nav')[0];
let page = 0;

setInterval(() => {
    page++;
    if(page == 3) {
        page = 0;
    }
    $('.nav-child').removeClass('active');
    nav.children[page].classList.add('active')
    slider.style.transform = `translateX(-${page * 72}vw)`
}, 3000)

window.onload = () => {

    const innerSlider = document.getElementById('innerSlider')

    for (let i = 0; i < 10; i++) {

        innerSlider.children[i].innerHTML += `
        <div class="hoverCard">
            <img src="assets/icon.svg" alt="icon">
            <h3>WEB DEVELOPMENT</h3>
            <p>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</p>
            <a href="https://www.fylehq.com" target="_blank">
                READ MORE
                <img src="assets/arrow.svg">
            </a>
        </div>
        `
    }

}