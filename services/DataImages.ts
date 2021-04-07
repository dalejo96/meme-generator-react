import axios, { AxiosResponse } from "axios";

export class APIWrapper {
  async get() {
    const response: AxiosResponse = await axios.get(
      "https://api.imgflip.com/get_memes"
    );
    return response;
  }
}
export class APIWrapperMock {
  async get() {
    return Promise.resolve({
      data: {
        data: {
          memes: [
            {
              url: "https://i.imgflip.com/30b1gx.jpg",
              name: "Drake Hotline Bling",
            },
            {
              url: "https://i.imgflip.com/1ur9b0.jpg",
              name: "Distracted Boyfriend",
            },
            {
              url: "https://i.imgflip.com/1g8my4.jpg",
              name: "Two Buttons",
            },
          ],
        },
      },
    });
  }
}

interface CallApiInterface {
  value:
    | AxiosResponse
    | Promise<{
        data: {
          data: {
            memes: {
              url: string;
              name: string;
            }[];
          };
        };
      }>;
}

//export function callApi(client: any = new APIWrapper()): callApiType {
//export function callApi(client: any = new APIWrapperMock()): any {
export function callApi(client: any = new APIWrapper()): AxiosResponse {
  return client.get();
}
export function callApiMocked(client: any = new APIWrapperMock()): any {
  return client.get();
}
