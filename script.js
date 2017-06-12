var mymap = L.map('mapid', {zoomControl: false}).setView([31.505, 7], 2);

L.tileLayer('https://api.mapbox.com/styles/v1/rospearce/ciwgju4yv00cy2pmqeggx1mx8/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicm9zcGVhcmNlIiwiYSI6ImNpdm1sczJsZjAwOGMyeW1xNHc4ejJ0N28ifQ.4B24e0_HgfJj4sgqimETqA', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 6,
    id: 'mapbox://styles/rospearce/ciwgju4yv00cy2pmqeggx1mx8',
    accessToken: 'pk.eyJ1Ijoicm9zcGVhcmNlIiwiYSI6ImNpdm1sczJsZjAwOGMyeW1xNHc4ejJ0N28ifQ.4B24e0_HgfJj4sgqimETqA'
}).addTo(mymap);

		

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
				icon: humanHeatIcon
			}).on('click', onClick);
		},
					onEachFeature: onEachFeature
	});
						
	var humanImpactCold = L.geoJson(data, {
	filter: function(feature, layer) {
		return (feature.properties.impact == "Yes" && (feature.properties.type == "Cold" || feature.properties.type == "Snow and ice"));
	},
	pointToLayer: function(feature, latlng) {
		return L.marker(latlng, {
			icon: humanColdIcon
		}).on('click', onClick);
	},
			onEachFeature: onEachFeature
	});
		
	var humanImpactDry = L.geoJson(data, {
	filter: function(feature, layer) {
		return (feature.properties.impact == "Yes" && (feature.properties.type == "Drought"));
	},
	pointToLayer: function(feature, latlng) {
		return L.marker(latlng, {
			icon: humanDryIcon
		}).on('click', onClick);
	},
	onEachFeature: onEachFeature
	});

	var humanImpactFire = L.geoJson(data, {
		filter: function(feature, layer) {
			return (feature.properties.impact == "Yes" && (feature.properties.type == "Wildfire"));
		},
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {
				icon: humanFireIcon
			}).on('click', onClick);
		},
		onEachFeature: onEachFeature
	});

	var humanImpactStorm = L.geoJson(data, {
		filter: function(feature, layer) {
			return (feature.properties.impact == "Yes" && (feature.properties.type == "Tropical cyclones" || feature.properties.type == "Storms" ));
		},
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {
				icon: humanStormIcon
			}).on('click', onClick);
		},
		onEachFeature: onEachFeature
	});

	var humanImpactRain = L.geoJson(data, {
		filter: function(feature, layer) {
			return (feature.properties.impact == "Yes" && (feature.properties.type == "Rain/flooding"));
		},
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {
				icon: humanRainIcon
			}).on('click', onClick);
		},
		onEachFeature: onEachFeature
	});

	var humanImpactOcean = L.geoJson(data, {
		filter: function(feature, layer) {
			return (feature.properties.impact == "Yes" && (feature.properties.type == "Oceans"));
		},
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {
				icon: humanOceanIcon
			}).on('click', onClick);
		},
		onEachFeature: onEachFeature
	});
						
	var naturalCold = L.geoJson(data, {
			filter: function(feature, layer) {
				return (feature.properties.impact == "No" && (feature.properties.type == "Cold"|| feature.properties.type == "Snow and ice"));
			},
			pointToLayer: function(feature, latlng) {
				return L.marker(latlng, {
									icon: naturalColdIcon
				}).on('click', onClick);
			},
						onEachFeature: onEachFeature 
	});

	var naturalHeat = L.geoJson(data, {
		filter: function(feature, layer) {
			return (feature.properties.impact == "No" && (feature.properties.type == "Heat"));
		},
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {
				icon: naturalHeatIcon
			}).on('click', onClick);
		},
					onEachFeature: onEachFeature
	});
									
	var naturalRain = L.geoJson(data, {
			filter: function(feature, layer) {
				return (feature.properties.impact == "No" && feature.properties.type == "Rain/flooding");
			},
			pointToLayer: function(feature, latlng) {
				return L.marker(latlng, {
									icon: naturalRainIcon
				}).on('click', onClick);
			},
						onEachFeature: onEachFeature 
	});

	var naturalStorm = L.geoJson(data, {
			filter: function(feature, layer) {
				return (feature.properties.impact == "No" && feature.properties.type == "Rain/flooding");
			},
			pointToLayer: function(feature, latlng) {
				return L.marker(latlng, {
									icon: naturalStormIcon
				}).on('click', onClick);
			},
						onEachFeature: onEachFeature 
	});

	var unknownCold = L.geoJson(data, {
			filter: function(feature, layer) {
				return (feature.properties.impact == "Maybe" && (feature.properties.type == "Cold"|| feature.properties.type == "Snow and ice"));
			},
			pointToLayer: function(feature, latlng) {
				return L.marker(latlng, {
									icon: unknownColdIcon
				}).on('click', onClick);
			},
						onEachFeature: onEachFeature 
	});

	var unknownDry = L.geoJson(data, {
	filter: function(feature, layer) {
		return (feature.properties.impact == "Maybe" && (feature.properties.type == "Drought"));
	},
	pointToLayer: function(feature, latlng) {
		return L.marker(latlng, {
			icon: unknownDryIcon
		}).on('click', onClick);
	},
	onEachFeature: onEachFeature
	});
									
	var unknownStorm = L.geoJson(data, {
			filter: function(feature, layer) {
				return (feature.properties.impact == "Maybe" && feature.properties.type == "Rain/flooding");
			},
			pointToLayer: function(feature, latlng) {
				return L.marker(latlng, {
									icon: unknownStormIcon
				}).on('click', onClick);
			},
						onEachFeature: onEachFeature 
	});

	var unknownRain = L.geoJson(data, {
			filter: function(feature, layer) {
				return (feature.properties.impact == "Maybe" && feature.properties.type == "Rain/flooding");
			},
			pointToLayer: function(feature, latlng) {
				return L.marker(latlng, {
									icon: unknownRainIcon
				}).on('click', onClick);
			},
						onEachFeature: onEachFeature 
	});

	var unknownHeat = L.geoJson(data, {
		filter: function(feature, layer) {
			return (feature.properties.impact == "Maybe" && (feature.properties.type == "Heat"));
		},
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {
				icon: unknownHeatIcon
			}).on('click', onClick);
		},
					onEachFeature: onEachFeature
	});

	
	naturalCold.addTo(mymap);
	naturalRain.addTo(mymap);
	naturalStorm.addTo(mymap);
	naturalHeat.addTo(mymap);
	unknownCold.addTo(mymap);
	unknownDry.addTo(mymap);
	unknownStorm.addTo(mymap);
	unknownRain.addTo(mymap);
	unknownHeat.addTo(mymap);
	humanImpactHeat.addTo(mymap);
	humanImpactCold.addTo(mymap);
	humanImpactDry.addTo(mymap);
	humanImpactFire.addTo(mymap);
	humanImpactStorm.addTo(mymap);
	humanImpactRain.addTo(mymap);
	humanImpactOcean.addTo(mymap);

				
	$("#natural-checkbox").change(function() {
				if (this.checked) {
				mymap.addLayer(naturalCold)
				mymap.addLayer(naturalRain)
				mymap.addLayer(naturalHeat)
				mymap.addLayer(naturalStorm)
				}
				else {
				mymap.removeLayer(naturalCold)
				mymap.removeLayer(naturalRain)
				mymap.removeLayer(naturalHeat)
				mymap.removeLayer(naturalStorm)
				}
	});
						
	$("#human-checkbox").change(function() {
				if (this.checked) {
				mymap.addLayer(humanImpactHeat)
				mymap.addLayer(humanImpactCold)
				mymap.addLayer(humanImpactDry)
				mymap.addLayer(humanImpactFire)
				mymap.addLayer(humanImpactStorm)
				mymap.addLayer(humanImpactRain)
				mymap.addLayer(humanImpactOcean)
				}
				else {
				mymap.removeLayer(humanImpactHeat)
				mymap.removeLayer(humanImpactCold)
				mymap.removeLayer(humanImpactDry)
				mymap.removeLayer(humanImpactFire)
				mymap.removeLayer(humanImpactStorm)
				mymap.removeLayer(humanImpactRain)
				mymap.removeLayer(humanImpactOcean)
				}

	});

	$("#unknown-checkbox").change(function() {
				if (this.checked) {
				mymap.addLayer(unknownCold)
				mymap.addLayer(unknownRain)
				mymap.addLayer(unknownHeat)
				mymap.addLayer(unknownStorm)
				mymap.addLayer(unknownDry)
				}
				else {
				mymap.removeLayer(unknownCold)
				mymap.removeLayer(unknownRain)
				mymap.removeLayer(unknownHeat)
				mymap.removeLayer(unknownStorm)
				mymap.removeLayer(unknownDry)
				}
	});
						
	$('#heat-checkbox').change(function() {
			if (this.checked && $('#human-checkbox').is(':checked') && !$('#natural-checkbox').is(':checked') && !$('#unknown-checkbox').is(':checked')) {
				mymap.addLayer(humanImpactHeat);
			}
			else if (this.checked && $('#human-checkbox').is(':checked') && !$('#natural-checkbox').is(':checked') && $('#unknown-checkbox').is(':checked')) {
				mymap.addLayer(humanImpactHeat);
				mymap.addLayer(unknownHeat);
			}
			else if (this.checked && $('#natural-checkbox').is(':checked') && !$('#human-checkbox').is(':checked') && !$('#unknown-checkbox').is(':checked')) {
				mymap.addLayer(naturalHeat);
			}
			else if (this.checked && $('#natural-checkbox').is(':checked') && !$('#human-checkbox').is(':checked') && $('#unknown-checkbox').is(':checked')) {
				mymap.addLayer(naturalHeat);
				mymap.addLayer(unknownHeat);
			}
			else if (this.checked && $('#natural-checkbox').is(':checked') && $('#human-checkbox').is(':checked') && !$('#unknown-checkbox').is(':checked')) {
				mymap.addLayer(naturalHeat);
				mymap.addLayer(humanImpactHeat);
			}
			else if (this.checked && $('#natural-checkbox').is(':checked') && $('#human-checkbox').is(':checked') && $('#unknown-checkbox').is(':checked')) {
				mymap.addLayer(naturalHeat);
				mymap.addLayer(humanImpactHeat);
				mymap.addLayer(unknownHeat);
			}
			else if (this.checked && !$('#natural-checkbox').is(':checked') && !$('#human-checkbox').is(':checked') && $('#unknown-checkbox').is(':checked')) {
				mymap.addLayer(unknownHeat);
			}
			else if (this.checked && !$('#natural-checkbox').is(':checked') && !$('#human-checkbox').is(':checked') && !$('#unknown-checkbox').is(':checked')) {
		//do nothing
			}
			else {
				mymap.removeLayer(humanImpactHeat);
				mymap.removeLayer(naturalHeat);
				mymap.removeLayer(unknownHeat);
			}
	});
				
	$('#cold-checkbox').change(function() {
	if (this.checked && $('#human-checkbox').is(':checked') && !$('#natural-checkbox').is(':checked')) {
		mymap.addLayer(humanImpactCold);
			}
			else if (this.checked && $('#natural-checkbox').is(':checked') && !$('#human-checkbox').is(':checked')) {
				mymap.addLayer(naturalCold);
			}
			else if (this.checked && $('#natural-checkbox').is(':checked') && $('#human-checkbox').is(':checked')) {
				mymap.addLayer(naturalCold);
				mymap.addLayer(humanImpactCold);
			}
			else if (this.checked && !$('#natural-checkbox').is(':checked') && !$('#human-checkbox').is(':checked')) {
				//do nothing
			}
		else {
			mymap.removeLayer(humanImpactCold);
			mymap.removeLayer(naturalCold);
			mymap.removeLayer(unknownCold);
		}
			
	});
						
	$('#dry-checkbox').change(function() {
	if (this.checked && $('#human-checkbox').is(':checked') && !$('#natural-checkbox').is(':checked')) {
		mymap.addLayer(humanImpactDry);
			}
			else if (this.checked && $('#natural-checkbox').is(':checked') && !$('#human-checkbox').is(':checked')) {
		// 	 mymap.addLayer(naturalDry);
			}
			else if (this.checked && $('#natural-checkbox').is(':checked') && $('#human-checkbox').is(':checked')) {
		// 	 mymap.addLayer(naturalDry);
				mymap.addLayer(humanImpactDry);
			}
			else if (this.checked && !$('#natural-checkbox').is(':checked') && !$('#human-checkbox').is(':checked')) {
		//do nothing
			}
		else {
		mymap.removeLayer(humanImpactDry);
		//	 mymap.removeLayer(naturalDry);
		}
	});
						
	$('#rain-checkbox').change(function() {
	if (this.checked && $('#human-checkbox').is(':checked') && !$('#natural-checkbox').is(':checked')) {
		mymap.addLayer(humanImpactRain);
			}
			else if (this.checked && $('#natural-checkbox').is(':checked') && !$('#human-checkbox').is(':checked')) {
				mymap.addLayer(naturalRain);
			}
			else if (this.checked && $('#natural-checkbox').is(':checked') && $('#human-checkbox').is(':checked')) {
				mymap.addLayer(naturalRain);
				mymap.addLayer(humanImpactRain);
			}
			else if (this.checked && !$('#natural-checkbox').is(':checked') && !$('#human-checkbox').is(':checked')) {
				//do nothing
			}
		else {
		mymap.removeLayer(humanImpactRain);
				mymap.removeLayer(naturalRain);
		}
	});
						
	$('#storm-checkbox').change(function() {
	if (this.checked && $('#human-checkbox').is(':checked') && !$('#natural-checkbox').is(':checked')) {
		mymap.addLayer(humanImpactStorm);
			}
			else if (this.checked && $('#natural-checkbox').is(':checked') && !$('#human-checkbox').is(':checked')) {
		// 	 mymap.addLayer(naturalStorm);
			}
			else if (this.checked && $('#natural-checkbox').is(':checked') && $('#human-checkbox').is(':checked')) {
		// 	 mymap.addLayer(naturalStorm);
				mymap.addLayer(humanImpactStorm);
			}
			else if (this.checked && !$('#natural-checkbox').is(':checked') && !$('#human-checkbox').is(':checked')) {
		// 	 do nothing
			}
		else {
		mymap.removeLayer(humanImpactStorm);
		//	 mymap.removeLayer(naturalStorm);
		}
	});
						
		$('#fire-checkbox').change(function() {
		if (this.checked && $('#human-checkbox').is(':checked') && !$('#natural-checkbox').is(':checked')) {
			mymap.addLayer(humanImpactFire);
				}
				else if (this.checked && $('#natural-checkbox').is(':checked') && !$('#human-checkbox').is(':checked')) {
			// 	 mymap.addLayer(naturalFire);
				}
				else if (this.checked && $('#natural-checkbox').is(':checked') && $('#human-checkbox').is(':checked')) {
			// 	 mymap.addLayer(naturalFire);
					mymap.addLayer(humanImpactFire);
				}
				else if (this.checked && !$('#natural-checkbox').is(':checked') && !$('#human-checkbox').is(':checked')) {
			// 	 do nothing
				}
			else {
			mymap.removeLayer(humanImpactFire);
			//	 mymap.removeLayer(naturalFire);
			}
		});
});

// add zoom on marker click

function onClick(e) {
    mymap.setView(e.latlng, 4);
	console.log("click-zoom");
}
			 
function onEachFeature(feature, layer) {
	// does this feature have a property named popupContent?
	if (feature.properties) {
		layer.bindPopup('<h1>'+feature.properties.authors+'</h1>Type: <b>'+feature.properties.type+'</b><br />Location: <b>'+feature.properties.location+'</b><br />Impact: <b>'+feature.properties.impact_description+'</b><br />Summary: <b>'+feature.properties.summary+'</b>', {closeButton: false, offset: L.point(0, -20)});
				layer.on('mouseover', function() { layer.openPopup(); });
				layer.on('mouseout', function() { layer.closePopup(); });
	};

}

//add zoomHome plugin

var zoomHome = L.Control.zoomHome();
zoomHome.addTo(mymap);


$('#hamburger').on('click', function(e) {
	$('#key').toggleClass('uncollapse');
	$('#map-wrapper').toggleClass('uncollapse');
	$('#filter-wrapper').toggleClass('uncollapse');
	$('#hamburger').toggleClass('uncollapse');
	$('#hamburger-wrapper').toggleClass('uncollapse');
	e.preventDefault();
});

jQuery(function($){
var windowWidth = $(window).width();

$(window).resize(function() {
	if(windowWidth != $(window).width()){
	location.reload();
	return;
	}
});
});

$( document ).ready( function(){
	var checkboxes = $( ':checkbox' );

	// Check all checkboxes
	checkboxes.prop( 'checked', true );
		
});



