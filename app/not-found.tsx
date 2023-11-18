import CustomLink from "@/components/custom-link"

export const runtime = "edge"

export default function Page() {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">Not Found</h1>
      <p>
        <CustomLink href="/" className="underline">
          Back to Home
        </CustomLink>
      </p>
    </div>
  )
}
