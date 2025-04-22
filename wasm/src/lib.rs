#[allow(warnings)]
mod bindings;

use bindings::Guest;

struct Component;

impl Guest for Component {
    /// Say hello!
    fn hello() {
        println!("Hello, World!");
    }
}

bindings::export!(Component with_types_in bindings);
