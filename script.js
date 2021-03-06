var mymap = L.map('mapid', {zoomControl: false}).setView([29.505, 7], 2);

var leaflet_key = config.leaflet_key;

L.tileLayer(leaflet_key, {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 5,
	minZoom: 1
}).addTo(mymap);

//disable scroll wheel zoom

mymap.scrollWheelZoom.disable();		

		// attempt to change marker color based on data

		// function getColor(d) {
		// 	var colors = {Yes: "#dd8a3e", No: "#2f8fce", Maybe: "#999999"};
		// 	console.log("color");
		// 	return colors[d] || '#999999';
		// }	

		// function markerColor (feature) {
		// 	return {
		// 		fillColor: getColor(feature.properties.impact)
		// 	};
		// }
		
		var naturalColdIcon = L.AwesomeMarkers.icon({
				icon: 'snowflake-o',  
				prefix: 'fa',
				markerColor: 'blue'
		    });

		var naturalHeatIcon = L.AwesomeMarkers.icon({
				icon: 'thermometer-full',  
				prefix: 'fa',
				markerColor: 'blue'
			});
				
		var naturalRainIcon = L.AwesomeMarkers.icon({
				icon: 'tint',  
				prefix: 'fa',
				markerColor: 'blue'
			});

		var naturalDryIcon = L.AwesomeMarkers.icon({
				icon: 'sun-o',  
				prefix: 'fa',
				markerColor: 'blue'
			});

		var naturalStormIcon = L.AwesomeMarkers.icon({
				icon: 'bolt',  
				prefix: 'fa',
				markerColor: 'blue'
			});
				
		var humanColdIcon = L.AwesomeMarkers.icon({
				icon: 'snowflake-o',  
				prefix: 'fa',
				markerColor: 'orange'
			});
				
		var humanHeatIcon = L.AwesomeMarkers.icon({
				icon: 'thermometer-full',  
				prefix: 'fa',
				markerColor: 'orange'
			});
						
		var humanDryIcon = L.AwesomeMarkers.icon({
				icon: 'sun-o',  
				prefix: 'fa',
				markerColor: 'orange'
			});
			
		var humanFireIcon = L.AwesomeMarkers.icon({
				icon: 'fire',  
				prefix: 'glyphicon',
				markerColor: 'orange'
			});
										
		var humanStormIcon = L.AwesomeMarkers.icon({
				icon: 'bolt',  
				prefix: 'fa',
				markerColor: 'orange'
			});
												
		var humanRainIcon = L.AwesomeMarkers.icon({
				icon: 'tint',  
				prefix: 'fa',
				markerColor: 'orange'
			});	

		var humanOceanIcon = L.AwesomeMarkers.icon({
			icon: 'ship',
			prefix: 'fa',
			markerColor: 'orange'
		});

		var unknownColdIcon = L.AwesomeMarkers.icon({
				icon: 'snowflake-o',  
				prefix: 'fa',
				markerColor: 'gray'
		    });

		var unknownStormIcon = L.AwesomeMarkers.icon({
				icon: 'bolt',  
				prefix: 'fa',
				markerColor: 'gray'
		    });		

		var unknownRainIcon = L.AwesomeMarkers.icon({
				icon: 'tint',  
				prefix: 'fa',
				markerColor: 'gray'
			});	

		var unknownDryIcon = L.AwesomeMarkers.icon({
				icon: 'sun-o',  
				prefix: 'fa',
				markerColor: 'gray'
			});	

		var unknownHeatIcon = L.AwesomeMarkers.icon({
				icon: 'thermometer-full',  
				prefix: 'fa',
				markerColor: 'gray'
			});																
			
		
var promise = $.getJSON("bams.geojson");
promise.then(function(data) {
				 
	var allStudies = L.geoJson(data);
						
	var humanImpactHeat = L.geoJson(data, {
		filter: function(feature, layer) {
			return (feature.properties.impact == "Yes" && (feature.properties.type == "Heat"));
		},
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {
				icon: humanHeatIcon,
				tags: ['Human link', 'Heat']
			}).on('dblclick', onDoubleClick);
		},
					onEachFeature: onEachFeature
	}).addTo(mymap);
						
	var humanImpactCold = L.geoJson(data, {
	filter: function(feature, layer) {
		return (feature.properties.impact == "Yes" && (feature.properties.type == "Cold" || feature.properties.type == "Snow and ice"));
	},
	pointToLayer: function(feature, latlng) {
		return L.marker(latlng, {
			icon: humanColdIcon,
			tags: ['Cold/ice', 'Human link']
		}).on('dblclick', onDoubleClick);
	},
			onEachFeature: onEachFeature
	}).addTo(mymap);
		
	var humanImpactDry = L.geoJson(data, {
	filter: function(feature, layer) {
		return (feature.properties.impact == "Yes" && (feature.properties.type == "Drought"));
	},
	pointToLayer: function(feature, latlng) {
		return L.marker(latlng, {
			icon: humanDryIcon,
			tags: ['Drought', 'Human link']
		}).on('dblclick', onDoubleClick);
	},
	onEachFeature: onEachFeature
	}).addTo(mymap);

	var humanImpactFire = L.geoJson(data, {
		filter: function(feature, layer) {
			return (feature.properties.impact == "Yes" && (feature.properties.type == "Wildfire"));
		},
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {
				icon: humanFireIcon,
				tags: ['Wildfires', 'Human link']
			}).on('dblclick', onDoubleClick);
		},
		onEachFeature: onEachFeature
	}).addTo(mymap);

	var humanImpactStorm = L.geoJson(data, {
		filter: function(feature, layer) {
			return (feature.properties.impact == "Yes" && (feature.properties.type == "Tropical cyclones" || feature.properties.type == "Storms" ));
		},
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {
				icon: humanStormIcon,
				tags: ['Storms', 'Human link']
			}).on('dblclick', onDoubleClick);
		},
		onEachFeature: onEachFeature
	}).addTo(mymap);

	var humanImpactRain = L.geoJson(data, {
		filter: function(feature, layer) {
			return (feature.properties.impact == "Yes" && (feature.properties.type == "Rain/flooding"));
		},
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {
				icon: humanRainIcon,
				tags: ['Rain/flooding', 'Human link']
			}).on('dblclick', onDoubleClick);
		},
		onEachFeature: onEachFeature
	}).addTo(mymap);

	var humanImpactOcean = L.geoJson(data, {
		filter: function(feature, layer) {
			return (feature.properties.impact == "Yes" && (feature.properties.type == "Oceans"));
		},
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {
				icon: humanOceanIcon,
				tags: ['Oceans', 'Human link']
			}).on('dblclick', onDoubleClick);
		},
		onEachFeature: onEachFeature
	}).addTo(mymap);
						
	var naturalCold = L.geoJson(data, {
			filter: function(feature, layer) {
				return (feature.properties.impact == "No" && (feature.properties.type == "Cold"|| feature.properties.type == "Snow and ice"));
			},
			pointToLayer: function(feature, latlng) {
				return L.marker(latlng, {
					icon: naturalColdIcon,
					tags: ['Cold/ice', 'No link']
				}).on('dblclick', onDoubleClick);
			},
						onEachFeature: onEachFeature 
	}).addTo(mymap);

	var naturalDry = L.geoJson(data, {
			filter: function(feature, layer) {
				return (feature.properties.impact == "No" && (feature.properties.type == "Drought"));
			},
			pointToLayer: function(feature, latlng) {
				return L.marker(latlng, {
					icon: naturalDryIcon,
					tags: ['Drought', 'No link']
				}).on('dblclick', onDoubleClick);
			},
						onEachFeature: onEachFeature 
	}).addTo(mymap);

	var naturalHeat = L.geoJson(data, {
		filter: function(feature, layer) {
			return (feature.properties.impact == "No" && (feature.properties.type == "Heat"));
		},
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {
				icon: naturalHeatIcon,
				tags: ['Heat', 'No link']
			}).on('dblclick', onDoubleClick);
		},
					onEachFeature: onEachFeature
	}).addTo(mymap);
									
	var naturalRain = L.geoJson(data, {
			filter: function(feature, layer) {
				return (feature.properties.impact == "No" && feature.properties.type == "Rain/flooding");
			},
			pointToLayer: function(feature, latlng) {
				return L.marker(latlng, {
					icon: naturalRainIcon,
					tags: ['Rain/flooding', 'No link']
				}).on('dblclick', onDoubleClick);
			},
						onEachFeature: onEachFeature 
	}).addTo(mymap);

	var naturalStorm = L.geoJson(data, {
			filter: function(feature, layer) {
				return (feature.properties.impact == "No" && (feature.properties.type == "Tropical cyclones" || feature.properties.type == "Storms" ));
			},
			pointToLayer: function(feature, latlng) {
				return L.marker(latlng, {
					icon: naturalStormIcon,
					tags: ['Storms', 'No link']
				}).on('dblclick', onDoubleClick);
			},
						onEachFeature: onEachFeature 
	}).addTo(mymap);;

	var unknownCold = L.geoJson(data, {
			filter: function(feature, layer) {
				return (feature.properties.impact == "Maybe" && (feature.properties.type == "Cold"|| feature.properties.type == "Snow and ice"));
			},
			pointToLayer: function(feature, latlng) {
				return L.marker(latlng, {
					icon: unknownColdIcon,
					tags: ['Cold/ice', 'Inconclusive']
				}).on('dblclick', onDoubleClick);
			},
						onEachFeature: onEachFeature 
	}).addTo(mymap);

	var unknownDry = L.geoJson(data, {
	filter: function(feature, layer) {
		return (feature.properties.impact == "Maybe" && (feature.properties.type == "Drought"));
	},
	pointToLayer: function(feature, latlng) {
		return L.marker(latlng, {
			icon: unknownDryIcon,
			tags: ['Drought', 'Inconclusive']
		}).on('dblclick', onDoubleClick);
	},
	onEachFeature: onEachFeature
	}).addTo(mymap);
									
	var unknownStorm = L.geoJson(data, {
			filter: function(feature, layer) {
				return (feature.properties.impact == "Maybe" && (feature.properties.type == "Tropical cyclones" || feature.properties.type == "Storms" ));
			},
			pointToLayer: function(feature, latlng) {
				return L.marker(latlng, {
					icon: unknownStormIcon,
					tags: ['Storms', 'Inconclusive']
				}).on('dblclick', onDoubleClick);
			},
						onEachFeature: onEachFeature 
	}).addTo(mymap);

	var unknownRain = L.geoJson(data, {
			filter: function(feature, layer) {
				return (feature.properties.impact == "Maybe" && feature.properties.type == "Rain/flooding");
			},
			pointToLayer: function(feature, latlng) {
				return L.marker(latlng, {
					icon: unknownRainIcon,
					tags: ['Rain/flooding', 'Inconclusive']
				}).on('dblclick', onDoubleClick);
			},
						onEachFeature: onEachFeature 
	}).addTo(mymap);

	var unknownHeat = L.geoJson(data, {
		filter: function(feature, layer) {
			return (feature.properties.impact == "Maybe" && (feature.properties.type == "Heat"));
		},
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {
				icon: unknownHeatIcon,
				tags: ['Heat', 'Inconclusive']
			}).on('dblclick', onDoubleClick);
		},
					onEachFeature: onEachFeature
	}).addTo(mymap);

	

});

			 
function onEachFeature(feature, layer) {
	// does this feature have a property named popupContent?
	if (feature.properties) {
		layer.bindPopup('<h1><b>'+feature.properties.location+'</h1>Event type: </b>'+feature.properties.type+'<br /><b>Human influence? </b>'+feature.properties.impact_description+'<b><br />Summary: </b>'+feature.properties.summary+'<b><br />Citation: </b>'+feature.properties.authors+'<br /><b><a href="'+feature.properties.link+'" target="_blank">Link '+feature.properties.pdf+'</a></b>', {closeButton: false, offset: L.point(0, -20)});
				layer.on('mouseclick', function() { layer.openPopup(); });
				layer.on('dblclick', function() { layer.openPopup(); });
				layer.on('mouseclick', function() { layer.closePopup(); });
	};

}

// add zoom on marker double click

function onDoubleClick(e) {
    mymap.setView(e.latlng, 5);
	console.log("click-zoom");
}

//add zoomHome plugin

var zoomHome = L.Control.zoomHome();
zoomHome.addTo(mymap);

// add tag controls filter

L.control.tagFilterButton({
	data: ['Human link', 'No link', 'Inconclusive', 'Cold/ice', 'Drought', 'Heat', 'Oceans', 'Rain/flooding', 'Storms', 'Wildfires'],
	filterOnEveryClick: true,
	openPopupOnHover: true
}).addTo( mymap );


jQuery(function($){
	var windowWidth = $(window).width();

	$(window).resize(function() {
		if(windowWidth != $(window).width()){
		location.reload();
		return;
		}
	});
});





