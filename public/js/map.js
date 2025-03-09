
    mapboxgl.accessToken = mapToken;
    console.log(mapToken);
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center:listing.geometry.coordinates,
        // center: [73.0363,33.6995 ], // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 8 // starting zoom
    });
const marker=new mapboxgl.Marker({color:"red"})
.setLngLat(listing.geometry.coordinates)//Listing.geometry.coordinates  from ejs --->shift
.setPopup(new mapboxgl.Popup({offset:25})
.setHTML(`<h4>${listing.location}</h4> <p>Exact Location will be provided after booking</p>`
))
.addTo(map);


//on mapbox docs see differentproperties are available for marker  color  popup 
//env variables are not accessible here  tou go to ejs-->make variables and store env var then use here
    //center: [73.0363,33.6995 ]--->opposite-->pehly longitude(E) phir latitude (N) ata hai