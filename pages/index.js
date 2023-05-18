import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router"
// Absolute import and module path(specify in jsconfig.json) 
// https://www.youtube.com/watch?v=V-ntY44UvhM&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=59
import img from '@/public/1.jpg';

function Home() {
  const router = useRouter();
  const navigationClick = () => {
    // Navigate on click by pushing on path(route)
    router.push('/product');
  }
  return <div>
    {/* Head Component */}
    <Head>
      <title>HomePage</title>
      <meta name="description" content="Free tutorial on web development" />
    </Head>
    <h1>Home page</h1>
    <button onClick={() => navigationClick()}>Redirect to Product page</button>
    <Link href="/posts">Posts</Link>
    <Image src={img} alt='pet' placeholder="blue" width="280" height="420" />
    {['1', '2', '3', '4', '5'].map((path) => {
      return (
        <div key={path}>
          <Image src={`/${path}.jpg`} alt='pet' width="280" height="420" />
        </div>
      )
    })}
  </div>
}
export default Home