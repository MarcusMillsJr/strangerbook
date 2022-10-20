
const BASE_URL =  'https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT'

export const fetchPosts = async = () => {
    const response = await fetch(`${BASE_URL}/post`)

    console.log(response, 'this is the promise');
}