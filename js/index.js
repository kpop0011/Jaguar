$('.gnb li').click(function(e){
    e.preventDefault();
    $('header').css({
        'backgroundColor':'#fff',
        'borderBottom': '1px solid #eee',
        'color': '#111'
    });

    $('.subGnb').css({
        'display':'block'
    });

    let i = $(this).index();

    if(i == 0){
        $('.subGnb .subModel').css({
            'display':'flex'
        }).siblings().css({
            'display':'none'
        })
    } else if(i == 1){
        $('.subGnb .subShop').css({
            'display':'block'
        }).siblings().css({
            'display':'none'
        })
    } else if(i == 2){
        $('.subGnb .subMember').css({
            'display':'block'
        }).siblings().css({
            'display':'none'
        })
    } else if(i == 3){
        $('.subGnb .subCustomer').css({
            'display':'block'
        }).siblings().css({
            'display':'none'
        })
    }

    $('.close').css({
        'display':'block'
    });
});
$('.close').click(function(){
    $('header').css({
        'backgroundColor':'inherit',
        'borderBottom': '0'
    });

    $('.subGnb').css({
        'display':'none'
    });
});

$('.model .slide').slick({
    'infinite': true,
    'variableWidth': true,
    'slidesToShow': 3,
    'centerMode': true,
    'nextArrow' : '.model .slideNext',
    'prevArrow' : '.model .slidePrev',
});

$('.promise .slide').slick({
    'infinite': false,
    'variableWidth': true,
    'slidesToShow': 2,
    'nextArrow' : '.promise .slideNext',
    'prevArrow' : '.promise .slidePrev',
});

$('.subMenu .item').mouseover(function(){
    $(this).css({
        'backgroundColor':'#111',
        'color':'#ddd'
    });

    $(this).find('.icon1').css({
        'display':'none'
    });

    $(this).find('.icon2').css({
        'display':'block'
    });

    $(this).find('.slide1').css({
        'display':'none'
    });

    $(this).find('.slide2').css({
        'display':'block'
    });
}).mouseout(function(){
    $(this).css({
        'backgroundColor':'#ddd',
        'color':'#111'
    });

    $(this).find('.icon1').css({
        'display':'block'
    });
    
    $(this).find('.icon2').css({
        'display':'none'
    });

    $(this).find('.slide1').css({
        'display':'block'
    });
    
    $(this).find('.slide2').css({
        'display':'none'
    });
});

$(window).mousewheel(function(e,d){
    if(d>0){
        $('header').stop().slideDown().css({
            'position': 'fixed',
            
        });
    } else if(d<0){
        $(window).scroll(function(){
            let scr = $(window).scrollTop();

            if(scr >= 0 && scr < 100){
                $('header').css({
                    'position': 'absolute',
                    'backgroundColor':'inherit'
                })
            }
        });
        $('header').stop().slideUp().css({
            'backgroundColor':'rgba(255,255,255,0.8)',
            'border':'0'
        });
        $('.subGnb').css({
            'display' : 'none'
        });
    }
});

$('.nationDown').click(function(e){
    e.preventDefault();
    $('.subNation').stop().slideDown().css({
        'display': 'flex'
    })
    $(this).css({
        'display':'none'
    });
    $('.nationUp').css({
        'display':'block'
    })
});
$('.nationUp').click(function(e){
    e.preventDefault();
    $('.subNation').stop().slideUp()
    $(this).css({
        'display':'none'
    });
    $('.nationDown').css({
        'display':'block'
    })
});