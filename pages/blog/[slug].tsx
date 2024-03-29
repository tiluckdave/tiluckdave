import { useMDXComponent } from 'next-contentlayer/hooks';
import { getTweets } from 'lib/twitter';
import components from 'components/MDXComponents';
import BlogLayout from 'layouts/blog';
import { allBlogs } from '.contentlayer/data';
import type { Blog } from '.contentlayer/types';

export default function Post({ post, tweets }: { post: Blog; tweets: any[] }) {
  const Component = useMDXComponent(post.body.code);

  return (
    <BlogLayout post={post}>
      <Component
        components={
          {
            ...components
          } as any
        }
      />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);
  const tweets = await getTweets(post.tweetIds);

  return { props: { post, tweets } };
}
