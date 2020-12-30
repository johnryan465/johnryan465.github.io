import Tag from "@/types/Tag"
export default class Article {
    document : any;
    tags : Tag[];
    title: String;
    date: Date;
    slug: String;
    description: String;

    constructor(title: String, document : any, tags : Tag[], date : Date, slug : String, description : String) {
        this.document = document;
        this.tags = tags;
        this.title = title;
        this.date = date;
        this.slug = slug;
        this.description = description;
    }
}