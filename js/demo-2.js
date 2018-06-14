var img = $('img');
var num = 0;
var size = img.size();

img.each(function(i){
	var oImg = new Image();

	oImg.onload = function(){
		num ++;
		var percent = ~~(num / size * 100) + '%';
		$('#jLoading1').animate({
			width:percent
		}, 100);
		$('#jLoading2').html(percent);
		console.log( "num: " + num );
		console.log( "size: " + size );
		if(num === size -1){
			$('#jLoading2').fadeOut();
		}
	};

	oImg.src = img[i]['src'];
});
