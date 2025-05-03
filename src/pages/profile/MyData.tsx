import ProfileInfo from "src/sections/ProfilePage/MyData/ProfileInfo";
import { useState } from "react";
import ProfileForm from "src/sections/ProfilePage/MyData/ProfileForm";
const MyData = () => {
  const [isEditing, setIsEditing] = useState(false);
  const onEdit = () => setIsEditing(true);
  return (
    <div className="font-main  text-text-main">
      {isEditing ? <ProfileForm /> : <ProfileInfo onEdit={onEdit} />}
    </div>
  );
};

export default MyData;
