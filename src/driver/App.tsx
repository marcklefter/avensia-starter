// props => App => markup (HTML)

type CompProps = {
  title: string;
  disabled?: boolean;
}

// props = { title: 'foo' }
const Comp = ({ title, disabled = false }: CompProps) => {
  let disabledElement;
  if (disabled) {
    disabledElement = 'DISABLED';
  } else {
    disabledElement = 'ENABLED';
  }

  return (
    <div>
      {title}
      {disabled ? 'DISABLED' : 'ENABLED'}
      {disabledElement}
    </div>
  )
}

export const App = () => {
  return (
    <>
      <Comp title="foo" disabled />
      <Comp title="bar" />
    </>
  )
}