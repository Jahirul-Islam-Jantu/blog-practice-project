import axios from "axios"

const baseURL = "https://basic-blog.teamrabbil.com/api"

export async function postCategories() {
    let res = await axios.get(baseURL+"/post-categories")
    if (res === 200){
        return res.data
    }
    else{
        return []
    }
}