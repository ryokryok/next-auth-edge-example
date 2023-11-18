"use client"

import CustomLink from "@/components/custom-link"

export default function Page() {
  return (
    <div className="space-y-2">
      <h1 className="text-xl font-bold">Error</h1>
      <p>
        <CustomLink href="/" className="underline">
          Back to Home
        </CustomLink>
      </p>
    </div>
  )
}
