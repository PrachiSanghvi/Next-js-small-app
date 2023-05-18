function articleListByCategory({articles,category}) {
  return(
    <>
      <h1>Showing news for category <i>{category}</i></h1>
      {articles.map((article => {
        return (
          <div key={article.id}>
            <h2>{article.id} - {article.title}</h2>
            <p>{article.description}</p>
            <hr/>
          </div>
        )
      }))}
    </>
  )

}
export default articleListByCategory;

export async function getServerSideProps(context) {
  const {params,req,res,query} = context;
  console.log("query",query)
  console.log("cookie",req.headers.cookie);
  res.setHeader('Set-cookie',['name=Prachi'])
  const {category} = params;
  const response = await fetch(`http://localhost:4000/news?category=${category}`)
  const data = await response.json();
  return  {
    props : {
      articles : data,
      category
    }
  }
}