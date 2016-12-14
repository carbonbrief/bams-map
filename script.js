var mymap = L.map('mapid').setView([31.505, 7], 2);

L.tileLayer('https://api.mapbox.com/styles/v1/rospearce/ciwgju4yv00cy2pmqeggx1mx8/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicm9zcGVhcmNlIiwiYSI6ImNpdm1sczJsZjAwOGMyeW1xNHc4ejJ0N28ifQ.4B24e0_HgfJj4sgqimETqA', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox://styles/rospearce/ciwgju4yv00cy2pmqeggx1mx8',
    accessToken: 'pk.eyJ1Ijoicm9zcGVhcmNlIiwiYSI6ImNpdm1sczJsZjAwOGMyeW1xNHc4ejJ0N28ifQ.4B24e0_HgfJj4sgqimETqA'
}).addTo(mymap);

		
		
	//	function getColor(d) {
	//	    return d > 3000  ? '#C7432B' :
	//	           d > 2500  ? '#AD4F46' :
	//	           d > 2000   ? '#945C61' :
	//	           d > 1500   ? '#7B697C' :
	//	           d > 1000   ? '#617597' :
	//						 d > 500   ? '#4882B2' :
	//	                      '#2F8FCE';
	//	}

	//	function style(feature) {
	//	    return {
	//	        fillColor: getColor(feature.properties.change),
	//	        weight: 1.4,
	//	        opacity: 0.85,
	//	        color: 'white',
	//	        fillOpacity: 0.85,
	//				  radius: 12,
	//	    };
	//	}
		
		var coldIcon = L.AwesomeMarkers.icon({
				icon: 'snowflake-o',  
				prefix: 'fa',
				markerColor: 'blue'
		    });
				
				var hotIcon = L.AwesomeMarkers.icon({
						icon: 'thermometer-full',  
						prefix: 'fa',
						markerColor: 'red'
				    });
		
	  var promise = $.getJSON("bams.geojson");
	     promise.then(function(data) {
				 
	         var allStudies = L.geoJson(data);
					 
	                 var humanImpact = L.geoJson(data, {
	             filter: function(feature, layer) {
	                 return feature.properties.impact === "Yes";
	             },
	             pointToLayer: function(feature, latlng) {
	                 return L.marker(latlng, {
	                 	icon: hotIcon
	                 });
	             },
							 onEachFeature: onEachFeature,
	         });
					 
	         var natural = L.geoJson(data, {
	             filter: function(feature, layer) {
	                 return feature.properties.impact === "No";
	             },
	             pointToLayer: function(feature, latlng) {
	                 return L.marker(latlng, {
										 icon: coldIcon
	                 });
	             },
							  onEachFeature: onEachFeature });
								
	         humanImpact.addTo(mymap);
	         natural.addTo(mymap);
	         // The JavaScript below is new
	         $("#natural").click(function() {
	             mymap.addLayer(natural)
	             mymap.removeLayer(humanImpact)
	         });
	         $("#humanImpact").click(function() {
	             mymap.addLayer(humanImpact)
	             mymap.removeLayer(natural)
	         });
	         $("#allstudies").click(function() {
	             mymap.addLayer(humanImpact)
	             mymap.addLayer(natural)
	         });
	     });
			 
	 		function onEachFeature(feature, layer) {
	 		    // does this feature have a property named popupContent?
	 		    if (feature.properties) {
	 		        layer.bindPopup('<h1>'+feature.properties.authors+'</h1>Type: <b>'+feature.properties.type+'</b><br />Location <b>'+feature.properties.location+'</b><br />Human impact? <b>'+feature.properties.impact+'</b><br />Summary: <b>'+feature.properties.summary+'</b>', {closeButton: false, offset: L.point(0, -20)});
	 		                layer.on('mouseover', function() { layer.openPopup(); });
	 		                layer.on('mouseout', function() { layer.closePopup(); });
	 		    };
	 		}



