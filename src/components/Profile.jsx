import React from "react";


const Profile = (props) => {
    let userId=window.location.pathname.split("/")[2];
    let user=props.function(userId);

    console.log(userId);
	return <div className="row">
        <div className="col-sm-3">
            <img src={user.avatar} alt="" width='90%'/>
        </div>
        <div className="col-sm-9">
            <h1>{user.name} {user.lastname}</h1>
            <h3>Обо мне</h3>
            <p>{user.about}</p>
        </div>
    </div>
};

export default Profile;