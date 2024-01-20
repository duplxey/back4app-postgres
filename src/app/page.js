"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";

export default function Page() {

  const router = useRouter();

  const [items, setItems] = useState([
    {
      objectId: "1",
      name: "Microsoft Surface Pro",
      description: "White",
      price: 12,
      createdAt: "2021-01-01",
    },
    {
      objectId: "2",
      name: "Microsoft Surface Pro 2",
      description: "Black",
      price: 12,
      createdAt: "2021-01-01",
    }
  ]);
  const [statistics, setStatistics] = useState({
    totalItems: 12,
    totalSpent: 12,
    totalBudget: 50,
    spentPercentage: 45,
  });

  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      <div className="w-full basis-3/4">
        <div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
          <div className="text-lg font-semibold">Items</div>
          <div className="relative overflow-x-auto">
            <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Item name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Item description
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date added
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.objectId}
                    </th>
                    <td className="px-6 py-4">
                      {item.name}
                    </td>
                    <td className="px-6 py-4">
                      {item.description}
                    </td>
                    <td className="px-6 py-4">
                      ${item.price}
                    </td>
                    <td className="px-6 py-4">
                      {item.createdAt}
                    </td>
                    <td className="px-6 py-4 space-x-2">
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => router.push("/delete/" + item.objectId)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => router.push("/add/")}
          >
            Add item
          </button>
        </div>
      </div>
      <div className="w-full basis-1/4">
        <div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
          <div className="text-lg font-semibold">
            Statistics
          </div>
          <ul className="mr-2 list-disc list-inside">
            <li>Total items: <span className="text-gray-500">{statistics.totalItems}</span></li>
            <li>Total spent: <span className="text-gray-500">${statistics.totalSpent}</span></li>
            <li>Total budget: <span className="text-gray-500">${statistics.totalBudget}</span></li>
          </ul>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-indigo-600 h-2.5 rounded-full" style={{width: statistics.spentPercentage + "%"}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
