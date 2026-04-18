import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { getPostBySlug } from "@/lib/blog-data";
import BlogArticleLayout from "@/components/fiveserv/BlogArticleLayout";
import MakeReadyGuideBody from "@/content/blog/make-ready-guide-florida-2025";
import VendorChaosBody from "@/content/blog/reduce-vendor-chaos-multifamily";
import PricingGuideBody from "@/content/blog/property-maintenance-costs-central-florida-2025";

const BODY_REGISTRY: Record<string, () => JSX.Element> = {
  "make-ready-guide-florida-2025": MakeReadyGuideBody,
  "reduce-vendor-chaos-multifamily": VendorChaosBody,
  "property-maintenance-costs-central-florida-2025": PricingGuideBody,
};

const BlogArticlePage = () => {
  const { slug = "" } = useParams();
  const post = getPostBySlug(slug);

  if (!post || !post.bodySlug || !BODY_REGISTRY[post.bodySlug]) {
    return <NotFound />;
  }

  const Body = BODY_REGISTRY[post.bodySlug];
  return (
    <BlogArticleLayout post={post}>
      <Body />
    </BlogArticleLayout>
  );
};

export default BlogArticlePage;
