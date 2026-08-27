import Head from "next/head"
export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/products?limit=12")
  const data = await res.json()
  console.log(data)
  return{
    props:{product:data.products}
  }
}
export default function Index({products}) {
  return (
   <>
      <Head>
        <title>สินค้าทั้งหมด | Apirak</title>
        <meta name="keywords" content="Apirak,Shop,Sale"/>
      </Head>
      <h1>สินค้าทั้งหมด</h1>
   </>
  )
}
