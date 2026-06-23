export type BlogPost = {
  id: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
  revisedAt: string;
  name: string;
  title: string;
  content: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
};