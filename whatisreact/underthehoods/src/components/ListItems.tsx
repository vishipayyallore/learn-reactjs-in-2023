import React from "react";

const ListItems = ({ items, addNewItemFunc }: { items: number[], addNewItemFunc: (newItemValue: number) => void }) => {

    const newItemValue = 1;

    return (
        // <!-- React Fragment -->
        <>
            <button onClick={() => addNewItemFunc(newItemValue)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add New Item</button>
            <ul className="flex flex-col items-center text-blue-800 justify-center space-y-4">
                {
                    items.map((id, index) => {
                        return <li key={index} className="text-2xl">Item {id}</li>
                    })
                }
            </ul>
        </>
    )
};

export default ListItems;
