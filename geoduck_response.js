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
