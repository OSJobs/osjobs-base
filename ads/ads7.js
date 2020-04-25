function create_ad(parent_id, url, src) { 
    var out = document.createElement('div'); 
    out.style.margin = "0 auto";
    var img = document.createElement('img'); 
    img.src =  src;
    img.style.maxWidth = "100%";
    var a = document.createElement('a'); 
    a.href = url;
    a.style.display = "inline-block";
    a.style.width = "30%";
    a.style.margin = "10px";
    a.target = "_blank";
    out.appendChild(a);
    a.appendChild(img);
    document.getElementById(parent_id).appendChild(a); 
}  

window.addEventListener('load', function () {
  create_ad("main-outlet", "https://co.osjobs.net", "https://cdn.jsdelivr.net/gh/OSJobs/osjobs-base/ads/course.jpg");
  create_ad("main-outlet", "https://tool.osjobs.net", "https://cdn.jsdelivr.net/gh/OSJobs/osjobs-base/ads/resume.jpg");
  create_ad("main-outlet", "https://info.osjobs.net", "https://cdn.jsdelivr.net/gh/OSJobs/osjobs-base/ads/info.jpg");
})
