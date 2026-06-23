import { BlogPost } from "@/types/blog"

type Props = {
  params: Promise<{
    id: string
  }>;
}

async function getBlogPost(id: string): Promise<BlogPost | null> {
  const domain = process.env.MICROCMS_SERVICE_DOMAIN;
  const apiKey = process.env.MICROCMS_API_KEY;

  const baseUrl = `https://${domain}.microcms.io/api/v1`;
  if (!domain || !apiKey) {
    console.error("Cannot load domain and apiKey");
    return null;
  }

  const response = await fetch(`${baseUrl}/blogs/${id}`, {
    headers: {
      'X-MICROCMS-API-KEY': apiKey,
    },
    next: { revalidate: 60 },
  })
  
  return response.json()
}

export default async function BlogRouterPage({ params }: Props) {
  const { id } = await params;
  
  const blogPost = await getBlogPost(id)
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