/**
 * Created by Administrator on 2017/7/31.
 */
let radishAnimate = null;
let cloudAnimate = null;
let radishUp_timer = null;
let radishDown_timer = null;
let cloudUp_timer = null;
let cloudDown_timer = null;
let time = 1000;
let x = 0;
let y = 0;
let l = 0;
let n = 0;
let m = 0;
let s_= Math.random()*4-2;
let s=2;
let checkpoint = 0;
let isOk = false;
let cl_Tool_len=3;
let k=parseInt(Math.random()*cl_Tool_len);
/**********************************小人的运行****************************************/
function radishAnimateFn(obj, imgw, imgh, imgl, imgt) {
    return radishAnimate = window.setInterval(
        function () {
            x++;
            y++;
            if (x == 10) x = 0;
            if (y == 3) y = 0;
            can.drawImage(obj, x * imgw, y * imgh, imgw, imgh, imgl, imgt, imgw, imgh);
        }
        , time);
}
function radishUp_timerFn(obj, imgw, imgh, imgl, imgt, cw, ch,tool) {
    radishUp_timer = window.setInterval(
        function () {
            x++;
            y++;
            l = l + 10;
            if (imgt + l < imgh) window.clearInterval(radishUp_timer);
            if (x == 10) x = 0;
            if (y == 3) y = 0;
            if (isOk) {
                //是否过关
                if (obj.l + l > ch / 2) {
                    //换背景
                    checkpoint++;
                    bgChange(checkpoint);
                }
            }
            can.clearRect(imgl, imgt - l, imgw, imgh + l);
            can.drawImage(obj, x * imgw, y * imgh, imgw, imgh, imgl, imgt - l, imgw, imgh);
            bump(obj,group_b);
        }
        , time/2);
}


/********************************换背景******************************************/
function bgChange(n) {
    img.src = bg[n].src;
}
/***********************************判断什么时候关过关***************************************/
//工具 和 碰撞；


/********************************云的运动******************************************/
function cloudAnimateFn(arr, cw) {
    return cloudAnimate = window.setInterval(
        function () {
            can3.clearRect(0,0,cw3,ch3);
            arr.forEach(function (item,index) {
                let _this = item;
                if (_this.l + _this.w >= cw && _this.l - _this.w< 0)
                {
                    n++;
                    return ;
                }
                if (radish.t < _this.t) {
                    m=m+10;
                    return ;
                }
                if (_this.t + _this.h> ch && _this.t-_this.h< 0){
                    m=m+10;
                    return ;
                }
                can3.drawImage(_this, _this.l +s_+ s* (n++), _this.t + s* m, _this.w, _this.h);
                toolAttr(cloudArr);
            });
            haveTool(cloudArr);
        }, time
    )
}
/*******************************云朵绑定工具属性******************************************/
function toolAttr(cloudArr){
    for(let j=0;j<cl_Tool_len;j++){
        let attr=cloudArr[parseInt(Math.random()*cl_len)];
        attr.setAttribute('data-tool','0');
        attr.setAttribute('name',l);
        if(attr.getAttribute('data-tool')=='0'){
            tool(attr.l,attr.t);
        }
    }
}
/*******************************绑定工具******************************************/
function tool(cl_l,cl_t){
        let toolImg = new Image;
        toolImg.src = cloud_fn[k].src;
        toolImg.onload= function () {
             let _this=this;
            _this.w=this.width;
            _this.h=this.height;
            _this.l=cloudArr[0].w/2+cl_l-_this.w/2;
            _this.t=_this.h+cl_t;
            _this.name=k;
            can4.clearRect(0,0,cw3,ch3);
            can4.drawImage(_this,_this.l,_this.t,_this.w,_this.h);
        };
}
/*******************************判断工具******************************************/
function haveTool(arr){
    arr.forEach(function (item, index) {

    })
}
/*******************************判断工具和小人 的相撞******************************************/
function bump(radish,arr){
    /*
         0<Math.abs(radish.l-img.l)<img&&0<Math.abs(radish.l-img.l-img.w)<img;
        radish.l-img.l<0
        radish.l<img.l+img.w
        arr;
        img , tool

        l_x
        l t;


     */
    arr.forEach(function (item,index) {
        if(0<Math.abs(radish.l-item.l)<item.w&&0<Math.abs(radish.l-item.l-item.w)<item.w){
            if(tool.name==10){
                radish.src = cloud_change[0].src;
            }
            if(tool.name==1){
                radish.src = cloud_change[1].src;
            }
            if(tool.name==1){
                radish.src = cloud_change[2].src;
            }
            isOk=true;
        }  else{
            isOk=false;
            can.drawImage(radish, x * radish, y * radish, radish.w, radish.h,(cw-radish.w)/2,ch,  radish.w,  radish.h);
        }
    });


}
