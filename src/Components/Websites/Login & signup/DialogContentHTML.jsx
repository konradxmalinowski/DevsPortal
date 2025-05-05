export default function DialogContentHTML({ content }) {
  return (
    <div
      className="terminal-loader"
      aria-label="Dialog content displaying status information"
    >
      <div className="terminal-header" aria-label="Terminal header">
        <div className="terminal-title" aria-label="Terminal title">
          Status
        </div>
        <div className="terminal-controls" aria-label="Terminal controls">
          <div className="control close" aria-label="Close button"></div>
          <div className="control minimize" aria-label="Minimize button"></div>
          <div className="control maximize" aria-label="Maximize button"></div>
        </div>
      </div>
      <div className="content" aria-label="Dialog content">
        <div className="text">{content}...</div>
      </div>
    </div>
  );
}
