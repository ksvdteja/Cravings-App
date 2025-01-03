import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is Cravings App</h2>
        <UserClass name="Divyateja" location="Hyderabad" />
      </div>
    );
  }
}

export default About;
