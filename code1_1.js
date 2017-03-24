/***
 * Excerpted from "Reactive Programming with RxJS",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/smreactjs for more book information.
***/
var quakes = Rx.Observable.create(function(observer) {
  window.eqfeed_callback = function(response) {
    console.log(response);
    console.log(GEODUCK_RESPONSE_OBJECT);
    observer.onNext(response); //(1)
    observer.onCompleted(); //(2)
  };

  loadJSONP(QUAKE_URL);
}).flatMap(function transform(dataset) { //(3)
  return Rx.Observable.from(dataset.features); //(4)
});

quakes.subscribe(function(quake) { //(5)
  const coords = quake.geometry.coordinates;
  console.log(coords[1]);
  console.log(coords[0]);
  const marker = L.marker([coords[1], coords[0]]);
  marker.bindPopup(`<b>Earthquake</b><br>Magnitude: ${quake.properties.mag}`);
  marker.addTo(map);
});
