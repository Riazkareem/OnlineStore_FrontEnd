import React from "react";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { internalMutate } from "swr/_internal";

function Users() {
  //   const [data, setData] = useState(null);
  //   const [isLoading, setLoading] = useState(false);

  //   useEffect(() => {
  //     setLoading(true);
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //         setLoading(false);
  //       });
  //   }, []);

  //   if (isLoading) return <p>Loading...</p>;
  //   if (!data) return <p>No profile data</p>;

  // using SWR

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                <div className="flex items-center">User Name</div>
              </th>
              <th scope="col" className="py-3 px-6">
                <div className="flex items-center">Email</div>
              </th>
              <th scope="col" className="py-3 px-6">
                <div className="flex items-center">Address</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 5).map((link, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="py-4 px-6">{link.id}</td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {link.name}
                  </td>
                  <td className="py-4 px-6">{link.email}</td>
                  <td className="py-4 px-6">{link.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
