const images = document.querySelectorAll('.slider__img')
const controlls = document.querySelectorAll('.controlls')
let imageIndex = 0

function show(index){
    images[imageIndex].classList.remove('active')
    images[index].classList.add('active')
    imageIndex = index
}

controlls.forEach((e) =>{
    e.addEventListener('click' , () => {
    if(event.target.classList.contains('prev')) {
        let index = imageIndex - 1

        if(index < 0){
            index = images.length - 1
        }
        show(index)
    } else if (event.target.classList.contains('next'))
    {
        let index = imageIndex + 1
        if (index >= images.length){
            index = 0
        }
        show(index)
    }
})
})

show(imageIndex)


let projects = document.querySelector('.projects')

let projArr = []

class project{
    constructor(name , image ){
        this.name = name
        this.image = image
}
     tohtml(){
        return ` <div class="project">
                    <h2 class="project__name">${this.name}</h2>
                    <img src="${this.image}" class="project__img">
                 </div>`
    }
}
projArr.push(new project('MYRZHAKIP DULATOVA' , '/images/md.jpeg'))
projArr.push(new project('TANDAU' , '/images/tandau.jpeg'))
projArr.push(new project('ZHANA ALTAY' , '/images/zhana-altay.jpeg'))
projArr.push(new project('ALTYN' , '/images/altyn.jpeg'))

for(i = 0 ; i < projArr.length ; i++ ){
    projects.innerHTML += projArr[i].tohtml()
}