use crate::client::*;
use rocket::tokio::time::sleep;
use rs_webos::command::Command;
use serde_json::Value;
use std::time::Duration;
use tungstenite::connect;
use url::Url;

#[get("/channels")]
pub async fn available_channels() {
    let client = Client::new();
    client.run(Command::ListLaunchPoints).await;
}

#[get("/channels/globo")]
pub async fn launch_globo() {
    let client = Client::new();

    client
        .run(Command::Launch("globoplaywebos".to_owned(), Value::Null))
        .await;

    sleep(Duration::from_millis(30000)).await;
    println!("- thread slept for 30s, ready to run the next command\n\r");

    let response = client.run(Command::GetInputSocket).await;

    match response {
        Some(value) => match value {
            Value::Object(value) => {
                let socket_url = value
                    .get("socketPath")
                    .expect("Response needs to return a socket connection url");

                if let Value::String(value) = socket_url.clone() {
                    let (mut socket, response) =
                        connect(Url::parse(&value).expect("Socket URL to be a valid URL"))
                            .expect("Unable to connect to Web Socket");

                    socket
                        .send(tungstenite::Message::Text(
                            r#"{
                                "type": "button", 
                                "payload": {
                                    "name": "CLICK" 
                                }
                            }"#
                            .into(),
                        ))
                        .expect("- Unable to send message");

                    dbg!(response);
                }
            }
            _ => println!("- Retrieve unexpected data"),
        },
        None => println!("- Unable to retrieve the data"),
    }
}

#[get("/input")]
pub async fn run_cmd() {
    let client = Client::new();

    let response = client.run(Command::GetInputSocket).await;

    match response {
        Some(value) => match value {
            Value::Object(value) => {
                let socket_url = value
                    .get("socketPath")
                    .expect("Response needs to return a socket connection url");

                if let Value::String(value) = socket_url.clone() {
                    let (mut socket, response) =
                        connect(Url::parse(&value).expect("Socket URL to be a valid URL"))
                            .expect("Unable to connect to Web Socket");

                    socket
                        .send(tungstenite::Message::Text(
                            r#"{
                                "type": "button", 
                                "payload": {
                                    "name": "CLICK" 
                                }
                            }"#
                            .into(),
                        ))
                        .expect("- Unable to send message");

                    dbg!(&socket, &response);
                }
            }
            _ => println!("- Retrieve unexpected data"),
        },
        None => println!("- Unable to retrieve the data"),
    }
}
