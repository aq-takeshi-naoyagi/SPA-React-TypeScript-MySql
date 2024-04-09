"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 4000;
app.use(express_1.default.json());
const articles = [
    { id: 1, title: 'Article 1', content: 'This is the content of article 1...' },
    { id: 2, title: 'Article 2', content: 'This is the content of article 2...' },
    // 必要に応じて追加の記事データ
];
// 記事一覧を取得するエンドポイント
app.get('/api/articles', (req, res) => {
    res.json(articles);
});
// 特定の記事を取得するエンドポイント
app.get('/api/articles/:id', (req, res) => {
    const article = articles.find(a => a.id === parseInt(req.params.id));
    if (article) {
        res.json(article);
    }
    else {
        res.status(404).send('Article not found');
    }
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
