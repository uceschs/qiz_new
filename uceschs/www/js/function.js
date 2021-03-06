function getLocation() {
  alert('getting location');
  navigator.geolocation.getCurrentPosition(getPosition);
  }
function getPosition(position) {
  document.getElementById('showLocation').innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

function getDistance() {
  alert('getting distance');
  // getDistanceFromPoint is the function called once the distance has been found
  navigator.geolocation.getCurrentPosition(getDistanceFromPoint);
}
function getDistanceFromPoint(position) {
// find the coordinates of a point using this website:
// these are the coordinates for Warren Street
var lat = 51.524616;
var lng = -0.13818;
// return the distance in kilometers
var distance = calculateDistance(position.coords.latitude, position.coords.longitude, lat,lng, 'K');
document.getElementById('showDistance').innerHTML = "Distance: " + distance;
}
// code adapted from https://www.htmlgoodies.com/beyond/javascript/calculate-the-distance-between-two-points-inyour-web-apps.html
function calculateDistance(lat1, lon1, lat2, lon2, unit) {
var radlat1 = Math.PI * lat1/180;
var radlat2 = Math.PI * lat2/180;
var radlon1 = Math.PI * lon1/180;
var radlon2 = Math.PI * lon2/180;
var theta = lon1-lon2;
var radtheta = Math.PI * theta/180;
var subAngle = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
subAngle = Math.acos(subAngle);
subAngle = subAngle * 180/Math.PI; // convert the degree value returned by acos back to degrees from radians
dist = (subAngle/360) * 2 * Math.PI * 3956; // ((subtended angle in degrees)/360) * 2 * pi * radius )
// where radius of the earth is 3956 miles
if (unit=="K") { dist = dist * 1.609344 ;} // convert miles to km
if (unit=="N") { dist = dist * 0.8684 ;} // convert miles to nautical miles
return dist;
}


var  xhr;  // define the global variable to process the AJAX request 
function callDivChange() { 
 xhr = new XMLHttpRequest(); 
   var filename = document.getElementById("filename").value; 
   xhr.open("GET", filename, true); 
   xhr.onreadystatechange = processDivChange; 
   try { 
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
   }
   catch (e) { 
    // this only works in internet explorer 
   } 
   xhr.send();  
}   
function processDivChange() { 
if (xhr.readyState < 4)                         // while waiting response from server 
        document.getElementById('div1').innerHTML = "Loading..."; 
 
    else if (xhr.readyState === 4) {               // 4 = Response from server has been completely loaded. 
        if (xhr.status == 200 && xhr.status < 300)   
    // http status between 200 to 299 are all successful 
            document.getElementById('div1').innerHTML = xhr.responseText; 
    } 
} // JavaScript Document