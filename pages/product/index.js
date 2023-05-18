import Link from "next/link"

function ProductDetails({ productId = 100 }) {
  return(
    <>
      <h2>
        <Link href={`/product/product1`}>
           product1
        </Link>
      </h2>
      <h2>
        <Link href={`/product/product2`}>
            product2
        </Link>
      </h2>
      <h2>
        <Link href={`/product/${productId}`} replace>
           Prop route
        </Link>
      </h2>
    </>
  )
}

export default ProductDetails