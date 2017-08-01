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
let cx = 1;
let cy = 1;
let l = 0;
let checkpoint = 0;
let isOk = false;
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
function radishUp_timerFn(obj, imgw, imgh, imgl, imgt, cw, ch) {
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
            can.clearRect(imgl,imgt-l,imgw,imgh+l);
            can.drawImage(obj, x * imgw, y * imgh, imgw, imgh, imgl, imgt - l, imgw, imgh);
            cloudAnimateFn(cloudArr, cw);
        }
        , time);
}


/********************************换背景******************************************/
function bgChange(n) {
    img.src = bg[n].src;
}
/***********************************判断什么时候关过关***************************************/
//工具 和 碰撞；


/**************************************************************************/
function cloudAnimateFn(arr) {
    return arr.forEach(function (item, index) {
        let _this=item;
        cloudAnimate = window.setInterval(
            function () {
                cx++;
                if (cx + _this.w >= cw) {
                    cx--;
                    cy = cy;
                    window.clearInterval(cloudAnimate);
                }
                if (radish.t > _this.t) {
                    cy++;
                    cx = cx;
                }
                if(_this.t+cy*10>ch){
                    window.clearInterval(cloudAnimate);
                }
                can.clearRect(_this.l,_this.t,_this.w, _this.h);
                console.log(_this.w,_this.h,_this.l,_this.t);
                can.drawImage(_this, _this.l + cx * 10, _this.t + cy * 10);

            }, time);
    });
}


/*
 let n = 0;
 let img = new Image;
 img.src = bg[0].src;
 img.onload = function () {
 timer1 = window.setTimeout(bgImg, 3000);
 };

 function bgImg() {
 n++;
 if(n==bg.length){
 window.clearTimeout(timer1);
 n=0
 }
 img.src = bg[n].src;
 can2.drawImage(img, 0, 0, cw2, ch2);
 }

 /* if (m == 10) {
 m = 0; //x方向
 }
 if (i == 3) {
 i = 1;//y方向
 }
 if (ly - y * 20 < rh) {
 //换背景；
 window.clearInterval(radishUp_timer);
 }*/


/*
 timer = window.setInterval(
 function () {
 y++;//上移
 i++;
 m++;
 if (m == 10) {
 m = 0; //x方向
 }
 if (i == 3) {
 i = 1;//y方向
 }
 if (ly - y * 20 < rh) {
 //换背景；
 window.clearInterval(timer);
 }
 can.drawImage(_this, m * rw, rh * i, rw, rh, _this.l,_this.t, rw, rh);
 console.log(_this.l, _this.t,cloudArr[0].l,cloudArr[0].t);
 }, 1000);

 timer2 = window.setTimeout(
 function () {
 if(index==cl_len){
 window.clearTimeout(timer2);
 }
 if (clw < parseInt(Math.random() * max_w) - cls * t < max_w + clw && clh < parseInt(Math.random() * max_h) - cls * t < max_h + clh) {
 t++;
 }
 else {
 t = -t;
 }
 can.clearRect(0,0,cw,ch);
 item.src = cloud_images[1].src;

 }, 200);

 *!/
 */
