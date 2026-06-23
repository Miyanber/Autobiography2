import { getBlogPost } from "@/libs/microcms";

type Props = {
  params: Promise<{
    id: string
  }>;
}

export default async function BlogRouterPage({ params }: Props) {
  const { id } = await params;
  
  const blogPost = await getBlogPost(id);
  if (blogPost == null) {
    return (
      <div>404 Not Found</div>
    )
  }

  const published_at = new Date(blogPost.publishedAt)

  return (
    <div>
      <section className="content">
        <div className="header-title">Blog</div>
        <div className="paper-container">
          <div className="date">
            <span className="date-before">Date: </span>{ published_at.toLocaleDateString() }
          </div>
          <div className="title-wrapper">
            <div className="title">
              <span className="title-before">Title: </span>{ blogPost.title }
            </div>
          </div>
          <div className="markdown-body" >
              { blogPost.content }
          </div>
        </div>
      </section>
    </div>
  );

  return <div>404: 存在しないページURL構成です</div>;
}