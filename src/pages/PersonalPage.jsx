import { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import CardList from '../components/card-list/CardList';
import Subheader from '../components/subheader/ReSubheader';
import Button from '../components/button/Button';
import useMutation from '../hooks/useMutation';
import { deleteRecipient } from '../api/recipients';
import { deleteMessage } from '../api/messages';

export const mockData = {
  id: 12321,
  name: '다다다',
  backgroundColor: 'purple',
  backgroundImageURL: null,
  createdAt: '2025-07-15T05:55:48.289484Z',
  messageCount: 6,
  recentMessages: [
    {
      id: 24037,
      recipientId: 12321,
      sender: '프론트엔드',
      profileImageURL: 'https://i.pravatar.cc/100?img=2',
      relationship: '친구',
      content: 'UI 작업',
      font: 'Pretendard',
      createdAt: '2025-07-17T22:35:59.934023Z',
    },
    {
      id: 24036,
      recipientId: 12321,
      sender: '프론트엔드',
      profileImageURL: 'https://i.pravatar.cc/100?img=1',
      relationship: '친구',
      content: 'UI 작업',
      font: 'Pretendard',
      createdAt: '2025-07-17T22:33:37.395777Z',
    },
    {
      id: 23994,
      recipientId: 12321,
      sender: '프론트엔드 동료',
      profileImageURL: 'https://i.pravatar.cc/100?img=1',
      relationship: '동료',
      content: 'UI 작업하시느라 고생 많으셨습니다!',
      font: 'Pretendard',
      createdAt: '2025-07-15T06:22:42.602462Z',
    },
    {
      id: 23345,
      recipientId: 12321,
      sender: '프론트엔드 동료',
      profileImageURL: 'https://i.pravatar.cc/100?img=1',
      relationship: '동료',
      content: 'UI 작업하시느라 고생 많으셨습니다!',
      font: 'Pretendard',
      createdAt: '2025-07-15T06:22:42.602462Z',
    },
  ],
  reactionCount: 26,
  topReactions: [
    {
      id: 12863,
      emoji: '🤓',
      count: 13,
    },
    {
      id: 12864,
      emoji: '🥲',
      count: 4,
    },
    {
      id: 12861,
      emoji: '😍',
      count: 4,
    },
  ],
};

const mockReactions = {
  count: 6,
  next: null,
  previous: null,
  results: [
    {
      id: 12863,
      emoji: '🤓',
      count: 13,
    },
    {
      id: 12864,
      emoji: '🥲',
      count: 4,
    },
    {
      id: 12861,
      emoji: '😍',
      count: 4,
    },
    {
      id: 12865,
      emoji: '🫡',
      count: 2,
    },
    {
      id: 12862,
      emoji: '😃',
      count: 2,
    },
    {
      id: 12860,
      emoji: 'string',
      count: 1,
    },
  ],
};

const initialMessages = mockData.recentMessages;

const PersonalPage = () => {
  const location = useLocation();
  const { id: recipientId } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState(initialMessages);
  // const { mutate, loading } = useMutation(deleteRecipient);
  // const { mutate, loading } = ueMutation(deleteMessage);

  //현재 url이 '/edit'으로 끝나는지 확인
  const isEditing = location.pathname.endsWith('/edit');

  const handleDeletePaper = async () => {
    try {
      await deleteRecipient(recipientId);
      navigate('/list');
    } catch (e) {
      console.error('페이지 삭제 실패', e);
    }
  };

  const handleDeleteMessage = async (messageId) => {
    try {
      await deleteMessage(messageId);
      const newMessages = messages.filter(
        (message) => message.id !== messageId,
      );
      setMessages(newMessages);
    } catch (e) {
      console.error('메세지 삭제 실패', e);
    }
  };

  return (
    <>
      <Subheader data={mockData} />
      {isEditing && <Button onClick={handleDeletePaper} />}
      <CardList
        messages={messages}
        isEditing={isEditing}
        onDeleteMessage={handleDeleteMessage}
      ></CardList>
    </>
  );
};

export default PersonalPage;
