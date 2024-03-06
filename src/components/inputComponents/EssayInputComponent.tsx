// EssayInputComponent.tsx
import React from 'react';

const EssayInputComponent: React.FC = () => {
  return (
    <div>
      <h3>Essay Task</h3>
      {/* Add more inputs as needed */}
      <input type="text" placeholder="Task ID" />
      <input type="number" placeholder="Task Number" />
      <input type="text" placeholder="Task Title" />
      <input type="number" placeholder="Task Point" />
      <textarea placeholder="Essay Prompt"></textarea>
      {/* Add other fields specific to the Essay task */}
    </div>
  );
};

export default EssayInputComponent;
