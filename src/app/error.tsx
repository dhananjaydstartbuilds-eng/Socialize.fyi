"use client";

import { ErrorState } from "@/components/ErrorState";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <ErrorState 
          fullPage 
          title="Application Error"
          description={error.message || "A critical error occurred while rendering the page. We have been notified."}
          onAction={() => reset()}
          actionText="Recover Session"
        />
      </body>
    </html>
  );
}
