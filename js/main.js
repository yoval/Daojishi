var endtime,nowtime,lefttime,d,h,m,s;
var sh;
$.fn.countDown = function(_boolean,_this){
    var sh = [];
    // var _this = $(this);
    _this.each(function(index, el){

    var thisObj = $(this);
    sh[index]=setInterval(function(){
        var times = thisObj.data("times");//获得timeBox的data值，即结束时间
        endtime = new Date(times);//把data值转换成时间
        nowtime = new Date();//获得当前时间
        lefttime=parseInt((endtime.getTime()-nowtime.getTime())/1000); //结束时间-当前时间得到毫秒数，再除以1000得到两个时间相差的秒数
        if(_boolean){
            d=parseInt(lefttime/3600/24);
            h=parseInt((lefttime/3600)%24);
        }else{
            d=parseInt(lefttime/3600/24)*24;
            h=parseInt((lefttime/3600)%24)+d;
        }

        m=parseInt((lefttime/60)%60);
        s=parseInt(lefttime%60);
        if(endtime.getTime() <= nowtime.getTime()){
            d = h = m = s = "0";
            clearInterval(sh[index]);
        }
        // 三目运算符
        d = d < 10 ? "0"+ d : d;
        h = h < 10 ? "0"+ h : h;
        m = m < 10 ? "0"+ m : m;
        s = s < 10 ? "0"+ s : s;

        if(_boolean){
            thisObj.find(".date").text(d);
        }

        thisObj.find(".hour").text(h);
        thisObj.find(".minutes").text(m);
        thisObj.find(".seconds").text(s);

        if(lefttime<=0){
            d = h = m = s = "00";
            clearInterval(sh[index]);
        }
    },1000);
    });
}


// 调用

$(".timeBox").countDown(true,$(".timeBox"));
$(".timeBox2").countDown(false,$(".timeBox2"));
