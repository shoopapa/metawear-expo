files updated from template

Added Metawear to podspec

```ruby
  s.dependency "MetaWear", '~> 4.1.3'
  s.dependency 'iOSDFULibrary'
```

`npx expo install expo-build-properties`

`app.json` deployment target to 14

```json
expo
{
  "expo": {
    "plugins": [
      [
        "expo-build-properties",
        {
          "ios": {
            "deploymentTarget": "14.0"
          }
        }
      ]
    ]
  }
}
```

remove web platform from `expo-module.config.json`

remove view files form java/ios
`View(MetawearExpoView.self)`
