import Post from "./Post";
import { faker } from '@faker-js/faker';
import React, { useState, useEffect, Fragment } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

function PostList(props) {

    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setisLoading(false);
        }, 3000);
      }, []);

    return (
        <div className="grid mt-2">

            {

                isLoading ? <Fragment><div style={{ marginLeft: "2rem" }}>Loading...</div><div><ProgressSpinner /></div></Fragment> :

                props.posts.map((post) => {

                    return <Post
                        key={faker.helpers.rangeToNumber({ min: 1, max: 9999 })}
                        image={post.image}
                        createdAt={post.createdAt}
                        likes={post.likes}
                        autor={post.autor}
                        texto={post.texto}
                        comments={post.comments}
                    >
                    </Post>

                })
            }

        </div>
    )
}

export default PostList;