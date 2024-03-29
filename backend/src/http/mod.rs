use crate::client::*;
use lg_webos_client::command::Command;
use serde_json::Value;

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
}
