import axios from 'axios';


let postComment = (postData, cb) => {
    axios.post(
        "http://127.0.0.1:7000/newpost",
        postData
    ).then(response => {
        cb("Posted!");
    }).catch(err => {
        cb("Error in posting! " + err);
    });
}


let getComments = (cb) => {
    axios.get(
        "http://127.0.0.1:7000/fetch"
    ).then(response => {
        let result = JSON.parse(response.data);
        cb(result.posts, null);
    }).catch(err => {
        cb(null, err);
    });
}


export default { postComment, getComments };