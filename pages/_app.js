import '../styles/reset.css';
import '../styles/main.css';

// This default export is required in a new `pages/_app.js` file.
const f = () => {
  if (typeof window === 'object') {
    window.alert('クリックされたよ！(client)');
  } else {
    console.log('クリックされたよ！(server)');
  }
};
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <button onClick={f}>クリック</button>
      {console.log('デプロイしたよーーー')}
      {console.log('wip')}
      <Component {...pageProps} />
    </div>
  );
}
