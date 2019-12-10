
function Tips(){

    this.normalTip=function(options){
        var localOption={
            message:"",
            duration:1000,
        };
        $.extend(localOption,options);
        console.log(localOption)
        var tipHtml=$("<div class=\"slz-tip all-center\"><div>"+localOption.message+"</div></div>")
        $("body").append(tipHtml)
        tipHtml.animate({
            opacity:1
        },500,function (){
            setTimeout(function (){
                tipHtml.animate({
                    opacity:1
                },500,function (){
                    setTimeout(function (){
                        tipHtml.remove();
                    },500)
                })
            },localOption.duration-500)
        })
    }
}
var tips=new Tips()

function setLeftHeight(dom) {
    var parentHeight=dom.parent().height();
    var borthersHeight=0;
    var padding=0;
    dom.prevAll().each(function () {
        borthersHeight+=$(this).innerHeight()
        padding+=$(this).css("paddingTop").split("px")[0];
        padding+=$(this).css("paddingBottom").split("px")[0];
    })
    padding+=dom.css("paddingTop").split("px")[0];
    padding+=dom.css("paddingBottom").split("px")[0];
    var thisHeight=parentHeight-borthersHeight-padding;
    dom.height(thisHeight)
    return thisHeight;
}

Date.prototype.getFormattedDate=function (){
    var timeStr=this.getFullYear()+"-"+(this.getMonth()+1)+"-"+this.getDate()+" "+this.getHours()+":"+this.getMinutes();
    return timeStr;
}


String.prototype.in=function (arr){
    if(!arr instanceof Array) return false;
    for(var i=0;i<arr.length;i++){
        if(this==arr[i]){
            return true;
        }
    }
    return false;
}


String.prototype.endIn=function (arr){
    if(!arr instanceof Array) return false;
    for(var i=0;i<arr.length;i++){
        if(this.indexOf(arr[i], this.length - arr[i].length) !== -1){
            return true;
        }
    }
    return false;

}
function getJson(url,key){
    var result;
    $.ajax({
        type: "GET",
        url: url,
        dataType:"json",
        async: false,
        success:function (data) {
            if(key!=null){
                result=data[key]
            }else{
                result=data;
            }
        },
        error:function (e){
            return null;
        }
    })
    return result;
}

function axiosNew(params){
    var defaultOptions={
        method:"post",
        url: "",
        data:{},
        responseType: "json",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        transformRequest: [function (data) {
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }]
    }
    var options=$.extend(defaultOptions,params);
    return axios(options);
}

