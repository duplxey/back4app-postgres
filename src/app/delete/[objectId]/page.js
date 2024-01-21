"use client";

import {useParams, useRouter} from "next/navigation";
import ParseContext from "@/app/context/parseContext";
import {useContext} from "react";

export default function Page() {

  const router = useRouter();
  const parse = useContext(ParseContext);

  const params = useParams();
  const objectId = params.objectId;

  const onDeleteClick = () => {
    const Expense = parse.Object.extend("Expense");
    const query = new parse.Query(Expense);

    query.get(objectId).then((expense) => {
      return expense.destroy();
    }).then((response) => {
      console.log("Expense deleted successfully");
      router.push("/");
    }).catch((error) => {
      console.error("Error while deleting expense: ", error);
    });
  }

  const onCancelClick = () => {
    router.push("/");
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
      <div className="text-lg font-semibold">Delete expense</div>
      <div className="">
        Are you sure you want to delete expense #{objectId}?
      </div>
      <div className="space-x-2">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={onDeleteClick}
        >
          Delete expense
        </button>
        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          onClick={onCancelClick}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
