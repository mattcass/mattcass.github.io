
// GOOGLE MAPS API 
function mapping() {

    var epeLocation = new google.maps.LatLng(42.283088,-71.378671);

    var myOptions = {
        zoom: 15,
        center: epeLocation,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        
        styles:
[{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"administrative","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"weight":1}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"weight":0.8}]},{"featureType":"landscape","stylers":[{"color":"#ffffff"}]},{"featureType":"water","stylers":[{"visibility":"off"}]},{"featureType":"transit","stylers":[{"visibility":"on"}]},{"elementType":"labels","stylers":[{"visibility":"on"}]},{"elementType":"labels.text","stylers":[{"visibility":"on"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#000000"}]},{"elementType":"labels.icon","stylers":[{"visibility":"on"}]}]
};

    var map = new google.maps.Map(document.getElementById('map'), myOptions);

    var marker = new google.maps.Marker({
        position: epeLocation,
        map: map,
        title:"EPE"
    }); 
   
    var popupContent = '<div class="popUp">'+
        '<span><img src="images/logo.png" alt="">' +
        '<h4>165 West Central Street<br>' +
        'Natick, MA 01760 <br>' +
        '508.651.1316</h4>' +
        '</div>'; 

    var infowindow = new google.maps.InfoWindow({
      content: popupContent,
      maxWidth: 300
    });
 
    google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
    });



}       

window.onload = function() {
    // prep anything we need to
    mapping();
}
