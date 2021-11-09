import { ReactElement, ReactNode } from "react";

export interface HeadingProps {
  title: string;
}

export const Heading = ({ title }: HeadingProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <hr />
    </div>
  );
};


// export function List<ListItem>({
//   items,
//   render,
// }: {
//   items: ListItem[];
//   render: (item: ListItem) => ReactNode;
// }) {
//   return (
//     <ul>
//       {items.map((item, index) => (
//         <li key={index}>{render(item)}</li>
//       ))}
//     </ul>
//   );
// }

// export const List: <ListItem>({
//     items,
//     render,
//   }: {
//     items: ListItem[];
//     render: (item: ListItem) => ReactNode;
//   }) => ReactElement = ({ items, render }) => {
//     return (
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{render(item)}</li>
//         ))}
//       </ul>
//     );
//   };

 type ListComponent = <ListItem>({
    items,
    render,
  }: {
    items: ListItem[];
    render: (item: ListItem) => ReactNode;
  }) => ReactElement

export const List:ListComponent = ({items, render}) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
}

function TestComponent() {
  return (
    <div>
      <Heading title="Heading title" />
      <List items={["a", "b", "c"]} render={(str) => <strong>{str}</strong>} />
    </div>
  );
}
export default TestComponent;
