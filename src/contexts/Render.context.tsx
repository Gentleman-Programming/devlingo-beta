import { createContext, useState, Dispatch, SetStateAction } from 'react';

interface IProps {
  children: JSX.Element | JSX.Element[];
}

interface IContext {
  render: string;
  handleClick: (e: any) => void;
}

export const Render = createContext<IContext | any>('');

export default function RenderContext({ children }: IProps) {
  const [render, setRender] = useState<string>();

  const handleClick = (e: any) => setRender(e.currentTarget.textContent);

  const data = {
    render,
    handleClick,
  };

  return (
    <>
      <Render.Provider value={data}>{children}</Render.Provider>
    </>
  );
}

export { RenderContext };
