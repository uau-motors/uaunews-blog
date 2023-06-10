import { Collection } from "@libs/collections";
import { GhostPostOrPage } from "@libs/ghost";

export const collections: Collection<GhostPostOrPage>[] = [];

//export const collections: Collection<GhostPostOrPage>[] = [{
//  path: `themes`,
//  selector: node => node.primary_tag && node.primary_tag.slug === `themes`
//}]

//export const collections: Collection<GhostPostOrPage>[] = [{
//  path: `luther`,
//  selector: node => node.authors && node.authors.filter(a => a.slug === `martin`).length > 0,
//}]
