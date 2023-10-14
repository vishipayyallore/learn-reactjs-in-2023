export default function Home() {

  function ListItems() {
    const ints = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
      // <!-- React Fragment -->
      <>
        {
          ints.map((id, index) => {
            return <li key={index} className="text-2xl">Item {id}</li>
          })
        }
      </>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello from ReactJS and NextJS.</h1>
      <ul className="flex flex-col items-center text-blue-800 justify-center space-y-4">
        <ListItems />
      </ul>
    </main>
  )
}
