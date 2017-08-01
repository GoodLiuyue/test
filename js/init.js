/**
 * Created by Administrator on 2017/7/31.
 */
let canvas = document.getElementById('canvas1');
let can = canvas.getContext('2d');
let canvas2 = document.getElementById('canvas2');
let can2 = canvas2.getContext('2d');
let cw = canvas.width;
let ch = canvas.height;
let cw2 = canvas2.width;
let ch2 = canvas2.height;

/**********************************背景******************************/
let img = new Image;
    img.src = bg[0].src;
    img.onload = function () {
        can2.drawImage(img, 0, 0, cw2, ch2);
    };
/********************************小人*****************************/
let radish = new Image;
    radish.src = radish_images[0].src;
    radish.onload = function () {
        let _this=this;
        let rw = parseInt(this.width / 10);
        let rh = parseInt(this.height / 3);
        let ly = ch - rh;
        let lx = (cw - rw) / 2;
        let y=0;
        _this.w=rw;
        _this.h=rh;
        _this.l=lx;
        _this.t= ly - y* 20;

        can.drawImage(_this,0, rh, rw, rh, _this.l,_this.t, rw, rh);
        radishUp_timerFn(_this,rw,rh,_this.l,_this.t,cw,ch);
    };

/************************************云*************************/

let cloudArr = [];
let cl_len = 10;
for (let l = 0; l < cl_len; l++) {
    cloudArr[l] = new Image;
    cloudArr[l].src = cloud_images[0].src;
    cloudArr.push(cloudArr[l]);
}
cloudArr.forEach(function (item,index) {
    item.onload=function(){
        let _this=this;
        let clw = this.width;
        let clh = this.height;
        let max_w = cw - 2 * clw;
        let max_h = ch - 2 * clh;
        let cls = 1;
        let t = 0;
        _this.w=clw;
        _this.h=clh;
        _this.l=parseInt(Math.random() * max_w) - cls * t;
        _this.t= parseInt(Math.random() * max_h) - cls * t;
        can.drawImage(item, _this.l,_this.t);
    };
});
