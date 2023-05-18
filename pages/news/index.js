import Footer from '../../components/Footer'
import Head from 'next/head';
function NewsArticleList({ articles }) {
  return (
    <div>
      <Head>
          <title>News Page</title>
          <meta name="description" content="Free tutorial on web development" />
      </Head>
      <h1>List of news</h1>
      {
        articles.map(article => (
          <div key={article.id}>
            <h2>{article.id} - {article.title} - {article.category}</h2>
          </div>
        ))
      }
    </div>
  )
}
export default NewsArticleList;

NewsArticleList.getLayout = function PageLayout(page) {
  return(
    <>
      {page}
      <h1>Collection to ENV {process.env.NEXT_PUBLIC_ANALYTICS_ID}</h1>      
      <Footer />
    </>
  )
}

export async function getServerSideProps() {

  const user= process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  console.log(`Connecting to user ${user} and password ${password}`);
  const res = await fetch('http://localhost:4000/news');
  const data = await res.json()
  return {
    props: {
      articles: data,
    },
  }
}