let userArr=[
    {
        userid:'asdfasd',
      username:'Maciek', 
      usercity:'Zabrze',
      userage:'23',
    },
    {
        userid:'hfgdssdf',
      username:'Kasia', 
      usercity:'Gorzów Wielkopolski',
      userage:'68',
    },
    {
        userid:'werywe',
      username:'Andrzej', 
      usercity:'Sosnowiec',
      userage:'12',
    },
    

    {
        userid:'asdfasd',
      username:'Urszula', 
      usercity:'Gliwice',
      userage:'41',
    },
    {
        userid:'asdfasd',
      username:'Grzegorz', 
      usercity:'Rudziniec',
      userage:'17',
    }

 ]
const username=document.querySelector('#Name');
    const usercity=document.querySelector('#City');
    const userage=document.querySelector('#Age');
    const addbtn=document.querySelector('#btnAdd');
    const list=document.querySelector('.list-group');
    
addbtn.addEventListener('click',function(e){
    let nameuser=username.value;
    let ageuser=userage.value;
    let cityuser=usercity.value;

let user={
    username: nameuser,
    userage: ageuser,
    usercity: cityuser,
}
list.innerHTML='';
userArr.unshift(user)


userArr.forEach(element=>{
    const li=document.createElement("li")
    const btn=document.createElement("button")
    
    
    li.innerHTML=`<span><strong> ${element.username}</strong> lat <strong> ${element.userage} </strong> z miasta <strong> ${element.usercity} </strong></span>`
    li.append(btn)
    li.classList.add("list-group-item")
    btn.innerHTML='X'
    btn.classList.add("btn","btn-outline-danger")
    list.append(li)
    
    
    })


})















