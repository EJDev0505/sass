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


// function defaultDisplay(){
//     hero.style.display =  'flex';
// }


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




// navportfoliolink.forEach(item => {
//     item.addEventListener('click', () => {
//         navportfolio.style.display = 'none';
//     });
// });



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










// const bodysort = document.querySelector('.body-sort-inflation-list');

// const rect = bodysort.getBoundingClientRect();

//     if(rect.bottom <= window.innerHeight){
//         const rateInflationElements = document.querySelectorAll('#rate-inflation');


// }
    

document.addEventListener('scroll', () => {
    const rateInflationElements = document.querySelectorAll('#rate-inflation');
    // const style = document.createElement('style');

    // style.textContent = `
    //         @keyframes width {
    //             0% {
    //                 width: 0;
    //             }
    //             100% {
    //                 width: ${width};
    //             }
    //         }
    //     `;
    
        rateInflationElements.forEach(element => {

        const ratePercent = parseFloat(element.querySelector('#rate-percent').textContent);
        
        const width = Math.min(ratePercent, 100) + '%';

            element.style.width = width;
            element.style.animation = 'width 2s linear ';

       

});
});








// window.addEventListener('resize', () => {
//     if(window.innerWidth < 600){
//         bodylist.style.display = 'grid';
//         bodylist.style.gridTemplateRows = 'repeat(2, 0fr)';
//         bodylist.style.gridTemplateColumns = '1fr';
//         bodylist.style.gap = '8px';
//     }else{
//         bodylist.style.height = '100vh';
//     }
// });
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






//     const seebutonnData = document.querySelectorAll('.button-see-more-data');
//     const Info = document.querySelector('.button-see-more-data-info');
//     const seemore = document.querySelector('.see-more');
//     const seeless = document.querySelector('.see-less');
//     const seemoreIcon = document.querySelector('#see-more-icon');
//     const seelessIcon = document.querySelector('#see-less-icon');


//     let open = false;

//     seebutonnData.forEach(button => {
//          button.addEventListener('click', ()=> {
//             if(button){

//                 openData();
//             }else{
//                 closeData();
//             }
            
//         });
//     });

   
// function closeData(){
//     Info.style.display = 'none';
//     seeless.style.display = 'none';
//     seemore.style.display = 'flex';
//     seemoreIcon.style.display = 'flex';
//     seelessIcon.style.display = 'none';
// }

// function openData (){
//     Info.style.display ='flex';
//     seeless.style.display = 'flex';
//     seemore.style.display = 'none';
//     seemoreIcon.style.display = 'none';
//     seelessIcon.style.display = 'flex';
// }


// const idTr = document.querySelector('tr[id]');
// const input = document.querySelector('#Search');

// input.addEventListener('click', (e) => {
//     if(input.value){
//         idTr.style.backgroundColor = 'red';
//     }
// });

// const input = document.querySelector('#Search');
// const tableBody = document.querySelector('table tbody'); // Assuming your countries are within a tbody element

// input.addEventListener('keyup', (e) => {
//   const searchTerm = e.target.value.toUpperCase(); // Get search term and convert to lowercase
//   const tableRows = tableBody.querySelectorAll('tr');

//   tableRows.forEach(row => {
//     const countryName = row.querySelector('td:nth-child(2)').textContent.toUpperCase(); // Get country name from second cell (adjust selector if needed)
//     if (countryName.includes(searchTerm)) {
//       row.style.backgroundColor = 'yellow'; // Highlight matching rows with yellow background (change as desired)
//     } else {
//       row.style.backgroundColor = ''; // Reset background color for non-matching rows
//     }
//   });
// });
