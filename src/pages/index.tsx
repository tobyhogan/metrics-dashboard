import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import supabase from '../../supabaseClient'




var authed_users = 0
var habits_completed = 0




async function getData() {





  const { data, error } = await supabase
    .from('app_metrics')
    .select()


  authed_users = data[0].int_value;
  habits_completed = data[1].int_value;

  console.log(data);




}

getData()
 const mainStyles = {
}


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="">
      <h1 className="text-4xl mx-auto w-fit mt-10 py-2 px-4">Metrics Page</h1>
      <ul>
        <li>Total Authed Users: {1}</li>
        <li>Total Active Habits: </li>
      </ul>
    </main>
  )
}
