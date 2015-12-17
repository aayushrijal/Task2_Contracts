var csvArray;
var csvData=[];

function ajax_get_csv() {
	$.ajax({
		url:"contracts.csv",
		}).success(function(data){
		csvData = $.csv.toArrays(data);
	}).complete(function(){
		$("li").on("click",function(){
			marker.setMap(map);
			var id=$(this).attr("id");
			$("#showContract").html("<strong>Contract name: "+csvData[id][0]+"</strong><br>Status: "+csvData[id][1]+"<br>Bid Purchase Deadline: "+csvData[id][2]+"<br>Bid Submission Deadline: "+csvData[id][3]+"<br>Bid Opening Date: "+csvData[id][4]+"<br>Tender ID: "+csvData[id][5]+"<br>Publication Date: "+csvData[id][6]+"<br>Published in: "+csvData[id][7]+"<br>Contract Date: "+csvData[id][8]+"<br>Completion Date: "+csvData[id][9]+"<br>Awardee: "+csvData[id][10]+"<br>Awardee Location: "+csvData[id][11]+"<br>Lattitude, Longitude: "+csvData[id][12]+"<br>Amount: "+csvData[id][13]);
			if(csvData[id][12]!=""){
				var latLng=csvData[id][12].split(",").map(Number);
				map.setCenter(new google.maps.LatLng(latLng[0],latLng[1]));
				marker.setPosition(new google.maps.LatLng(latLng[0],latLng[1]));
			}else{
				map.setCenter(new google.maps.LatLng(27.700769,85.300140));
				marker.setMap(null);
			}
		});
	});
}

window.onload = function() {
	ajax_get_csv();
}