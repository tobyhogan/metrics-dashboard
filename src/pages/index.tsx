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

  return data



}

let arr = await getData();
let arr1 = await getData1()

var userCount = arr[0]
var habitCount = arr[1]


console.log(arr1)

var emailsArr = []


for (let user in arr1) {

  console.log(user.full_name)

  emailsArr.append("hi")

}





const mainStyles = {

}


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="">
      <h1 className="text-4xl mx-auto w-fit mt-10 py-2 px-4">Metrics Page</h1>
      <section className="text-center mt-8">
        <h3>Authenticated User Count: {userCount}</h3>
        <h3>Active Habit Count: {habitCount}</h3>
        <h2 className="font-bold text-lg">Emails signed up:</h2>
        <ul>
          {}
        </ul>
      </section>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>