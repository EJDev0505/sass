document.addEventListener('contextmenu', (e) => e.preventDefault());

const bar = document.querySelector('.load-bar');
const loadingPage = document.querySelector('.laoding-page');
const videoElement = document.querySelector('#sound-website');


const body = document.querySelector('body');

function loadingpageEnd(){

    loadingPage.style.right = '-100%';
    allowScroll();
}   



bar.addEventListener('animationend',  loadingpageEnd);

function preventScroll() {
    body.classList.add('no-scroll'); 
  }
 
  function allowScroll() {
    body.classList.remove('no-scroll'); 
  }

  function showLoadingAnimation() {
    preventScroll(); 
    loadingPage.style.right = '0'; 
  }
  preventScroll();







const sections = document.querySelectorAll('section');
const ulA = document.querySelectorAll('#ul a');
const hero = document.querySelector('.hero');
const inflationPadding = document.querySelector('#inflation');


let lastClickedSectionId = 0;



ulA.forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault(); 
        showLoadingAnimation();
        const targetId = anchor.getAttribute('href'); 
        document.querySelector('.active')?.classList.remove('active');
        anchor.classList.add('active');

        

        


           sections.forEach(section => {

                if (section.id === targetId.slice(1)) {
                    setTimeout(() => {
                        section.style.display = 'flex';
                        lastClickedSectionId = section.id; 
                    }, 1000);
                    if(window.innerWidth < 900){

                        setTimeout(() => {
                             inflationPadding.style.marginTop = '5rem';
                        }, 1000);
                       
                    }

                }
                 else {

                    setTimeout(() => {
                        section.style.display = 'none'; 
                    }, 1000);

                   
                }

                
            });        

            setTimeout(() => {
                loadingpageEnd(); 
              }, 1000);
    });
});


window.addEventListener('resize', () => {
    const isSmallScreen = window.innerWidth <= 900; 
    const islargeScreen = window.innerWidth >= 900; 
  
    sections.forEach(section => {
        
      if (isSmallScreen) {
                section.style.display = 'flex';
                
                inflationPadding.style.marginTop = '35rem';
                
        }
        else if(islargeScreen){
            if(lastClickedSectionId){
                section.style.display = section.id === lastClickedSectionId ? 'flex' : 'none';
                inflationPadding.style.marginTop = '10rem';
            }else if(!lastClickedSectionId){
                hero.style.display = 'flex';
                section.style.display = 'none';
                inflationPadding.style.marginTop = '10rem';
            }
            
        }
    });
  });


  





const herocountry = document.querySelectorAll('.hero-country');

if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    Animation();
}

function Animation(){
    herocountry.forEach( (herocountry) =>{
        herocountry.setAttribute('data-animated', true);

        const listcountry = herocountry.querySelector('.list-country');
        const scrolleritem = Array.from(listcountry.children);


        scrolleritem.forEach((item) => {
            const duplicateItem = item.cloneNode(true);
            duplicateItem.setAttribute('aria-hidden', true);
            listcountry.appendChild(duplicateItem);
        });
    });
}





const spanlist = document.querySelector('.span');
const spanlist1 = document.querySelector('.span-one');
const spanlist2 = document.querySelector('.span-two');
const navportfolio = document.querySelector('.nav-links-portfolio');
const navtoggle = document.querySelector('.nav-toggle-links');
const navportfoliolink = document.querySelectorAll('.links-a a');
const links = document.querySelectorAll('#tags-links');


navportfoliolink.forEach(item => {
    item.addEventListener('click', () => {
        if(window.innerWidth < 600) {
            topClose();
            navclose();
            Open = false;
        }else{
            navclose();
            Open = false;
            navportfolio.style.display = 'none'; 
        }
    });
});

let Open = false; 

links.forEach(item => {
    item.addEventListener('click', () => {
        if(Open){
            if(window.innerWidth < 600) {
                topClose();
                navclose();
                Open = false;
            }else{
                navclose();
                Open = false;
                navportfolio.style.display = 'none'; 
            }
        }

    });
});



    spanlist.addEventListener('click', () => {

        if(window.innerWidth < 600){
            if(!Open){
                topOpen();
                navOpen();
                Open = true;
                navportfolio.style.display = 'flex';
            }else{
                topClose();
                navclose();
                Open = false;

            }
        }else {
            if (!Open) { 
            navOpen();
            Open = true;
            navportfolio.style.display = 'flex';

            }else { 
                navclose();
                Open = false;
                navportfolio.style.display = 'none'; 
            }
        }

        
    });





function navOpen() {
    spanlist1.style.transform = 'translateY(5px) translateX(0px) rotate(40deg)';
    spanlist2.style.transform = 'translateY(-5px) translateX(0px) rotate(-40deg)';
    spanlist1.style.backgroundColor = '#0E1525';
    spanlist2.style.backgroundColor = '#0E1525';
    navtoggle.style.backgroundColor = '#ABB8C3';
}

function navclose() {
    spanlist1.style.transform = 'translateY(0px) translateX(0px) rotate(0deg)';
    spanlist2.style.transform = 'translateY(0px) translateX(0px) rotate(0deg)';
    navtoggle.style.backgroundColor = '#FFA600';
    spanlist1.style.backgroundColor = '#fff';
    spanlist2.style.backgroundColor = '#fff';
}


function topOpen(){
    navportfolio.style.top = '0';
 
}

function topClose(){
    navportfolio.style.top = '-500px';
}




const defaultFillColors = {};
document.querySelectorAll('path[data-name]').forEach(path => {
    defaultFillColors[path.id] = path.style.fill;

    path.addEventListener('mouseover', function() {
        const countryName = path.getAttribute('data-name');
        const rank = path.getAttribute('data-rank') || 'No record';
        const rankRate = path.getAttribute('data-rate') || 'No record';
        
        document.getElementById('country-name-svg').textContent = countryName;
        document.getElementById('rank-country').textContent = rank;
        document.getElementById('country-rate-percent').textContent = rankRate;
        path.style.fill = '#FFA600';
        path.style.cursor = 'pointer';

    });

    path.addEventListener('mouseleave', function() {
        document.getElementById('country-name-svg').textContent = '';
        document.getElementById('rank-country').textContent = '';
        document.getElementById('country-rate-percent').textContent = '';
        path.style.fill = defaultFillColors[path.id]; 
    });
});


    

document.addEventListener('scroll', () => {
    const rateInflationElements = document.querySelectorAll('#rate-inflation');
    
        rateInflationElements.forEach(element => {

        const ratePercent = parseFloat(element.querySelector('#rate-percent').textContent);
        
        const width = Math.min(ratePercent, 100) + '%';

            element.style.width = width;
            element.style.animation = 'width 2s linear ';

       

});
});








    const Seemorelist = document.querySelector('#button-see-more-list');
    const Seemorelistback = document.querySelector('#button-see-more-back');
    const Seeless = document.querySelector('#see-less');
    const Seemore = document.querySelector('#see-more');
    const bodylist = document.querySelector('.list-sort');
    const breakpoint = document.querySelector('#point');


    Seemorelist.addEventListener('click', ()=> {
        bodymore();
    });
    
    Seemorelistback.addEventListener('click', ()=> {
        bodyback();
    });






function bodymore (){
    bodylist.style.height ='100%';
    Seemorelistback.style.display = 'flex';
    Seemorelist.style.display = 'none';
    Seeless.style.display = 'flex';
    Seemore.style.display = 'none';
    
}



function bodyback (){
    bodylist.style.height ='100vh';
    Seemorelistback.style.display = 'none';
    Seemorelist.style.display = 'flex';
    Seeless.style.display = 'none';
    Seemore.style.display = 'flex';
}







