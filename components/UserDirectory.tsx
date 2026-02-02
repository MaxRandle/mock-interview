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
  return (
    <div className="space-y-6">
      <h1>User Directory</h1>

      <div className="space-y-2 space-x-2">
        <input className="border" type="text" placeholder="Filter by name" />

        <select className="border">
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
        </select>
      </div>

      <ul className="space-y-1">{/* render users here */}</ul>

      <div className="border p-4">
        {/* render selected user details here */}
      </div>
    </div>
  );
};
