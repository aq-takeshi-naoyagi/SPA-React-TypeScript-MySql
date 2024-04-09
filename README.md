## コマンド
* Docker起動：docker-compose up
* Docker停止：docker-compose down
* Dockerビルド：docker-compose up --build -d

## フロントエンド
### 主な修正箇所
* frontendディレクトリ
### ビルド
* ルートディレクトリでdocker-compose up --build -d
## バックエンド
### 主な修正箇所
* backendディレクトリ
### バックエンドのビルド
* backendディレクトリでnpm run build
* ルートディレクトリでdocker-compose up --build -d
