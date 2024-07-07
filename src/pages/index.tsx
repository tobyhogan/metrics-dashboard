import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import supabase from '../../supabaseClient'



import '../styles/global.css'
import '../styles/index.css'


const getData = async () => {

  const { data, error } = await supabase
    .from('app_metrics')
    .select()

  //console.log(data)

  return [data[0].int_value, data[1].int_value]


}

const getData1 = async () => {

  const { data, error } = await supabase
    .from('profiles')
    .select()

  console.log(data)



}

getData1()

let arr = await getData();

var userCount = arr[0]
var habitCount = arr[1]


const mainStyles = {

}


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="">
      <h1 className="text-4xl mx-auto w-fit mt-10 py-2 px-4">Metrics Page</h1>
      <ul className="w-fit mx-auto mt-10 pl-6">
        <li>Authenticated User Count: {userCount}</li>
        <li>Active Habit Count: {habitCount}</li>
      </ul>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>