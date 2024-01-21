"use client";

import {useParams, useRouter} from "next/navigation";

export default function Page() {

  const router = useRouter();

  const params = useParams();
  const objectId = params.objectId;

  const onDeleteClick = () => {
    console.log("onDeleteClick()");
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