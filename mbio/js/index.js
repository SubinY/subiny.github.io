var project_info=function(){function e(e){var i=e;i.parent().find("li:nth-child("+t+") a").stop().animate({marginRight:"-20px"},300,function(){$(this).animate({opacity:"0.7"},700)}),t=parseInt(i.index()+1);var e=$("a",i);e.stop().animate({marginRight:"0px",opacity:"1.0"},300);var n=e.next();$("#rot1 .heading").stop().animate({left:"-420px"},500,"easeOutCirc",function(){$("h1",$(this)).html(n.find(".info_heading").html()),$(this).animate({left:"0px"},400,"easeInOutQuad")}),$("#rot1 .description").stop().animate({bottom:"-270px"},500,"easeOutCirc",function(){$("p",$(this)).html(n.find(".info_description").html()),$(this).animate({bottom:"0px"},400,"easeInOutQuad")}),$("#rot1").prepend($("<img/>",{style:"opacity:0",className:"bg"}).load(function(){$(this).animate({opacity:"1"},600),$("#rot1 img:first").next().animate({opacity:"0"},700,function(){$(this).remove()})}).attr("src","images/"+n.find(".info_image").html()).attr("width","100%").attr("height","300"))}var t=1;e($("#rotmenu li:first")),$("#rotmenu li").bind("click",function(t){e($(this)),t.preventDefault()})};$(function(){document.onmousedown=function(){document.onmousemove=function(){window.getSelection?window.getSelection().removeAllRanges():document.selection.empty()}},document.onmouseup=function(){document.onmousemove=null};var e=$(".portfolio-items");setTimeout(function(){e.isotope({itemSelector:".portfolio-items > div",animationOptions:{duration:750,easing:"linear",queue:!0}})},1e3),project_info(),$("#resume").fullpage({sectionsColor:["transparent","transparent","#e4e4e4","rgba(255, 255, 255, .0)","transparent","transparent"],scrollingSpeed:700,normalScrollElementTouchThreshold:5,navigation:!0,scrollOverflow:!1,loopHorizontal:!1,controlArrowColor:"#16BA9D",anchors:["page1","page2","page3","page4","page5","page6"],menu:"#menu",easing:"easeInOut",afterRender:function(){$("item-4").css("background","rgba(255, 255, 255, .1)");var e=["个人简历","基本资料","专业技能","工作经历","项目经验","自我评价"];$("#fp-nav ul li").each(function(t){this.dataset.toggle="tooltip",this.dataset.placement="left",$(this).attr("title",e[t])}),$('[data-toggle="tooltip"]').tooltip(),"block"==$(".navbar-toggle").css("display")&&$(".navbar-collapse li").on("click",function(){$(".navbar-toggle").trigger("click")}),$("#fp-nav").addClass("hidden-xs"),$(".item-1 .next-page").on("click",function(){$.fn.fullpage.moveSectionDown()}),setTimeout(function(){$(".item-1 .corner").show(),$(".resume-hide").show()},500)},onLeave:function(e,t,i){switch(4==t&&($(".pure").hide(),$(".sky").show()),6==t?$(".sky").hide():($(".item-6 .top").animate({height:"50%"},400),$(".item-6 .foot").animate({height:"50%"},400)),e){case 1:$(".item-1 .corner").hide(),$(".resume-hide").hide(),$(".navbar").removeClass("black");break;case 2:"down"==i?($(".item-2 .icon-infomation").addClass("zoomOutUp"),setTimeout(function(){$(".item-2 .icon-infomation").removeClass("zoomOutUp"),$(".item-2 .container").hide()},500)):$(".item-2 .container").hide();break;case 3:$(".item-3 .container").hide(),$(".navbar").removeClass("blue");break;case 4:$(".item-4 .container").hide();break;case 6:}},afterLoad:function(e,t){switch(6==t&&$(".pure").show(),e){case"page1":$(".item-1 .corner").show(),$(".resume-hide").show(),$(".navbar").addClass("black");break;case"page2":$(".item-2 .container").show();break;case"page3":$(".navbar").addClass("blue"),$(".item-3 .container").show();break;case"page4":$(".item-4 .container").show();break;case"page5":break;case"page6":setTimeout(function(){$(".item-6 .top").animate({height:"30%"},400),$(".item-6 .foot").animate({height:"30%"},400)},500)}},onSlideLeave:function(e,t,i,n){project_info()},afterSlideLoad:function(e,t,i){}})});