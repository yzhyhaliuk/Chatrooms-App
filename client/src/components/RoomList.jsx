import { useState } from 'react';
import './RoomList.css';

function RoomList({ rooms, onCreate, onJoin, onDelete, onRename, currentRoom }) {
  const [newRoom, setNewRoom] = useState('');
  const [renames, setRenames] = useState({});

  return (
    <div className='room_list'>
      <h2>📚 Кімнати</h2>
      <ul className='room_listed'>
        {rooms.map((room) => (
          <li key={room} className='room_item'>
            <span className={currentRoom === room ? 'active' : ''}>{room}</span>
            {currentRoom !== room && (
              <button onClick={() => onJoin(room)}>Увійти</button>
            )}
            <button onClick={() => onDelete(room)}>❌</button>
            <input
              type='text'
              placeholder='Змінити назву'
              value={renames[room] || ''}
              onChange={(e) => setRenames((prev) => ({ ...prev, [room]: e.target.value }))}
            />
            <button onClick={() => onRename(room, renames[room])}>✔️</button>
          </li>
        ))}
      </ul>

      <div className='create_room'>
        <input
          type='text'
          placeholder='Створити кімнату'
          value={newRoom}
          onChange={(e) => setNewRoom(e.target.value)}
        />
        <button onClick={() => {
          onCreate(newRoom);
          setNewRoom('');
        }}>Створити</button>
      </div>
    </div>
  );
}

export default RoomList;
