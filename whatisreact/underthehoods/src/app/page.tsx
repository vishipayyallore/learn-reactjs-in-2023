'use client';

import ListItems from "@/components/ListItems";
import PageTitle from "@/components/PageTitle";
import { useState } from "react";

const Home = () => {

  const pageTitle = 'React JS - Under the Hoods';
  const numbers = [1, 2];

  // // React State
  // const [items, setItems] = useState<number[]>(numbers);

  // function ListItems({ items, addNewItemFunc }: { items: number[], addNewItemFunc: (incrementVaule: number) => void }) {

  //   const incrementVaule = 1;

  //   return (
  //     // <!-- React Fragment -->
  //     <>
  //       <button onClick={() => addNewItemFunc(incrementVaule)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add New Item</button>
  //       {
  //         items.map((id, index) => {
  //           return <li key={index} className="text-2xl">Item {id}</li>
  //         })
  //       }
  //     </>
  //   )
  // };

  // const addNewItem = (newItemVaule: number) => {
  //   const updatedItems = [...items, items.length + newItemVaule];

  //   setItems(updatedItems);
  // };

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center p-2">
        <PageTitle title={pageTitle}></PageTitle>

        <ListItems numbers={numbers} />
      </main>
    </div>
  )
};

export default Home;