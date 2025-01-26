import React, { useState } from 'react';

function App() {
  // Table of contents with corresponding content
  const contents = [
    { id: 1, title: 'Introduction', info: 'This is the introduction content. Welcome!' },
    { id: 2, title: 'Chapter 1: React Basics', info: 'Learn the basics of React, including components, state, and props.' },
    { id: 3, title: 'Chapter 2: React Hooks', info: 'Hooks like useState and useEffect allow functional components to manage state and lifecycle.' },
    { id: 4, title: 'Chapter 3: Advanced Topics', info: 'Explore advanced React topics like context, reducers, and performance optimization.' },
    { id: 5, title: 'Conclusion', info: 'Thank you for learning React! Keep building amazing applications.' },
  ];

  const [selectedContent, setSelectedContent] = useState(contents[0]); // Default to the first content

  const handleContentClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Table of Contents</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Table of Contents */}
        <div style={{ width: '30%', borderRight: '1px solid #ccc', paddingRight: '10px' }}>
          <h2>Contents</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {contents.map((content) => (
              <li
                key={content.id}
                onClick={() => handleContentClick(content)}
                style={{
                  padding: '10px',
                  marginBottom: '5px',
                  cursor: 'pointer',
                  backgroundColor: selectedContent.id === content.id ? '#4CAF50' : '#f4f4f4',
                  color: selectedContent.id === content.id ? '#fff' : '#000',
                  borderRadius: '5px',
                }}
              >
                {content.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Display Selected Content */}
        <div style={{ width: '65%', paddingLeft: '10px' }}>
          <h2>{selectedContent.title}</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6' }}>{selectedContent.info}</p>
        </div>
      </div>
    </div>
  );
}

export default App;


