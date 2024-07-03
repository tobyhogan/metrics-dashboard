import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import supabase from '../../supabaseClient'



import '../styles/global.css'
import '../styles/index.css'






async function getData() {

  const { data, error } = await supabase
    .from('app_metrics')
    .select()

  console.log(data);


}

getData()





const mainStyles = {

}


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="">
      <h1 className="text-4xl mx-auto w-fit mt-10 py-2 px-4">Metrics Page</h1>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>