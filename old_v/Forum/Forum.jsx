import { useState, useEffect } from 'react';
import Header from '../../Common components/Header/Header.jsx';
import Footer from '../../Common components/Footer/Footer.jsx';

import './Forum.css';

const Forum = () => {
  const [threads, setThreads] = useState([]);
  const [newThreadTitle, setNewThreadTitle] = useState('');
  const [newComment, setNewComment] = useState('');
  const [selectedThread, setSelectedThread] = useState(null);
  const [username, setUsername] = useState('');

  // Pobieranie nazwy użytkownika z tokena
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = token.split('.')[1]; // Extract the payload part of the JWT
        const decodedPayload = JSON.parse(atob(payload)); // Decode the Base64 payload
        setUsername(decodedPayload.username);
      } catch (error) {
        console.error('Failed to decode token:', error);
        localStorage.removeItem('token'); // Remove invalid token
      }
    }
  }, []);

  // Pobieranie wątków z bazy danych
  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await fetch('/api/getThreads.php');
        const data = await response.json();
        setThreads(data);
      } catch (error) {
        console.error('Error fetching threads:', error);
      }
    };

    fetchThreads();
  }, []);

  const handleAddThread = async () => {
    if (!newThreadTitle.trim()) return;

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/addThread.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title: newThreadTitle }),
      });

      if (response.ok) {
        const newThread = await response.json();
        setThreads((prevThreads) => [...prevThreads, newThread]);
        setNewThreadTitle('');
      } else {
        console.error('Failed to add thread');
      }
    } catch (error) {
      console.error('Error adding thread:', error);
    }
  };

  const handleAddComment = async () => {
    if (!newComment.trim() || selectedThread === null) return;

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/addComment.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          threadId: selectedThread,
          comment: newComment,
        }),
      });

      if (response.ok) {
        const updatedThread = await response.json();
        setThreads((prevThreads) =>
          prevThreads.map((thread) =>
            thread.id === updatedThread.id ? updatedThread : thread
          )
        );
        setNewComment('');
      } else {
        console.error('Failed to add comment');
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <>
      <Header />
      <section className="forum-wrapper">
        <h1>Forum</h1>
        <div className="new-thread">
          <h2>Create a New Thread</h2>
          <input
            type="text"
            placeholder="Enter thread title"
            value={newThreadTitle}
            onChange={(e) => setNewThreadTitle(e.target.value)}
          />
          <button onClick={handleAddThread}>Add Thread</button>
        </div>
        <div className="threads">
          <h2>Threads</h2>
          {threads.length === 0 || !threads ? (
            <p>No threads available. Create one!</p>
          ) : (
            threads.map((thread) => (
              <div
                key={thread.id}
                className={`thread ${
                  selectedThread === thread.id ? 'active' : ''
                }`}
                onClick={() => setSelectedThread(thread.id)}
              >
                <h3>{thread.title}</h3>
                <p>By: {thread.username}</p>
                <p>{thread.comments.length} comments</p>
              </div>
            ))
          )}
        </div>
        {selectedThread !== null && (
          <div className="comments">
            <h2>Comments</h2>
            {threads
              .find((thread) => thread.id === selectedThread)
              ?.comments.map((comment, index) => (
                <p key={index} className="comment">
                  <strong>{comment.username}:</strong> {comment.text}
                </p>
              ))}

            <div className="add-comment">
              <input
                type="text"
                placeholder="Add a comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button onClick={handleAddComment}>Add Comment</button>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Forum;
