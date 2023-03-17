import Header from "./header";

export default function Dashboard({params}:{params: { userid: string }}) {
  return (
    <div className="p-5">
      <Header title={params.userid}/>
    </div>
  )
}