import './App.css'
import CountdownTimer from './components/CountdownTimer.jsx'
import UserPosts from './components/UserPosts.jsx'
import ValidatedInput from './components/ValidatedInput.jsx'
import WindowSize from './components/WindowSize.jsx'

export default function App() {
  return (
    <div className="card-grid">
      <div className="card">
        <h2>1. Data Fetching</h2>
        <UserPosts userId={1} />
      </div>

      <div className="card">
        <h2>2. Countdown Timer</h2>
        <CountdownTimer initialValue={10} />
      </div>

      <div className="card">
        <h2>3. Window Resize Listener</h2>
        <WindowSize />
      </div>

      <div className="card">
        <h2>4. Form Input Validation</h2>
        <ValidatedInput />
      </div>
    </div>
  );
};
