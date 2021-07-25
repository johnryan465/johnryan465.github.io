import Tag from "@/types/Tag"
import Article from "@/types/Article"
import { contentFunc } from "@nuxt/content/types/content";
import { QueryBuilder } from "@nuxt/content/types/query-builder";


export default async function parseArticles($content : contentFunc, query : QueryBuilder): Promise<Article[]> {
    var res = await query.fetch();
    var articlesData = (Array.isArray(res)) ? res : [res];
    const tagNames : String[][] = articlesData.map( (x : any) => x.tags)
    var tagResPromise = tagNames.map((x) => $content("tags")
        .where({ slug: { $in: x } })
        .fetch());
    const tagRes = await Promise.all(tagResPromise);
    const tags = tagRes.map((d) => d.map((x : any) => new Tag(x.name, x.colour, x.slug)));
    const articles = articlesData.map((articleData: any, index: number) => new Article(articleData.title, articleData, tags[index], new Date(articleData.date), articleData.slug, articleData.description, articleData.draft));
    const filtered_articles = articles.filter(article => article.draft != true);
    return filtered_articles
}