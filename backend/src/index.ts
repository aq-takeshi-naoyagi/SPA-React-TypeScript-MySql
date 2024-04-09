import express, { Express, Request, Response } from 'express';

const app: Express = express();
const PORT = 4000;

app.use(express.json());

const articles = [
    { id: 1, title: 'Article 1', content: 'This is the content of article 1...' },
    { id: 2, title: 'Article 2', content: 'This is the content of article 2...' },
];

// 記事一覧を取得するエンドポイント
app.get('/api/articles', (req: Request, res: Response) => {
    res.json(articles);
});

// 特定の記事を取得するエンドポイント
app.get('/api/articles/:id', (req: Request, res: Response) => {
    const article = articles.find(a => a.id === parseInt(req.params.id));
    if (article) {
        res.json(article);
    } else {
        res.status(404).send('Article not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
