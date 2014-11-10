function initialize() {
    var mapCanvas = document.getElementById('google-map');
    var mapOptions = {
        center: new google.maps.LatLng(59.913, 10.714),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
}
google.maps.event.addDomListener(window, 'load', initialize);