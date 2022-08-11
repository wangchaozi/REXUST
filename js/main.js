window.onload = function () {
    // let photo = document.querySelector('.photo6');
    // var word = document.querySelector('.word3');
    // if (photo.style.width == '33%') {
    //     word.style.visibility = 'visible';
    //     alert('12');
    // }
    // setTimeout(function() {
    //     word.style.visibility = 'visible';
    // }, 6000)
    // var str = "欢迎来的页面"
    //     n = 0;
    // var timer = setInterval(function() {
    //     if (n < str.length) {
    //         word.innerHTML += str.charAt(n);
    //         n++
    //     } else {
    //         clearInterval(timer);
    //     }
    // }, 100)
    // setTimeout(function() {
    //     word.innerHTML = "插入的内容";
    // }, 100)

    // 前面文字自动浮出动画
    var pp = document.querySelector(".word3");
    var str = "这是一个温馨又有爱的小窝~✨这里欢迎每一个热爱MC的玩家加入希望在我们的共同努力下MC发展的可以更加出色 Yep!"
    n = 0;
    var timer;
    timer = setInterval(function () {
        if (n < str.length) {
            pp.innerHTML += str.charAt(n);//sunstring(0,n)
            n++
        } else {
            clearInterval(timer);
        }
    }, 100)

    //动画结束后按钮跳出动画
    var but = document.querySelector(".but");
    setTimeout(function() {
        but.style.display = "block";
    }, 6000);

    //点击动画可以直接跳转首页
    let cartoon = document.getElementById("cartoon");
    let main = document.getElementById("main");
    cartoon.onclick = function () {
        cartoon.style.display = "none";
        setTimeout(function() {
            main.style.display = "block";
        }, 100)
    };

    //夜间模式
    var nav = document.querySelector(".nav");
    var navs = document.getElementsByClassName("navs");
    var body = document.getElementById("main");
    var sun = document.querySelector(".sun");
    var moon = document.querySelector(".moon");
    var but = document.querySelector(".button")
    var temp = 1;
    but.addEventListener("click", function() {
        if (temp == 1) {
            temp = 0;
            moon.style.display = "none";
            sun.style.display = "block";
            body.style.backgroundColor = "rgb(236,235,238)";
            nav.style.backgroundColor = "rgb(153,168,170)";
            for (let i = 0; i < navs.length; i++) {
                navs[i].style.color = "rgb(238, 232, 230)";
                navs[i].style.backgroundColor = "rgb(153,168,170)";
            }
        }else {
            temp = 1;
            sun.style.display = "none";
            moon.style.display = "block";
            
            body.style.backgroundColor = "rgb(38,50,56)";
            nav.style.backgroundColor = "rgb(38,50,56)";
            // nav.style.color = "aliceblue";
            for (let i = 0; i < navs.length; i++) {
                navs[i].style.color = "aliceblue";
                navs[i].style.backgroundColor = "rgb(38,50,56)";
            }
            
        }
    })
    //轮播图
    var arrow_l = document.querySelector(".arrow-l");
    var arrow_r = document.querySelector(".arrow-r");
    var box = document.querySelector(".lunbotu");
    box.addEventListener("mouseenter", function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timers);
        timers = NULL;
    })
    box.addEventListener("mouseleave", function() {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timers = setInterval(function() {
            arrow_r.click();
        }, 3000);
    })
    //动态生成小圆
    var ul = lunbotu.querySelector("ul");
    var ol = lunbotu.querySelector(".circle");
    for (let i = 0; i < ul.children.length; i++) {
        let li = document.createElement("li");
        //记录当前小圆圈的索引号，通过自定义属性来做
        li.setAttribute("index", i);
        ol.appendChild(li);
        //排他思想
        li.addEventListener("click", function() {
            for (let i = 0; i < ol.children.length; i++) {
                ol.children[i].style.backgroundColor = "white";
            }
            this.style.backgroundColor = "pink";
            var index = this.getAttribute("index");
            num = index;
            circle = index;
            var lunbotuWidth = lunbotu.offsetWidth;
            console.log(lunbotuWidth);
            console.log(index);
            animate(ul, -index * lunbotuWidth);
        })
    }
    ol.children[0].style.backgroundColor = "pink";
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    var circle = 0;
    arrow_r.addEventListener("click", function() {
        var lunbotuWidth = lunbotu.offsetWidth;
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * lunbotuWidth);
        circle++;
        if (circle == ol.children.length) {
            circle = 0;
        }
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].style.backgroundColor = "white";
        }
        ol.children[circle].style.backgroundColor = "pink";
    });

    arrow_l.addEventListener("click", function() {
        var lunbotuWidth = lunbotu.offsetWidth;
        if (num == 0) {
            ul.style.left = 0;
            num = ul.children.length - 1;
        }
        num--;
        animate(ul, -num * lunbotuWidth);
        circle--;
        if (circle < 0) {
            circle = ol.children.length - 1;
        }
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].style.backgroundColor = "white";
        }
        ol.children[circle].style.backgroundColor = "pink";
    });

    var timers = setInterval(function() {
        arrow_r.click();
    }, 3000);
};