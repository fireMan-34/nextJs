import { useRouter } from 'next/router';

function TalkIdPage () {
  const router = useRouter();
  
  return <main className="min-h-full bg-yellow-500">
    {/* 动态路由页面 */}
    <h2 className="text-gray-500">Talk Id</h2>
    <p>
      Post: {router.query.id}
    </p>
  </main>
}
export default TalkIdPage;