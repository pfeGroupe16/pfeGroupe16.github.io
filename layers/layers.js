ol.proj.get("EPSG:32632").setExtent([535269.421011, 408170.697618, 642934.051452, 468931.924698]);
var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_routes_0 = new ol.format.GeoJSON();
var features_routes_0 = format_routes_0.readFeatures(json_routes_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_routes_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_routes_0.addFeatures(features_routes_0);var lyr_routes_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_routes_0, 
                style: style_routes_0,
                title: '<img src="styles/legend/routes_0.png" /> routes'
            });var format_edicifes_1 = new ol.format.GeoJSON();
var features_edicifes_1 = format_edicifes_1.readFeatures(json_edicifes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_edicifes_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_edicifes_1.addFeatures(features_edicifes_1);var lyr_edicifes_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_edicifes_1, 
                style: style_edicifes_1,
                title: '<img src="styles/legend/edicifes_1.png" /> edicifes'
            });var format_bornes_geodesiques_2 = new ol.format.GeoJSON();
var features_bornes_geodesiques_2 = format_bornes_geodesiques_2.readFeatures(json_bornes_geodesiques_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_bornes_geodesiques_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_bornes_geodesiques_2.addFeatures(features_bornes_geodesiques_2);var lyr_bornes_geodesiques_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bornes_geodesiques_2, 
                style: style_bornes_geodesiques_2,
    title: 'bornes_geodesiques<br />\
    <img src="styles/legend/bornes_geodesiques_2_0.png" /> Base<br />\
    <img src="styles/legend/bornes_geodesiques_2_1.png" /> Densification<br />\
    <img src="styles/legend/bornes_geodesiques_2_2.png" /> NewBase<br />\
    <img src="styles/legend/bornes_geodesiques_2_3.png" /> Réference<br />'
        });var format_communes_3 = new ol.format.GeoJSON();
var features_communes_3 = format_communes_3.readFeatures(json_communes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_communes_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_communes_3.addFeatures(features_communes_3);var lyr_communes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_communes_3, 
                style: style_communes_3,
                title: '<img src="styles/legend/communes_3.png" /> communes'
            });var format_cours_eaux_4 = new ol.format.GeoJSON();
var features_cours_eaux_4 = format_cours_eaux_4.readFeatures(json_cours_eaux_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_cours_eaux_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_cours_eaux_4.addFeatures(features_cours_eaux_4);var lyr_cours_eaux_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cours_eaux_4, 
                style: style_cours_eaux_4,
                title: '<img src="styles/legend/cours_eaux_4.png" /> cours_eaux '
            });

lyr_routes_0.setVisible(true);lyr_edicifes_1.setVisible(true);lyr_bornes_geodesiques_2.setVisible(true);lyr_communes_3.setVisible(false);lyr_cours_eaux_4.setVisible(true);
var layersList = [baseLayer,lyr_routes_0,lyr_edicifes_1,lyr_bornes_geodesiques_2,lyr_communes_3,lyr_cours_eaux_4];
lyr_routes_0.set('fieldAliases', {'type_route': 'type_route', 'id_route': 'id_route', });
lyr_edicifes_1.set('fieldAliases', {'id_edifice': 'id_edifice', 'type_edifi': 'type_edifi', });
lyr_bornes_geodesiques_2.set('fieldAliases', {'id_borne': 'id_borne', 'X': 'X', 'Y': 'Y', 'h': 'h', 'type_borne': 'type_borne', 'Reseau_geo': 'Reseau_geo', 'lat': 'lat', 'long': 'long', });
lyr_communes_3.set('fieldAliases', {'Nom_commun': 'Nom_commun', 'id_commune': 'id_commune', 'sup_commun': 'sup_commun', });
lyr_cours_eaux_4.set('fieldAliases', {'id_eau': 'id_eau', 'type_eau': 'type_eau', });
lyr_routes_0.set('fieldImages', {'type_route': 'TextEdit', 'id_route': 'TextEdit', });
lyr_edicifes_1.set('fieldImages', {'id_edifice': 'TextEdit', 'type_edifi': 'TextEdit', });
lyr_bornes_geodesiques_2.set('fieldImages', {'id_borne': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'h': 'TextEdit', 'type_borne': 'TextEdit', 'Reseau_geo': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', });
lyr_communes_3.set('fieldImages', {'Nom_commun': 'TextEdit', 'id_commune': 'TextEdit', 'sup_commun': 'TextEdit', });
lyr_cours_eaux_4.set('fieldImages', {'id_eau': 'TextEdit', 'type_eau': 'TextEdit', });
lyr_routes_0.set('fieldLabels', {'type_route': 'no label', 'id_route': 'no label', });
lyr_edicifes_1.set('fieldLabels', {'id_edifice': 'no label', 'type_edifi': 'no label', });
lyr_bornes_geodesiques_2.set('fieldLabels', {'id_borne': 'no label', 'X': 'no label', 'Y': 'no label', 'h': 'no label', 'type_borne': 'no label', 'Reseau_geo': 'no label', 'lat': 'no label', 'long': 'no label', });
lyr_communes_3.set('fieldLabels', {'Nom_commun': 'no label', 'id_commune': 'no label', 'sup_commun': 'no label', });
lyr_cours_eaux_4.set('fieldLabels', {'id_eau': 'no label', 'type_eau': 'no label', });
lyr_cours_eaux_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});