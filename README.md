# slackbot-coderdojo-iyo
This bot posts next event of a connpass community to the Slack channel.

## プロパティの設定について
ConfigSample.gs の次の項目を適宜書き換えて実行することでプロパティに保存できます。

- `MY-ACCESS-TOKEN`   Slackで発行されたtoken
- `MY-SLACK-CHANNEL`  投稿するSlackチャンネル
- `MY-COMMUNITY-ID`   connpassのコミュニティID

## References
- [connpass API リファレンス](https://connpass.com/about/api/)
- [GASで無料で定期的に実行するSlackボットを作る](https://bioid.hatenablog.jp/entry/2020/04/09/221644)
- [GASのスクリプトプロパティをコードで設定する方法](https://auto-worker.com/blog/?p=2365)
