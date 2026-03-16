export type MasterPost = {
  id: string;
  slug: string;
  title: string;
  original_idea: string;
  audience?: string;
  tone?: string;
  cta?: string;
  created_at: string;
};

export type PostVariant = {
  id: string;
  master_post_id: string;
  platform: string;
  variant_type: string;
  content: string;
};

export type PlatformMetric = {
  id: string;
  master_post_id: string;
  platform: string;
  impressions: number;
  likes: number;
  comments: number;
  shares: number;
  clicks: number;
};

export type OutboundPost = {
  id: string;
  master_post_id: string;
  platform: string;
  post_url?: string;
};
