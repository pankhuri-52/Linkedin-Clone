import React, {useEffect, useState} from 'react';
import '../css/Feed.css';
import InputOption from './InputOption';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {

    const user = useSelector(selectUser);

    //React Hooks (Very powerful, used to initialize and then set to some other value)
    //server side rendering
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    //fire when the feed component loads
    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp",'desc')
        .onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))
        )
      );
    },[]);

    const sendPost = event => {
        event.preventDefault();
        db.collection('posts').add({
            name : user.displayName,
            description : user.email,
            message : input,
            photoUrl : user.photoUrl || "",
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
        });

        setInput('');
    };

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost}  type="submit">Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
                    <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
                    <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
                    <InputOption Icon={CalendarViewDayIcon} title='Write Article' color='#7FC15E' />
                </div>
            </div>

            {/* <Posts /> */}
            {/* pushed into the list */}
        <FlipMove>
            {posts.map(({ id, data : {name, description, message, photoUrl} }) => (
                <Post 
                key={id} 
                // we need key because we want the last unique element to come at the top
                name={ name }
                description= {description}
                message= {message}
                photoUrl = {photoUrl} 
                />
             ))}
        </FlipMove>

        </div>
    )
}

export default Feed;