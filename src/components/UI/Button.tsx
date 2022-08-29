type ButtonProps = {
  content: string,
  className: string
};
export default function Button(props: ButtonProps) {
  return <button className={`border border-green-700 px-5 py-1 hover:bg-green-700 uppercase text-center hover:text-white ${props.className}`}>{props.content}</button>;
}
