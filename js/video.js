/**
 * Created by hooper on 2018/5/29.
 */
(function(w){
    var play={
        autoPlay:function(id,istouch){//媒体id,istouch是否开启触摸播放[自动播放视频]
            var media=document.getElementById(id);
            function toplay(){//播放
                if(media.paused) media.play();
            }
            if(istouch) document.addEventListener('touchstart',toplay);
            function wxhandle(){//微信播放
                toplay();
                document.addEventListener("WeixinJSBridgeReady", function(){toplay();}, false);
                document.removeEventListener('DOMContentLoaded', wxhandle);
            }
            document.addEventListener('DOMContentLoaded',wxhandle);
        },
        pausedclick:function(id,vid,fn){//[按钮id,媒体id,回调].点击事件-停止播放，操作
            var _self=this;
            document.getElementById(id).addEventListener('click',function(){
                document.getElementById(vid).pause();
                fn();
            });
        },
    };
    w.play=play;
})(window);