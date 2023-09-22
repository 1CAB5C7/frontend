class DifficultySpansRenderer {
    static renderDifficultySpans(difficulty) {
      const spans = [];
  
      for (let i = 0; i < difficulty; i++) {
        spans.push(<span key={i} className="fas fa-utensil-spoon"></span>);
      }
  
      return spans;
    }
  }
  
  export default DifficultySpansRenderer;