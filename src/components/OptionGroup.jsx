export default function OptionGroup({ options, type, name, isChecked, onChange }) {
  return (
    <ul>
      {options.map((option) => {
        const id = `${name}-${option.value}`;
        return (
          <li key={option.value}>
            <input
              id={id}
              type={type}
              name={name}
              value={option.value}
              checked={isChecked(option.value)}
              onChange={onChange}
            />
            <label htmlFor={id}>{option.label}</label>
          </li>
        );
      })}
    </ul>
  );
}
