/*
 *	Program Name: Map.js
 *	Description: An Open Layers mapping script to display collected fungi data.
 * 	Author: Robert Oikle
 * 	Version: 1.0.0
 * 	Date: July 29th, 2013 
 */

//Declare global variables
var map, selectedFeature, selectFeatureControl;

//myOpenLayersMap self-contained object. 
var myOpenLayersMap = {
	/* 
	 * Function Name: init()
	 * Description: The main script for initalizing the mapping function
	 */
	init: function(){
		//Declare projections
		var mercator = new OpenLayers.Projection("EPSG:900913");/*Positions based on x/y coordinates*/
		var WGS84 = new OpenLayers.Projection("EPSG:4326"); /*Positions based on lat/long coordinates*/
		var centerPosition = new OpenLayers.LonLat(-64.45, 45.1);
		
		//Create map object with added controls
		map = new OpenLayers.Map('map', { 
			div: "map", 
			projection: mercator,
			displayProjection: WGS84, /*Defines the projection format for displayed coordinates */
			controls: [
			new OpenLayers.Control.Navigation(),
			new OpenLayers.Control.Zoom(),
			new OpenLayers.Control.LayerSwitcher({'ascending':true}),
			new OpenLayers.Control.ArgParser(),
			new OpenLayers.Control.Attribution(),
			new OpenLayers.Control.MousePosition()
			] 
		});
		
		//Base Layers
		var osm = new OpenLayers.Layer.OSM( "Open Street Map");
		
		//Define Style Preferences: 
		var defaultStyle = new OpenLayers.Style({
			fillColor: '#FE5752',
			strokeColor: '#B80600',
			fillOpacity: 0.5,
			pointRadius: 4
		});
		var selectStyle = new OpenLayers.Style({
			fillColor: '#52FEAE',
			strokeColor: '#00B862',
			pointRadius: 5,
			fillOpacity: 1
		});
		var myStyleMap = new OpenLayers.StyleMap({
			default: defaultStyle, 
			select: selectStyle		
		});
				
		//Load Vector GEOJSON data
		var geoJSONVector = new OpenLayers.Layer.Vector('Vector Data',{	
			projection: WGS84,
			styleMap: myStyleMap,
			protocol: new OpenLayers.Protocol.HTTP({
				url: './data/data.json',
				format: new OpenLayers.Format.GeoJSON({})
			}),
			strategies: [	new OpenLayers.Strategy.Fixed()]
		});
		
        // Create a select feature control and add it to the map.
        selectFeatureControl = new OpenLayers.Control.SelectFeature(geoJSONVector,{
			onSelect: myOpenLayersMap.selectFeature, 
			onUnselect: myOpenLayersMap.unselectFeature}
        );
        map.addControl(selectFeatureControl);
        selectFeatureControl.activate();		
		
		//Add layers to map object
		map.addLayers([osm, geoJSONVector]);	
		
		//Set center of map
		map.setCenter(centerPosition.transform(WGS84, map.getProjectionObject()), 12);		
	},
	closePopup: function(evt) {
            selectFeatureControl.unselect(selectedFeature);
    },
    selectFeature: function(feature) {
            selectedFeature = feature;
            //create FramedCloud pop-up window when feature is selected
            popup = new OpenLayers.Popup.FramedCloud("featurePopupWindow", 
                 selectedFeature.geometry.getBounds().getCenterLonLat(),
                 null,
                 "<div style='font-size:10; max-width:300px'><img src=\"img/fungi/"+selectedFeature.attributes.Occurrence_ID+".jpg\" width=\"300\" height=\"250\">"+
        		 "<br>Occurrence ID: " + selectedFeature.attributes.Occurrence_ID +
        		 "<br>Record Date: " + selectedFeature.attributes.Record_Date +
        		 "<br>Location: " + selectedFeature.attributes.Location +
        		 "<br>Genus: " + selectedFeature.attributes.Genus +
        		 "<br>Species: " + selectedFeature.attributes.Species +
        		 "<br>Common Name: " + selectedFeature.attributes.Common_Name +
        		 "<br>Description: " + selectedFeature.attributes.Description + "</div>",
        		 null,
                 true, 
                 myOpenLayersMap.closePopup);
            selectedFeature.popup = popup;
            map.addPopup(popup);
    },
    unselectFeature: function(feature) {
            map.removePopup(feature.popup);
            feature.popup.destroy();
            feature.popup = null;
    } 
}