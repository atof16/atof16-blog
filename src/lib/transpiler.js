import rehypeHighlight from 'rehype-highlight';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify/lib';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse/lib';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

export default async function markdownTohtml(markdown) {
  const result = await unified()
    .use(remarkParse) // markdown -> mdast
    .use(remarkGfm) // table
    .use(remarkRehype) //mdast -> hast
    .use(rehypeSanitize) // sanitize
    .use(rehypeHighlight) // syntax highlight
    .use(rehypeStringify) // hast -> html
    .process(markdown);
  return result.toString();
}
