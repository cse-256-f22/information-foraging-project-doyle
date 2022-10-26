export function setupSticky(topbar: HTMLElement | null) {
    // TODO: Copy and paste your sticky code in here!!
    if (topbar == null) return;

    window.onscroll = function(){

    var sticky = topbar.offsetTop;
   
   
    if (window.pageYOffset > sticky) {
        topbar.classList.add("sticky");
      } else {
        topbar.classList.remove("sticky");
      }
    }
 }



 