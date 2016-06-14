// $(function(){

// // 播放列表
// 	var database = [
// 	     {name:'a' ,src:'./music/a.MP3', author:'zxl',duration:'1.30'},
// 	     {name:'b' ,src:'./music/b.MP3', author:'lv',duration:'1.04'},
// 	     {name:'一次就好' ,src:'./music/一次就好.MP3', author:'杨宗纬',duration:'2.04'},
// 	     {name:'IF YOU' ,src:'./music/IF YOU.MP3', author:'zzz',duration:'2.04'},
// 	     {name:'太阳' ,src:'./music/太阳的后裔.MP3', author:'xlxl',duration:'2.04'}];

// 	var render = function(){
// 		$.each(database,function(k,v){
//     	var li = $('<li mid="j10" class=""><strong class="music_name" title="Beautiful Love">'+ v.name +'</strong> <strong class="singer_name" title="蔡健雅">'+ v.author +'</strong> <strong class="play_time">'+ v.duration +'</strong> <div class="list_cp"> <strong class="btn_like" title="喜欢" name="" mid="004fQTu016b9W4"> <span>我喜欢</span> </strong> <strong class="btn_share" title="分享"> <span>分享</span> </strong> <strong class="btn_fav" title="收藏到歌单"> <span>收藏</span> </strong> <strong class="btn_del" title="从列表中删除"> <span>删除</span> </strong> </div> </li>');
//     	$("#divsonglist ul").append(li);
//     })
//  }
//  render();
    
// var audio = $('audio').get(0); 

// // 选择播放 
// $('.open_list span').text(database.length);

// $('.single_list').on('click','li',function(){
//     	audio.src=database[$(this).index()].src;
    	
//     	$('#btnplay').addClass('pause_bt');
//     	$('.li').removeClass('play_current');
//     	$(this).addClass('play_current');
//     	$('.music_info_main .music_name').text(database[$(this).index()].name);
//         $('.music_info_main .singer_name').text(database[$(this).index()].author);
//         $('.music_info_main .play_time').text(database[$(this).index()].duration);
//         audio.play();
//         $(audio).on('ended',function(){
//             audio.src=database[$(this).index()+1].src;
//              audio.play();
//          })
//     })
//     // 上一首和下一首
//     var currentsong=0;
//     var onsongchange = function(){
//     	audio.play();
//     	$('#divsonglist li').removeClass('play_current');
//     	$('#divsonglist li').eq(currentSong).addClass('play_current');
//          $(audio).on('ended',function(){
//             audio.src=database[currentsong+1].src;
//             audio.onsongchange();
//          })
//     }   	

//      $('#divsonglist').on('click','li',function(){
//     	currentSong = $(this).index();
//     	audio.src = database [ currentSong ].src;
//     	onsongchange();
//     })
//     $('#prevbt').on('click',function(){
//         currentsong-=1;
//         if(currentsong==-1){
//         	currentsong=database.length-1;
//         }
//         audio.src=database[currentsong].src;
        
//         onsongchange();
//     })
//     $('#nextbt').on('click',function(){
//     	currentsong+=1;
//         if(currentsong==database.length){
//         	currentsong=0;
//         }
//         audio.src=database[currentsong].src;
//         onsongchange();
//     })
 
//  //    var currentSong=0;

//  //    var onsongchange = function(){
//  //    	audio.play();
//  //    	$('#divsonglist li').removeClass('play_current');
//  //    	$('#divsonglist li').eq(currentSong).addClass('play_current');
//  //    }
//  //    $('#divsonglist').on('click','li',function(){
//  //    	currentSong = $(this).index();
//  //    	audio.src = database [ currentSong ].src;
//  //    	onsongchange();
//  //    })
//  //    $('#nextbt').on('click',function(){
//  //    	currentSong += 1;
//  //    	if(currentSong === database.length){
//  //    		currentSong = 0;
//  //    	}
//  //    	audio.src = database[currentSong].src ;
//  //    	onsongchange();
//  //    })

//  //    $('#prevbt').on('click',function(){
//  //    	currentSong -=1;
//  //    	if(currentSong === -1){
//  //    		currentSong === database.length-1;
//  //    	}
//  //    	audio.src= database [currentSong].src ;
//  //    	onsongchange();
//  //    })


// 	// $('#btnplay').on('click',function(){
// 	// 	if( audio.paused ){
// 	// 		audio.play();
// 	// 	}else{
// 	// 		audio.pause();
// 	// 	}
// 	// })



// // 播放暂停
// $('#btnplay').on('click',function(){
// 		if(audio.paused){
// 			audio.play();
// 			$('#btnplay').removeClass('play_bt').addClass('pause_bt');
// 		}else{
// 			audio.pause();
// 			$('#btnplay').removeClass('pause_bt').addClass('play_bt');
// 		}       
// 	})

// // 音量控制
// 	$('#spanvolumebar').on('click',function(e){
// 		audio.volume = e.offsetX / $(this).width();
// 	})
// // 静音控制
// 	$(audio).on('volumechange',function(){
// 		if(audio.volume === 0){
// 			$('#spanmute').addClass('volume_mute');
// 		}else{
// 			$('#spanmute').removeClass('volume_mute');
// 		}
// 		var left = audio.volume.toFixed(2)*100 +'%';
// 		$(".volume_op").css('left',left);
// 	})

// 	var yuanlai;
// 	$('#spanmute').on('click',function(){
// 		if(audio.volume === 0){
// 		    audio.volume = yuanlai;
// 		}else{
// 			yuanlai = audio.valume;
// 			audio.volume = 0;
// 		}		
// 	})
// // 播放进度条
// 	$(audio).on('timeupdate',function(){
// 		var percent = (this.currentTime/this.duration).toFixed(2)*100 + '%';
// 		$('.progress_op').css('left',percent);
// 		$('.play_current_bar').css('width',percent);
// 	})
// // 进度控制
// 	$('.player_bar').on('click',function(e){
// 		audio.currentTime = audio.duration * (e.offsetX / $(this).width());
// 	})
// })




$(function(){
	var database = [];
	var audio = $('audio').get(0);
	var makelist = function(){
		$('.play-list-main').empty();
		$.each(database,function(k,v){
			$('<li mid="j10" class=""><strong class="music_name" title="'+ v.title +'">'+ v.title +'</strong> <strong class="singer_name" title="蔡健雅">'+ v.artist +'</strong> <strong class="play_time">'+ v.duration +'</strong> <div class="list_cp"> <strong class="btn_like" title="喜欢" name="" mid="004fQTu016b9W4"> <span>我喜欢</span> </strong> <strong class="btn_share" title="分享"> <span>分享</span> </strong> <strong class="btn_fav" title="收藏到歌单"> <span>收藏</span> </strong> <strong class="btn_del" title="从列表中删除"> <span>删除</span> </strong> </div> </li>').appendTo('#divsonglist ul');
		})
		$('#spansongnum1 span').text(database.length);		
	}
	$.getJSON('database.json')
	.done(function(data){
		database = data;
		makelist();
	});

// UI操作
    
	var onsongchange = function(){
		console.log(1)
		audio.play();
		$('#divsonglist li')
		.removeClass('play_current')
		.eq(currentSong)
		.addClass('play_current');
		$('#music_name').text(database[currentSong].title);
		$('#singer_name').text(database[currentSong].artist);
		$('#play_time').text(database[currentSong].duration);
	}

	var currentSong = null;
	$('#divsonglist').on('click','li',function(e){
		currentSong = $(this).index();
		audio.src = database[currentSong].filename;
		onsongchange(); 
	})

	// UI操作
	// 列表后出现按钮
	$('#divsonglist').on('mouseenter mouseleave', 'li', function(){
		$(this).toggleClass('play_hover');
	});
	// 删除列表歌曲 
	$('#divsonglist').on('click', '.btn_del', function(){
		var todelete = $('#divsonglist .btn_del').index(this);
		database = $.grep(database,function(v,k){			
				return k !== todelete;			
		})
		$(this).closest('li').remove();
		$('#spansongnum1 span').text(database.length);
		return false;
	});

	// 上一首和下一首
	$('#nextbt').on('click',function(){
		currentSong += 1;
		if(currentSong === database.length ){
			currentSong = 0;
		}
		audio.src = database[currentSong].filename;
		onsongchange();
	})

	$('#prevbt').on('click',function(){
		currentSong -= 1;
		if(currentSong === -1 ){
			currentSong = database.length - 1;
		}
		audio.src = database[currentSong].filename;
		onsongchange();
	})

// 播放暂停
$('#btnplay').on('click',function(){
		if(audio.paused){
			audio.play();
			$('#btnplay').removeClass('play_bt').addClass('pause_bt');
		}else{
			audio.pause();
			$('#btnplay').removeClass('pause_bt').addClass('play_bt');
		}       
	})

// 音量控制
	$('#spanvolumebar').on('click',function(e){
		audio.volume = e.offsetX / $(this).width();
	})
// 静音控制
	  $(audio).on('volumechange',function(){
		if(audio.volume === 0){
			$('#spanmute').addClass('volume_mute');
		}else{
			$('#spanmute').removeClass('volume_mute');
		}
		var left = audio.volume.toFixed(2)*100 +'%';
		$(".volume_op").css('left',left);
	})

	var yuanlai;
	$('#spanmute').on('click',function(){
		if(audio.volume === 0){
		    audio.volume = yuanlai;
		}else{
			yuanlai = audio.valume;
			audio.volume = 0;
		}		
	})
// 播放进度条
	$('audio').on('timeupdate',function(){
		var percent = (this.currentTime/this.duration).toFixed(2)*100 + '%';
		$('.progress_op').css('left',percent);
		$('.play_current_bar').css('width',percent);
	})
// 进度控制
	$('.player_bar').on('click',function(e){
		audio.currentTime = audio.duration * (e.offsetX / $(this).width());
	})

// 列表的出现与消失
  $('#btnclose').on('click',function(){
     $('#divplayframe').fadeOut();
  })
  $('.open_list').on('click',function(){
      $('#divplayframe').fadeToggle();
  })

    $('#btnfold').on('click',function(){
      $('#divplayframe').css('display','none');
      $('.m-player').toggleClass('hide');
      $('#btnfold').removeClass('folded_bt').addClass('zhankai');
     })



})
