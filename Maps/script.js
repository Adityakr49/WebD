function initMap() {
    var location = {lat: 12.314849, lng: 76.612294};
    var map=new google.maps.Map(document.getElementById("map"),{
        zoom: 4,
        center: location
    });
    var marker=new google.maps.Marker({
        position:location,
        map:map
    });
}
// AIzaSyBo7gYpGbY8YLBMF6Bio0cM4Caknk1nywo