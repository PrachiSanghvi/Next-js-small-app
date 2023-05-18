import Link from "next/link";

function PostList({ posts }) {
  return <>
    <h2>Post Data</h2>
    {posts.map(postList => (
      <div key={postList.id}>
        <Link href={`posts/${postList.id}`} passHref> 
          <p>{postList.title}</p>
        </Link>
      </div>
    ))}
  </>
}
export default PostList;

export async function getStaticProps() {
  console.log("Generating / Regenerating");
  // runs only on serverside
  // Won't even include in JS bundle that is sent to browser
  // allowed only in pages & can't run from regular component
  // Used only for pre-rendering and not for client side data fetching
  // Should return an object and object should contain key which is an object
  // Will run at build time
  const res = await fetch('http://localhost:4000/posts')
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
    revalidate:10,
  }
}