mod client;
mod http;

#[macro_use]
extern crate rocket;

use dotenv::dotenv;
use http::{available_channels, launch_globo, run_cmd};

#[launch]
fn rocket() -> _ {
    dotenv().ok();

    rocket::build()
        .mount("/api", routes![available_channels])
        .mount("/api", routes![launch_globo])
        .mount("/api", routes![run_cmd])
}
