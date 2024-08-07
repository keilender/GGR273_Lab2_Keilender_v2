var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Alberta_1 = new ol.format.GeoJSON();
var features_Alberta_1 = format_Alberta_1.readFeatures(json_Alberta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alberta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alberta_1.addFeatures(features_Alberta_1);
var lyr_Alberta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alberta_1, 
                style: style_Alberta_1,
                popuplayertitle: "Alberta",
                interactive: false,
                title: '<img src="styles/legend/Alberta_1.png" /> Alberta'
            });
var format_Intersection_2 = new ol.format.GeoJSON();
var features_Intersection_2 = format_Intersection_2.readFeatures(json_Intersection_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Intersection_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Intersection_2.addFeatures(features_Intersection_2);
var lyr_Intersection_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Intersection_2, 
                style: style_Intersection_2,
                popuplayertitle: "Intersection",
                interactive: false,
                title: '<img src="styles/legend/Intersection_2.png" /> Intersection'
            });
var format_FishStocking2024_3 = new ol.format.GeoJSON();
var features_FishStocking2024_3 = format_FishStocking2024_3.readFeatures(json_FishStocking2024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FishStocking2024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FishStocking2024_3.addFeatures(features_FishStocking2024_3);
var lyr_FishStocking2024_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FishStocking2024_3, 
                style: style_FishStocking2024_3,
                popuplayertitle: "Fish Stocking 2024",
                interactive: true,
    title: 'Fish Stocking 2024<br />\
    <img src="styles/legend/FishStocking2024_3_0.png" /> 0 - 2550<br />\
    <img src="styles/legend/FishStocking2024_3_1.png" /> 2550 - 8120<br />\
    <img src="styles/legend/FishStocking2024_3_2.png" /> 8120 - 23500<br />\
    <img src="styles/legend/FishStocking2024_3_3.png" /> 23500 - 110000<br />\
    <img src="styles/legend/FishStocking2024_3_4.png" /> 110000 - 1613075<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Alberta_1.setVisible(true);lyr_Intersection_2.setVisible(true);lyr_FishStocking2024_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Alberta_1,lyr_Intersection_2,lyr_FishStocking2024_3];
lyr_Alberta_1.set('fieldAliases', {'PRUID': 'PRUID', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_Intersection_2.set('fieldAliases', {'HYDROUID': 'HYDROUID', 'NAME': 'NAME', 'RANK': 'RANK', 'PRUID': 'PRUID', 'PRUID_2': 'PRUID_2', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_FishStocking2024_3.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'WATERBODY': 'WATERBODY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SPECIES': 'SPECIES', 'GENOTYPE': 'GENOTYPE', 'STOCKED -': 'STOCKED -', 'STOCKING N': 'STOCKING N', 'PLANNED ST': 'PLANNED ST', 'Map Author': 'Map Author', 'StockNum': 'StockNum', });
lyr_Alberta_1.set('fieldImages', {'PRUID': 'TextEdit', 'DGUID': 'TextEdit', 'PRNAME': 'TextEdit', 'PRENAME': 'TextEdit', 'PRFNAME': 'TextEdit', 'PREABBR': 'TextEdit', 'PRFABBR': 'TextEdit', 'LANDAREA': 'TextEdit', });
lyr_Intersection_2.set('fieldImages', {'HYDROUID': '', 'NAME': '', 'RANK': '', 'PRUID': '', 'PRUID_2': '', 'DGUID': '', 'PRNAME': '', 'PRENAME': '', 'PRFNAME': '', 'PREABBR': '', 'PRFABBR': '', 'LANDAREA': '', });
lyr_FishStocking2024_3.set('fieldImages', {'DISTRICT': 'TextEdit', 'WATERBODY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SPECIES': 'TextEdit', 'GENOTYPE': 'TextEdit', 'STOCKED -': 'TextEdit', 'STOCKING N': 'TextEdit', 'PLANNED ST': 'TextEdit', 'Map Author': 'TextEdit', 'StockNum': 'TextEdit', });
lyr_Alberta_1.set('fieldLabels', {'PRUID': 'header label - visible with data', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_Intersection_2.set('fieldLabels', {'HYDROUID': 'header label - visible with data', 'NAME': 'no label', 'RANK': 'no label', 'PRUID': 'no label', 'PRUID_2': 'no label', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_FishStocking2024_3.set('fieldLabels', {'DISTRICT': 'inline label - visible with data', 'WATERBODY': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'SPECIES': 'header label - visible with data', 'GENOTYPE': 'inline label - visible with data', 'STOCKED -': 'hidden field', 'STOCKING N': 'hidden field', 'PLANNED ST': 'inline label - visible with data', 'Map Author': 'header label - always visible', 'StockNum': 'inline label - always visible', });
lyr_FishStocking2024_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});