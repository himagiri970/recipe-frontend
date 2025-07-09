

export default function InputForm({ onSubmit }) {
  const [input, setInput] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="ai-input-form">
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add an ingredient (e.g. chicken, broccoli)"
          aria-label="Add ingredient"
          className="ai-input"
        />
        <button type="submit" className="add-button">
          <span>+ Add</span>
        </button>
      </div>
      <p className="input-hint">Start with 4+ ingredients for best results</p>
    </form>
  )
}