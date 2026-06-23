import { BlogPost } from "@/types/blog";
import { createClient } from "microcms-js-sdk";

const domain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

if (!domain || !apiKey) {
  throw new Error(
    "必須の環境変数が設定されていません。.env.local ファイルを確認してください。",
  );
}

export const client = createClient({
  serviceDomain: domain,
  apiKey: apiKey,
});

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  return await client.get<BlogPost | null>({
    endpoint: 'blogs',
    contentId: id,
  }).catch((err) => {
    console.error('microCMS Fetch Error:', err);
    return null;
  });
}

// 以下のようにtry-catchで書く方がコードが綺麗になり一般的
export async function getAllBlogPost(limit: number): Promise<BlogPost[]> {
  try {
    const data = await client.get<{
      contents: BlogPost[];
      totalCount: number;
      offset: number;
      limit: number;
    }>({
      endpoint: 'blogs',
      queries: { limit: limit },
    });

    return data.contents;
  } catch (err) {
    console.error('microCMS Fetch Error:', err);
    return [];
  }
}
