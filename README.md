# Chat with GPT-3

This project demonstrates a simple React chat app that lets you chat with GPT-3.

<img src="demo/demo.gif" />

## Running

1. Change `<your-token>` in `/src/services/gpt.ts` to your OpenAI token.

```
  const result = await axios({
    method: "post",
    url: "https://api.openai.com/v1/engines/davinci/completions",
    data,
    headers: {
      Authorization: "Bearer your-openai-token",
    },
  });
```

2. Install the dependencies
``` shell
npm install
```
2. Run the app by executing the following command
```shell
npm run start
```