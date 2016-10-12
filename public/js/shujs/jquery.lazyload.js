(function(a){
    var b=true;
    a.fn.lazyload=function(c){
        var d={
            threshold:0,
            failurelimit:0,
            event:"scroll",
            effect:"show",
            container:window,
            func:0
        };

        if(c){
            a.extend(d,c)
            }
            var e=this;
        if("scroll"==d.event){
            a(d.container).bind("scroll",function(h){
                var f=0;
                e.each(function(){
                    if(a.abovethetop(this,d)||a.leftofbegin(this,d)){}else{
                        if(!a.belowthefold(this,d)&&!a.rightoffold(this,d)){
                            if(d.func&&b){
                                b=false;
                                d.func()
                                }else{
                                a(this).trigger("appear")
                                }
                            }else{
                        if(f++>d.failurelimit){
                            return false
                            }
                        }
                }
            });
    var g=a.grep(e,function(i){
        return !i.loaded
        });
    e=a(g)
    })
}
this.each(function(){
    var f=this;
    if(undefined==a(f).attr("original")){
        a(f).attr("original",a(f).attr("src"))
        }
        if("scroll"!=d.event||undefined==a(f).attr("src")||d.placeholder==a(f).attr("src")||(a.abovethetop(f,d)||a.leftofbegin(f,d)||a.belowthefold(f,d)||a.rightoffold(f,d))){
        if(d.placeholder){
            a(f).attr("src",d.placeholder)
            }else{
            a(f).removeAttr("src")
            }
            f.loaded=false
        }else{
        f.loaded=true
        }
        a(f).one("appear",function(){
        if(!this.loaded){
            a("<img />").bind("load",function(){
                a(f).hide().attr("src",a(f).attr("original"))[d.effect](d.effectspeed);
                f.loaded=true
                }).attr("src",a(f).attr("original"))
            }
        });
if("scroll"!=d.event){
    a(f).bind(d.event,function(g){
        if(!f.loaded){
            a(f).trigger("appear")
            }
        })
}
});
-function(){
    var f=0;
    e.each(function(){
        if(a.abovethetop(this,d)||a.leftofbegin(this,d)){}else{
            if(!a.belowthefold(this,d)&&!a.rightoffold(this,d)){
                if(d.func&&b){
                    b=false;
                    d.func()
                    }else{
                    a(this).trigger("appear")
                    }
                }else{
            if(f++>d.failurelimit){
                return false
                }
            }
    }
});
var g=a.grep(e,function(h){
    return !h.loaded
    });
e=a(g)
}();
return this
};

a.belowthefold=function(d,e){
    if(e.container===undefined||e.container===window){
        var c=a(window).height()+a(window).scrollTop()
        }else{
        var c=a(e.container).offset().top+a(e.container).height()
        }
        return c<=a(d).offset().top-e.threshold
    };

a.rightoffold=function(d,e){
    if(e.container===undefined||e.container===window){
        var c=a(window).width()+a(window).scrollLeft()
        }else{
        var c=a(e.container).offset().left+a(e.container).width()
        }
        return c<=a(d).offset().left-e.threshold
    };

a.abovethetop=function(d,e){
    if(e.container===undefined||e.container===window){
        var c=a(window).scrollTop()
        }else{
        var c=a(e.container).offset().top
        }
        return c>=a(d).offset().top+e.threshold+a(d).height()
    };

a.leftofbegin=function(d,e){
    if(e.container===undefined||e.container===window){
        var c=a(window).scrollLeft()
        }else{
        var c=a(e.container).offset().left
        }
        return c>=a(d).offset().left+e.threshold+a(d).width()
    };

a.extend(a.expr[":"],{
    "below-the-fold":"$.belowthefold(a, {threshold : 0, container: window})",
    "above-the-fold":"!$.belowthefold(a, {threshold : 0, container: window})",
    "right-of-fold":"$.rightoffold(a, {threshold : 0, container: window})",
    "left-of-fold":"!$.rightoffold(a, {threshold : 0, container: window})"
})
})(jQuery);