import React,{useState} from 'react'

// Dummy components
const Component1 = () => <div>Component 1</div>;
const Component2 = () => <div>Component 2</div>;
const Component3 = () => <div>Component 3</div>;
const Component4 = () => <div>Component 4</div>;

const Try = () => {
    const [activeComponent, setActiveComponent] = useState(null);

    const renderComponent = (component) => {
      setActiveComponent(component);
    };
  
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex gap-4">
          <button className="btn" onClick={() => renderComponent('Component1')}>Component 1</button>
          <button className="btn" onClick={() => renderComponent('Component2')}>Component 2</button>
          <button className="btn" onClick={() => renderComponent('Component3')}>Component 3</button>
          <button className="btn" onClick={() => renderComponent('Component4')}>Component 4</button>
        </div>
        <div className="mt-8">
          {activeComponent === 'Component1' && <Component1 />}
          {activeComponent === 'Component2' && <Component2 />}
          {activeComponent === 'Component3' && <Component3 />}
          {activeComponent === 'Component4' && <Component4 />}
        </div>
      </div>
    );
}

export default Try
