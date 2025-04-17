export default function DialogContentHTML({ content }) {
  return (
    <div className="terminal-loader">
      <div className="terminal-header">
        <div className="terminal-title">Status</div>
        <div className="terminal-controls">
          <div className="control close"></div>
          <div className="control minimize"></div>
          <div className="control maximize"></div>
        </div>
      </div>
      <div className="content">
        <div className="text">{content}...</div>
      </div>
    </div>
  );
}
