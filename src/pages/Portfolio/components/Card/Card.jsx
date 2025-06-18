function Card({ title, subtitle, content, imageUrl, actions, className = '' }) {
  return (
    <div className={`card ${className}`}>
      {imageUrl && (
        <div className='card-image'>
          <img src={imageUrl} alt={title} />
        </div>
      )}
      <div className='card-content'>
        <h3 className='card-title'>{title}</h3>
        {subtitle && <p className='card-subtitle'>{subtitle}</p>}
        <div className='card-body'>{content}</div>
      </div>
      {actions && (
        <div className='card-actions'>
          {actions.map((action, index) => (
            <button
              key={action.id || index}
              onClick={action.onClick}
              className={`btn ${action.variant || 'primary'}`}
            >
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Card;
