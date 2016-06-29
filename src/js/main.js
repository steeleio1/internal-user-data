import $ from 'jquery';

$.ajax({
	url:"https://randomuser.me/api/?results=12",
    dataType: 'json'
}).then(function(data){
	console.log(data)
data.results.map(addUserToPage)	
// console.log(data.results[10].picture.thumbnail)
// console.log(data.info)
// console.log(data.info.page)
});


function addUserToPage (data){
var html = `
<div class="user-box">
	<div class="picbox">
 <img src="${data.picture.large}" style="width: 100%;max-height: 100%">
 </div>

 <div class="name">
  	<span>${data.name.first + "&nbsp"}</span>
    <span>${data.name.last}</span>
 </div>

 	<span class="email">${data.email}</span>

	<span class="street">${data.location.street}</span>

<div class="address">
	<span>${data.location.city + "&nbsp"}</span>
	<span>${data.location.state + "&nbsp"}</span>
	<span>${data.location.postcode}</span>
</div>
	<span class="phone">${data.cell}</span>
	<span class="ssnum">${data.id.value}</span>

</div>

`
$(".main-box").append( html )

};













































