"use client";

import {useContext, useState} from "react";
import {useRouter} from "next/navigation";
import ParseContext from "@/app/context/parseContext";

export default function Page() {

  const router = useRouter();
  const parse = useContext(ParseContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const onAddClick = () => {
    const Item = parse.Object.extend("Item");
    const item = new Item();

    item.set("name", name);
    item.set("description", description);
    item.set("price", parseFloat(price));

    item.save().then(
      (item) => {
        console.log('Item created successfully with objectId: ', item.id);
        router.push("/");
      },
      (error) => {
        console.error('Error while creating Item: ', error);
      }
    );
  }

  const onCancelClick = () => {
    router.push("/");
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
      <div className="text-lg font-semibold">Add item</div>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
          Item name
        </label>
        <input
          name="name"
          type="text"
          className="border border-gray-200 dark:border-gray-700 rounded-md w-full p-2"
          placeholder="Item name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
          Item description
        </label>
        <input
          name="description"
          type="text"
          className="border border-gray-200 dark:border-gray-700 rounded-md w-full p-2 mt-2"
          placeholder="Item description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
          Item price (in USD)
        </label>
        <input
          name="price"
          type="number"
          className="border border-gray-200 dark:border-gray-700 rounded-md w-full p-2 mt-2"
          placeholder="Price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>
      <div className="space-x-2">
        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          onClick={onAddClick}
        >
          Add item
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={onCancelClick}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
