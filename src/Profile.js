
function Profile(props) {

    return (
        <div className="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
            <div className="grid">
                <div className="col-12 md:col-12 mb-4 px-5">
                    <span className="p-3 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
                    <img style={{verticalAlign: "middle", width: "12rem", height: "12rem", borderRadius: "50%"}} src={props.avatar} alt="" />
                    </span>
                    <div className="text-900 text-xl mb-3 font-medium">@{props.username}</div>
                    <span className="text-700 line-height-3">{props.bio}</span>
                </div>
            </div>
        </div>
    )
}

export default Profile;