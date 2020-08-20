<? include_once $_SERVER["DOCUMENT_ROOT"]."/inc/start.html" ?>
  <link rel="stylesheet" href="/css/main.css">
  <script src="/js/main.js"></script>
  <title>BIKE FIT</title>
</head>
<body>
  <!--상단영역시작-->
  <? include_once $_SERVER["DOCUMENT_ROOT"]."/inc/header.html" ?>
  <div id="wrap">
    <!--상단영역끝-->
    <!--메인영역시작-->
    <main id="mainwrap">
      <h2 class="hidden">Main section</h2>
      <section id="main1">
        <h3 class="hidden">First section</h3>
        <video id="mainvideo" width="1920" height="900" preload="auto" autoplay muted loop poster="images/poster.jpg">
          <source src="video/mainvideo.mp4" type="video/mp4">
        </video>
        <p class="maintitle" id="maintitle_line1"><span class="title_left">NOW, YOUR </span><span id="blue">BIKE</span></p>
        <p class="maintitle" id="maintitle_line2"><span class="title_left">SHOULD </span><span id="yellow">FIT</span><span class="title_right"> FOR YOUR BODY</span></p>
        <span class="mainborder"></span>
        <p class="leftcircle">
          <svg height="200" width="200">
            <circle cx="100" cy="100" r="99" stroke="#fff" stroke-width="1" fill-opacity="0" />
          </svg>
          <a href="#">
            <span class="circletitle1">Pause</span>
            <span class="circletitle2">Video</span>
          </a>
        </p>
      </section>
      <section id="main2">
        <h3 class="hidden">Second section</h3>
        <ul id="symptoms_list">
          <li><span class="hidden">knee pain</span> </li>
          <li><span class="hidden">wrist pain</span></li>
          <li><span class="hidden">back pain</span></li>
          <li><span class="hidden">neck pain</span></li>
          <li><span class="hidden">shoulder pain</span></li>
        </ul>
        <p id="symptoms_title">
          YOU BIKING, ARE YOU IN A POSITION?
        </p>
        <p id="symptoms_text">
          Riding the bicycle with incorrect fitting is a pain in important body parts 
          <br>such as <a href="#">knee</a>, <a href="#">waist</a>, <a href="#">shoulder</a>, <a href="#">neck</a>, <a href="#">wrist</a>
          <br>Severe injury may result.
        </p>
        <span class="mainborder"></span>
        <p class="leftcircle">
          <svg height="200" width="200">
            <circle cx="100" cy="100" r="99" stroke="#fff" stroke-width="1" fill-opacity="0" />
          </svg>
          <a href="#">
            <span class="circletitle1">Pause</span>
            <span class="circletitle2">Slider</span>
          </a>
        </p>
      </section>
      <section id="main3">
        <h3 class="hidden">Third section</h3>
        <ul id="why_blur_list">
          <li><span class="hidden">Why bike fits image blur</span></li>
          <li><span class="hidden">What to do first image blur</span></li>
        </ul>
        <span class="mainborder"></span>
        <ul id="why_img_list">
          <li><img src="/images/why_img.jpg" alt="Why bike fits image"></li>
          <li><img src="/images/first_img.jpg" alt="What to do first image"></li>
        </ul>
        <ul id="why_text_list">
          <li>
            <p class="why_title">
              WHY BIKE FIT?
            </p>
            <p class="why_text">
              It is important to Choosing a bike that fits your rider's body as much as possible for preventing any injuries that may be on the bike to maximize your athletic performance while riding comfortably.
            </p>
            <p class="why_text">
              BIKE FIT is due to incorrect bike fitting Dear riders,trying to get started on a bike, but how to choose a bike to solve the worries of the prospective riders I'm trying.
            </p>
            <p class="viewpoint">
              <i class="fas fa-arrow-left"></i>VIEW POINT
            </p>
          </li>
          <li>
            <p class="why_title">
              WHAT TO DO FIRST?
            </p>
            <p class="why_text">
              First of all, for proper fitting riders will be able to it is important to know correctly.
            </p>
            <p class="why_text">
              BIKE FIT allows riders to adjust their body size simple and accurate ways to measure it is easy to inform.
            </p>
            <p class="why_text">
              Let's start with the basic but easy to do.
            </p>
            <p class="viewpoint">
              <i class="fas fa-arrow-left"></i>VIEW POINT
            </p>
          </li>
        </ul>
        <p class="leftcircle">
          <svg height="200" width="200">
            <circle cx="100" cy="100" r="99" stroke="#fff" stroke-width="1" fill-opacity="0" />
          </svg>
          <a href="#">
            <span class="circletitle1">Turn</span>
            <span class="circletitle2">Photo</span>
          </a>
        </p>
      </section>
      <section id="main4">
        <h3 class="hidden">fourth section</h3>
        <p id="step_title">
          YOU CAN FOLLOW THE STEP
          <br>FOR THE PROCEED
        </p>
        <ul id="step_icon_list">
          <li><a href="#none"><img src="/images/step_icon0.svg" alt="learn"></a></li>
          <li><a href="#none"><img src="/images/step_icon1.svg" alt="choose"></a></li>
          <li><a href="#none"><img src="/images/step_icon2.svg" alt="enter"></a></li>
          <li><a href="#none"><img src="/images/step_icon3.svg" alt="confirm"></a></li>
        </ul>
        <nav id="step_slide">
          <ul id="step_slide_list">
            <li>
              <span class="hidden">step1</span>
              <p class="slide_text">
                <span>LEARN</span>  
                <span><br>HOW TO MEASURE</span>
                <span><br>YOUR BODY</span>
              </p>
            </li>
            <li>
              <span class="hidden">step2</span>
              <p class="slide_text">
                <span>CHOOSE</span>
                <span><br>YOUR GENDER</span>
                <span><br>AND BIKE TYPE</span>
              </p>
            </li>
            <li>
              <span class="hidden">step3</span>
              <p class="slide_text">
                <span>ENTER</span>
                <span><br>THE MEASURED</span>
                <span><br>BODY SIZE</span>
              </p>
            </li>
            <li>
              <span class="hidden">step4</span>
              <p class="slide_text">
                <span>CONFIRM</span>
                <span><br>THE OPTIMAL</span>
                <span><br>BIKE SIZE</span>
              </p>
            </li>
          </ul>
          <ul id="slide_btn_list">
            <li><a href="#none"></a><span></span></li>
            <li><a href="#none"></a><span></span></li>
            <li><a href="#none"></a><span></span></li>
            <li><a href="#none"></a><span></span></li>
          </ul>
        </nav>
        <span class="mainborder"></span>
        <p class="leftcircle">
          <svg height="200" width="200">
            <circle cx="100" cy="100" r="99" stroke="#fff" stroke-width="1" fill-opacity="0" />
          </svg>
          <a href="#">
            <span class="circletitle1">Pause</span>
            <span class="circletitle2">Slider</span>
          </a>
        </p>
      </section>
      <section id="main5">
        <h3 class="hidden">Fifth section</h3>
        <p id="review_title">USER REVIEW</p>
        <p id="review_text">You can refer to the vivid reviews of those who have experienced BIKE FIT.</p>
        <ul id="thum_list">
          <li>
            <div class="img_wrap">
              <img src="/images/thum_img0.jpg" alt="thumbnail1">
            </div>
            <p class="thum_title">REAL RIDER STORY</p>
            <span class="date">2019.12.08</span>
            <div class="arrow"></div>
          </li>
          <li>
            <div class="img_wrap">
              <img src="/images/thum_img1.jpg" alt="thumbnail2">
            </div>
            <p class="thum_title">REAL RIDING STORY</p>
            <span class="date">2019.12.08</span>
            <div class="arrow"></div>
          </li>
          <li>
            <div class="img_wrap">
              <img src="/images/thum_img2.jpg" alt="thumbnail3">
            </div>
            <p class="thum_title">RIDING CAMP</p>
            <span class="date">2019.12.08</span>
            <div class="arrow"></div>
          </li>
          <li>
            <div class="img_wrap">
              <img src="/images/thum_img3.jpg" alt="thumbnail4">
            </div>
            <p class="thum_title">RIDE FOR THE FUTURE</p>
            <span class="date">2019.12.08</span>
            <div class="arrow"></div>
          </li>
        </ul>
      </section>
    </main>
    <!--스크롤바시작-->
    <ul id="scrollbar_list">
      <li>
        <p class="scrollbar_text">SCROLL BAR</p>
        <p class="scrollbar_bar"></p>
      </li>
      <li>
        <p class="scrollbar_text">SCROLL BAR</p>
        <p class="scrollbar_bar"></p>
      </li>
      <li>
        <p class="scrollbar_text">SCROLL BAR</p>
        <p class="scrollbar_bar"></p>
      </li>
      <li>
        <p class="scrollbar_text">SCROLL BAR</p>
        <p class="scrollbar_bar"></p>
      </li>
      <li>
        <p class="scrollbar_text">SCROLL BAR</p>
        <p class="scrollbar_bar"></p>
      </li>
    </ul>
    <!--스크롤바끝-->
  </div>
  <!--메인영역끝-->
  <!--하단영역시작-->
  <? include_once $_SERVER["DOCUMENT_ROOT"]."/inc/footer.html" ?>
  <!--하단영역끝-->
</body>
</html>