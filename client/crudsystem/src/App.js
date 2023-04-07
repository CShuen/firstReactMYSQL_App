import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>First CRUD ReactJS + MYSQL App</h1>
      <label>Food name</label>
      <input type={"text"} placeholder="Enter Name" />
      <label>Review</label>
      <input type={"text"} placeholder="Write your reviews..." />
      <button>Add</button>
    </div>
  );
}

export default App;
