export default class Tag {
    colour: String;
    name: String;
    slug: String;

    constructor(name: String, colour: String, slug : String) {
        this.name = name;
        this.colour = colour;
        this.slug = slug;
    }
}