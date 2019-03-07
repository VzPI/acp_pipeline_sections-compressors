var wms_layers = [];

        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });var format_ACPproposedalignment_1 = new ol.format.GeoJSON();
var features_ACPproposedalignment_1 = format_ACPproposedalignment_1.readFeatures(json_ACPproposedalignment_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACPproposedalignment_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ACPproposedalignment_1.addFeatures(features_ACPproposedalignment_1);var lyr_ACPproposedalignment_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACPproposedalignment_1, 
                style: style_ACPproposedalignment_1,
                title: '<img src="styles/legend/ACPproposedalignment_1.png" /> ACP-proposed-alignment'
            });var format_ACPproposedcompressors_2 = new ol.format.GeoJSON();
var features_ACPproposedcompressors_2 = format_ACPproposedcompressors_2.readFeatures(json_ACPproposedcompressors_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACPproposedcompressors_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ACPproposedcompressors_2.addFeatures(features_ACPproposedcompressors_2);var lyr_ACPproposedcompressors_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACPproposedcompressors_2, 
                style: style_ACPproposedcompressors_2,
                title: '<img src="styles/legend/ACPproposedcompressors_2.png" /> ACP-proposed-compressors'
            });

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_ACPproposedalignment_1.setVisible(true);lyr_ACPproposedcompressors_2.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_ACPproposedalignment_1,lyr_ACPproposedcompressors_2];
lyr_ACPproposedalignment_1.set('fieldAliases', {'Element': 'Element', 'Type': 'Type', 'App_Miles': 'App_Miles', 'Spreads': 'Spreads', });
lyr_ACPproposedcompressors_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Element': 'Element', 'Type': 'Type', 'Horsepower': 'Horsepower', 'Link': 'Link', });
lyr_ACPproposedalignment_1.set('fieldImages', {'Element': 'TextEdit', 'Type': 'TextEdit', 'App_Miles': 'TextEdit', 'Spreads': 'TextEdit', });
lyr_ACPproposedcompressors_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Element': 'TextEdit', 'Type': 'TextEdit', 'Horsepower': 'TextEdit', 'Link': 'TextEdit', });
lyr_ACPproposedalignment_1.set('fieldLabels', {'Element': 'inline label', 'Type': 'inline label', 'App_Miles': 'inline label', 'Spreads': 'inline label', });
lyr_ACPproposedcompressors_2.set('fieldLabels', {'OBJECTID': 'no label', 'Element': 'inline label', 'Type': 'inline label', 'Horsepower': 'inline label', 'Link': 'inline label', });
lyr_ACPproposedcompressors_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});