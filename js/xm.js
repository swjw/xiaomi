
	//header 选项卡
	var timerx = null;
	$('#header p').find('span').eq(3).on('mouseenter',function(){
		$(this).find('a').addClass('active');
		$(this).find('em').finish().animate({height:97}).html('购物车中什么都没有，赶紧选购吧！');
	}).mouseleave(function(){
		var _this = this;
		timerx = setTimeout(function(){
			$(_this).find('a').removeClass('active');
			$(_this).find('em').finish().animate({height:0}).html('');
		},300)
	})
	$('#header p').find('span').eq(3).find('em').on('mouseover',function(){
		clearTimeout(timerx);
	})
	//搜索框
	$('#seacher').find('input[type=text]').on('focus',function(){
		$('.seacher_inner').hide();
		$(this).css('border-color','#ff6700');
		$('#seacher').find('input[type=submit]').css('border-color','#ff6700');
		$('.s_list').show();
	}).blur(function(){
		$('.seacher_inner').show();
		$(this).css('border-color','#B6B6B6');
		$('#seacher').find('input[type=submit]').css('border-color','#B6B6B6');
		$('.s_list').hide ();
	})



	//  搜索选项卡
	//获取的数据
	var  cpArr =
	[
			 [
			{'img':'./images/tab/stab1.png','tiltle':'小米5s','price':'1999元起'},
			{'img':'./images/tab/stab2.png','tiltle':'小米5s','price':'1999元起'},
			{'img':'./images/tab/stab3.png','tiltle':'小米5s','price':'199元起'},
			{'img':'./images/tab/stab4.png','tiltle':'小米5s','price':'1999元起'}
			],
			[
			{'img':'./images/tab/stab2.png','tiltle':'小米5s','price':'999元起'},
			{'img':'./images/tab/stab3.png','tiltle':'小米5s','price':'1999元起'},
			{'img':'./images/tab/stab4.png','tiltle':'小米5s','price':'1999元起'},
			{'img':'./images/tab/stab6.png','tiltle':'小米5s','price':'1999元起'},
			{'img':'./images/tab/stab3.png','tiltle':'小米5s','price':'1999元起'},
			{'img':'./images/tab/stab1.png','tiltle':'小米5s','price':'1999元起'}],
			[
			{'img':'./images/tab/stab1.png','tiltle':'小米5s','price':'1999元起'},
			{'img':'./images/tab/stab3.png','tiltle':'小米5s','price':'1999元起'},
			{'img':'./images/tab/stab4.png','tiltle':'小米5s','price':'1999元起'},
			{'img':'./images/tab/stab2.png','tiltle':'小米5s','price':'1999元起'},
			{'img':'./images/tab/stab3.png','tiltle':'小米5s','price':'1999元起'},
			{'img':'./images/tab/stab5.png','tiltle':'小米5s','price':'1999元起'}],
			 [
			{'img':'./images/tab/stab1.png','tiltle':'小米5s','price':'1999元起'},
			{'img':'./images/tab/stab3.png','tiltle':'小米5s','price':'1999元起'},
			{'img':'./images/tab/stab2.png','tiltle':'小米5s','price':'1999元起'},
			{'img':'./images/tab/stab3.png','tiltle':'小米5s','price':'1999元起'},
			{'img':'./images/tab/stab4.png','tiltle':'小米5s','price':'1999元起'},
			{'img':'./images/tab/stab5.png','tiltle':'小米5s','price':'1999元起'}],
		 	[
			{'img':'./images/tab/stab3.png','tiltle':'小米5s','price':'1999元起'},
			{'img':'./images/tab/stab3.png','tiltle':'小米5s','price':'1999元起'},
			{'img':'./images/tab/stab3.png','tiltle':'小米5s','price':'1999元起'},
			{'img':'./images/tab/stab3.png','tiltle':'小米5s','price':'1999元起'},
			{'img':'./images/tab/stab4.png','tiltle':'小米5s','price':'1999元起'},
			{'img':'./images/tab/stab5.png','tiltle':'小米5s','price':'1999元起'}],
			 [
			{'img':'./images/tab/stab3.png','tiltle':'小米5s','price':'1999元起'},
			{'img':'./images/tab/stab3.png','tiltle':'小米5s','price':'1999元起'},
			{'img':'./images/tab/stab3.png','tiltle':'小米5s','price':'1999元起'},
			{'img':'./images/tab/stab3.png','tiltle':'小米5s','price':'1999元起'}],
			 [
			{'img':'./images/tab/stab3.png','tiltle':'小米5s','price':'1999元起'},
			{'img':'./images/tab/stab3.png','tiltle':'小米5s','price':'1999元起'},
			{'img':'./images/tab/stab3.png','tiltle':'小米5s','price':'1999元起'},
			{'img':'./images/tab/stab3.png','tiltle':'小米5s','price':'1999元起'}]]
	// for(var i = 0;i<cpArr.length;i++)
	// {
	// 	$list_ul = $('<ul>');
	// 	for(var j = 0;j<cpArr[i].length;j++)
	// 	{
	// 		$list_li = $('<li>');
	// 		for(var k in cpArr[i][j])
	// 		{

	// 		}
	// 	}
	// }
	//添加数据
	var str1 = ''
	for(var i = 0;i<cpArr.length;i++)
	{	var str = ''
		for(var j = 0;j<cpArr[i].length;j++)
		{
			if(j==cpArr[i].length-1)
			{
				str +='<li><a href="#"><img src="'+cpArr[i][j]['img']+'" alt=""></a><p>'+cpArr[i][j]['tiltle']+'</p><span>'+cpArr[i][j]['price']+'</span></li>';
			}else{
				str +='<li><a href="#"><img src="'+cpArr[i][j]['img']+'" alt=""></a><p>'+cpArr[i][j]['tiltle']+'</p><span>'+cpArr[i][j]['price']+'</span><div></div></li>';
			}
		}
		str1 += '<ul>'+str+'</ul>';
	}
	$('.cp_tabs').html(str1);

	//实现移动效果
	var timerc = null;
	$('.cp_tabs').css('width',$(window).width());
	// $('.cp_list').find('a').on('mouseover',function(){
		$('.cp_list').find('a').each(function(i,elem){
			if(i<$('.cp_list').find('a').length-2)
			{
				$(elem).on('mouseover',function(){
					clearTimeout(timerc)
					$('.cp_tabs').show().stop().animate({height:230},300);
					$('.cp_tabs').find('ul').eq(i).show().siblings().hide();
				}).mouseout(function(){
					timerc = setTimeout(function(){
						$('.cp_tabs').stop().animate({height:0},300,function(){
							 $('.cp_tabs').find('ul').hide();
							 $('.cp_tabs').hide();
						});
					},300)
				})
			}
		})
		$('.cp_tabs').on('mouseover',function(){
			clearTimeout(timerc);
		}).mouseout(function(){
			timerc = setTimeout(function(){
						$('.cp_tabs').stop().animate({height:0},300,function(){
							 $('.cp_tabs').find('ul').hide();
							 $('.cp_tabs').hide();
						});
					},300)
		})
	

	// 	$('.cp_tabs').animate({height:230});
	// 	$('.cp_tabs').find('ul').show();
	// }).mouseout(function(){
	// 	$('.cp_tabs').find('ul').hide();
	// 	$('.cp_tabs').animate({height:0});
	// })
	
	// 轮播图动态添加

	var imgArr = ["./images/imgbox1.jpg","./images/imgbox2.jpg","./images/imgbox3.jpg","./images/imgbox4.jpg","./images/imgbox5.jpg"]

	var img_str = '';
	for(var i = 0;i<imgArr.length;i++)
	{
		img_str +='<li><a href="javascript:;"><img src='+imgArr[i]+' alt=""></a></li>'
	}

	$('<ul>'+img_str+'</ul>').prependTo($('.imgbox'));
	$('.imgbox').find('li').eq(0).addClass('current');

	for(var i =0 ;i<imgArr.length;i++)
	{
		if(i==0)
		{

			$('<a href="javascript:;" class="active"></a>').appendTo($('.imgbox .circle'));
		}else{
			$('<a href="javascript:;"></a>').appendTo($('.imgbox .circle'));
		}
	}


	var idx = 0;
	$('.btn').find('a').eq(0).on('click',function(){
		idx--;
		if(idx<0)
		{
			idx = imgArr.length-1;
		}
		change();
	})
	$('.btn').find('a').eq(1).on('click',function(){
		idx++;
		if(idx> imgArr.length-1)
		{
			idx = 0;
		}
		change();
	})
	function change(){
		$('.imgbox').find('li').eq(idx).fadeIn(500).siblings().hide();
		$('.circle').find('a').eq(idx).addClass('active').siblings().removeClass('active');
	}
	$('.circle').find('a').on('click',function(){
		idx = $(this).index();
		change();
	})
	var timer = null;
	$('.imgbox').on('mouseover',function(){
		clearInterval(timer);
	}).mouseout(function(){
		timer  = setInterval(function(){
		idx++;
		if(idx> imgArr.length-1)
		{
			idx = 0;
		}
		change();
		},5000);
	})
	timer  = setInterval(function(){
		idx++;
		if(idx> imgArr.length-1)
		{
			idx = 0;
		}
		change();
	},2000);

	// 轮播图选项卡
	//数据
	var cuArr =[
			[
			[{'img':"./images/optab/otab1.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab3.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'}]
			],


			[
			[{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'}], 

			[{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'}]
			],



			[
			[{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'}], 

			[{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'}],

			[{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'}]
			],

			[
			[{'img':"./images/optab/otab1.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab3.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab3.png",'title':'小米5s','xg':'选购'}],

			[{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'},
			{'img':"./images/optab/otab2.png",'title':'小米5s','xg':'选购'}]
			]]

		// alert(cuArr[1][1][1]['img'])
		//添加数据；
		for(var i = 0;i<cuArr.length;i++)//div
		{	var str1 = '';
			for(var j = 0;j<cuArr[i].length;j++)//ul
			{	var str = '';
				for(var k = 0;k<cuArr[i][j].length;k++)//li
				{
					str +='<li><a href="#"><img src="'+cuArr[i][j][k]['img']+'" alt=""><span>'+cuArr[i][j][k]['title']+'</span></a><a href="#">选购</a></li>';
				}
				str1+= '<ul>'+str+'</ul>';
			}
			$('<div>'+str1+'</div>').appendTo($('#cursol .options>ul>li').eq(i));
		}
		$('#cursol .options>ul>li').find('div').addClass('op_tab');
		$('#cursol .options>ul>li').find('div').each(function(){
			var w = $(this).find('ul').length;
			$(this).css('width',265*w);
		})
		
		// console.log(str2);
		// $('#cursol .options>ul>li').each(function(i,elem){
		// 	$()
		// })



	$('#cursol .options>ul>li').on('mouseover',function(){
		$(this).find('div').show();
		$(this).find('a').eq(0).addClass('active');
	}).mouseout(function(){
		$(this).find('div').hide();
		$(this).find('a').eq(0).removeClass('active');
	})



	// $('#cursol').find('.options').find('li').on('mouseover',function(){
	// 	$('.op_tab').show();
	// }).mouseout(function(){
	// 	$('.op_tab').hide();
	// })
	// mxcp
	yd('#mxdp');
	//wntj
	yd('#wntj');
	function yd(obj){
	var onoff = true;
	$(obj).find('.btn').find('a').eq(0).on('click',function(){
		move();
	})
	$(obj).find('.btn').find('a').eq(1).on('click',function(){
		move();
	})
	function move(){
		if(onoff){
			$(obj).find('ul').animate({left:-1240});
			$(obj).find('.btn').find('i').css('left','35px');
			$(obj).find('.btn').find('a').eq(1).addClass('active').siblings().removeClass('active');
			onoff = false;
		}else{
			$(obj).find('ul').animate({left:0});
			$(obj).find('.btn').find('i').css('left',0);
			$(obj).find('.btn').find('a').eq(0).addClass('active').siblings().removeClass('active');
			onoff =true;
		}
	}
	var timerm = null;
	timerm = setInterval(move,5000);
	$(obj).find('ul').on('mouseover',function(){
		clearInterval(timerm);
	}).mouseout(function(){
		timerm = setInterval(move,5000);
	});
	var arrColor = ['orange','green','blue','yellow','red']
	$(obj).find('ul').find('li').each(function(i,elem){
		$(elem).css('border-color',arrColor[i%arrColor.length]);
	})
	}



	//dp
	
	var  dArr = [
			[
			{'src':"./images/dp/rm2.jpg",'title':'红米手机3x 联通版','price':'799元','pl':'47人评价','em':'新品','zg':'手环很好用啊！手环很好用啊！小米越来越好','lz': '来自外星人的评价','cl':'green'},
			{'src':"./images/dp/rm3.jpg",'title':'红米手机3x 联通版','price':'799元','pl':'47人评价','em':'免运费','zg':'手环很好用啊！手环很好用啊！小米越来越好','lz': '来自外星人的评价','cl':'yellow'},
			{'src':"./images/dp/rm4.jpg",'title':'红米手机3x 联通版','price':'799元','pl':'47人评价','em':'打5折','zg':'手环很好用啊！手环很好用啊！小米越来越好','lz': '来自外星人的评价','cl':'red'},
			{'src':"./images/dp/rm1.jpg",'title':'红米手机3x 联通版','price':'799元','pl':'47人评价','em':'免运费','zg':'手环很好用啊！手环很好用啊！小米越来越好','lz': '来自外星人的评价','cl':'yellow'},
			{'src':"./images/dp/rm2.jpg",'title':'红米手机3x 联通版','price':'799元','pl':'47人评价','em':'新品','zg':'手环很好用啊！手环很好用啊！小米越来越好','lz': '来自外星人的评价','cl':'green'},
			{'src':"./images/dp/rm1.jpg",'title':'红米手机3x 联通版','price':'799元','pl':'47人评价','zg':'手环很好用啊！手环很好用啊！小米越来越好','lz': '来自外星人的评价'},
			{'src':"./images/dp/rm4.jpg",'title':'红米手机3x 联通版','price':'799元','pl':'47人评价','zg':'手环很好用啊！手环很好用啊！小米越来越好','lz': '来自外星人的评价'},
			{'src':"./images/dp/rmer4.jpg",'title':'小米小钢炮..','price':'99元'}
			],

			[{'src':"./images/dp/rm1.jpg",'title':'红米手机3x 联通版','price':'799元','pl':'47人评价','em':'新品','zg':'手环很好用啊！手环很好用啊！小米越来越好','lz': '来自外星人的评价'},
			{'src':"./images/dp/rm1.jpg",'title':'红米手机3x 联通版','price':'799元','pl':'47人评价','em':'新品','zg':'手环很好用啊！手环很好用啊！小米越来越好','lz': '来自外星人的评价'},
			{'src':"./images/dp/rm1.jpg",'title':'红米手机3x 联通版','price':'799元','pl':'47人评价','em':'新品','zg':'手环很好用啊！手环很好用啊！小米越来越好','lz': '来自外星人的评价'},
			{'src':"./images/dp/rm1.jpg",'title':'红米手机3x 联通版','price':'799元','pl':'47人评价','em':'新品','zg':'手环很好用啊！手环很好用啊！小米越来越好','lz': '来自外星人的评价'},
			{'src':"./images/dp/rm1.jpg",'title':'红米手机3x 联通版','price':'799元','pl':'47人评价','em':'免运费','zg':'手环很好用啊！手环很好用啊！小米越来越好','lz': '来自外星人的评价','cl':'yellow'},
			{'src':"./images/dp/rm2.jpg",'title':'红米手机3x 联通版','price':'799元','pl':'47人评价','em':'新品','zg':'手环很好用啊！手环很好用啊！小米越来越好','lz': '来自外星人的评价','cl':'green'},
			{'src':"./images/dp/rm1.jpg",'title':'红米手机3x 联通版','price':'799元','pl':'47人评价','em':'新品','zg':'手环很好用啊！手环很好用啊！小米越来越好','lz': '来自外星人的评价'},
			{'src':"./images/dp/rmer4.jpg",'title':'小米机关枪..','price':'99元'}
			],

			[{'src':"./images/dp/rm1.jpg",'title':'红米手机3x 联通版','price':'799元','pl':'47人评价','em':'免运费','zg':'手环很好用啊！手环很好用啊！小米越来越好','lz': '来自外星人的评价','cl':'yellow'},
			{'src':"./images/dp/rm2.jpg",'title':'红米手机3x 联通版','price':'799元','pl':'47人评价','em':'新品','zg':'手环很好用啊！手环很好用啊！小米越来越好','lz': '来自外星人的评价','cl':'green'},
			{'src':"./images/dp/rm1.jpg",'title':'红米手机3x 联通版','price':'799元','pl':'47人评价','em':'新品','zg':'手环很好用啊！手环很好用啊！小米越来越好','lz': '来自外星人的评价'},
			{'src':"./images/dp/rm1.jpg",'title':'红米手机3x 联通版','price':'799元','pl':'47人评价','em':'新品','zg':'手环很好用啊！手环很好用啊！小米越来越好','lz': '来自外星人的评价'},
			{'src':"./images/dp/rm1.jpg",'title':'红米手机3x 联通版','price':'799元','pl':'47人评价','em':'新品','zg':'手环很好用啊！手环很好用啊！小米越来越好','lz': '来自外星人的评价'},
			{'src':"./images/dp/rm1.jpg",'title':'红米手机3x 联通版','price':'799元','pl':'47人评价','em':'新品','zg':'手环很好用啊！手环很好用啊！小米越来越好','lz': '来自外星人的评价'},
			{'src':"./images/dp/rm1.jpg",'title':'红米手机3x 联通版','price':'799元','pl':'47人评价','em':'新品','zg':'手环很好用啊！手环很好用啊！小米越来越好','lz': '来自外星人的评价'},
			{'src':"./images/dp/rmer4.jpg",'title':'小钢炮呵呵..','price':'99元'}
			],

			[{'src':"./images/dp/rm1.jpg",'title':'红米手机3x 联通版','price':'799元','pl':'47人评价','em':'新品','zg':'手环很好用啊！手环很好用啊！小米越来越好','lz': '来自外星人的评价'},
			{'src':"./images/dp/rm1.jpg",'title':'红米手机3x 联通版','price':'799元','pl':'47人评价','em':'新品','zg':'手环很好用啊！手环很好用啊！小米越来越好','lz': '来自外星人的评价'},
			{'src':"./images/dp/rm1.jpg",'title':'红米手机3x 联通版','price':'799元','pl':'47人评价','em':'免运费','zg':'手环很好用啊！手环很好用啊！小米越来越好','lz': '来自外星人的评价','cl':'yellow'},
			{'src':"./images/dp/rm2.jpg",'title':'红米手机3x 联通版','price':'799元','pl':'47人评价','em':'新品','zg':'手环很好用啊！手环很好用啊！小米越来越好','lz': '来自外星人的评价','cl':'green'},
			{'src':"./images/dp/rm1.jpg",'title':'红米手机3x 联通版','price':'799元','pl':'47人评价','em':'新品','zg':'手环很好用啊！手环很好用啊！小米越来越好','lz': '来自外星人的评价'},
			{'src':"./images/dp/rm1.jpg",'title':'红米手机3x 联通版','price':'799元','pl':'47人评价','em':'新品','zg':'手环很好用啊！手环很好用啊！小米越来越好','lz': '来自外星人的评价'},
			{'src':"./images/dp/rm1.jpg",'title':'红米手机3x 联通版','price':'799元','pl':'47人评价','em':'新品','zg':'手环很好用啊！手环很好用啊！小米越来越好','lz': '来自外星人的评价'},
			{'src':"./images/dp/rmer4.jpg",'title':'小米平板..','price':'199元'}
			]]
	var str_d = '';
	for(var i =0;i<dArr[0].length;i++)
	{
		if(i ==dArr[0].length-1)
		{
			str_d += '<li><div class = "top"><div class = "left fl"><p>'+dArr[0][i]['title']+'</p><p>'+dArr[0][i]['price']+'</p></div><div class = "right fr"><a href="#"><img src="'+dArr[0][i]['src']+'" alt=""></a></div></div><div class = "bottom"><h3>浏览更多</h3><p>'+$('#dp h2').find('a').eq(i).html()+'</p><a href="#"><img src="./images/djt.png" alt=""></a></div></li>';
		}else{
			str_d += '<li><a href="javascript:;"><img src="'+dArr[0][i]['src']+'" alt=""></a><h3>'+dArr[0][i]['title']+'</h3><span>'+dArr[0][i]['price']+'</span><p>'+dArr[0][i]['pl']+'</p><em class="'+dArr[0][i]['cl']+'">'+dArr[0][i]['em']+'</em><div class = "zg"><p>'+dArr[0][i]['zg']+'</p><span>'+dArr[0][i]['lz']+'</span></div></li>';
		}
	}
	$dp_list = $('<ul>'+str_d+'</ul>');
	$dp_list.appendTo($('.dpr'));



	$('#dp h2').find('a').on('mouseover',function(){
		$('#dp h2').find('a').removeClass('active');
		$(this).addClass('active');
	}) 
	$('#dp h2').find('a').each(function(i,elem){
		$(elem).on('mouseover',function(){
			for(var j = 0;j<dArr[i].length;j++){
				if(j ==dArr[i].length-1)
				{
					strd = '<div class = "top"><div class = "left fl"><p>'+dArr[i][j]['title']+'</p><p>'+dArr[i][j]['price']+'</p></div><div class = "right fr"><a href="#"><img src="'+dArr[i][j]['src']+'" alt=""></a></div></div><div class = "bottom"><h3>浏览更多</h3><p>'+$('#dp h2').find('a').eq(i).html()+'</p><a href="#"><img src="./images/djt.png" alt=""></a></div>';
					$('.dpr').find('li').eq(j).html(strd);
				}else{
					strd = '<a href="javascript:;"><img src="'+dArr[i][j]['src']+'" alt=""></a><h3>'+dArr[i][j]['title']+'</h3><span>'+dArr[i][j]['price']+'</span><p>'+dArr[i][j]['pl']+'</p><em class="'+dArr[i][j]['cl']+'">'+dArr[i][j]['em']+'</em><div class = "zg"><p>'+dArr[i][j]['zg']+'</p><span>'+dArr[i][j]['lz']+'</span></div>';
					$('.dpr').find('li').eq(j).html(strd);
				}
				
			}
			
		})
	})



//4小轮播图
var n_idx = 0;//信号量；

$('#nr').find('.btn').find('a').eq(1).on('click',function(){
	n_idx++;
	if(n_idx==4)
	{	n_idx =3;
		return
	}
	n_move();
});

$('#nr').find('.btn').find('a').eq(0).on('click',function(){
	n_idx--;
	if(n_idx<0)
	{	n_idx =0;
		return
	}
	n_move();
});

function n_move(){
	$('#nr').find('.m_unit').eq(0).animate({'left':-296*n_idx})
	$('#nr').find('.circle').find('a').eq(n_idx).addClass('active').siblings().removeClass('active');
}
$('#nr').find('.circle').find('a').on('click',function(){
	n_idx  = $(this).index();
	n_move();
})
