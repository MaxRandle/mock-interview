/*
 INSTRUCTIONS

  Build upon the scaffolding in this component to accomplish the following:

  FUNCTIONAL REQUIREMENTS
  - Fetch a list of users from the API endpoint below on initial render
  - Render the users in a list
  - Allow the list to be filtered by name using the input
  - Allow the list to be sorted by:
      - Name (A–Z)
      - Name (Z–A)
  - When a user is clicked, show their details in a panel below the list

  BEHAVIOUR REQUIREMENTS
  - Filtering and sorting should update immediately as the user interacts
  - Selecting a user should not refetch the list
  - The selected user should remain selected when sorting or filtering, if still visible
  - Handle loading and error states gracefully

  RULES
  - You may use google as much as you like
  - You may copy-paste code from the internet
  - You may not use AI coding assistants
  - You may not use AI assistant chat interfaces
  - You may use code snippets from the google AI search results
  - You may not paste any part of your code into the internet
  - You may paste error messages or debugging info into the internet
  - You may install any node packages you like

  ASSESSMENT
  - There are many approaches to solving this, use whichever you think is best
  - Do not worry about css/styling, the assessment is focused on your usage of react
  - You have 1 hour
*/

"use client";

import { ChangeEventHandler, useEffect, useState } from "react";

const USERS_API_URL = "https://jsonplaceholder.typicode.com/users";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

type SortOrder = "name-asc" | "name-desc";

export const UserDirectory = () => {
  const [users, setUsers] = useState<User[]>();
  const [filterExpression, setFilterExpression] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("name-asc");
  const [selectedUser, setSelectedUser] = useState<User>();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(USERS_API_URL);
      const data = await res.json();

      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleFilterChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFilterExpression(event.target.value);
  };

  const handleSortChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const val = event.target.value;
    if (val === "name-asc" || val === "name-desc") {
      setSortOrder(val);
    }
  };

  const filteredAscendingUsers = (users ?? [])
    ?.filter((user) =>
      user.name.toLowerCase().includes(filterExpression.toLowerCase()),
    )
    .sort((user1, user2) => {
      if (user1.name < user2.name) return -1;
      if (user1.name > user2.name) return 1;
      return 0;
    });

  const orderedUsers: User[] =
    sortOrder === "name-asc"
      ? filteredAscendingUsers
      : filteredAscendingUsers?.reverse();

  return (
    <div className="space-y-6">
      <h1>User Directory</h1>

      <div className="space-y-2 space-x-2">
        <input
          onChange={handleFilterChange}
          className="border"
          type="text"
          placeholder="Filter by name"
        />

        <select onChange={handleSortChange} className="border">
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
        </select>
      </div>

      <ul className="space-y-2">
        {orderedUsers.map((user) => (
          <li key={user.id}>
            <button
              className="cursor-pointer border rounded-sm px-2 py-1"
              onClick={() => setSelectedUser(user)}
            >
              {user.name}
            </button>
          </li>
        ))}
      </ul>

      <div className="border p-4">
        {!!selectedUser ? (
          <>
            <p>name: {selectedUser.name}</p>
            <p>username: {selectedUser.username}</p>
            <p>email: {selectedUser.email}</p>
            <p>phone: {selectedUser.phone}</p>
            <p>website: {selectedUser.website}</p>
          </>
        ) : null}
      </div>
    </div>
  );
};
