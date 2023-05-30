import css from './Phonebook.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className={css.filter}>
      {' '}
      <p>Find contact by name</p>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default Filter;
