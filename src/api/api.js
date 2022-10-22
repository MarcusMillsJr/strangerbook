
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


