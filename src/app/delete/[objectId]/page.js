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
    const Item = parse.Object.extend("Item");
    const query = new parse.Query(Item);

    query.get(objectId).then((item) => {
      return item.destroy();
    }).then((response) => {
      console.log("Item deleted successfully");
      router.push("/");
    }).catch((error) => {
      console.error("Error while deleting Item: ", error);
    });
  }

  const onCancelClick = () => {
    router.push("/");
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
      <div className="text-lg font-semibold">Delete item</div>
      <div className="">
        Are you sure you want to delete item #{objectId}?
      </div>
      <div className="space-x-2">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={onDeleteClick}
        >
          Delete item
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
