import { GridContainer } from './styled-components';
import { TopBar, Menu, RenderPages } from '@/pages/ControlPanel';
import { RenderContext } from '@/contexts';

export default function ControlPanel() {
  return (
    <GridContainer>
      <TopBar />
      <RenderContext>
        <Menu />
        <RenderPages />
      </RenderContext>
    </GridContainer>
  );
}

export { ControlPanel };
