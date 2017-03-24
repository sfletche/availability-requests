const markers = [];
const greenIcon = L.icon({
  iconUrl: '../assets/img/RF-Spinner_no-bkg.gif',
  iconSize: [20, 31],
});

const removeMarkers = function() {
  markers.forEach(function(marker) {
    map.removeLayer(marker);
  });
  markers.length = 0;
}

const corsRequests = Rx.Observable
  .interval(2000)
  .flatMap(function() {
    // console.log('ajax');
    return Rx.DOM.ajax({
      url: 'http://geoduck.dchapman.dev.renewfund.com/recent_geocode_requests',
      responseType: 'json',
      crossDomain: true,
      withCredentials: false,
    });
  })
  .flatMap(function(request) {
    console.log('response');
    removeMarkers();
    return request.response.features;
  })
  .filter(function(feature) {
    return feature.metadata.status === 'success';
  })
  .filter(function(feature) {
    return feature.age < 3;
  });

corsRequests.subscribe(function(feature) {
  const { latitude, longitude } = feature.metadata.results[0];
  const { address, city, state, zip } = feature.metadata.results[0];
  const marker = L.marker([latitude, longitude], { icon: greenIcon});
  // const marker = L.marker([latitude, longitude]);
  // marker.bindPopup(`${address}</br>${city}, ${state} ${zip}`);
  marker.addTo(map);
  L.DomUtil.addClass(marker._icon, `fade-value-${feature.age}`);
  markers.push(marker);
});


// const availabilityRequests = Rx.Observable
//   .interval(1000)
//   .flatMap(function() {
//     return Rx.Observable.create(function(observer) {
//       console.log('creating....');
//       const req = new XMLHttpRequest();
//       req.open('GET', 'http://geoduck.dchapman.dev.renewfund.com/recent_geocode_requests');
//       req.onload = function() {
//         removeMarkers();
//         const features = JSON.parse(req.response).features;
//         features.forEach(function(feature) {
//           if (feature.metadata.status === 'success') {
//             observer.onNext(feature);
//           }
//         });
//       };
//       req.send();
//     })
//   });
