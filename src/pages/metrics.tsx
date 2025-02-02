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

let metrics = await getData();
let users = await getData1()

var userCount = metrics[0]
var habitCount = metrics[1]


var usersArr = []
var usersCount


console.log(users)




for (let user in users) {

  let email = users[user].email_address
  let userName = users[user].full_name
  let id = users[user].id


  usersArr.push(<li key={id}>- {email} ({userName})</li>)



}

usersCount = usersArr.length






const MetricsPage: React.FC<PageProps> = () => {
  return (
    <main className="">
      <h1 className="text-4xl underline mx-auto w-fit mt-10 py-2 px-4">Metrics Page</h1>
      <section className="text-center mt-8">
        <h2 className="font-bold text-lg mt-8">Core Metrics:</h2>
        <ul className="w-fit mx-auto text-start pl-12 mt-3">
          <li>- Authenticated User Count: <b>{userCount}</b></li>
          <li>- Active User Sessions <b>X</b></li>
          <li>- Active Habit Count: <b>{habitCount}</b></li>
          <li>- Habit Completions in the Past Week: <b>X</b></li>
        </ul>
        <h2 className="font-bold text-lg mt-8">Active User Sessions (X):</h2>
        <h2 className="font-bold text-lg mt-8">Users signed up ({usersCount}):</h2>
        <ul className="w-fit mx-auto text-start mb-4 pl-10 mt-3">
          {usersArr}
        </ul>
      </section>
    </main>
  )
}

export default MetricsPage

export const Head: HeadFC = () => <title>Metrics Dashboard</title>