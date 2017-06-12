var mymap = L.map('mapid').setView([31.505, 7], 2);

L.tileLayer('https://api.mapbox.com/styles/v1/rospearce/ciwgju4yv00cy2pmqeggx1mx8/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicm9zcGVhcmNlIiwiYSI6ImNpdm1sczJsZjAwOGMyeW1xNHc4ejJ0N28ifQ.4B24e0_HgfJj4sgqimETqA', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 5,
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
		
		var naturalColdIcon = L.AwesomeMarkers.icon({
				icon: 'snowflake-o',  
				prefix: 'fa',
				markerColor: 'gray'
		    });
				
				var naturalRainIcon = L.AwesomeMarkers.icon({
						icon: 'tint',  
						prefix: 'fa',
						markerColor: 'gray'
				    });
				
				var humanColdIcon = L.AwesomeMarkers.icon({
						icon: 'snowflake-o',  
						prefix: 'fa',
						markerColor: 'orange'
				    });
				
				var humanHotIcon = L.AwesomeMarkers.icon({
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
																			
			
		
var promise = $.getJSON("bams.geojson");
promise.then(function(data) {
				 
			var allStudies = L.geoJson(data);
						
			var humanImpactHeat = L.geoJson(data, {
				filter: function(feature, layer) {
					return (feature.properties.impact == "Yes" && (feature.properties.type == "Heat" || feature.properties.type == "Heat & humidity" || feature.properties.type == "Snow pack drought"));
				},
				pointToLayer: function(feature, latlng) {
					return L.marker(latlng, {
						icon: humanHotIcon
					}).on('click', onClick);
				},
							onEachFeature: onEachFeature,
			});
						
			var humanImpactCold = L.geoJson(data, {
		filter: function(feature, layer) {
			return (feature.properties.impact == "Yes" && (feature.properties.type == "Cold" || feature.properties.type == "Sea ice"));
		},
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {
				icon: humanColdIcon
			});
		},
				onEachFeature: onEachFeature,
	});
		
			var humanImpactDry = L.geoJson(data, {
		filter: function(feature, layer) {
			return (feature.properties.impact == "Yes" && (feature.properties.type == "Dryness" || feature.properties.type == "Drought" || feature.properties.type == "Sunshine"));
		},
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {
				icon: humanDryIcon
			});
		},
		onEachFeature: onEachFeature,
	});

	var humanImpactFire = L.geoJson(data, {
		filter: function(feature, layer) {
			return (feature.properties.impact == "Yes" && (feature.properties.type == "Wildfires"));
		},
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {
				icon: humanFireIcon
			});
		},
		onEachFeature: onEachFeature,
	});

	var humanImpactStorm = L.geoJson(data, {
		filter: function(feature, layer) {
			return (feature.properties.impact == "Yes" && (feature.properties.type == "Tropical cyclones"));
		},
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {
				icon: humanStormIcon
			});
		},
		onEachFeature: onEachFeature,
	});

	var humanImpactRain = L.geoJson(data, {
		filter: function(feature, layer) {
			return (feature.properties.impact == "Yes" && (feature.properties.type == "High tide floods" || feature.properties.type == "Heavy rainfall"));
		},
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {
				icon: humanRainIcon
			});
		},
		onEachFeature: onEachFeature,
	});
						
	var naturalCold = L.geoJson(data, {
			filter: function(feature, layer) {
				return (feature.properties.impact == "No" && feature.properties.type == "Cold");
			},
			pointToLayer: function(feature, latlng) {
				return L.marker(latlng, {
									icon: naturalColdIcon
				});
			},
						onEachFeature: onEachFeature 
	});
									
	var naturalRain = L.geoJson(data, {
			filter: function(feature, layer) {
				return (feature.properties.impact == "No" && feature.properties.type == "Heavy rainfall");
			},
			pointToLayer: function(feature, latlng) {
				return L.marker(latlng, {
									icon: naturalRainIcon
				});
			},
						onEachFeature: onEachFeature 
	});
									
	humanImpactHeat.addTo(mymap);
	humanImpactCold.addTo(mymap);
	humanImpactDry.addTo(mymap);
	humanImpactFire.addTo(mymap);
	humanImpactStorm.addTo(mymap);
	humanImpactRain.addTo(mymap);
	naturalCold.addTo(mymap);
	naturalRain.addTo(mymap);

				
	$("#natural-checkbox").change(function() {
				if (this.checked) {
		mymap.addLayer(naturalCold)
				mymap.addLayer(naturalRain)
				}
				else {
		mymap.removeLayer(naturalCold)
				mymap.removeLayer(naturalRain)
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
				}
				else {
		mymap.removeLayer(humanImpactHeat)
				mymap.removeLayer(humanImpactCold)
				mymap.removeLayer(humanImpactDry)
				mymap.removeLayer(humanImpactFire)
				mymap.removeLayer(humanImpactStorm)
				mymap.removeLayer(humanImpactRain)
				}

	});
						
	$('#heat-checkbox').change(function() {
	if (this.checked && $('#human-checkbox').is(':checked') && !$('#natural-checkbox').is(':checked')) {
		mymap.addLayer(humanImpactHeat);
			}
			else if (this.checked && $('#natural-checkbox').is(':checked') && !$('#human-checkbox').is(':checked')) {
		// 	 mymap.addLayer(naturalHeat);
			}
			else if (this.checked && $('#natural-checkbox').is(':checked') && $('#human-checkbox').is(':checked')) {
		// 	 mymap.addLayer(naturalHeat);
				mymap.addLayer(humanImpactHeat);
			}
			else if (this.checked && !$('#natural-checkbox').is(':checked') && !$('#human-checkbox').is(':checked')) {
		//do nothing
			}
		else {
		mymap.removeLayer(humanImpactHeat);
		//	 mymap.removeLayer(naturalHeat);
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

function onClick(e) {
    mymap.setView(e.latlng, 5);
	console.log("click-zoom");
}
			 
function onEachFeature(feature, layer) {
	// does this feature have a property named popupContent?
	if (feature.properties) {
		layer.bindPopup('<h1>'+feature.properties.authors+'</h1>Type: <b>'+feature.properties.type+'</b><br />Location: <b>'+feature.properties.location+'</b><br />Human impact? <b>'+feature.properties.impact+'</b><br />Summary: <b>'+feature.properties.summary+'</b>', {closeButton: false, offset: L.point(0, -20)});
				layer.on('mouseover', function() { layer.openPopup(); });
				layer.on('mouseout', function() { layer.closePopup(); });
	};

}

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



