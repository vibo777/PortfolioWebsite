
      let scrollValue;

      function scrollToTop(){
        
        window.scrollTo(0,scrollValue);
        if(scrollValue > 0){
            scrollValue-=500; 
        }
        else{
            cancelAnimationFrame(anim);
        }

        let anim = requestAnimationFrame(scrollToTop);

      }

      document.getElementById('btt').addEventListener("click",function(){

          scrollValue = window.pageYOffset;
          scrollToTop();
      })



 