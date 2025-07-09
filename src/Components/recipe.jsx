import ReactMarkdown from "react-markdown";

export default function Recipe(props) {
  return (
    <div className="recipe-response">
      <div className="ai-message">
        <div className="ai-avatar">AI</div>
        <div className="message-bubble">
          <h3 className="recipe-title">Here's what I recommend...</h3>
          <div className="recipe-content">
            <ReactMarkdown 
              components={{
                h2: ({node, ...props}) => <h2 className="markdown-h2" {...props} />,
                h3: ({node, ...props}) => <h3 className="markdown-h3" {...props} />,
                p: ({node, ...props}) => <p className="markdown-p" {...props} />,
                ul: ({node, ...props}) => <ul className="markdown-ul" {...props} />,
                ol: ({node, ...props}) => <ol className="markdown-ol" {...props} />,
                li: ({node, ...props}) => <li className="markdown-li" {...props} />
              }}
            >
              {props.recipe}
            </ReactMarkdown>
          </div>
          <div className="recipe-actions">
            {/* <button className="action-btn save-btn">Save Recipe</button> */}
            <button className="action-btn new-btn" onClick={props.reset}>
              Start Over
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}