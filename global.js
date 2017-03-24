const QUAKE_URL = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojsonp';
const AVAILABILITY_URL = 'https://geoduck.dchapman.dev.renewfund.com/recent_geocode_requests';

function loadJSONP(url) {
  const script = document.createElement('script');
  script.src = url;

  const head = document.getElementsByTagName('head')[0];
  head.appendChild(script);
}

const mapboxUrl= 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png';

const GEODUCK_RESPONSE_OBJECT = {
  "features": [
    {
      "query_string": {
        "bounds": "30,-122:44,-119",
        "include_incorporated_city": true,
        "address": "976 Stannage Avenue, Albany, CA"
      },
      "metadata": {
        "status": "success",
        "results": [
          {
            "house_number": "976",
            "route": "Stannage Ave",
            "address": "976 Stannage Ave",
            "city": "Albany",
            "county": "Alameda",
            "state": "CA",
            "zip": "94706",
            "latitude": 37.8875885009766,
            "longitude": -122.296455383301,
            "accuracy": "Parcel",
            "confidence": "High",
            "entity_type": "Address"
          }
        ]
      }
    }
  ]
}

