#[allow(warnings)]
mod bindings;

use rand::Rng;

use bindings::Guest;

struct Component;

fn getrand() -> u32 {
    rand::rng().random()
}

impl Guest for Component {
    /// Say hello!
    fn hello() -> String {
        // println!("Hello, World!");

        return getrand().to_string();
    }
}

bindings::export!(Component with_types_in bindings);
