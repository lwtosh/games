Page({
      data: {
        time: "10.00", //倒计时
        animationMidd: '', //动画
        animationMiddHead:'',
        // flag: true,
        imgUrl: 'http://10168245.h40.faiusr.com/4/11/ACgIABAEGAAg8_PpyQUo-aWmrwYwpgE4yAE.png',
      },
      tiao:function(){
        var tx = 30
        this.animationMidd = wx.createAnimation({
           duration: 100,
           timingFunction: "step-end",
           delay: 0,
           transformOrigin: "50% 50% ",
         })
        this.animationMidd.translateY(Math.random() * -300).step();
        this.setData({ animationMidd: this.animationMidd.export() })
      },
        onLoad: function(options) {
          var cir = 0;
          var imgUrl1 = 'http://10168245.h40.faiusr.com/4/11/ACgIABAEGAAg9uPpyQUogO_luAMwpgE4yAE.png'
          var imgUrl = 'http://10168245.h40.faiusr.com/4/11/ACgIABAEGAAg8_PpyQUo-aWmrwYwpgE4yAE.png'
          this.animationMidd = wx.createAnimation({ // 动画
            duration: 100,
            timingFunction: "step-end",
            delay: 0,
            transformOrigin: "50% 50% ",
          });
          setInterval(function() { //定时器
            if (cir % 2 == 0) {
              this.animationMidd.scale(1.15).step(); //缩放
              this.setData({
                imgUrl: imgUrl1
              })
              // console.log(imgUrl1)
            } else {
              this.animationMidd.scale(1.0).step();
              // this.setData({
              //   imgUrl1: imgUrl
              // });
              // console.log(imgUrl)
            }
            this.setData({
              animationMidd: this.animationMidd.export()
            });
            cir++;
            if (cir == 1000) {
              cir = 0;
            }
            this.setData({
              imgUrl1: imgUrl
            });
          }.bind(this), 300);
        },
        onReady: function() {}
      })