import axios from 'axios'

export default async () => {
    const response = await axios.get("https://api.imgflip.com/get_memes");
    return response.data.data
} 