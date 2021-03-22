import axios from "axios";
import { AnyStyledComponent } from "styled-components";
export class APIWrapper {
  async get() {
    const response = await axios.get("https://api.imgflip.com/get_memes");
    return response;
  }
}
export class APIWrapperMock {
  async get() {
    return Promise.resolve({
      data: {
        data: {
          memes: [
            { url: "https://i.imgflip.com/30b1gx.jpg" },
            { url: "https://i.imgflip.com/1ur9b0.jpg" },
          ],
        },
      },
    });
  }
}

export function callApi(client: any = new APIWrapper()): any {
  return client.get();
}

/* const apiWrapper: APIWrapper = new APIWrapper();
const data = apiWrapper.get();
console.log(data); */
