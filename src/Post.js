import { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

function Post(props) {

    const [likes, setLikes] = useState(props.likes);

    const header = (
        <img alt="URL de la img ya no esta activa" src={props.image} />
    );

    const aumentarLikes = () => {
        setLikes(likes + 1);        
    }

    return (
        <div className="col-12 md:col-4 lg:col-4">
            <div className="card flex justify-content-center">
                <Card header={header} className="w-20rem">
                    <div className="grid mt-2">
                        <div className="col-12">
                            <div className="postTimeStamp p-card-subtitle">{props.createdAt}</div>
                            <div className="postLikes"><Button label={likes + "k"} icon="pi pi-heart" severity="danger" size="small" onClick={aumentarLikes} /></div>
                        </div>
                        <div className="col-12">
                            <strong>@{props.autor}</strong>
                        </div>
                        <div className="col-12">
                            <p className="p-card-content">{props.texto}</p>
                        </div>
                        <div className="col-12">
                            <Button type="button" label="Comments" icon="pi pi-comments" rounded text badge={props.comments} severity="secondary" badgeClassName="p-badge-info" />
                        </div>
                    </div>
                </Card>
            </div>
        </div>

    )
}

export default Post;