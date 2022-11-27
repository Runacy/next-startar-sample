import '../styles/reset.css';
import '../styles/main.css';
import { useState } from 'react';
import axios from 'axios';

// This default export is required in a new `pages/_app.js` file.
const f = () => {
  if (typeof window === 'object') {
    window.alert('クリックされたよ！(client)');
  } else {
    console.log('クリックされたよ！(server)');
  }
};

export default function MyApp({ Component, pageProps }) {
  const [value, setValue] = useState('');
  const usePublicData = () => {
    // データとってくることはできるんじゃないかなあ。
    const endpoint = 'https://catfact.ninja/fact';

    axios
      .get(endpoint)
      .then((req) => {
        setValue(req.data.fact);
      })
      .catch((err) => {
        console.log(err);
      });

    // useSwrとか使えば初期値はサーバー側で取得ってのができそうやね。
    //いやそもそもこのクリックしたときだけ実行したいとかいうのが難しいな。
  };

  return (
    <div>
      <button onClick={f}>クリック</button>
      {console.log('デプロイしたよーーー')}
      {console.log('wip')}
      <button onClick={usePublicData}>猫の秘密</button>
      {value}
      <Component {...pageProps} />
    </div>
  );
}
