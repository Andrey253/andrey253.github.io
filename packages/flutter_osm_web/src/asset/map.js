async function centerMap(mapId) {
   var iframe = document.getElementById("frame_map_"+mapId);
   var geoAsync = await iframe.contentWindow.centerMap();
   return geoAsync;
}

async function locateMe(mapId) {
   var iframe = document.getElementById("frame_map_"+mapId);
   var geoAsync = await iframe.contentWindow.getMyLocation();
   console.log(geoAsync);
   return geoAsync;
}

async function changeTileLayer(mapId,tile) {
   var iframe = document.getElementById("frame_map_"+mapId);
   return await iframe.contentWindow.changeTileLayer(tile);
}

async function addPosition(mapId,point, showMarker, animate) {
   var iframe = document.getElementById("frame_map_"+mapId);
   return await iframe.contentWindow.changePosition(point, showMarker, animate);
}

async function addMarker(mapId,point, icon) {
   var iframe = document.getElementById("frame_map_"+mapId);
   return iframe.contentWindow.addMarker(point, icon);
}
async function changeMarker(mapId,oldPoint, point, icon) {
   console.log("change : " + oldPoint)
   console.log("to :" + point)
   var iframe = document.getElementById("frame_map_"+mapId);
   return iframe.contentWindow.changeMarker(oldPoint, point, icon);
}

async function modifyMarker(mapId,point, icon) {
   var iframe = document.getElementById("frame_map_"+mapId);
   return await iframe.contentWindow.modifyMarker(point, icon);
}

async function initMapLocation(mapId,point) {
   console.log(point.lon + ":" + point.lat)
   var iframe = document.getElementById("frame_map_"+mapId);
   await iframe.contentWindow.initMapLocation(point);
}

async function setDefaultIcon(mapId,icon) {
   var iframe = document.getElementById("frame_map_"+mapId);
   return await iframe.contentWindow.setDefaultIcon(icon);
}
async function setIconStaticGeoPoints(mapId,id, icon) {
   var iframe = document.getElementById("frame_map_"+mapId);
   return await iframe.contentWindow.setStaticGeoPointIcon(id, icon);
}
async function setStaticGeoPoints(mapId,id, points) {
   console.log(points)
   var iframe = document.getElementById("frame_map_"+mapId);
   return await iframe.contentWindow.setStaticGeoPoint(id, points);
}
async function setStaticGeoPointsWithOrientation(mapId,id, points) {
   var iframe = document.getElementById("frame_map_"+mapId);
   return await iframe.contentWindow.setStaticGeoPointsWithOrientation(id, points);
}
async function setZoomStep(mapId,zoomStep) {
   var iframe = document.getElementById("frame_map_"+mapId);
   return await iframe.contentWindow.setZoomStep(zoomStep);
}
async function zoomIn(mapId) {
   var iframe = document.getElementById("frame_map_"+mapId);
   return await iframe.contentWindow.zoomIn();
}
async function zoomOut(mapId) {
   var iframe = document.getElementById("frame_map_"+mapId);
   return await iframe.contentWindow.zoomOut();
}
async function setZoom(mapId,zoom) {
   var iframe = document.getElementById("frame_map_"+mapId);
   return await iframe.contentWindow.setZoomLevel(zoom);
}
async function setZoomWithStep(mapId,step) {
   var iframe = document.getElementById("frame_map_"+mapId);
   return await iframe.contentWindow.setZoomWithStep(step);
}
async function getZoom(mapId) {
   var iframe = document.getElementById("frame_map_"+mapId);
   return await iframe.contentWindow.getZoom();
}
async function configZoom(mapId,step, zoom, minZoomLevel, maxZoomLevel) {
   var iframe = document.getElementById("frame_map_"+mapId);
   return await iframe.contentWindow.configInitZoomMap(step, zoom, minZoomLevel, maxZoomLevel);
}
async function currentUserLocation(mapId) {
   var iframe = document.getElementById("frame_map_"+mapId);
   return await iframe.contentWindow.userLocation();
}
async function removeMarker(mapId,point) {
   var iframe = document.getElementById("frame_map_"+mapId);
   return await iframe.contentWindow.removeMarker(point);
}
async function setMaxZoomLevel(mapId,zoomLevel) {
   var iframe = document.getElementById("frame_map_"+mapId);
   return await iframe.contentWindow.setMaxZoomLevel(zoomLevel);
}
async function setMinZoomLevel(mapId,zoomLevel) {
   var iframe = document.getElementById("frame_map_"+mapId);
   return await iframe.contentWindow.setMinZoomLevel(zoomLevel);
}
async function limitArea(mapId,box) {
   var iframe = document.getElementById("frame_map_"+mapId);
   return await iframe.contentWindow.limitBoundingBox(box);
}
async function getBounds(mapId) {
   var iframe = document.getElementById("frame_map_"+mapId);
   return await iframe.contentWindow.getBounds();
}
async function flyToBounds(mapId,box, padding) {
   var iframe = document.getElementById("frame_map_"+mapId);
   return await iframe.contentWindow.flyToBoundingBox(box, padding);
}
async function configRoad(mapId,color, startIcon, middleIcon, endIcon) {
   var iframe = document.getElementById("frame_map_"+mapId);
   return await iframe.contentWindow.configRoad(color, startIcon, middleIcon, endIcon);
}
function drawRoad(mapId,route, color, roadWidth, zoomInto, keepInitialGeoPoints, interestPoints, iconInteretPoint) {
   console.log(route);
   var iframe = document.getElementById("frame_map_"+mapId);
   return iframe.contentWindow.drawRoad(route, color, roadWidth, zoomInto, keepInitialGeoPoints, interestPoints, iconInteretPoint);
}
async function removeLastRoad(mapId){
   var iframe = document.getElementById("frame_map_"+mapId);
   return iframe.contentWindow.removeLastRoad(mapId);
}
async function removeRoad(mapId,roadId){
   var iframe = document.getElementById("frame_map_"+mapId);
   return iframe.contentWindow.removeRoad(mapId,roadId);
}
async function getGeoPoints(mapId) {
   var iframe = document.getElementById("frame_map_"+mapId);
   return await iframe.contentWindow.getGeoPoints();

}
async function setUserLocationIconMarker(mapId,icon){
   var iframe = document.getElementById("frame_map_"+mapId);
   return iframe.contentWindow.setUserLocationIconMarker(icon);
}

async function enableTracking(mapId){
   var iframe = document.getElementById("frame_map_"+mapId);
   return iframe.contentWindow.enableTracking();
}
async function disableTracking(mapId) {
   var iframe = document.getElementById("frame_map_"+mapId);
   return iframe.contentWindow.disableTracking();
}
async function changeIconAdvPickerMarker(mapId,icon) {
   var iframe = document.getElementById("frame_map_"+mapId);
   return await iframe.contentWindow.changeIconAdvPickerMarker(icon);
}
async function advSearchLocation(mapId) {
   var iframe = document.getElementById("frame_map_"+mapId);
   return await iframe.contentWindow.advSearchLocation();
}
async function cancelAdvSearchLocation(mapId) {
   var iframe = document.getElementById("frame_map_"+mapId);
   return await iframe.contentWindow.cancelAdvSearchLocation();
}
async function drawRect(mapId,config,bounds,color,strokeWidth){
   console.log(mapId);
   console.log('draw rect '+config.key);
   console.log('draw rect '+bounds);
   console.log('draw rect '+config.color);
   console.log('draw rect '+config.strokeWidth);
   var iframe = document.getElementById("frame_map_"+mapId);
   return await iframe.contentWindow.drawRect(config.key,bounds,config.color,config.strokeWidth);
}
async function removeRect(mapId,key){
   var iframe = document.getElementById("frame_map_"+mapId);
   return await iframe.contentWindow.removeRect(key);
}


async function setUpMap(mapId){
   var innerWindow = document.getElementById('frame_map_'+mapId).contentWindow;
   innerWindow.isMapReady = isMapReady;
   innerWindow.onGeoPointClicked = onGeoPointClicked;
   innerWindow.onMapSingleTapClicked = onMapSingleTapClicked;
   innerWindow.onRegionChanged = onRegionChanged;
   return 200;
}
/*
* shared dart function that called from js
*/
function isMapReady(isReady) {
   initMapFinish(isReady);
}
function onGeoPointClicked(lon, lat) {
   onStaticGeoPointClicked(lon, lat);
}
function onMapSingleTapClicked(lon, lat) {
   onMapSingleTapListener(lon, lat);
}
function onRegionChanged(box, center) {
   onRegionChangedListener(box.north, box.east, box.south, box.west, center.lon, center.lat);
}






