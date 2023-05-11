let change = document.getElementById('velu')
let colone = document.getElementsByClassName('col')[0]
let coltwo = document.getElementsByClassName('col')[1]
let body = document.getElementsByName('html')[0]
change.addEventListener('click', () => {
    document.body.addEventListener('mouseover', () => {

        let hello = () => {
            colone.style.backgroundColor = change.value
            coltwo.style.backgroundColor = change.value
        }
        let start = setInterval(hello, 100)

    })
    document.body.addEventListener('mouseenter', () => {
        let hello = () => {
            colone.style.backgroundColor = change.value
            coltwo.style.backgroundColor = change.value
        }
        let start = setInterval(hello, 100)

    })
    document.body.addEventListener('mouseleave', () => {

        let hello = () => {
            colone.style.backgroundColor = change.value
            coltwo.style.backgroundColor = change.value
        }
        let start = setInterval(hello, 100)
    })
    document.body.addEventListener('mousemove', () => {

        let hello = () => {
            colone.style.backgroundColor = change.value
            coltwo.style.backgroundColor = change.value
        }
        let start = setInterval(hello, 100)
    })

})



