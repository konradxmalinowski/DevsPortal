function ResultSection({ password }) {
  return (
    <section id="result-section" aria-label="Generated password display">
      <p id="result" aria-label="Generated password">
        {password || 'No password generated yet'}
      </p>
    </section>
  );
}

export default ResultSection;
