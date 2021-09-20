const navBtn = document.getElementById('btn')
const navList = document.getElementById('navlist')
const upbtn = document.querySelector('.upbtn')

navBtn.addEventListener('click', show)

function show(){
  navList.classList.toggle('show')
}

window.addEventListener('scroll', ()=>{
  if(scrollY>140){
    upbtn.classList.add('show-upbtn')
  }else if(scrollY==0){
    upbtn.classList.remove('show-upbtn')
  }
  }
)
