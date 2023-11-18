import { auth } from "auth"
import ClientExample from "@/components/client-example"
import { SessionProvider } from "next-auth/react"

export const runtime = "edge"

export default async function ClientPage() {
  const session = await auth()
  // TODO: Look into https://react.dev/reference/react/experimental_taintObjectReference
  // filter out sensitive data before passing to client.
  if (session?.user) {
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    }
  }

  return (
    <SessionProvider session={session}>
      <ClientExample />
    </SessionProvider>
  )
}
