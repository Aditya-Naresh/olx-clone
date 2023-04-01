import React, { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';

import './View.css';
function View() {
  const [userDetails, setUserDetails] = useState();
  const { postDetails } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    if (postDetails && postDetails.userId) {
      firebase.firestore().collection('users')
        .where('id', '==', postDetails.userId)
        .get()
        .then((res) => {
          res.forEach(doc => {
            setUserDetails(doc.data())
          })
        })
        .catch((error) => {
          console.error('Error fetching user details: ', error);
        });
    }
  }, [postDetails]);
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails?.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails?.price} </p>
          <span>{postDetails?.name}</span>
          <p>{postDetails?.category}</p>
          <span>{postDetails?.createdAt}</span>
        </div>
        { userDetails &&
          <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p> {userDetails.phone} </p>
        </div>}
      </div>
    </div>
  );
}
export default View;
