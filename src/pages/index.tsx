import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"



import '../styles/global.css'
import '../styles/index.css'






const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col">

      <h1 className="text-3xl mx-auto w-fit mt-10 py-2 px-4 font-bold">Metrics Dashboard</h1>
          
      <div className="w-fit mx-auto mt-16 mb-16">

        <h5>Username: </h5>
        <input type="text" />
        <h5>Password: </h5>
        <input type="text" />

        <button className="flex mx-auto mt-3">Proceed</button>

      </div>

      <Link to="/metrics" className="mx-auto w-fit underline ">Go To Metrics Page</Link>

    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Metrics Dashboard</title>