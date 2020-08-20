$(window).load(function(){
  mainSliderEffect();
  strokeEffect();
  videoTitieEffect();
  videoControlEffect();
  symptomsSliderEffect();
});

function mainSliderEffect(){
  var $mainWrap=$("#mainwrap");
  var $section=$("section");
  var $scrollBar=$("#scrollbar_list").children()
  var sectionWidth=$section.innerWidth();
  var overNum=0;
  var d=false;
  var $stepSlideWrap=$("#step_slide");

  var isPlayMain0;
  var isPlayMain1;
  var isPlayMain2;
  var isPlayMain3;
  var isPlayMain4;

  init();initEvent();visualReset();

  function init(){
    $scrollBar.eq(overNum).addClass("active")
    //isPlayMain0=false;
    isPlayMain1=false;
    isPlayMain2=false;
    isPlayMain3=false;
    isPlayMain4=false;
  }

  function initEvent(){
    $(window).on("resize",function(){
      visualReset()
    });
    $("html, body").on("mousewheel DOMMouseScoll MozMousePixelScroll",movingSlide);
    $("#scrolldown").on("click",clickScrollDown)

    $stepSlideWrap.on("mouseenter",function(){
      $("html, body").off("mousewheel DOMMouseScoll MozMousePixelScroll",movingSlide);
    });
    $stepSlideWrap.on("mouseleave",function(){
      $("html, body").on("mousewheel DOMMouseScoll MozMousePixelScroll",movingSlide);
    });
  };

  function movingSlide(e){
    var EE=e.originalEvent;
    var delta=0;

    if(EE.detail){
      delta=EE.detail*-40;
    }else{
      delta=EE.wheelDelta;
    };

    var a=$mainWrap.position().left;
    var b=$section.innerWidth();
    var c=$section.length;

    if(delta<0 && a>(c-1)*-b && !d){
      //마우스 휠을 아래로 내렸을 경우
      d=true;
      overNum++;
      movingSection(overNum);
      eachSectionEffect(overNum);
    }else if(delta>0 && a<0 && !d){
      //마우스 휠을 위로 올렸을 경우
      d=true;
      overNum--
      movingSection(overNum);
      eachSectionEffect(overNum);
    };
  };

  function clickScrollDown(){
    overNum++;
    if(overNum>$section.length-1){
      overNum=0;
    };
    movingSection(overNum);
    eachSectionEffect(overNum);
  };

  function movingSection(num){
    $mainWrap.stop().animate({"left":-sectionWidth*num},500,"easeOutCubic",function(){
      d=false;
    });
    $scrollBar.removeClass("active");
    $scrollBar.eq(num).addClass("active");
  };

  function eachSectionEffect(num){
    if(num==0 && isPlayMain0==false){
      //videoTitieEffect();
      isPlayMain0=true;
    }else if(num==1 && isPlayMain1==false){
      symptomsTitleEffect();
      strokeEffect();
      isPlayMain1=true;
    }else if(num==2 && isPlayMain2==false){
      whyImgEffect();
      strokeEffect();
      isPlayMain2=true;
    }else if(num==3 && isPlayMain3==false){
      stepSliderEffect();
      strokeEffect();
      isPlayMain3=true;
    }else if(num==4 && isPlayMain4==false){
      ThumnailEffect();
      isPlayMain4=true;
    };
  };

  function visualReset(){
    sectionWidth=$section.innerWidth();
    $mainWrap.css({"left":-sectionWidth*overNum});
  };
};

function strokeEffect(){
  var $mainBorder=$(".mainborder")
  var $svgCircle=$(".leftcircle").find("svg").find("circle")
  var $circleTitle1=$(".circletitle1")
  var $circleTitle2=$(".circletitle2")

  init();initEvent();
  function init(){
    $mainBorder.stop().css({"width":0})
    $svgCircle.stop().removeClass("active")
    $circleTitle1.stop().css({"top":"25%","opacity":0})
    $circleTitle2.stop().css({"top":"75%","opacity":0})
  };
  function initEvent(){
    $mainBorder.animate({"width":"100%"},2000,"easeOutCubic");
    $svgCircle.addClass("active");
    $circleTitle1.animate({"top":"50%","opacity":1},1000,"easeOutCubic");
    $circleTitle2.animate({"top":"50%","opacity":1},1000,"easeOutCubic");
  };
};

function videoTitieEffect(){
  var $blue=$("#blue");
  var $yellow=$("#yellow");
  var $titleLeft=$(".title_left");
  var $titleRight=$(".title_right");

  init();initEffect();

  function init(){
    $blue.stop().css({"opacity":0});
    $yellow.stop().css({"opacity":0});
    $titleLeft.stop().css({"left":50,"opacity":0,"letter-spacing":"-1em"});
    $titleRight.stop().css({"right":50,"opacity":0,"letter-spacing":"-1em"});
  }

  function initEffect(){
    $blue.animate({"opacity":1},1000,"easeOutCubic",function(){
      $(this).parent().find($titleLeft).stop().animate({"left":0,"opacity":1,"letter-spacing":"0.25em"},1000,"easeOutCubic")
    })
    $yellow.animate({"opacity":1},1000,"easeOutCubic",function(){
      $(this).parent().find($titleLeft).stop().animate({"left":0,"opacity":1,"letter-spacing":"0.25em"},1000,"easeOutCubic")
      $(this).parent().find($titleRight).stop().animate({"right":0,"opacity":1,"letter-spacing":"0.25em"},1000,"easeOutCubic")
    })
  }
  return;
}

function videoControlEffect(){
  var $mainVideo=document.getElementById("mainvideo");
  var $leftCircle=$("#main1").find(".leftcircle");
  var $playBtn=$("<span class='circletitle1'>Play</span><span class='circletitle2'>Video</span>");
  var $pauseBtn=$("<span class='circletitle1'>Pause</span><span class='circletitle2'>Video</span>");

  $leftCircle.on("click",function(){
    if($mainVideo.paused){
      $mainVideo.play();
      $(this).find("a").html($pauseBtn);
    }else{
      $mainVideo.pause();
      $(this).find("a").html($playBtn);
    };
  });
};

function symptomsSliderEffect(){
  var $main2=$("#main2");
  var $symptomsList=$("#symptoms_list");
  var $symtomsLi=$symptomsList.children();
  var $symtomsNum=$symtomsLi.size();
  var $fadeInOutBtn=$main2.find(".leftcircle");
  var $symtomsTextA=$("#symptoms_text").find("a");
  var $playBtn=$("<span class='circletitle1'>Play</span><span class='circletitle2'>Slider</span>");
  var $pauseBtn=$("<span class='circletitle1'>Pause</span><span class='circletitle2'>Slider</span>");
  var overNum=0;
  var timer;
  var playSlide
  init();initEvent();showA(overNum)
  
  function init(){
    $symtomsLi.css({"opacity":0})
    $symtomsLi.eq(0).css({"opacity":1})
    timer=setInterval(autoPlay,3000)
    playSlide=true;
  };
  function initEvent(){
    $fadeInOutBtn.on("click",clickBtn);
    $symtomsTextA.on("click",overTextA)
  };
  function clickBtn(){
    if(playSlide==true){
      clearInterval(timer);
      $(this).find("a").html($playBtn);
      playSlide=false;
    }else if(playSlide==false){
      timer=setInterval(autoPlay,3000);
      $(this).find("a").html($pauseBtn);
      playSlide=true;
    }
  }
  function autoPlay(){
    overNum++;
    if(overNum>=$symtomsNum){
      overNum=0;
    };
    showA(overNum);
    workSlide(overNum)
  }
  function overTextA(){
    clearInterval(timer)
    $fadeInOutBtn.find("a").html($playBtn);
    playSlide=false;
    overNum=$symtomsTextA.index($(this));
    showA(overNum);
    workSlide(overNum);
  }
  function showA(num){
    $symtomsTextA.removeClass("active")
    $symtomsTextA.eq(num).addClass("active")
  }
  function workSlide(num){
    $symtomsLi.stop().animate({"opacity":0},1000,"easeOutCubic");
    $symtomsLi.eq(num).stop().animate({"opacity":1},1000,"easeOutCubic")
  };
  return;
};

function symptomsTitleEffect(){
  var $symptomsTitle=$("#symptoms_title")
  var $symptomsText=$("#symptoms_text")

  init();initEvent()
  function init(){
    $symptomsTitle.stop().css({"top":"40%","opacity":0})
    $symptomsText.stop().css({"top":"60%","opacity":0})
  }
  function initEvent(){
    $symptomsTitle.stop().animate({"top":"50%","opacity":1},2000,"easeOutCubic")
    $symptomsText.stop().animate({"top":"50%","opacity":1},2000,"easeOutCubic")
  }
  return;
}

function whyImgEffect(){
  var $main3=$("#main3");
  var $whyBlurList=$("#why_blur_list");
  var $whyBlurLi=$whyBlurList.children();
  var $whyImgList=$("#why_img_list");
  var $whyImgLi=$whyImgList.children();
  var $whyTextList=$("#why_text_list");
  var $whyTextLi=$whyTextList.children()
  var $whyTitle=$whyTextLi.find(".why_title");
  var $whyText=$whyTextLi.find(".why_text");
  var $viewpoint=$whyTextLi.find(".viewpoint");
  var $turnPage=$main3.find(".leftcircle");
  var imgNum=0;
  //var imgArray=["front","back"]

  init();initEvent();
  whyImgEffect(imgNum);whyBlurEffect(imgNum);whyTextEffect(imgNum);
  
  function init(){
    /*for(var i=0;i<imgArray.length;i++){
      $whyImgLi.eq(i).removeClass().addClass(imgArray[i])
    }*/
    $whyTitle.stop().css({"left":200,"opacity":0});
    $whyText.stop().css({"left":200,"opacity":0});
    $viewpoint.stop().css({"left":200,"opacity":0});
  };
  function initEvent(){
    $whyImgLi.on("click",changeImgAndText);
    $turnPage.on("click",function(){
      $(".back").trigger("click");
    });
  };
  function changeImgAndText(){
    imgNum=$whyImgLi.index($(this));
    whyImgEffect(imgNum);
    whyBlurEffect(imgNum);
    whyTextEffect(imgNum);
  };
  function whyImgEffect(num){
    $whyImgLi.removeClass().addClass("back");
    $whyImgLi.eq(num).removeClass().addClass("front");
    $whyImgLi.stop().animate({"opacity":0},250,"easeOutCubic",function(){
      $whyImgLi.stop().animate({"opacity":1},250,"easeOutCubic");
    });
  }
  function whyBlurEffect(num){
    $whyBlurLi.stop().animate({"opacity":0},500,"easeOutCubic");
    $whyBlurLi.eq(num).stop().animate({"opacity":1},500,"easeOutCubic");
  };
  function whyTextEffect(num){
    init();
    $whyTextLi.eq(num).find($whyTitle).stop().animate({"left":0,"opacity":1},500,"easeOutCubic",function(){
      $whyTextLi.eq(num).find($whyText).stop().animate({"left":0,"opacity":1},500,"easeOutCubic",function(){
        $whyTextLi.eq(num).find($viewpoint).stop().animate({"left":0,"opacity":1},500,"easeOutCubic");
      });
    });
  };
  return;
};

function stepSliderEffect(){
  var $main4=$("#main4")
  var $stepIcon=$("#step_icon_list").children();
  var $stepSlideWrap=$("#step_slide");
  var $stepSlideList=$("#step_slide_list");
  var $stepSlideLi=$stepSlideList.children();
  var $stepSlideText=$(".slide_text").children();
  var $stepSlideBtn=$("#slide_btn_list").children()
  var $turnPage=$main4.find(".leftcircle");
  var $playBtn=$("<span class='circletitle1'>Play</span><span class='circletitle2'>Slider</span>");
  var $pauseBtn=$("<span class='circletitle1'>Pause</span><span class='circletitle2'>Slider</span>");
  var stepSlideHeight=$stepSlideWrap.innerHeight();
  var stepSlideNum=$stepSlideLi.size()
  var overNum=0;
  var d=false;
  var playSlide=true;
  var timer;

  init();interVal();initEvent();movingSlide(overNum);selectIcon(overNum);selectBtn(overNum);overSlideText(overNum);
  function init(){
    $stepSlideText.css({"top":100,"opacity":0});
  }
  function interVal(){
    timer=setInterval(autoPlay,3000)
  }

  function initEvent(){
    $(window).on("resize",function(){
      slideReset()
    })
    $stepIcon.on("click",onClickIcon);
    $stepSlideWrap.on("mousewheel DOMMouseScoll MozMousePixelScroll", onWheel);
    $stepSlideBtn.on("click",onClickBtn);
    $turnPage.on("click",clickPlay);
  };

  function slideReset(){
    stepSlideHeight=$stepSlideWrap.innerHeight();
    $stepSlideList.css({"top":-stepSlideHeight*overNum})
  }
  
  function autoPlay(){
    init()
    overNum++;
    if(overNum>stepSlideNum-1){
      overNum=0;
    };
    movingSlide(overNum)
    selectIcon(overNum)
    selectBtn(overNum)
    overSlideText(overNum)
  }

  function onClickIcon(){
    clearInterval(timer);
    $turnPage.find("a").html($playBtn);
    playSlide=false;
    init()
    overNum=$stepIcon.index($(this))
    movingSlide(overNum)
    selectIcon(overNum)
    selectBtn(overNum)
    overSlideText(overNum)
  }

  function onClickBtn(){
    clearInterval(timer);
    $turnPage.find("a").html($playBtn);
    playSlide=false;
    init()
    overNum=$stepSlideBtn.index($(this))
    movingSlide(overNum)
    selectIcon(overNum)
    selectBtn(overNum)
    overSlideText(overNum)
  }

  function clickPlay(){
    if(playSlide==true){
      clearInterval(timer);
      $(this).find("a").html($playBtn);
      playSlide=false;
    }else if(playSlide==false){
      interVal()
      $(this).find("a").html($pauseBtn);
      playSlide=true;
    }
  }

  function onWheel(e){
    clearInterval(timer);
    $turnPage.find("a").html($playBtn);
    playSlide=false;
    var EE=e.originalEvent;
    var delta=0;

    if(EE.detail){
      delta=EE.detail*-40;
    }else{
      delta=EE.wheelDelta;
    };
    
    var a=$stepSlideList.position().top;
    var b=$stepSlideWrap.height();
    var c=$stepSlideLi.length;

    if(delta<0 && a>(c-1)*-b && !d){
      //마우스 휠을 아래로 내렸을 경우
      d=true;
      overNum++;
      init()
      movingSlide(overNum)
      selectIcon(overNum)
      selectBtn(overNum)
      overSlideText(overNum)
    }else if(delta>0 && a<0 && !d){
      //마우스 휠을 위로 올렸을 경우
      d=true;
      overNum--
      init()
      movingSlide(overNum)
      selectIcon(overNum)
      selectBtn(overNum)
      overSlideText(overNum)
    }; 
  }

  function movingSlide(num){
    $stepSlideList.stop().animate({"top":-stepSlideHeight*num},500,"easeOutCubic",function(){
      d=false
    })
  }

  function selectIcon(num){
    $stepIcon.removeClass("active")
    $stepIcon.eq(num).addClass("active")
  }

  function selectBtn(num){
    $stepSlideBtn.find("span").removeClass("active");
    $stepSlideBtn.eq(num).find("span").addClass("active")
  }

  function overSlideText(num){
    $stepSlideLi.eq(num).find($stepSlideText).eq(0).stop().animate({"top":0,"opacity":1},500,"easeOutCubic",function(){
      $stepSlideLi.eq(num).find($stepSlideText).eq(1).stop().animate({"top":0,"opacity":1},500,"easeOutCubic",function(){
        $stepSlideLi.eq(num).find($stepSlideText).eq(2).stop().animate({"top":0,"opacity":1},500,"easeOutCubic")
      });
    });
  };
  return;
};

function ThumnailEffect(){
  var $thumList=$("#thum_list");
  var $thumLi=$thumList.children();
  var $thumImg=$(".img_wrap")
  var $thumTitle=$(".thum_title");
  var $thumDate=$(".date");
  var $thumArrow=$(".arrow");
  
  init();initEvent();showThum();

  function init(){
    $thumLi.stop().css({"top":-500,"opacity":0})
    $thumTitle.stop().css({"bottom":0,"opacity":0})
    $thumDate.stop().css({"bottom":0,"opacity":0})
    $thumArrow.stop().css({"width":"1%","opacity":0})
    $thumImg.addClass("active")
  };

  function showThum(){
    for(var i=0;i<$thumLi.length;i++){
      $thumLi.eq(i).stop().animate({"top":0,"opacity":1},300+(i*300),"easeOutCubic",function(){
        $(this).find("p,span").stop().animate({"bottom":"10%","opacity":1},100+(i*100),"easeOutCubic");
      });
    };
  };

  function initEvent(){
    $thumLi.on("mouseenter",overThum)
    $thumLi.on("mouseleave",clearThum)
  }

  function clearThum(){
    $thumImg.stop().css({"width":"50%"})
    $thumArrow.stop().css({"width":"1%","opacity":0})
    $thumImg.addClass("active")
  }

  function overThum(){
    clearThum();
    $(this).find($thumImg).stop().animate({"width":"100%"},500,"easeOutCubic")
    $(this).find($thumImg).removeClass("active")
    $(this).find($thumArrow).stop().animate({"width":"80%","opacity":1},500,"easeOutCubic")
  }
  return;
};