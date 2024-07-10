import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"



import '../styles/global.css'
import '../styles/index.css'



const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="">
      <h1 className="text-4xl underline mx-auto w-fit mt-10 py-2 px-4">Metrics Page</h1>
      <section className="text-center mt-8">
        <h2>Content</h2>
      </section>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>