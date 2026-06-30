import { resources as fallbackResources } from "@/data/resources";
import { connectDB } from "@/lib/db";
import ResourceArticle from "@/models/ResourceArticle";

export type PublicResourceArticle = {
  title: string;
  slug: string;
  category: "Insights" | "Guides" | "News";
  excerpt: string;
  content?: string;
  date: string;
  image: string;
};

export type AdminResourceArticle = PublicResourceArticle & {
  id: string;
  content: string;
  publishedDate: string;
  isPublished: boolean;
};

function formatDate(value: Date | string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(new Date(value));
}

function toPublicArticle(article: any): PublicResourceArticle {
  return {
    title: article.title,
    slug: article.slug,
    category: article.category,
    excerpt: article.excerpt,
    content: article.content,
    date: formatDate(article.publishedDate),
    image: article.image
  };
}

function toAdminArticle(article: any): AdminResourceArticle {
  return {
    ...toPublicArticle(article),
    id: article._id.toString(),
    content: article.content,
    publishedDate: new Date(article.publishedDate).toISOString().slice(0, 10),
    isPublished: article.isPublished
  };
}

export async function getPublicResources() {
  try {
    await connectDB();
    const articles = await ResourceArticle.find({ isPublished: true }).sort({ publishedDate: -1 }).lean();
    return articles.length ? articles.map(toPublicArticle) : fallbackResources;
  } catch {
    return fallbackResources;
  }
}

export async function getPublicResourceBySlug(slug: string) {
  try {
    await connectDB();
    const article = await ResourceArticle.findOne({ slug, isPublished: true }).lean();
    if (article) return toPublicArticle(article);
  } catch {
    // Fall back to static content below.
  }

  return fallbackResources.find((article) => article.slug === slug) || null;
}

export async function getAdminResources() {
  await connectDB();
  const articles = await ResourceArticle.find().sort({ publishedDate: -1 }).lean();
  return articles.map(toAdminArticle);
}

export async function getAdminResourceById(id: string) {
  await connectDB();
  const article = await ResourceArticle.findById(id).lean();
  return article ? toAdminArticle(article) : null;
}
