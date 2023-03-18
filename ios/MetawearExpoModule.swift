import ExpoModulesCore

import Foundation
import MetaWear
import MetaWearCpp
import React

import MessageUI
import BoltsSwift

public class MetawearExpoModule: Module {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('MetawearExpo')` in JavaScript.
    Name("MetawearExpo")

    // Sets constant properties on the module. Can take a dictionary or a closure that returns a dictionary.
    Constants([
      "PI": Double.pi
    ])

    // Defines event names that the module can send to JavaScript.
    Events("onChange")

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("hello") {
      return "Hello world! 👋"
    }

    // Defines a JavaScript function that always returns a Promise and whose native code
    // is by default dispatched on the different thread than the JavaScript runtime runs on.
    AsyncFunction("setValueAsync") { (value: String) in
      // Send an event to JavaScript.
      self.sendEvent("onChange", [
        "value": value
      ])
    }

    AsyncFunction("connect") { (promise: Promise) in
      MetaWearScanner.shared.startScan(allowDuplicates: true) { (device) in
        print("wee found a device!")
        // Hooray! We found a MetaWear board, so stop scanning for more
        if device.rssi > -80 {
          MetaWearScanner.shared.stopScan()
          device.connectAndSetup().continueWith { t in
            if let error = t.error {
              promise.resolve("error: could not connect 1")
            } else {
              t.result?.continueWith { t in
                promise.resolve("error: could not connect 2")
              }

              promise.resolve("connected!")
            }
          }
        }
      }
    }




  }
}
