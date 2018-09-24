import React from "react";

const AvatarSelected = (props) => (
<div>
    <img className="avatarS" src={`https://imgur.com/${props.avatar}.jpg`}/>
</div>
)

export default AvatarSelected;
