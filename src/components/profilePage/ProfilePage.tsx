import React from "react";
import dog from "../../assets/dog.png";
import kid from "../../assets/kid.png";
import penguin from "../../assets/penguin.png";
import addIcon from "../../assets/add-icon.png";

import "./ProfilePage.css";

type Props = {};

const profiles = [
  { name: "Kayden", image: dog },
  { name: "Mary", image: kid },
  { name: "Kids", image: penguin },
  { name: "Add Profile", image: addIcon },
];

const profileCard = (name: string, image: string) => {
  return (
    <div className="profile-card">
      <img src={image} alt="Missing" className="profile-img" />
      <div>{name}</div>
    </div>
  );
};

const ProfilePage = (props: Props) => {
  return (
    <div className="profile-container">
      <h1 className="profile-title">Who's Watching?</h1>
      <div className="profile-list-card">
        {profiles.map((p) => profileCard(p.name, p.image))}
      </div>
      <div className="profile-manage">
        Manage Profile
      </div>
    </div>
  );
};

export default ProfilePage;
