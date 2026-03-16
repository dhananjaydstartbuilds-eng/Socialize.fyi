"use client";

import { ErrorState } from "@/components/ErrorState";

export default function NotFound() {
  return (
    <ErrorState 
      fullPage 
      title="Page Not Found"
      description="We couldn't find the page or Hub you're looking for. It might have been deleted, or the URL might be wrong."
    />
  );
}
