import React, { useContext, useState } from "react";
import UserContext, { UserState } from "../store";

const ConsumerComponent = () => {
  const userContext = useContext<UserState>(UserContext);
  return (
    <div>
      <div>First Name: {userContext.firstName}</div>
      <div>Last Name: {userContext.lastName}</div>
    </div>
  );
};

const UseContextComponent = () => {
  const [user, setUser] = useState<UserState>({
    firstName: "Jane",
    lastName: "Doe",
  });
  return (
    <UserContext.Provider value={user}>
      <div>
        <h2>useContext</h2>
        <div>
          <ConsumerComponent />
        </div>
        <div>
            <button
            onClick={() => setUser({firstName: "Max", lastName: "Nemtsev"})}
            >
                Change context
            </button>
        </div>
        <hr />
      </div>
    </UserContext.Provider>
  );
};

export default UseContextComponent;
