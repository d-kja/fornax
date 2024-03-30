use std::env;

use rs_webos::client::*;
use rs_webos::command::Command;
use serde_json::Value;
pub struct Client {
    url: String,
    key: Option<String>,
}

impl Client {
    pub fn new() -> Self {
        let url: String = env::var("CLIENT_URL").expect("Missing environment variable: CLIENT_URL");
        let key: Option<String> = match env::var("CLIENT_KEY") {
            Ok(value) => Some(value),
            Err(_) => None,
        };

        Self { url, key }
    }

    pub async fn run(&self, command: Command) -> Option<Value> {
        let config = WebOsClientConfig::new(&self.url, self.key.clone());
        let client = WebosClient::new(config)
            .await
            .expect("Unable to create a client for the WebOS");

        let resp = client
            .send_command(command)
            .await
            .expect("Unable to send the command");

        println!(
            "={:-^45}=\n\r\n\r{:#?}\n\r\n\r={:-^45}=\n\r",
            "=RESPONSE=", resp.payload, "=END="
        );

        resp.payload
    }
}
