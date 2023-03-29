console.log('spotify');
let audioelement= new Audio('1239.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let newsong=0;
let giff=document.getElementById('giff');
let songitem=Array.from(document.getElementsByClassName('songitem'));

let song=[
    {songname: "tu-hi-mera-junoon", filepath: "1230.mp3", coverpath: "Arijit-Singh-Net-Worth-1-750x450.jpg"},
    {songname: "All-of-me", filepath: "1231.mp3", coverpath: "Arijit-Singh-Net-Worth-1-750x450.jpg"},
    {songname: "badnaam", filepath: "1232.mp3", coverpath: "Arijit-Singh-Net-Worth-1-750x450.jpg"},
    {songname: "Bhool-Bhulaiya", filepath: "1233.mp3", coverpath: "Arijit-Singh-Net-Worth-1-750x450.jpg"},
    {songname: "Kamariya", filepath: "1234.mp3", coverpath: "Arijit-Singh-Net-Worth-1-750x450.jpg"},
    {songname: "Proper_patola", filepath: "1235.mp3", coverpath: "Arijit-Singh-Net-Worth-1-750x450.jpg"},
    {songname: "half-girlfriend", filepath: "1236.mp3", coverpath: "Arijit-Singh-Net-Worth-1-750x450.jpg"},
]
songitem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=song[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText=song[i].songname;
})
masterplay.addEventListener('click', ()=>{
   
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
         giff.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
         giff.style.opacity=0;
    }
})
audioelement.addEventListener('timeupdate', ()=>{
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    myprogressbar.value=progress;
})
myprogressbar.addEventListener('change', ()=>{
    audioelement.currentTime = myprogressbar.value * audioelement.duration/100;
})

// const makeAllPlay=()=>{
//     Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//     })
// }
// Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
//     element.addEventListener('click',(e)=>{
//         makeAllPlay();
//         index=parent(e.target.id);
//         e.targetclassList.remove('fa-play-circle');
//         e.targetclassList.add('fa-pause-circle');
//         audioelement.src = `123${index+1}.mp3`;
//         audioelement.currentTime=0;
//         audioelement.play();
//         masterplay.classList.remove('fa-play-circle');
//         masterplay.classList.add('fa-pause-circle');
//     })
// })
