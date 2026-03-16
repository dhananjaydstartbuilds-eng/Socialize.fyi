create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  created_at timestamptz default now()
);

create table master_posts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  slug text unique not null,
  title text not null,
  original_idea text not null,
  audience text,
  tone text,
  cta text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table post_variants (
  id uuid primary key default gen_random_uuid(),
  master_post_id uuid references master_posts(id) on delete cascade,
  platform text not null,
  variant_type text not null,
  content text not null,
  created_at timestamptz default now()
);

create table outbound_posts (
  id uuid primary key default gen_random_uuid(),
  master_post_id uuid references master_posts(id) on delete cascade,
  platform text not null,
  post_url text,
  published_at timestamptz,
  created_at timestamptz default now()
);

create table platform_metrics (
  id uuid primary key default gen_random_uuid(),
  master_post_id uuid references master_posts(id) on delete cascade,
  platform text not null,
  impressions integer default 0,
  likes integer default 0,
  comments integer default 0,
  shares integer default 0,
  clicks integer default 0,
  updated_at timestamptz default now()
);

create table boost_outputs (
  id uuid primary key default gen_random_uuid(),
  master_post_id uuid references master_posts(id) on delete cascade,
  boost_type text not null,
  output text not null,
  created_at timestamptz default now()
);
