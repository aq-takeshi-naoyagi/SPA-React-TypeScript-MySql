# ベースイメージ
FROM node:14

# ワーキングディレクトリの設定
WORKDIR /app

# 依存関係ファイルをコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# ソースコードをコピー
COPY . .

# アプリケーションのビルド
RUN npm run build

# 3000番ポートを公開
EXPOSE 3000

# アプリケーションの起動
CMD ["npm", "start"]
