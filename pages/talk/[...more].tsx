import { useRouter } from "next/router"
import { isArray } from "util";

export default function TalkMore() {
  const { query } = useRouter();
  // https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes
  return <main>
    <h2>More</h2>
    {isArray(query.more) ? query.more.join('-') : query.more}
  </main>
}