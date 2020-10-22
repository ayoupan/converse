//  限时秒杀:
function djs(){
     var target=new Date()
     var from = new Date('2020-11-01');
     target=target.getTime()
     from=from.getTime()
      var differenceTime=from-target
        differenceTime=parseInt(differenceTime/1000)
          var day=Math.floor(differenceTime/(24*60*60))
          var afterHours=differenceTime-day*24*60*60
          var hours=Math.floor(afterHours/3600);
          var afterMinutes=afterHours-hours*3600;
          var minutes=Math.floor(afterMinutes/60);
          var seconds=afterMinutes-minutes*60
          var arr=[day,hours,minutes,seconds]
	
			var spanArr=document.getElementsByClassName("bb")
             console.log(spanArr);

          for(var i=0;i<spanArr.length;i++){
               spanArr[i].innerHTML=arr[i]
         }
}
               
                
$.ajax({
	url:'../json/data.json',
	dataType:'json',
	success:function(data){
		console.log(data);
		$.each(data,function(i,item){
			if(i<12){
			$('#man ul').append(`<li><a href="../pages/details.html"><img src="${item.path}" alt"">${item.text}</a></li>`)
		}
		})
	}
})

$.ajax({
	url:'../json/data.json',
	dataType:'json',
	success:function(data){
		console.log(data);
		$.each(data,function(i,item){
			if(i>12&&i<25){
			$('#women ul').append(`<li><a><img src="${item.path}" alt"">${item.text}</a></li>`)
		}
		})
	}
})

$.ajax({
	url:'../json/data.json',
	dataType:'json',
	success:function(data){
		console.log(data);
		$.each(data,function(i,item){
			if(i>25){
			$('#children ul').append(`<li><a><img src="${item.path}" alt"">${item.text}</a></li>`)
		}
		})
	}
})	

