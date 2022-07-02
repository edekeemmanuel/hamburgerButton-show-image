const btn = document.getElementById('btn')
const nav = document.getElementById('nav')

const clickHandler = ()=> {
    btn.classList.toggle('activate'); 
    nav.classList.toggle('activate'); 
     createImage() 
}

function createImage() {
        let airtelImage;
        airtelImage = document.createElement('img');
        airtelImage.setAttribute("src", "airtel.png");
        airtelImage.style.backgroundImage = 'url("airtel.png")';
        airtelImage.style.backgroundRepeat = "no-repeat";
        airtelImage.style.height = "17vw"
        document.body.append(airtelImage);
    }

btn.addEventListener('click', clickHandler)


