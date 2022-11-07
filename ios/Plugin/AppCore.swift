import Foundation

@objc public class AppCore: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
