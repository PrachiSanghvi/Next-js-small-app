import { useRouter } from "next/router";
function PostData({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h2>Loading...</h2>
  }
  return <>
    <div key={post.id}>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  </>
}
export default PostData;

export async function getStaticPaths() {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const res = await fetch('http://localhost:4000/posts')
  const data = await res.json();
  const paths = data.map(postData => {
    return {
      params: {
        postId: `${postData.id}`,
      },
    }
  })
  return {
    paths,
    fallback: true,
    // fallback: "blocking",
  }
}


export async function getStaticProps(context) {
  const { params } = context;

  // runs only on serverside
  // Won't even include in JS bundle that is sent to browser
  // allowed only in pages & can't run from regular component
  // Used only for pre-rendering and not for client side data fetching
  // Should return an object and object should contain key which is an object
  // Will run at build time
  const res = await fetch(`http://localhost:4000/posts/${params.postId}`)
  const data = await res.json();
  return {
    props: {
      post: data
    }
  }
}