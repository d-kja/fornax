use std::env;

use lg_webos_client::client::*;
use lg_webos_client::command::Command;

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

    pub async fn run(&self, command: Command) {
        let config = WebOsClientConfig::new(&self.url, self.key.clone());
        let client = WebosClient::new(config)
            .await
            .expect("Unable to create a client for the WebOS");

        let resp = client
            .send_command(command)
            .await
            .expect("Unable to send the command");

        println!("{:#?}", resp.payload);
    }
}
