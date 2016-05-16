
var marker;
 var map;
function buildMainPage() {
	initializeMap()
	$('body').on( 'DOMMouseScroll mousewheel', function ( event ) {
	  if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
		//scroll down
		
		shiftPage(0);
	  } else {
		//scroll up
		
		shiftPage(1);
	  }
	  return false;
	});
}
function initializeMap() {
	var mapProp = {
	center:new google.maps.LatLng(41.213447, -124.006115),
	zoom:12,
	mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map( document.getElementById( 'googleMap' ), mapProp );
	marker = new google.maps.Marker({
    position: new google.maps.LatLng(41.213447, -124.006115),
    map: map,
    title: 'Hello World!'
  });
}

function moveMarker(Lat, Lng) {
	position =  new google.maps.LatLng(Lat, Lng);
	marker.setPosition(position );
    map.panTo( position );
}

google.maps.event.addDomListener(window, 'load', initializeMap);
function shiftPage(direction){
	var mainImg = document.getElementById("mainImg");
	var contentHeader = document.getElementById("contentHeader");
	var pContent = document.getElementById("pContent");
	var gContent = document.getElementById("gContent");
	
	var array = ["natureforesttreespath.jpeg","julyredwood.jpg"];
	var contentArray = ["Secret Forest Path", "Red Wood In July"];
	var pContentArray = ["Amazing experience the walk up here is amazing. the climb isnt difficult","In July the trees here are amazing."];
	var guideArray = ["Once you arrive at the camp site follow the signs up the mountain for mountain pass","Once you arrive you will see a yellow sign on the side of the road. Head west from their for 200m and you will eventually find this location"]
	var Lat = [41.664798, 41.213447];
	var Lng = [(-118.735888),(-124.006115)];
	if(direction == 1){
		console.log('Up');
		if(mainImg.src == array[1]) {
			mainImg.src = array[0];
			contentHeader.innerHTML = contentArray[0];
			pContent.innerHTML = pContentArray[0];
			gContent.innerHTML = guideArray[0];
			moveMarker(Lat[0], Lng[0]);
			
		}else{
			mainImg.src = array[1];
			contentHeader.innerHTML = contentArray[1];
			pContent.innerHTML = pContentArray[1];	
			gContent.innerHTML = guideArray[1];		
			moveMarker(Lat[1], Lng[1]);			
		}
	} else {
		console.log('Down');
		if(mainImg.src == array[0]) {
			mainImg.src = array[1];
			contentHeader.innerHTML = contentArray[1];
			pContent.innerHTML = pContentArray[1];
			gContent.innerHTML = guideArray[1];
			moveMarker(Lat[1], Lng[1]);
		}else {
			mainImg.src = array[0];
			contentHeader.innerHTML = contentArray[0];
			pContent.innerHTML = pContentArray[0];
			gContent.innerHTML = guideArray[0];
			moveMarker(Lat[0], Lng[0]);
			
		}
		
	}
	
	
}


function buildContent(imgSrc, title, innerText){
	var infoBox = document.createElement("DIV");
	infoBox.className ="infoBox";
	var mainImg = document.createElement("IMG");
	mainImg.className = "mainImg";
	mainImg.src = imgSrc;
	var contentBox = document.createElement("DIV");
	contentBox.className = "contentBox";
	
	infoBox.appendChild(mainImg);
	infoBox.appendChild(contentBox);
	
	var infoHeader = document.createElement("H3");
	infoHeader.className = "infoHeader";
	infoHeader.innerHTML = title;
	var infoDescription = document.createElement("P");
	infoDescription.className = "infoDescription";
	infoDescription.innerHTML = innerText;
	contentBox.appendChild(infoHeader);
	contentBox.appendChild(infoDescription);
	
	
	document.getElementById("content").appendChild(infoBox);
	
}

