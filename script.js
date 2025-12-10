const header = document.getElementById('header')


window.addEventListener('scroll',()=>{
if(window.scrollY>50){
header.classList.add('backdrop-blur-[3px]')
header.classList.add('bg-black/75')
}else{
header.classList.remove('backdrop-blur-[3px]')
header.classList.remove('bg-black/75')
}
})