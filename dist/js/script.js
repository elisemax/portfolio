const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeMenu = document.querySelector('.menu__close'),
    sidePanel = document.querySelector('.sidepanel'),
    sidePanelDivider = document.querySelector('.sidepanel__divider');
const sidePanelLink = document.querySelectorAll('.sidepanel__link');
hamburger.addEventListener('click',()=>{
    menu.classList.add('active');
});
closeMenu.addEventListener('click',()=>{
    menu.classList.remove('active');
});
const raitingCounters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');
raitingCounters.forEach((item,index) => {
    lines[index].style.width = item.innerHTML;
});
window.onscroll = function(){
    const scr = window.scrollY;
    if(scr >= 500){
        sidePanel.classList.add('sidepanel__blackText');
        for (let index = 0; index < sidePanelLink.length; index++) {
            sidePanelLink[index].classList.add('sidepanel__blackLink')
        }
        console.log(sidePanelLink);
        sidePanelDivider.classList.add('sidepanel__blackDivider');
    }else{
        sidePanel.classList.remove('sidepanel__blackText');
        for (let index = 0; index < sidePanelLink.length; index++) {
            sidePanelLink[index].classList.remove('sidepanel__blackLink')
        }
        sidePanelDivider.classList.remove('sidepanel__blackDivider');
    }
}
// Submit
const btnForm = document.querySelector('.contacts__btn btn'),
        form = document.querySelector('.contacts__form');

const postData = async (url, data) =>{
    const res = await fetch(url, {
        method:"POST",
        headers:{
            'Content-type':'application/json'},
        body: data
    });
    return await res.json();
};
async function getResources (url){
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Coud not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};
function tryPostData(formIn) {
    formIn.addEventListener('submit',(e)=>{
        e.preventDefault();
        const formData = new FormData(formIn);
        const json = JSON.stringify(Object.fromEntries(formData.entries()));
        console.log(json);
        postData('https://rock-skyline-355707.oa.r.appspot.com/cv/mail',json).then(data=>{
            console.log(data);
        }).catch(()=>{
            console.log('fail');
        }).finally(()=>{
            form.reset();
        });
    });
}
tryPostData(form);


