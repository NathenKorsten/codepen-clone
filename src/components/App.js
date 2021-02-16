import Editor from "./Editor";
import React, { useState, useEffect } from "react";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [javascript, setJavascript] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${javascript}</script>
      </html>
      `);
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, javascript]);

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="html"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="css"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="javascript"
          value={javascript}
          onChange={setJavascript}
        />
      </div>
      <div className="pane">
        <iFrame
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
