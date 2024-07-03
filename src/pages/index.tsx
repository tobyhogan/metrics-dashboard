import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'



const mainStyles = {

}


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="">
      <h1 className="text-5xl mx-auto w-fit bg-blue-500 mt-10 py-2 px-4">TSX. Gatsby. Tailwind.</h1>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
