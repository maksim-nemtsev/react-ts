import React, { ReactElement, ReactNode } from "react";
import "./App.css";

//Convention props
function Heading({ title }: { title: string }) {
  return <h1>{title}</h1>;
}
function HeadingWithContentString({ children }: { children: string }) {
  return <h2>{children}</h2>;
}
function HeadingWithContentReactNode({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return <h3>{children}</h3>;
}

//default props
const defaultContainerProps = {
  heading: <strong>My Heading</strong>,
};

type HeadeingDefaultProps = {
  children: ReactNode;
} & typeof defaultContainerProps;

function HeadingWithContentDefaultProps({
  heading,
  children,
}: HeadeingDefaultProps): ReactElement {
  return (
    <div>
      <h3>{heading}</h3>
      <h3>{children}</h3>
    </div>
  );
}
HeadingWithContentDefaultProps.defaultProps = defaultContainerProps;

//functional props
function HeadingWithContentFunctionalProps({
  header,
  children,
}: {
  header?: (num: number) => ReactNode;
  children: (num: number) => ReactNode;
}) {
  const [state, stateSet] = React.useState<number>(1);
  return (
    <div>
      <div>{header && <h3>{header?.(state)}</h3>}</div>
      <div>{children(state)}</div>
      <div>
        <button className="btn" onClick={() => stateSet(state + 1)}>
          Addition
        </button>
        <button className="btn" onClick={() => stateSet(state - 1)}>
          Subtraction
        </button>
      </div>
    </div>
  );
}

//generic List
function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[],
  render: (item: ListItem) => ReactNode,
}) {
  return(
    <ul>
      {
        items.map((item, index) => <li key={index}> {render(item)} </li>)
      }
    </ul>
  )
}

//Class component
class MyClassContainer extends React.Component<{
  title: ReactNode,

}> {
render() {
  return(
    <div>
      {
        this.props.title
      }
    </div>
  )
}
}

function App() {
  return (
    <div>
      <Heading title="The Heading title" />
      <HeadingWithContentString>Children text</HeadingWithContentString>
      <HeadingWithContentReactNode>
        <strong>Strong text with children React Node</strong>
      </HeadingWithContentReactNode>
      <HeadingWithContentDefaultProps>
        <div>
          <strong>{Heading}</strong>
          <strong>Strong text with children default props</strong>
        </div>
      </HeadingWithContentDefaultProps>
      <HeadingWithContentFunctionalProps
        header={(num: number) => (
          <span>
            Header is
            {num}
          </span>
        )}
      >
        {(num: number) => <h4>Numbers is {num}</h4>}
      </HeadingWithContentFunctionalProps>
      <List items={["max", "nemtsev", "ts", "cheetsheet"]} render={(item: string) => <div>
        {item.toUpperCase()}
      </div>} />
      <MyClassContainer title="A title in my Class Components"/>
    </div>
  );
}

export default App;
