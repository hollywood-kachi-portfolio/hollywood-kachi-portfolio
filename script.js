const menu=document.querySelector(".menu"),nav=document.querySelector(".nav nav");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

document.querySelectorAll(".project").forEach(project=>{
  const video=project.querySelector("video");
  if(!video)return;
  project.addEventListener("mouseenter",()=>video.play().catch(()=>{}));
  project.addEventListener("mouseleave",()=>{video.pause();video.currentTime=0});
  project.addEventListener("touchstart",()=>video.play().catch(()=>{}),{passive:true});
});
