$(window).load(function(){
  var $mainMenu,$mainMenuList,$mainMenuLi;
  var windowHeight,mainMenuWidth,mainMenuHeight,mainMenuLiHeight,subMenuLiHeight;
  var $mainMenuBtn
  var isMainMenuOpen
  
  init();initEvent();

  function init(){
    $mainMenuBtn=$("#mainmenu_btn")
    $mainMenu=$("#mainmenu")
    $mainMenuList=$("#mainmenu_list")
    $mainMenuLi=$mainMenuList.children()

    windowHeight=$(window).innerHeight()
    mainMenuWidth=$mainMenu.outerWidth()
    mainMenuHeight=$mainMenu.css({"height":windowHeight})

    isMainMenuOpen=false

    $mainMenu.css({"left":mainMenuWidth})
  }

  function initEvent(){
    $mainMenuBtn.on("click",clickMainMenuBtn)  
    $mainMenuLi.on("mouseenter",overMenu)
  }

  function clickMainMenuBtn(){
    if(isMainMenuOpen==false){
      $mainMenu.show()
      $mainMenu.stop()
      $mainMenu.animate({"left":0},500,"easeOutCubic")
      $mainMenuBtn.children().addClass("active")
      isMainMenuOpen=true
    }else if(isMainMenuOpen==true){
      $mainMenu.stop()
      $mainMenu.animate({"left":mainMenuWidth},500,"easeOutCubic",function(){
        $(this).hide()
      })
      $mainMenuBtn.children().removeClass("active")
      isMainMenuOpen=false
    }
  }
  function overMenu(){
    var bgNum=$mainMenuLi.index($(this))
    $mainMenuLi.find("a").css({"color":"#98a2a6"})
    $(this).find("a").css({"color":"#fff"})
    $(this).parent().css({"background":"url(/images/menu_bg"+bgNum+".jpg) no-repeat center"})
  }
})