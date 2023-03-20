export async function getData(url, queryParams = '') {
  if (queryParams.length > 0) {
    url += queryParams;
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}
export function ReduceMotionToggle({ reduceMotion, setReduceMotion }) {
  return (
    <div className="motion-toggle">
      Reduce Motion:
      <label className="switch">
        <input
          type="checkbox"
          checked={reduceMotion}
          onChange={() => setReduceMotion(!reduceMotion)}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
export function Logo() {
  return (
    <a href="/" className="logo">
      <figure>
        <img src="/public/the-great-seal.svg" />
      </figure>
    </a>
  );
}

export function LoadingMesssage() {
  return (
    <div id="loading" className="show">
      Loading Chahtapreneurs...
    </div>
  );
}
