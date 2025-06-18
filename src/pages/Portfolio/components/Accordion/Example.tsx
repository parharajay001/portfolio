import Accordion from './Accordion';

export default function Example() {
  return (
    <Accordion
      items={[
        {
          id: 'react-benefits',
          title: 'What are the benefits of using React?',
          content: (
            <p>
              React offers a component-based architecture, virtual DOM for performance, and a strong
              ecosystem with tools like React Router and Redux.
            </p>
          ),
        },
        {
          id: 'state-management',
          title: 'How do you handle state management?',
          content: (
            <p>
              For simple state, I use useState and useReducer. For complex applications, I might use
              Redux Toolkit or Zustand depending on the requirements.
            </p>
          ),
        },
        {
          id: 'performance',
          title: 'How do you optimize React performance?',
          content: (
            <div>
              <p>
                I optimize performance by using React.memo, useMemo, and useCallback to prevent
                unnecessary re-renders. I also leverage code-splitting and lazy loading for large
                components.
              </p>
            </div>
          ),
        },
      ]}
    />
  );
}
