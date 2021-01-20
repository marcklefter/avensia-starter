import {
  useState
} from 'react';

const styles = {
  width: '100%',
  backgroundColor: '#FFF',
  padding: 16,
  fontSize: 24,
  fontStyle: 'italic',
  fontWeight: 300,
  border: 'none'
};

export const TodoForm = () => {
  const [
    title,
    setTitle
  ] = useState('');
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };

  return (
    <form>
      <input
        style={styles}
        placeholder="What do you need to do?"
        value={title}
        onChange={handleChange}
      />
    </form>
  )
}