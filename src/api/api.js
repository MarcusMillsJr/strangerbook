
const BASE_URL =  'https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT'

export const fetchPosts = async () => {
    try{
        const response = await fetch(`${BASE_URL}/posts`);
        console.log(response, 'this is the promise');
        const {data} = await response.json();
        console.log(data.posts, 'this is data')
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

