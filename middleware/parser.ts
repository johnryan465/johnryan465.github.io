import Article from "@/types/Article"



export default async function parseArticles(raw_articles: any): Promise<Article[]> {
    var articlesData = (Array.isArray(raw_articles)) ? raw_articles : [raw_articles];
    //const tagNames : String[][] = articlesData.map( (x : any) => x.tags)
    //var tagResPromise = tagNames.map((x) => $content("tags")
    //    .where({ slug: { $in: x } })
    //    .fetch());
    //const tagRes = await Promise.all(tagResPromise);
    //const tags = tagRes.map((d) => d.map((x : any) => new Tag(x.name, x.colour, x.slug)));
    const articles = articlesData.map((articleData: any, index: number) => new Article(articleData.title, articleData, [], new Date(articleData.date), articleData.slug, articleData.description, articleData.draft));
    const filtered_articles = articles.filter(article => article.draft != true);
    return filtered_articles
}