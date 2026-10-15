var repIcon = document.querySelector('.repeat')

function handleRepeat() {

    if (music.loop == true) {

        music.loop = false

        repIcon.classList.toggle('active')

    }

    else {

        music.loop = true

        repIcon.classList.toggle('active')

    }

}