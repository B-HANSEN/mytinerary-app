import './components.css';

interface SearchProps {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Search({ handleInput }: SearchProps) {
  return (
    <div className='search'>
      <p>Filter our current cities:</p>
      <input onChange={handleInput} type='text' placeholder='Search by city...' />
    </div>
  );
}

export default Search;
