
const BASE_URL =  'https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT'

export const fetchPosts = async (token) => {
  // console.log(token);
    try{
        const response = await fetch(`${BASE_URL}/posts`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token} `
          }});
        // console.log(response, ' fetch post promise');
        const {data} = await response.json();
        // console.log(data, "fetch post data")
        return data.posts
    } catch(error){
        console.error('error fetching posts')
    }
};


export const registerUser = async (username, password) => {
    try{
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user: {
                username,
                password,
              }
            })
        });
        console.log("REGISTER RESPONSE----------->", response);
        const data = await response.json()
        console.log("USER REGISTER DATA--------->",data);
        return data
    } catch(error){
        console.error('error registering user', error)
    }
};

export const fetchUser = async(token) => {
    try {
        const response = await fetch (`${BASE_URL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token} `
              },
        });
        // console.log("user response body", response);
        const {data} = await response.json();
        // console.log("user data", data);
        return data
    } catch (error) {
        console.log(error, "error fetching user")
    }
}


export const createPost = async (token, title, description, price) => {
    try{
        const response = await fetch(`${BASE_URL}/posts`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                    title,
                    description,
                    price,
                  }
              })
            })
            console.log("create post response----------->", response);
            const {data} = await response.json()
            console.log("create post data--------->",data);
            return data
        } catch (error) {
    console.log("error creating post", error);
}
}

export const userLogin = async (username,password) => {

    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username,
                    password
                }
            })
        });
        const result = await response.json()
        console.log('user login result', result);
        return result
    } catch (error) {
        console.log(error, "error login in user")
    }
}
   

export const deletePost = async (token, postId) => {
  console.log("api delete id", postId);
  try {
    await fetch(`${BASE_URL}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error("DELETE /posts/postId failed:", error);
  }
};

export const sendMessage = async (token, postId, content) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}/messages`,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token} `
      },
      body: JSON.stringify({
        message: {
          content: content
        }
      })
    });
    console.log(response, "message response");
    const {data} = await response.json()
    console.log(data, "message data");
    return data
  } catch (error) {
    console.log(error, "message did not send")
  }
}

